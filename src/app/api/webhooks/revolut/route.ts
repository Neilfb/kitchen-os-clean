import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { RevolutWebhookEvent } from '@/types/revolut';
import * as db from '@/services/nocodebackend';

/**
 * Revolut Webhook Handler
 *
 * Handles payment status updates from Revolut
 * Documentation: https://developer.revolut.com/docs/merchant/webhooks
 *
 * IMPORTANT: You must configure this webhook URL in your Revolut dashboard:
 * https://your-domain.com/api/webhooks/revolut
 */

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Get webhook signature from headers (for verification)
    const signature = request.headers.get('revolut-signature');

    // Parse webhook body
    const body: RevolutWebhookEvent = await request.json();

    console.log('Received Revolut webhook:', {
      event: body.event,
      orderId: body.order_id,
      merchantRef: body.merchant_order_ext_ref,
    });

    // TODO: Verify webhook signature
    // For production, you should verify the webhook signature to ensure it's from Revolut
    // Documentation: https://developer.revolut.com/docs/merchant/webhooks#webhook-security
    if (signature) {
      // Implement signature verification here
      // const isValid = verifyRevolutSignature(body, signature);
      // if (!isValid) {
      //   return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
      // }
    }

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

  // Send payment confirmation email
  try {
    await resend.emails.send({
      from: 'Kitchen OS <orders@kitchen-os.com>',
      to: order.customer_email as string,
      subject: `Payment Confirmed - Order ${order.order_number}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #00B589;">Payment Confirmed!</h1>
          <p>Thank you for your payment. Your order is being processed.</p>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0;">Order Details</h2>
            <p><strong>Order Number:</strong> ${order.order_number}</p>
            <p><strong>Amount Paid:</strong> £${((order.total as number) / 100).toFixed(2)}</p>
            <p><strong>Payment Method:</strong> ${webhook.payment_method?.type || 'Card'}</p>
          </div>

          <p>We'll send you another email with tracking information once your order ships.</p>

          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Questions? Reply to this email or contact us at hello@kitchen-os.com
          </p>
        </div>
      `,
    });

    console.log(`Payment confirmation email sent to ${order.customer_email as string}`);
  } catch (emailError) {
    console.error('Failed to send payment confirmation email:', emailError);
    // Don't fail the webhook if email fails
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
    await resend.emails.send({
      from: 'Kitchen OS <orders@kitchen-os.com>',
      to: order.customer_email as string,
      subject: `Order Cancelled - ${order.order_number}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #dc2626;">Order Cancelled</h1>
          <p>Your order ${order.order_number} has been cancelled.</p>
          <p>If you didn't request this cancellation or have questions, please contact us at hello@kitchen-os.com</p>
        </div>
      `,
    });
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
    await resend.emails.send({
      from: 'Kitchen OS <orders@kitchen-os.com>',
      to: order.customer_email as string,
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
            Need help? Contact us at hello@kitchen-os.com
          </p>
        </div>
      `,
    });
  } catch (emailError) {
    console.error('Failed to send payment failure email:', emailError);
  }
}
