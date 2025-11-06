/**
 * NoCodeBackend Client - Kitchen OS Standards
 *
 * Canonical implementation following NCB contract:
 * - Auth triplet: Authorization header + ?Instance= query + secret_key in body
 * - Flat payloads: Fields at top level, no data:{} wrapper
 * - Nulls over empty strings for optional fields
 * - Money fields as strings with 2 decimal places
 * - Omit created_at (let DB defaults handle it)
 */

import { invariant } from './invariant';

const BASE_URL = process.env.NOCODEBACKEND_BASE_URL!;
const INSTANCE = process.env.NOCODEBACKEND_INSTANCE!;
const API_KEY = process.env.NOCODEBACKEND_API_KEY!;
const SECRET = process.env.NOCODEBACKEND_SECRET_KEY!;

// Runtime validation of required env vars
invariant(BASE_URL && INSTANCE && API_KEY && SECRET, 'NCB env vars missing');

/**
 * Sanitize payload according to NCB standards
 */
function sanitise<T extends Record<string, unknown>>(input: T): T {
  const out: Record<string, unknown> = {};

  for (const [k, v] of Object.entries(input)) {
    // Remove undefined values
    if (v === undefined) continue;

    // Omit created_at - let DB default handle it
    if (k === 'created_at') continue;

    // Convert empty strings to null for optional fields
    if (v === '') {
      out[k] = null;
      continue;
    }

    // Convert money fields to strings with 2 decimal places
    if (
      ['subtotal', 'shipping_cost', 'tax', 'total', 'unit_price', 'line_total'].includes(k) &&
      typeof v === 'number'
    ) {
      out[k] = v.toFixed(2);
      continue;
    }

    out[k] = v;
  }

  return out as T;
}

/**
 * Make a request to NoCodeBackend API
 */
async function ncbFetch<T>(
  url: string,
  body: Record<string, unknown>,
  method: 'POST' | 'PUT' | 'PATCH' = 'POST'
): Promise<T> {
  // Add secret_key at top level with sanitized fields
  const payload = { secret_key: SECRET, ...body };

  console.log('NCB Request:', {
    url,
    method,
    fieldCount: Object.keys(body).length,
    hasSecretKey: true,
  });

  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();

  if (!res.ok) {
    console.error('NCB Error:', {
      status: res.status,
      body: text,
      url,
    });
    throw new Error(`NCB ${res.status}: ${text}`);
  }

  try {
    return JSON.parse(text) as T;
  } catch {
    return text as unknown as T;
  }
}

/**
 * Create a new record in a NoCodeBackend table
 */
export async function ncbCreate<T = unknown>(
  table: string,
  payload: Record<string, unknown>
): Promise<T> {
  const url = `${BASE_URL}/create/${encodeURIComponent(table)}?Instance=${encodeURIComponent(INSTANCE)}`;
  return ncbFetch<T>(url, sanitise(payload), 'POST');
}

/**
 * Update a record in a NoCodeBackend table
 */
export async function ncbUpdate<T = unknown>(
  table: string,
  id: number,
  payload: Record<string, unknown>
): Promise<T> {
  const url = `${BASE_URL}/update/${encodeURIComponent(table)}/${id}?Instance=${encodeURIComponent(INSTANCE)}`;
  return ncbFetch<T>(url, sanitise(payload), 'PUT');
}

/**
 * Search for records in a NoCodeBackend table
 */
export async function ncbSearch<T = unknown>(
  table: string,
  criteria: Record<string, unknown>
): Promise<T[]> {
  const url = `${BASE_URL}/search/${encodeURIComponent(table)}?Instance=${encodeURIComponent(INSTANCE)}`;
  const result = await ncbFetch<{ data?: T[] }>(url, criteria, 'POST');
  return result.data || [];
}

/**
 * Read records from a NoCodeBackend table
 */
export async function ncbRead<T = unknown>(
  table: string,
  filters?: Record<string, unknown>
): Promise<T[]> {
  let url = `${BASE_URL}/read/${encodeURIComponent(table)}?Instance=${encodeURIComponent(INSTANCE)}`;

  if (filters) {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.append(key, String(value));
      }
    });
    const queryString = params.toString();
    if (queryString) {
      url += `&${queryString}`;
    }
  }

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  const text = await res.text();

  if (!res.ok) {
    console.error('NCB Error:', {
      status: res.status,
      body: text,
      url,
    });
    throw new Error(`NCB ${res.status}: ${text}`);
  }

  try {
    const result = JSON.parse(text) as { data?: T[] };
    return result.data || [];
  } catch {
    return [] as T[];
  }
}

/**
 * Read a single record by ID
 */
export async function ncbReadById<T = unknown>(table: string, id: number): Promise<T | null> {
  const url = `${BASE_URL}/read/${encodeURIComponent(table)}/${id}?Instance=${encodeURIComponent(INSTANCE)}`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const text = await res.text();

    if (!res.ok) {
      // 404 is expected for missing records
      if (res.status === 404) {
        return null;
      }
      throw new Error(`NCB ${res.status}: ${text}`);
    }

    const result = JSON.parse(text) as { data?: T };
    return result.data || null;
  } catch (error) {
    if (error instanceof Error && error.message.includes('404')) {
      return null;
    }
    throw error;
  }
}

/**
 * Delete a record from a NoCodeBackend table
 */
export async function ncbDelete(table: string, id: number): Promise<void> {
  const url = `${BASE_URL}/delete/${encodeURIComponent(table)}/${id}?Instance=${encodeURIComponent(INSTANCE)}`;

  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('NCB Error:', {
      status: res.status,
      body: text,
      url,
    });
    throw new Error(`NCB ${res.status}: ${text}`);
  }
}
