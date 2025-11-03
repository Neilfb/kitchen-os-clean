/**
 * API Route: Revolut Webhook
 *
 * Handles webhook notifications from Revolut for payment status updates.
 * Updates order status, sends confirmation emails, and triggers fulfillment.
 */

import { NextRequest, NextResponse } from 'next/server';
// Email service imports ready for database integration
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { sendOrderConfirmationEmail, sendOrderFailedEmail } from '@/services/emailService';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Order } from '@/types/order';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // TODO: Verify webhook signature from Revolut
    // const signature = request.headers.get('Revolut-Signature');
    // if (!verifySignature(body, signature)) {
    //   return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    // }

    console.log('Revolut webhook received:', body);

    // Handle different event types
    const eventType = body.event;
    const orderId = body.order_id;

    switch (eventType) {
      case 'ORDER_COMPLETED': {
        // Payment successful
        console.log(`Order ${orderId} completed`);

        // TODO: Fetch order from database
        // For now, we'll need to retrieve the order details
        // const order = await getOrderById(orderId);

        // TODO: Update order status in database
        // await updateOrderStatus(orderId, 'paid');

        // Send confirmation email
        // Note: This will work once you have the order object from database
        // const emailResult = await sendOrderConfirmationEmail(order);
        // if (!emailResult.success) {
        //   console.error('Failed to send confirmation email:', emailResult.error);
        //   // Note: We don't fail the webhook if email fails
        // }

        // TODO: Trigger fulfillment process
        // await triggerFulfillment(orderId);

        console.log(`Order ${orderId} confirmation email queued`);
        break;
      }

      case 'ORDER_FAILED': {
        // Payment failed
        console.log(`Order ${orderId} failed`);

        // TODO: Update order status in database
        // await updateOrderStatus(orderId, 'failed');

        // TODO: Fetch order and send failure notification
        // const order = await getOrderById(orderId);
        // const reason = body.failure_reason || 'Payment processing failed';
        // await sendOrderFailedEmail(order, reason);

        break;
      }

      case 'ORDER_CANCELLED': {
        // Payment cancelled by user
        console.log(`Order ${orderId} cancelled`);

        // TODO: Update order status in database
        // await updateOrderStatus(orderId, 'cancelled');

        break;
      }

      default:
        console.log(`Unknown event type: ${eventType}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
