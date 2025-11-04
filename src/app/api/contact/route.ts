/**
 * API Route: Contact Form Submission
 *
 * Handles contact form submissions and saves them to the database.
 */

import { NextRequest, NextResponse } from 'next/server';
import * as db from '@/services/nocodebackend';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  sites?: string;
  interest?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Parse number of sites to integer (if provided)
    let numberOfSites: number | null = null;
    if (body.sites) {
      // Handle range values like "2-5", "6-10", etc.
      if (body.sites.includes('-')) {
        const firstNumber = parseInt(body.sites.split('-')[0]);
        numberOfSites = isNaN(firstNumber) ? null : firstNumber;
      } else if (body.sites.includes('+')) {
        // Handle "20+" format
        const number = parseInt(body.sites.replace('+', ''));
        numberOfSites = isNaN(number) ? null : number;
      } else {
        numberOfSites = parseInt(body.sites);
        if (isNaN(numberOfSites)) {
          numberOfSites = null;
        }
      }
    }

    // Save to database
    const submissionId = await db.create('contact_submissions', {
      name: body.name,
      email: body.email,
      phone: body.phone || null,
      company: body.company || null,
      number_of_sites: numberOfSites,
      product_interest: body.interest || null,
      message: body.message,
      status: 'new',
      created_at: new Date().toISOString(),
    });

    console.log(`Contact form submission saved: ${body.email} (ID: ${submissionId})`);

    // TODO: Send notification email to sales team
    // await sendContactNotificationEmail(body);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry. We will get back to you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}
