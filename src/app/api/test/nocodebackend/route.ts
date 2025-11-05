/**
 * Test endpoint for NoCodeBackend API integration
 * This helps debug connection and data format issues
 */

import { NextRequest, NextResponse } from 'next/server';
import * as db from '@/services/nocodebackend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { table, data } = body;

    if (!table || !data) {
      return NextResponse.json(
        { error: 'Missing table or data in request body' },
        { status: 400 }
      );
    }

    console.log(`Testing NoCodeBackend create for table: ${table}`);
    console.log('Data being sent:', JSON.stringify(data, null, 2));

    const id = await db.create(table, data);

    return NextResponse.json({
      success: true,
      message: 'Record created successfully',
      id: id,
      table: table,
    });
  } catch (error) {
    console.error('NoCodeBackend test error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        details: error,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'NoCodeBackend Test Endpoint',
    usage: 'POST with { "table": "table_name", "data": { "field": "value" } }',
    example: {
      table: 'orders',
      data: {
        order_number: 'TEST-001',
        customer_email: 'test@example.com',
        status: 'pending',
        total: 100,
        created_at: new Date().toISOString(),
      },
    },
  });
}
