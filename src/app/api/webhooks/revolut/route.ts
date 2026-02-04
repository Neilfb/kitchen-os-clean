import { createHmac, timingSafeEqual } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import type { RevolutWebhookEvent } from '@/types/revolut';
import * as db from '@/services/nocodebackend';
import { Resend } from 'resend';
import { trackSale } from '@/services/pushLapGrowth';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

/**
 * Revolut Webhook Handler
 *
 * Handles payment status updates from Revolut.
 * Webhook URL is specified per-order via the webhook_url field in POST /orders.
 * Documentation: https://developer.revolut.com/docs/merchant/webhooks
 */

export async function POST(request: NextRequest) {
  try {
    // Read raw body first — needed for HMAC signature computation before JSON parse
    const rawBody = await request.text();

    // Verify webhook signature if signing secret is configured.
    // Secret is returned when you create a webhook via POST /api/webhooks.
    const webhookSecret = process.env.REVOLUT_WEBHOOK_SECRET;
    if (webhookSecret) {
      const timestamp = request.headers.get('revolut-request-timestamp');
      const signature = request.headers.get('revolut-signature');

      if (!timestamp || !signature) {
        console.warn('Webhook missing required signature headers');
        return NextResponse.json({ error: 'Missing signature headers' }, { status: 401 });
      }

      // Reject if timestamp is older than 5 minutes (replay attack prevention)
      const now = Math.floor(Date.now() / 1000);
      if (Math.abs(now - parseInt(timestamp, 10)) > 300) {
        console.warn('Webhook signature timestamp expired');
        return NextResponse.json({ error: 'Signature expired' }, { status: 401 });
      }

      // Revolut signs payload: "v1.<timestamp>.<rawBody>" using HMAC-SHA256
      // Revolut-Signature header: "v1=<hex_hmac>" (may contain multiple during secret rotation)
      const payloadToSign = `v1.${timestamp}.${rawBody}`;
      const expectedHmac = createHmac('sha256', webhookSecret)
        .update(payloadToSign)
        .digest('hex');
      const expectedSig = `v1=${expectedHmac}`;
      const expectedBuf = Buffer.from(expectedSig);

      // Check each signature in the header (multiple present during secret rotation)
      const matched = signature.split(',').some((sig) => {
        const sigBuf = Buffer.from(sig.trim());
        return sigBuf.length === expectedBuf.length && timingSafeEqual(sigBuf, expectedBuf);
      });

      if (!matched) {
        console.warn('Webhook signature verification failed');
        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
      }
    } else {
      console.warn('REVOLUT_WEBHOOK_SECRET not set — skipping signature verification');
    }

    const body: RevolutWebhookEvent = JSON.parse(rawBody);

    console.log('Received Revolut webhook:', {
      event: body.event,
      orderId: body.order_id,
      merchantRef: body.merchant_order_ext_ref,
    });

    // Get our order number from the webhook
    const orderNumber = body.merchant_order_ext_ref;

    if (!orderNumber) {
      console.error('No merchant_order_ext_ref in webhook');
      return NextResponse.json(
        { error: 'Missing order reference' },
        { status: 400 }
      );
    }

    // Find the order in our database
    const orders = await db.search('orders', { order_number: orderNumber });

    if (!orders || orders.length === 0) {
      console.error(`Order not found: ${orderNumber}`);
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    const order = orders[0] as Record<string, unknown>;

    // Handle different webhook events
    switch (body.event) {
      case 'ORDER_COMPLETED':
        await handleOrderCompleted(order, body);
        break;

      case 'ORDER_AUTHORISED':
        await handleOrderAuthorised(order, body);
        break;

      case 'ORDER_CANCELLED':
        await handleOrderCancelled(order, body);
        break;

      case 'ORDER_PAYMENT_FAILED':
        await handlePaymentFailed(order, body);
        break;

      default:
        console.warn(`Unhandled webhook event: ${body.event}`);
    }

    // Return 200 OK to acknowledge webhook receipt
    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('Error processing Revolut webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

/**
 * Handle successful payment completion
 */
async function handleOrderCompleted(order: Record<string, unknown>, webhook: RevolutWebhookEvent) {
  console.log(`Payment completed for order ${order.order_number}`);

  // Update order status in database
  await db.update('orders', order.id as number, {
    status: 'paid',
    payment_method: webhook.payment_method?.type || 'CARD',
    paid_at: new Date().toISOString(),
  });

  // Track affiliate conversion if applicable
  const affiliateId = order.affiliate_id as string | null;
  const affiliateCommissionTracked = order.affiliate_commission_tracked as boolean;

  if (affiliateId && !affiliateCommissionTracked) {
    try {
      console.log(`[Affiliate] Tracking sale for order ${order.order_number}, affiliate: ${affiliateId}`);

      // Push Lap Growth Step 4: Track Sale
      const saleResult = await trackSale({
        referralId: order.customer_email as string, // Customer email (was referred)
        externalId: String(order.id), // Database order ID
        externalInvoiceId: order.order_number as string, // Order number (e.g., KOS-2025-123456)
        totalEarned: order.total as number,
      });

      if (saleResult.success) {
        // Mark conversion as tracked to prevent duplicates
        await db.update('orders', order.id as number, {
          affiliate_commission_tracked: true,
        });

        console.log(`[Affiliate] Sale tracked successfully for order ${order.order_number}`);
      } else {
        console.error(`[Affiliate] Failed to track sale: ${saleResult.error}`);
        // Don't fail the webhook if affiliate tracking fails
      }
    } catch (affiliateError) {
      console.error('[Affiliate] Error tracking sale:', affiliateError);
      // Don't fail the webhook if affiliate tracking fails
    }
  } else if (affiliateId && affiliateCommissionTracked) {
    console.log(`[Affiliate] Sale already tracked for order ${order.order_number}`);
  }

  // Send payment confirmation email
  try {
    const { error: emailError } = await getResend().emails.send({
      from: 'Kitchen OS <orders@kitchen-os.com>',
      to: order.customer_email as string,
      replyTo: 'neil@kitchen-os.com',
      subject: `Payment Confirmed - Order ${order.order_number}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #00B589;">Payment Confirmed!</h1>
          <p>Thank you for your payment. Your order is being processed.</p>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0;">Order Details</h2>
            <p><strong>Order Number:</strong> ${order.order_number}</p>
            <p><strong>Amount Paid:</strong> £${(order.total as number).toFixed(2)}</p>
            <p><strong>Payment Method:</strong> ${webhook.payment_method?.type || 'Card'}</p>
          </div>

          <p>We'll send you another email with tracking information once your order ships.</p>

          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Questions? Reply to this email or contact us at neil@kitchen-os.com
          </p>
        </div>
      `,
    });

    if (emailError) {
      console.error('Failed to send payment confirmation email:', emailError);
    } else {
      console.log(`Payment confirmation email sent to ${order.customer_email as string}`);
    }
  } catch (emailError) {
    console.error('Failed to send payment confirmation email:', emailError);
  }
}

/**
 * Handle payment authorization (for manual capture)
 */
async function handleOrderAuthorised(order: Record<string, unknown>, webhook: RevolutWebhookEvent) {
  console.log(`Payment authorized for order ${order.order_number}`);

  await db.update('orders', order.id as number, {
    status: 'authorized',
    payment_method: webhook.payment_method?.type || 'CARD',
  });
}

/**
 * Handle order cancellation
 */
async function handleOrderCancelled(order: Record<string, unknown>, _webhook: RevolutWebhookEvent) {
  console.log(`Order cancelled: ${order.order_number}`);

  await db.update('orders', order.id as number, {
    status: 'cancelled',
    cancelled_at: new Date().toISOString(),
  });

  // Send cancellation notification email
  try {
    const { error: emailError } = await getResend().emails.send({
      from: 'Kitchen OS <orders@kitchen-os.com>',
      to: order.customer_email as string,
      replyTo: 'neil@kitchen-os.com',
      subject: `Order Cancelled - ${order.order_number}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #dc2626;">Order Cancelled</h1>
          <p>Your order ${order.order_number} has been cancelled.</p>
          <p>If you didn't request this cancellation or have questions, please contact us at neil@kitchen-os.com</p>
        </div>
      `,
    });
    if (emailError) console.error('Failed to send cancellation email:', emailError);
  } catch (emailError) {
    console.error('Failed to send cancellation email:', emailError);
  }
}

/**
 * Handle payment failure
 */
async function handlePaymentFailed(order: Record<string, unknown>, _webhook: RevolutWebhookEvent) {
  console.log(`Payment failed for order ${order.order_number}`);

  await db.update('orders', order.id as number, {
    status: 'failed',
  });

  // Send payment failure notification
  try {
    const { error: emailError } = await getResend().emails.send({
      from: 'Kitchen OS <orders@kitchen-os.com>',
      to: order.customer_email as string,
      replyTo: 'neil@kitchen-os.com',
      subject: `Payment Issue - Order ${order.order_number}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #dc2626;">Payment Could Not Be Processed</h1>
          <p>We were unable to process your payment for order ${order.order_number}.</p>

          <p>Common reasons include:</p>
          <ul>
            <li>Insufficient funds</li>
            <li>Card declined by bank</li>
            <li>Incorrect card details</li>
          </ul>

          <p>
            <a href="https://kitchen-os.com/shop" style="display: inline-block; background: #00B589; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0;">
              Try Again
            </a>
          </p>

          <p style="color: #666; font-size: 14px;">
            Need help? Contact us at neil@kitchen-os.com
          </p>
        </div>
      `,
    });
    if (emailError) console.error('Failed to send payment failure email:', emailError);
  } catch (emailError) {
    console.error('Failed to send payment failure email:', emailError);
  }
}
