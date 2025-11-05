/**
 * NoCodeBackend API Client
 *
 * Handles all database operations through NoCodeBackend REST API.
 * Uses API key authentication in URL query parameter.
 *
 * API Format:
 * - URL: https://backend.nocodebackend.io/api/{action}/{table}?Instance={INSTANCE}
 * - Headers: Authorization: Bearer {API_KEY}
 * - Body: { secret_key: SECRET_KEY, field1: value1, field2: value2, ... }
 */

const API_KEY = process.env.NOCODEBACKEND_API_KEY!;
const SECRET_KEY = process.env.NOCODEBACKEND_SECRET_KEY!;
const INSTANCE = process.env.NOCODEBACKEND_INSTANCE!;
const BASE_URL = process.env.NOCODEBACKEND_BASE_URL || 'https://backend.nocodebackend.io/api';

interface NoCodeBackendResponse<T = unknown> {
  status: string;
  message?: string;
  data?: T;
  id?: number;
  error?: string;
}

/**
 * Make a request to NoCodeBackend API
 */
async function request<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<NoCodeBackendResponse<T>> {
  const url = `${BASE_URL}${endpoint}${endpoint.includes('?') ? '&' : '?'}Instance=${INSTANCE}`;

  // Debug logging
  console.log('NoCodeBackend Request:', {
    url,
    method: options.method || 'GET',
    body: options.body ? JSON.parse(options.body as string) : undefined,
    hasAuthHeader: !!API_KEY,
  });

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
      ...options.headers,
    },
  });

  // Debug logging
  console.log('NoCodeBackend Response:', {
    status: response.status,
    ok: response.ok,
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('NoCodeBackend Error Details:', {
      status: response.status,
      errorText,
      url,
      requestBody: options.body,
    });
    throw new Error(`NoCodeBackend API error: ${response.status} - ${errorText}`);
  }

  return response.json();
}

/**
 * Create a new record in a table
 */
export async function create<T = unknown>(table: string, data: Record<string, unknown>): Promise<number> {
  // Add secret_key at top level with data fields
  const payload = { secret_key: SECRET_KEY, ...data };

  const response = await request<T>(`/create/${table}`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!response.id) {
    throw new Error('No ID returned from create operation');
  }

  return response.id;
}

/**
 * Read records from a table
 */
export async function read<T = unknown>(
  table: string,
  filters?: Record<string, unknown>
): Promise<T[]> {
  let endpoint = `/read/${table}`;

  if (filters) {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.append(key, String(value));
      }
    });
    const queryString = params.toString();
    if (queryString) {
      endpoint += `?${queryString}`;
    }
  }

  const response = await request<T[]>(endpoint);
  return response.data || [];
}

/**
 * Read a single record by ID
 */
export async function readById<T = unknown>(table: string, id: number): Promise<T | null> {
  try {
    const response = await request<T>(`/read/${table}/${id}`);
    return response.data || null;
  } catch (error) {
    // If 404, return null instead of throwing
    if (error instanceof Error && error.message.includes('404')) {
      return null;
    }
    throw error;
  }
}

/**
 * Search for records matching criteria
 */
export async function search<T = unknown>(
  table: string,
  criteria: Record<string, unknown>
): Promise<T[]> {
  // Add secret_key at top level with criteria fields
  const payload = { secret_key: SECRET_KEY, ...criteria };

  const response = await request<T[]>(`/search/${table}`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return response.data || [];
}

/**
 * Update a record by ID
 */
export async function update(
  table: string,
  id: number,
  data: Record<string, unknown>
): Promise<void> {
  // Add secret_key at top level with data fields
  const payload = { secret_key: SECRET_KEY, ...data };

  await request(`/update/${table}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}

/**
 * Delete a record by ID
 */
export async function deleteRecord(table: string, id: number): Promise<void> {
  await request(`/delete/${table}/${id}`, {
    method: 'DELETE',
  });
}
