'use client';

import { useEffect } from 'react';

/**
 * Release0 Chatbot Widget
 *
 * Embeds the Release0 conversational AI chatbot on the Kitchen OS website.
 *
 * Features:
 * - AI-powered product recommendations
 * - Lead capture and qualification
 * - Demo booking integration
 * - Multi-language support
 * - Mobile-responsive chat bubble
 *
 * Setup Instructions:
 * 1. Purchase Release0 on AppSumo: https://appsumo.com/products/release0/
 * 2. Get your Agent ID from Release0 dashboard
 * 3. Add to .env.local: NEXT_PUBLIC_RELEASE0_AGENT_ID=your-agent-id
 * 4. Add to .env.local: NEXT_PUBLIC_RELEASE0_ENABLED=true
 * 5. Build conversation flows in Release0 dashboard
 *
 * Documentation: See .claude/RELEASE0-CHATBOT-IMPLEMENTATION.md
 */

interface Release0WidgetProps {
  /**
   * Release0 Agent ID (from dashboard)
   * Falls back to environment variable if not provided
   */
  agentId?: string;

  /**
   * Display mode: 'bubble' (floating button), 'popup' (centered modal), 'inline' (embedded)
   * @default 'bubble'
   */
  mode?: 'bubble' | 'popup' | 'inline';

  /**
   * Position of chat bubble (only for 'bubble' mode)
   * @default 'bottom-right'
   */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

  /**
   * Primary color (hex code)
   * @default '#00A651' (Kitchen OS green)
   */
  primaryColor?: string;

  /**
   * Auto-open chat after delay (milliseconds)
   * Set to 0 to disable auto-open
   */
  autoOpenDelay?: number;

  /**
   * Show greeting message when chat opens
   * @default true
   */
  showGreeting?: boolean;

  /**
   * Custom greeting message
   */
  greetingMessage?: string;

  /**
   * Enable/disable chatbot
   * Falls back to NEXT_PUBLIC_RELEASE0_ENABLED if not provided
   */
  enabled?: boolean;
}

/**
 * Extend Window interface to include Release0 global object
 */
declare global {
  interface Window {
    Release0?: {
      open: () => void;
      close: () => void;
      toggle: () => void;
      setCustomData: (data: Record<string, unknown>) => void;
      isOpen: () => boolean;
    };
  }
}

export default function Release0Widget({
  agentId,
  mode = 'bubble',
  position = 'bottom-right',
  primaryColor = '#00A651',
  autoOpenDelay = 0,
  showGreeting = true,
  greetingMessage,
  enabled,
}: Release0WidgetProps) {
  // Check if chatbot should be enabled
  const isEnabled = enabled ?? process.env.NEXT_PUBLIC_RELEASE0_ENABLED === 'true';
  const finalAgentId = agentId ?? process.env.NEXT_PUBLIC_RELEASE0_AGENT_ID;

  useEffect(() => {
    // Don't load if disabled or no agent ID
    if (!isEnabled || !finalAgentId) {
      console.info('[Release0] Chatbot disabled or missing agent ID');
      return;
    }

    // Check if script already loaded
    if (document.getElementById('release0-script')) {
      console.info('[Release0] Script already loaded');
      return;
    }

    // Create and configure script element
    const script = document.createElement('script');
    script.id = 'release0-script';
    script.src = 'https://agent.release0.com/embed.js';
    script.async = true;

    // Configure Release0 via data attributes
    script.setAttribute('data-agent-id', finalAgentId);
    script.setAttribute('data-mode', mode);
    script.setAttribute('data-position', position);
    script.setAttribute('data-primary-color', primaryColor);

    if (autoOpenDelay > 0) {
      script.setAttribute('data-auto-open', autoOpenDelay.toString());
    }

    if (!showGreeting) {
      script.setAttribute('data-hide-greeting', 'true');
    }

    if (greetingMessage) {
      script.setAttribute('data-greeting', greetingMessage);
    }

    // Capture affiliate ID from URL or cookie if present
    const urlParams = new URLSearchParams(window.location.search);
    const affiliateId = urlParams.get('ref') || getCookie('affiliate_id');
    if (affiliateId) {
      script.setAttribute('data-affiliate-id', affiliateId);
      console.info('[Release0] Affiliate tracking enabled:', affiliateId);
    }

    // Handle script load events
    script.onload = () => {
      console.info('[Release0] Chatbot loaded successfully');

      // Set custom data for conversation context
      if (window.Release0) {
        window.Release0.setCustomData({
          source: 'website',
          page_url: window.location.href,
          page_title: document.title,
          referrer: document.referrer || 'direct',
          timestamp: new Date().toISOString(),
          affiliate_id: affiliateId || null,
        });
      }
    };

    script.onerror = (error) => {
      console.error('[Release0] Failed to load chatbot:', error);
    };

    // Append script to document
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptElement = document.getElementById('release0-script');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, [isEnabled, finalAgentId, mode, position, primaryColor, autoOpenDelay, showGreeting, greetingMessage]);

  // Helper function to get cookie value
  function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  }

  // This component doesn't render anything (script is loaded in useEffect)
  return null;
}

/**
 * Utility functions to control Release0 chatbot programmatically
 */
export const Release0Controls = {
  /**
   * Open the chatbot programmatically
   */
  open: () => {
    if (typeof window !== 'undefined' && window.Release0) {
      window.Release0.open();
    }
  },

  /**
   * Close the chatbot programmatically
   */
  close: () => {
    if (typeof window !== 'undefined' && window.Release0) {
      window.Release0.close();
    }
  },

  /**
   * Toggle chatbot open/closed state
   */
  toggle: () => {
    if (typeof window !== 'undefined' && window.Release0) {
      window.Release0.toggle();
    }
  },

  /**
   * Check if chatbot is currently open
   */
  isOpen: (): boolean => {
    if (typeof window !== 'undefined' && window.Release0) {
      return window.Release0.isOpen();
    }
    return false;
  },

  /**
   * Set custom data for the conversation
   */
  setCustomData: (data: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.Release0) {
      window.Release0.setCustomData(data);
    }
  },
};
