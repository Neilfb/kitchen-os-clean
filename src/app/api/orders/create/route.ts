/**
 * API Route: Create Order
 *
 * Creates an order in the system and generates a Revolut payment order.
 * Returns the order ID and Revolut order token for payment widget.
 */

import { NextRequest, NextResponse } from 'next/server';
import type { OrderCreationRequest, OrderCreationResponse, Order } from '@/types/order';

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

    // Generate order ID and number
    const orderId = crypto.randomUUID();
    const orderNumber = `KOS-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;

    // Create order object
    const order: Order = {
      id: orderId,
      orderNumber,
      status: 'pending',
      customer: body.customer,
      items: body.items,
      summary: body.summary,
      createdAt: new Date().toISOString(),
    };

    // TODO: Save order to database
    // For now, we'll just log it and store in memory/localStorage
    console.log('Order created:', order);

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
    const mockRevolutToken = `mock_token_${orderId}`;

    return NextResponse.json({
      success: true,
      orderId,
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
