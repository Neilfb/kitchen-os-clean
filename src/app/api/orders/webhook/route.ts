/**
 * API Route: Revolut Webhook
 *
 * Handles webhook notifications from Revolut for payment status updates.
 * Updates order status, sends confirmation emails, and triggers fulfillment.
 */

import { NextRequest, NextResponse } from 'next/server';
import * as db from '@/services/nocodebackend';
import type { DBOrder, DBOrderItem } from '@/types/database';
import { sendOrderConfirmationEmail, sendOrderFailedEmail } from '@/services/emailService';
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

        // Fetch order from database by Revolut order ID
        const orders = await db.search<DBOrder>('orders', {
          revolut_order_id: orderId,
        });

        if (orders.length === 0) {
          console.error(`Order not found for Revolut ID: ${orderId}`);
          return NextResponse.json({ error: 'Order not found' }, { status: 404 });
        }

        const dbOrder = orders[0];

        // Update order status in database
        await db.update('orders', dbOrder.id, {
          status: 'paid',
          paid_at: new Date().toISOString(),
        });

        console.log(`Order ${dbOrder.order_number} marked as paid`);

        // Convert DB order to Order type for email
        // Parse customer name into first and last name
        const nameParts = dbOrder.customer_name.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        const order: Order = {
          id: dbOrder.revolut_order_id || `db_${dbOrder.id}`,
          orderNumber: dbOrder.order_number,
          status: dbOrder.status as 'pending' | 'paid' | 'failed' | 'cancelled',
          customer: {
            email: dbOrder.customer_email,
            phone: dbOrder.customer_phone || '',
            firstName,
            lastName,
            company: dbOrder.customer_company || undefined,
            addressLine1: dbOrder.billing_address_line1,
            addressLine2: dbOrder.billing_address_line2 || undefined,
            city: dbOrder.billing_city,
            postcode: dbOrder.billing_postcode,
            country: dbOrder.billing_country,
            vatNumber: dbOrder.vat_number || undefined,
            isVatExempt: !!dbOrder.vat_number,
          },
          items: [], // We'll fetch these next
          summary: {
            subtotal: dbOrder.subtotal,
            shippingCost: dbOrder.shipping_cost,
            taxRate: dbOrder.tax / dbOrder.subtotal, // Calculate tax rate
            taxAmount: dbOrder.tax,
            total: dbOrder.total,
            currency: 'GBP',
          },
          createdAt: dbOrder.created_at,
          paidAt: dbOrder.paid_at || undefined,
          cancelledAt: dbOrder.cancelled_at || undefined,
        };

        // Fetch order items
        const items = await db.read<DBOrderItem>('order_items', { order_id: dbOrder.id });
        order.items = items.map((item) => ({
          productId: item.product_id,
          productName: item.product_name,
          productImage: item.product_image || '',
          variantId: item.variant_id,
          variantName: item.variant_name,
          quantity: item.quantity,
          price: item.unit_price,
        }));

        // Send confirmation email
        const emailResult = await sendOrderConfirmationEmail(order);
        if (!emailResult.success) {
          console.error('Failed to send confirmation email:', emailResult.error);
          // Note: We don't fail the webhook if email fails
        }

        // TODO: Trigger fulfillment process
        // await triggerFulfillment(orderId);

        console.log(`Order ${dbOrder.order_number} confirmation email sent`);
        break;
      }

      case 'ORDER_FAILED': {
        // Payment failed
        console.log(`Order ${orderId} failed`);

        // Fetch order from database by Revolut order ID
        const failedOrders = await db.search<DBOrder>('orders', {
          revolut_order_id: orderId,
        });

        if (failedOrders.length === 0) {
          console.error(`Order not found for Revolut ID: ${orderId}`);
          return NextResponse.json({ error: 'Order not found' }, { status: 404 });
        }

        const dbOrder = failedOrders[0];

        // Update order status in database
        await db.update('orders', dbOrder.id, {
          status: 'failed',
        });

        console.log(`Order ${dbOrder.order_number} marked as failed`);

        // Convert DB order to Order type for email
        // Parse customer name into first and last name
        const failedNameParts = dbOrder.customer_name.trim().split(' ');
        const failedFirstName = failedNameParts[0] || '';
        const failedLastName = failedNameParts.slice(1).join(' ') || '';

        const order: Order = {
          id: dbOrder.revolut_order_id || `db_${dbOrder.id}`,
          orderNumber: dbOrder.order_number,
          status: dbOrder.status as 'pending' | 'paid' | 'failed' | 'cancelled',
          customer: {
            email: dbOrder.customer_email,
            phone: dbOrder.customer_phone || '',
            firstName: failedFirstName,
            lastName: failedLastName,
            company: dbOrder.customer_company || undefined,
            addressLine1: dbOrder.billing_address_line1,
            addressLine2: dbOrder.billing_address_line2 || undefined,
            city: dbOrder.billing_city,
            postcode: dbOrder.billing_postcode,
            country: dbOrder.billing_country,
            vatNumber: dbOrder.vat_number || undefined,
            isVatExempt: !!dbOrder.vat_number,
          },
          items: [],
          summary: {
            subtotal: dbOrder.subtotal,
            shippingCost: dbOrder.shipping_cost,
            taxRate: dbOrder.tax / dbOrder.subtotal,
            taxAmount: dbOrder.tax,
            total: dbOrder.total,
            currency: 'GBP',
          },
          createdAt: dbOrder.created_at,
          paidAt: dbOrder.paid_at || undefined,
          cancelledAt: dbOrder.cancelled_at || undefined,
        };

        // Fetch order items
        const failedItems = await db.read<DBOrderItem>('order_items', { order_id: dbOrder.id });
        order.items = failedItems.map((item) => ({
          productId: item.product_id,
          productName: item.product_name,
          productImage: item.product_image || '',
          variantId: item.variant_id,
          variantName: item.variant_name,
          quantity: item.quantity,
          price: item.unit_price,
        }));

        // Send failure notification email
        const reason = body.failure_reason || 'Payment processing failed';
        const emailResult = await sendOrderFailedEmail(order, reason);
        if (!emailResult.success) {
          console.error('Failed to send failure notification email:', emailResult.error);
        }

        break;
      }

      case 'ORDER_CANCELLED': {
        // Payment cancelled by user
        console.log(`Order ${orderId} cancelled`);

        // Fetch order from database by Revolut order ID
        const cancelledOrders = await db.search<DBOrder>('orders', {
          revolut_order_id: orderId,
        });

        if (cancelledOrders.length === 0) {
          console.error(`Order not found for Revolut ID: ${orderId}`);
          return NextResponse.json({ error: 'Order not found' }, { status: 404 });
        }

        const dbOrder = cancelledOrders[0];

        // Update order status in database
        await db.update('orders', dbOrder.id, {
          status: 'cancelled',
          cancelled_at: new Date().toISOString(),
        });

        console.log(`Order ${dbOrder.order_number} marked as cancelled`);

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
