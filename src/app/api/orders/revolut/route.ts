import { NextRequest, NextResponse } from 'next/server';
import type { RevolutOrderRequest, RevolutOrderResponse, RevolutErrorResponse } from '@/types/revolut';

/**
 * Revolut Order Creation API
 * Creates an order with Revolut and returns the public token for payment widget
 *
 * Required Headers:
 * - Authorization: Bearer {SECRET_KEY}
 * - Revolut-Api-Version: YYYY-MM-DD format (e.g., 2024-09-01)
 *
 * Documentation: https://developer.revolut.com/docs/merchant/create-order
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.amount || !body.currency) {
      return NextResponse.json(
        { error: 'Missing required fields: amount, currency' },
        { status: 400 }
      );
    }

    // Prepare Revolut order request
    const revolutOrderData: RevolutOrderRequest = {
      amount: Math.round(body.amount * 100), // Convert to smallest currency unit (pence)
      currency: body.currency || 'GBP',
      description: body.description || 'Kitchen OS Order',
      merchant_order_ext_ref: body.orderNumber,
      customer_email: body.customerEmail,
      customer_phone: body.customerPhone,
    };

    // Add billing address if provided (filter out undefined values)
    if (body.billingAddress) {
      const billingAddress: Record<string, string> = {
        street_line_1: body.billingAddress.line1,
        city: body.billingAddress.city,
        postcode: body.billingAddress.postcode,
        country_code: body.billingAddress.country,
      };

      // Only add optional fields if they have values
      if (body.billingAddress.line2) billingAddress.street_line_2 = body.billingAddress.line2;
      if (body.billingAddress.county) billingAddress.region = body.billingAddress.county;

      revolutOrderData.billing_address = billingAddress;
    }

    // Add shipping address if provided (filter out undefined values)
    if (body.shippingAddress) {
      const shippingAddress: Record<string, string> = {
        street_line_1: body.shippingAddress.line1,
        city: body.shippingAddress.city,
        postcode: body.shippingAddress.postcode,
        country_code: body.shippingAddress.country,
      };

      // Only add optional fields if they have values
      if (body.shippingAddress.line2) shippingAddress.street_line_2 = body.shippingAddress.line2;
      if (body.shippingAddress.county) shippingAddress.region = body.shippingAddress.county;

      revolutOrderData.shipping_address = shippingAddress;
    }

    // Get Revolut configuration from environment
    const revolutApiUrl = process.env.REVOLUT_API_URL || 'https://sandbox-merchant.revolut.com/api/1.0';
    const revolutSecretKey = process.env.REVOLUT_SECRET_KEY;

    if (!revolutSecretKey) {
      console.error('REVOLUT_SECRET_KEY is not configured');
      return NextResponse.json(
        { error: 'Payment service not configured' },
        { status: 500 }
      );
    }

    // Call Revolut API to create order
    console.log('Revolut API Request:', {
      url: `${revolutApiUrl}/orders`,
      method: 'POST',
      hasSecretKey: !!revolutSecretKey,
      secretKeyPrefix: revolutSecretKey?.substring(0, 10) + '...',
      payload: revolutOrderData,
    });

    const revolutResponse = await fetch(`${revolutApiUrl}/orders`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${revolutSecretKey}`,
        'Content-Type': 'application/json',
        'Revolut-Api-Version': '2024-09-01', // Required: API version in YYYY-MM-DD format
      },
      body: JSON.stringify(revolutOrderData),
    });

    if (!revolutResponse.ok) {
      const errorText = await revolutResponse.text();
      let errorData: RevolutErrorResponse;

      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { error: 'Parse error', message: errorText };
      }

      console.error('Revolut API Error:', {
        status: revolutResponse.status,
        statusText: revolutResponse.statusText,
        errorData,
        requestUrl: `${revolutApiUrl}/orders`,
        hasApiKey: !!revolutSecretKey,
      });

      return NextResponse.json(
        {
          error: 'Failed to create payment order',
          message: errorData.message || 'Unknown error from payment provider',
          details: process.env.NODE_ENV === 'development' ? errorData : undefined,
        },
        { status: revolutResponse.status }
      );
    }

    const revolutOrder: RevolutOrderResponse = await revolutResponse.json();

    // Return the public token and order details
    return NextResponse.json({
      success: true,
      revolutOrderId: revolutOrder.id,
      publicToken: revolutOrder.public_id,
      orderState: revolutOrder.state,
      checkoutUrl: revolutOrder.checkout_url,
    });

  } catch (error) {
    console.error('Error creating Revolut order:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * GET handler to retrieve order status
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('orderId');

    if (!orderId) {
      return NextResponse.json(
        { error: 'Missing orderId parameter' },
        { status: 400 }
      );
    }

    const revolutApiUrl = process.env.REVOLUT_API_URL || 'https://sandbox-merchant.revolut.com/api/1.0';
    const revolutSecretKey = process.env.REVOLUT_SECRET_KEY;

    if (!revolutSecretKey) {
      return NextResponse.json(
        { error: 'Payment service not configured' },
        { status: 500 }
      );
    }

    // Call Revolut API to get order details
    const revolutResponse = await fetch(`${revolutApiUrl}/orders/${orderId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${revolutSecretKey}`,
        'Content-Type': 'application/json',
        'Revolut-Api-Version': '2024-09-01', // Required: API version in YYYY-MM-DD format
      },
    });

    if (!revolutResponse.ok) {
      const errorData = await revolutResponse.json();
      return NextResponse.json(
        { error: 'Failed to retrieve order', message: errorData.message },
        { status: revolutResponse.status }
      );
    }

    const revolutOrder: RevolutOrderResponse = await revolutResponse.json();

    return NextResponse.json({
      success: true,
      order: revolutOrder,
    });

  } catch (error) {
    console.error('Error retrieving Revolut order:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
