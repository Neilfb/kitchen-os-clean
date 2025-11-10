/**
 * Release0 Webhook Handler
 *
 * Receives lead data from Release0 chatbot conversations and stores in NoCodeBackend database.
 *
 * Webhook triggers:
 * - When a conversation is completed
 * - When lead information is captured
 * - When a demo is booked
 * - When a hot lead is generated
 *
 * Documentation: .claude/RELEASE0-CHATBOT-IMPLEMENTATION.md
 */

import { NextRequest, NextResponse } from 'next/server';
import * as db from '@/services/nocodebackend';
import { sendEmail } from '@/services/emailit';

interface Release0WebhookPayload {
  conversation_id: string;
  agent_id: string;
  agent_name: string;
  started_at: string;
  completed_at: string;
  status: 'completed' | 'abandoned' | 'in_progress';

  // User data collected during conversation
  user_data: {
    name?: string;
    email?: string;
    company?: string;
    phone?: string;
    role?: string;
    [key: string]: unknown;
  };

  // Custom variables from conversation
  variables: {
    product_interest?: string;
    lead_score?: number;
    lead_quality?: 'Hot' | 'Warm' | 'Cold';
    budget?: string;
    timeline?: string;
    authority?: string;
    affiliate_id?: string;
    [key: string]: unknown;
  };

  // Conversation metadata
  metadata: {
    source?: string;
    page_url?: string;
    page_title?: string;
    referrer?: string;
    user_agent?: string;
    ip_address?: string;
  };
}

interface ChatLead extends Record<string, unknown> {
  conversation_id: string;
  name: string | null;
  email: string;
  company: string | null;
  phone: string | null;
  role: string | null;
  product_interest: string | null;
  lead_score: number | null;
  lead_quality: 'Hot' | 'Warm' | 'Cold' | null;
  budget: string | null;
  timeline: string | null;
  authority: string | null;
  affiliate_id: string | null;
  source: string;
  page_url: string | null;
  referrer: string | null;
  status: 'new' | 'contacted' | 'qualified' | 'converted';
  created_at: string;
}

export async function POST(request: NextRequest) {
  try {
    // Verify webhook secret for security
    const webhookSecret = request.headers.get('x-release0-secret');
    const expectedSecret = process.env.RELEASE0_WEBHOOK_SECRET;

    if (expectedSecret && webhookSecret !== expectedSecret) {
      console.error('[Release0 Webhook] Invalid webhook secret');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Parse webhook payload
    const payload: Release0WebhookPayload = await request.json();

    console.log('[Release0 Webhook] Received:', {
      conversation_id: payload.conversation_id,
      status: payload.status,
      has_email: !!payload.user_data?.email,
      lead_quality: payload.variables?.lead_quality,
    });

    // Only process completed conversations with email
    if (payload.status !== 'completed' || !payload.user_data?.email) {
      console.log('[Release0 Webhook] Skipping - not completed or no email');
      return NextResponse.json({
        success: true,
        message: 'Skipped - not completed or no email'
      });
    }

    // Prepare lead data for database
    const leadData: ChatLead = {
      conversation_id: payload.conversation_id,
      name: payload.user_data.name || null,
      email: payload.user_data.email,
      company: payload.user_data.company || null,
      phone: payload.user_data.phone || null,
      role: payload.user_data.role || null,
      product_interest: payload.variables.product_interest || null,
      lead_score: payload.variables.lead_score || null,
      lead_quality: payload.variables.lead_quality || null,
      budget: payload.variables.budget || null,
      timeline: payload.variables.timeline || null,
      authority: payload.variables.authority || null,
      affiliate_id: payload.variables.affiliate_id || null,
      source: payload.metadata.source || 'chatbot',
      page_url: payload.metadata.page_url || null,
      referrer: payload.metadata.referrer || null,
      status: 'new',
      created_at: payload.completed_at || new Date().toISOString(),
    };

    // Save to NoCodeBackend database
    try {
      const leadId = await db.create('chat_leads', leadData);
      console.log('[Release0 Webhook] Lead saved to database:', leadId);
    } catch (dbError) {
      console.error('[Release0 Webhook] Database error:', dbError);
      // Continue processing even if database save fails
    }

    // Send notification email for hot leads
    if (leadData.lead_quality === 'Hot') {
      await sendHotLeadNotification(leadData, payload);
    }

    // Track affiliate conversion if applicable
    if (leadData.affiliate_id) {
      await trackAffiliateConversion(leadData);
    }

    return NextResponse.json({
      success: true,
      message: 'Lead processed successfully',
      lead_id: payload.conversation_id,
      lead_quality: leadData.lead_quality,
    });

  } catch (error) {
    console.error('[Release0 Webhook] Error processing webhook:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process webhook',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * Send notification email to team for hot leads
 */
async function sendHotLeadNotification(
  lead: ChatLead,
  payload: Release0WebhookPayload
) {
  try {
    const conversationUrl = `https://app.release0.com/conversations/${payload.conversation_id}`;

    const emailHtml = `
      <h2>🔥 Hot Lead Alert from Website Chatbot</h2>

      <h3>Contact Information</h3>
      <ul>
        <li><strong>Name:</strong> ${lead.name || 'Not provided'}</li>
        <li><strong>Email:</strong> ${lead.email}</li>
        <li><strong>Company:</strong> ${lead.company || 'Not provided'}</li>
        <li><strong>Phone:</strong> ${lead.phone || 'Not provided'}</li>
        <li><strong>Role:</strong> ${lead.role || 'Not provided'}</li>
      </ul>

      <h3>Lead Details</h3>
      <ul>
        <li><strong>Product Interest:</strong> ${lead.product_interest || 'Not specified'}</li>
        <li><strong>Lead Quality:</strong> <strong style="color: #FF4444;">HOT</strong></li>
        <li><strong>Lead Score:</strong> ${lead.lead_score || 'N/A'}/27</li>
        <li><strong>Budget:</strong> ${lead.budget || 'Not specified'}</li>
        <li><strong>Timeline:</strong> ${lead.timeline || 'Not specified'}</li>
        <li><strong>Authority:</strong> ${lead.authority || 'Not specified'}</li>
      </ul>

      <h3>Source Information</h3>
      <ul>
        <li><strong>Source:</strong> ${lead.source}</li>
        <li><strong>Page:</strong> ${lead.page_url || 'Not tracked'}</li>
        <li><strong>Referrer:</strong> ${lead.referrer || 'Direct'}</li>
        ${lead.affiliate_id ? `<li><strong>Affiliate ID:</strong> ${lead.affiliate_id}</li>` : ''}
      </ul>

      <p><strong>⏰ Action Required:</strong> Follow up within 4 hours for best conversion rates.</p>

      <p>
        <a href="${conversationUrl}"
           style="display: inline-block; background: #00A651; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
          View Full Conversation →
        </a>
      </p>

      <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;">
      <p style="color: #666; font-size: 12px;">
        This notification was automatically generated by Kitchen OS chatbot system.
        <br>
        Conversation ID: ${payload.conversation_id}
      </p>
    `;

    await sendEmail({
      from: 'Kitchen OS Chatbot <noreply@kitchenos.com>',
      to: process.env.SALES_NOTIFICATION_EMAIL || 'hello@kitchenos.com',
      subject: `🔥 Hot Lead: ${lead.name || lead.email} - ${lead.product_interest || 'General Inquiry'}`,
      html: emailHtml,
    });

    console.log('[Release0 Webhook] Hot lead notification sent');
  } catch (error) {
    console.error('[Release0 Webhook] Failed to send hot lead notification:', error);
    // Don't throw - notification failure shouldn't break webhook
  }
}

/**
 * Track affiliate conversion for referral commission
 */
async function trackAffiliateConversion(lead: ChatLead) {
  try {
    if (!lead.affiliate_id) return;

    console.log('[Release0 Webhook] Tracking affiliate conversion:', lead.affiliate_id);

    // TODO: Implement Push Lap Growth conversion tracking
    // This would call the Push Lap Growth API to track the conversion
    // For now, just log it - will be fully implemented with sales tracking

    // Example future implementation:
    // await fetch('https://www.pushlapgrowth.com/api/v1/conversions', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.PUSH_LAP_GROWTH_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     affiliate_id: lead.affiliate_id,
    //     conversion_type: 'lead',
    //     email: lead.email,
    //     value: 0, // Lead value, update on actual sale
    //   }),
    // });

  } catch (error) {
    console.error('[Release0 Webhook] Failed to track affiliate conversion:', error);
    // Don't throw - tracking failure shouldn't break webhook
  }
}

/**
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'release0-webhook',
    timestamp: new Date().toISOString(),
  });
}
