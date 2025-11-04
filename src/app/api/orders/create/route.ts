/**
 * API Route: Create Order
 *
 * Creates an order in the system and generates a Revolut payment order.
 * Returns the order ID and Revolut order token for payment widget.
 */

import { NextRequest, NextResponse } from 'next/server';
import type { OrderCreationRequest, OrderCreationResponse } from '@/types/order';
import * as db from '@/services/nocodebackend';

export async function POST(request: NextRequest) {
  try {
    const body: OrderCreationRequest = await request.json();

    // Validate request
    if (!body.customer || !body.items || body.items.length === 0 || !body.summary) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid request: Missing required fields',
        } as OrderCreationResponse,
        { status: 400 }
      );
    }

    // Generate order number
    const orderNumber = `KOS-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;

    // Save order to database
    const customerName = `${body.customer.firstName} ${body.customer.lastName}`;
    const dbOrderId = await db.create('orders', {
      order_number: orderNumber,
      revolut_order_id: null,
      customer_email: body.customer.email,
      customer_name: customerName,
      customer_phone: body.customer.phone || null,
      customer_company: body.customer.company || null,
      billing_address_line1: body.customer.addressLine1,
      billing_address_line2: body.customer.addressLine2 || null,
      billing_city: body.customer.city,
      billing_county: null, // Not in CustomerDetails type
      billing_postcode: body.customer.postcode,
      billing_country: body.customer.country,
      // Use billing address for shipping (no separate shipping address in CustomerDetails)
      shipping_address_line1: body.customer.addressLine1,
      shipping_address_line2: body.customer.addressLine2 || null,
      shipping_city: body.customer.city,
      shipping_county: null, // Not in CustomerDetails type
      shipping_postcode: body.customer.postcode,
      shipping_country: body.customer.country,
      vat_number: body.customer.vatNumber || null,
      vat_country: body.customer.country, // Use billing country
      subtotal: body.summary.subtotal,
      shipping_cost: body.summary.shippingCost,
      tax: body.summary.taxAmount,
      total: body.summary.total,
      status: 'pending',
      payment_method: null,
      created_at: new Date().toISOString(),
      paid_at: null,
      cancelled_at: null,
    });

    // Save order items to database
    for (const item of body.items) {
      await db.create('order_items', {
        order_id: dbOrderId,
        product_id: item.productId,
        product_name: item.productName,
        product_image: item.productImage || null,
        variant_id: item.variantId,
        variant_name: item.variantName,
        quantity: item.quantity,
        unit_price: item.price,
        line_total: item.price * item.quantity,
        created_at: new Date().toISOString(),
      });
    }

    console.log(`Order created in database: ${orderNumber} (ID: ${dbOrderId})`);

    // Check if Revolut is configured
    const revolutSecretKey = process.env.REVOLUT_SECRET_KEY;
    const revolutPublicKey = process.env.NEXT_PUBLIC_REVOLUT_PUBLIC_KEY;

    if (!revolutSecretKey || !revolutPublicKey) {
      return NextResponse.json(
        {
          success: false,
          error: 'Payment provider not configured. Please contact support.',
        } as OrderCreationResponse,
        { status: 503 }
      );
    }

    // TODO: Create Revolut order
    // Example Revolut API call (simplified - actual implementation depends on Revolut SDK):
    /*
    const revolutOrder = await fetch('https://merchant.revolut.com/api/1.0/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${revolutSecretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Math.round(body.summary.total * 100), // Convert to pence
        currency: body.summary.currency,
        capture_mode: 'AUTOMATIC',
        merchant_order_ext_ref: orderNumber,
        email: body.customer.email,
        description: `Kitchen OS Order ${orderNumber}`,
      }),
    });

    const revolutData = await revolutOrder.json();
    */

    // For now, return a mock token
    const mockRevolutToken = `mock_token_${orderNumber}`;

    return NextResponse.json({
      success: true,
      orderId: orderNumber,
      revolutOrderToken: mockRevolutToken,
    } as OrderCreationResponse);
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create order. Please try again.',
      } as OrderCreationResponse,
      { status: 500 }
    );
  }
}
