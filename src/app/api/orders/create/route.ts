/**
 * API Route: Create Order
 *
 * Creates an order in the system and generates a Revolut payment order.
 * Returns the order ID and Revolut order token for payment widget.
 */

import { NextRequest, NextResponse } from 'next/server';
import type { OrderCreationRequest, OrderCreationResponse } from '@/types/order';
import * as db from '@/services/nocodebackend';
import { trackReferral } from '@/services/pushLapGrowth';

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

    // Log the data we're about to send
    console.log('Creating order with data:', {
      order_number: orderNumber,
      customer_email: body.customer.email,
      customer_name: customerName,
      subtotal: body.summary.subtotal,
      shipping_cost: body.summary.shippingCost,
      tax: body.summary.taxAmount,
      total: body.summary.total,
      status: 'pending',
    });

    const dbOrderId = await db.create('orders', {
      order_number: orderNumber,
      customer_email: body.customer.email,
      customer_name: customerName,
      customer_phone: body.customer.phone || null,
      customer_company: body.customer.company || null,
      billing_address_line1: body.customer.addressLine1,
      billing_address_line2: body.customer.addressLine2 || null,
      billing_city: body.customer.city,
      billing_county: null,
      billing_postcode: body.customer.postcode,
      billing_country: body.customer.country,
      shipping_address_line1: body.customer.addressLine1,
      shipping_address_line2: body.customer.addressLine2 || null,
      shipping_city: body.customer.city,
      shipping_county: null,
      shipping_postcode: body.customer.postcode,
      shipping_country: body.customer.country,
      vat_number: body.customer.vatNumber || null,
      vat_country: body.customer.country,
      subtotal: body.summary.subtotal,
      shipping_cost: body.summary.shippingCost,
      tax: body.summary.taxAmount,
      total: body.summary.total,
      status: 'pending',
      payment_method: null,
      affiliate_id: body.affiliateId || null, // Push Lap Growth affiliate ID
      affiliate_commission_tracked: false, // Will be set to true after conversion is tracked
      // created_at omitted - let DB default handle it
    });

    // Track affiliate referral if present (Push Lap Growth Step 3: Sign ups)
    if (body.affiliateId) {
      console.log(`[Affiliate] Order ${orderNumber} attributed to affiliate: ${body.affiliateId}`);

      try {
        const referralResult = await trackReferral({
          affiliateId: body.affiliateId,
          name: customerName,
          email: body.customer.email,
          referredUserExternalId: String(dbOrderId), // Use database order ID
          plan: body.items.map(item => item.productName).join(', '), // Product names
          status: 'pending', // Will become 'active' after payment
        });

        if (referralResult.success) {
          console.log(`[Affiliate] Referral tracked successfully for ${body.customer.email}`);
        } else {
          console.error(`[Affiliate] Failed to track referral: ${referralResult.error}`);
        }
      } catch (affiliateError) {
        console.error('[Affiliate] Error tracking referral:', affiliateError);
        // Don't fail order creation if affiliate tracking fails
      }
    }

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
        // created_at omitted - let DB default handle it
      });
    }

    console.log(`Order created in database: ${orderNumber} (ID: ${dbOrderId})`);

    // Create Revolut payment order
    const revolutResponse = await fetch(`${request.nextUrl.origin}/api/orders/revolut`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: body.summary.total,
        currency: body.summary.currency || 'GBP',
        orderNumber: orderNumber,
        customerEmail: body.customer.email,
        customerPhone: body.customer.phone,
        description: `Kitchen OS Order ${orderNumber}`,
        billingAddress: {
          line1: body.customer.addressLine1,
          line2: body.customer.addressLine2,
          city: body.customer.city,
          postcode: body.customer.postcode,
          country: body.customer.country,
        },
        shippingAddress: {
          line1: body.customer.addressLine1,
          line2: body.customer.addressLine2,
          city: body.customer.city,
          postcode: body.customer.postcode,
          country: body.customer.country,
        },
      }),
    });

    if (!revolutResponse.ok) {
      const revolutError = await revolutResponse.json();
      console.error('Revolut order creation failed:', revolutError);

      // Clean up: Delete the database order since payment setup failed
      await db.deleteRecord('orders', dbOrderId);

      return NextResponse.json(
        {
          success: false,
          error: revolutError.message || 'Failed to initialize payment. Please try again.',
        } as OrderCreationResponse,
        { status: revolutResponse.status }
      );
    }

    const revolutData = await revolutResponse.json();

    console.log('Revolut API response received:', {
      revolutData,
      hasPublicToken: !!revolutData.publicToken,
      publicTokenValue: revolutData.publicToken,
      allKeys: Object.keys(revolutData),
    });

    // Update order with Revolut order ID
    await db.update('orders', dbOrderId, {
      revolut_order_id: revolutData.revolutOrderId,
    });

    console.log(`Revolut order created: ${revolutData.revolutOrderId} for ${orderNumber}`);

    return NextResponse.json({
      success: true,
      orderId: orderNumber,
      dbOrderId: dbOrderId,
      revolutOrderToken: revolutData.publicToken,
      revolutOrderId: revolutData.revolutOrderId,
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
