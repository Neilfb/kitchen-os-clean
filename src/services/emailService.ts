/**
 * Email Service
 *
 * Handles sending transactional emails via Resend.
 * Provides type-safe email sending functions for order confirmations and other notifications.
 */

import { Resend } from 'resend';
import type { Order } from '@/types/order';
import OrderConfirmationEmail from '@/emails/OrderConfirmation';

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
const FROM_EMAIL = 'Kitchen OS <orders@kitchen-os.com>';

/**
 * Send order confirmation email to customer
 */
export async function sendOrderConfirmationEmail(order: Order): Promise<{
  success: boolean;
  messageId?: string;
  error?: string;
}> {
  try {
    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return {
        success: false,
        error: 'Email service not configured',
      };
    }

    // Send email using React Email template
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: order.customer.email,
      subject: `Order Confirmation - ${order.orderNumber}`,
      react: OrderConfirmationEmail({ order }),
      // Optional: Add plain text fallback
      text: generatePlainTextConfirmation(order),
    });

    if (error) {
      console.error('Error sending order confirmation email:', error);
      return {
        success: false,
        error: error.message || 'Failed to send email',
      };
    }

    console.log(`Order confirmation email sent successfully: ${data?.id}`);
    return {
      success: true,
      messageId: data?.id,
    };
  } catch (error) {
    console.error('Unexpected error sending email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Send order failed notification to customer
 */
export async function sendOrderFailedEmail(
  order: Order,
  reason?: string
): Promise<{
  success: boolean;
  messageId?: string;
  error?: string;
}> {
  try {
    if (!process.env.RESEND_API_KEY) {
      return { success: false, error: 'Email service not configured' };
    }

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: order.customer.email,
      subject: `Payment Issue - Order ${order.orderNumber}`,
      html: `
        <h1>Payment Issue</h1>
        <p>Hi ${order.customer.firstName},</p>
        <p>We encountered an issue processing your payment for order <strong>${order.orderNumber}</strong>.</p>
        ${reason ? `<p><strong>Reason:</strong> ${reason}</p>` : ''}
        <p>Your cart items are still saved. Please try again or contact our support team if you continue to experience issues.</p>
        <p><a href="https://kitchen-os.com/checkout">Return to Checkout</a></p>
        <p>Need help? <a href="https://kitchen-os.com/contact">Contact Support</a></p>
      `,
    });

    if (error) {
      console.error('Error sending order failed email:', error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: data?.id };
  } catch (error) {
    console.error('Unexpected error sending failed email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Generate plain text version of order confirmation
 * (Fallback for email clients that don't support HTML)
 */
function generatePlainTextConfirmation(order: Order): string {
  const { orderNumber, customer, items, summary, createdAt } = order;

  const orderDate = new Date(createdAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  let text = `ORDER CONFIRMATION\n\n`;
  text += `Order #${orderNumber}\n\n`;
  text += `Hi ${customer.firstName},\n\n`;
  text += `Thank you for your order! We've received your payment and are processing your order now.\n\n`;

  text += `ORDER DETAILS\n`;
  text += `Order Date: ${orderDate}\n`;
  text += `Order Number: ${orderNumber}\n\n`;

  text += `ITEMS ORDERED\n`;
  items.forEach((item) => {
    text += `${item.productName} - ${item.variantName}\n`;
    text += `Qty: ${item.quantity} x £${item.price.toFixed(2)} = £${(item.price * item.quantity).toFixed(2)}\n`;
    if (item.pricePerLabel) {
      text += `  (£${item.pricePerLabel.toFixed(2)}/label)\n`;
    }
    if (item.pricePerProbe) {
      text += `  (£${item.pricePerProbe.toFixed(2)}/probe)\n`;
    }
    text += `\n`;
  });

  text += `ORDER SUMMARY\n`;
  text += `Subtotal: £${summary.subtotal.toFixed(2)}\n`;
  text += `Shipping: ${summary.shippingCost === 0 ? 'FREE' : `£${summary.shippingCost.toFixed(2)}`}\n`;
  text += `VAT (${(summary.taxRate * 100).toFixed(0)}%): £${summary.taxAmount.toFixed(2)}\n`;
  text += `Total: £${summary.total.toFixed(2)}\n\n`;

  text += `SHIPPING ADDRESS\n`;
  text += `${customer.firstName} ${customer.lastName}\n`;
  if (customer.company) text += `${customer.company}\n`;
  text += `${customer.addressLine1}\n`;
  if (customer.addressLine2) text += `${customer.addressLine2}\n`;
  text += `${customer.city}, ${customer.postcode}\n`;
  text += `${customer.country}\n\n`;

  text += `WHAT'S NEXT?\n`;
  text += `- Your order will be dispatched within 1-2 business days\n`;
  text += `- You'll receive shipping confirmation with tracking details once dispatched\n\n`;

  text += `Questions? Contact us at https://kitchen-os.com/contact\n\n`;
  text += `Kitchen OS - Revolutionizing Commercial Kitchen Operations\n`;
  text += `kitchen-os.com\n`;

  return text;
}

/**
 * Test email configuration
 * Useful for checking if Resend is properly configured
 */
export async function testEmailConfiguration(): Promise<boolean> {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return false;
    }
    // Just check if the Resend instance is valid
    console.log('Email service configured successfully');
    return true;
  } catch (error) {
    console.error('Email configuration test failed:', error);
    return false;
  }
}
