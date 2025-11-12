/**
 * API Route: Contact Form Submission
 *
 * Handles contact form submissions and saves them to the database.
 */

import { NextRequest, NextResponse } from 'next/server';
import * as db from '@/services/nocodebackend';
import { sendEmail } from '@/services/emailit';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  sites?: string;
  interest?: string;
  message: string;
  formId?: string;
}

/**
 * Determine form type based on form ID
 */
function getFormType(formId?: string): string {
  if (!formId) return 'contact';

  // Contact Us Form
  if (formId === '9c1b1ddf-90db-4f82-aa42-63d2e57fc581') {
    return 'contact';
  }
  // Supplier Suggestion Form
  if (formId === '066b4cba-033b-423d-a9aa-6c3b7d2fa308') {
    return 'supplier_suggestion';
  }
  // Newsletter Signup
  if (formId === '52391afa-3232-40f5-8bee-de7302e0854d') {
    return 'newsletter';
  }

  return 'contact';
}

/**
 * Determine email subject based on form ID
 */
function getEmailSubject(formId?: string): string {
  if (!formId) return 'New Contact Form Submission';

  // Contact Us Form
  if (formId === '9c1b1ddf-90db-4f82-aa42-63d2e57fc581') {
    return 'New Contact Form Submission';
  }
  // Supplier Suggestion Form
  if (formId === '066b4cba-033b-423d-a9aa-6c3b7d2fa308') {
    return 'New Supplier Suggestion';
  }
  // Newsletter Signup
  if (formId === '52391afa-3232-40f5-8bee-de7302e0854d') {
    return 'New Newsletter Signup';
  }

  return 'New Contact Form Submission';
}

/**
 * Send email notification to sales team
 */
async function sendContactNotification(data: ContactFormData): Promise<void> {
  const salesEmail = process.env.SALES_NOTIFICATION_EMAIL || 'neil@kitchen-os.com';
  const subject = getEmailSubject(data.formId);

  // Build email body
  const htmlBody = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #00A651; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f9f9f9; padding: 20px; margin-top: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #00A651; }
          .value { margin-top: 5px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>${subject}</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            ${data.phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${data.phone}</div>
            </div>
            ` : ''}
            ${data.company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${data.company}</div>
            </div>
            ` : ''}
            ${data.sites ? `
            <div class="field">
              <div class="label">Number of Sites:</div>
              <div class="value">${data.sites}</div>
            </div>
            ` : ''}
            ${data.interest ? `
            <div class="field">
              <div class="label">Product Interest:</div>
              <div class="value">${data.interest}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
          </div>
          <div class="footer">
            <p>This notification was sent from the Kitchen OS website contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const result = await sendEmail({
      from: 'Kitchen OS <orders@kitchen-os.com>',
      to: salesEmail,
      reply_to: data.email,
      subject: subject,
      html: htmlBody,
    });

    if (!result.success) {
      console.error('Failed to send notification email:', result.error);
    }
  } catch (error) {
    console.error('Error sending notification email:', error);
  }
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
      form_type: getFormType(body.formId),
      status: 'new',
      created_at: new Date().toISOString(),
    });

    console.log(`Contact form submission saved: ${body.email} (ID: ${submissionId})`);

    // Send notification email to sales team
    await sendContactNotification(body);

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
