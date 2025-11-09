/**
 * EmailIt Service
 *
 * Transactional email service using EmailIt API
 * Documentation: https://api.emailit.com
 */

export interface EmailItSendRequest {
  from: string; // Format: "Name <email@domain.com>"
  to: string | string[]; // Single email or array
  reply_to?: string;
  subject: string;
  html: string;
  text?: string; // Plain text fallback
}

export interface EmailItSendResponse {
  success: boolean;
  id?: string;
  error?: string;
}

/**
 * Send email via EmailIt API
 */
export async function sendEmail(params: EmailItSendRequest): Promise<EmailItSendResponse> {
  const apiKey = process.env.EMAILIT_API_KEY;

  if (!apiKey) {
    console.error('EMAILIT_API_KEY is not configured');
    return {
      success: false,
      error: 'Email service not configured',
    };
  }

  try {
    const response = await fetch('https://api.emailit.com/v1/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: params.from,
        to: Array.isArray(params.to) ? params.to.join(',') : params.to,
        reply_to: params.reply_to,
        subject: params.subject,
        html: params.html,
        text: params.text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('EmailIt API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
      });

      return {
        success: false,
        error: `EmailIt API error: ${response.status} ${response.statusText}`,
      };
    }

    const data = await response.json();

    console.log('Email sent successfully via EmailIt:', {
      to: params.to,
      subject: params.subject,
      id: data.id,
    });

    return {
      success: true,
      id: data.id,
    };
  } catch (error) {
    console.error('Failed to send email via EmailIt:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
