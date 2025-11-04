/**
 * NoCodeBackend API Client
 *
 * Handles all database operations through NoCodeBackend REST API.
 * Uses bearer token authentication and instance parameter.
 */

const API_KEY = process.env.NOCODEBACKEND_API_KEY!;
const INSTANCE = process.env.NOCODEBACKEND_INSTANCE!;
const BASE_URL = process.env.NOCODEBACKEND_BASE_URL || 'https://openapi.nocodebackend.com';

interface NoCodeBackendResponse<T = unknown> {
  status: string;
  message?: string;
  data?: T;
  id?: number;
}

/**
 * Make a request to NoCodeBackend API
 */
async function request<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<NoCodeBackendResponse<T>> {
  const url = `${BASE_URL}${endpoint}${endpoint.includes('?') ? '&' : '?'}Instance=${INSTANCE}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`NoCodeBackend API error: ${response.status} - ${errorText}`);
  }

  return response.json();
}

/**
 * Create a new record in a table
 */
export async function create<T = unknown>(table: string, data: Record<string, unknown>): Promise<number> {
  const response = await request<T>(`/create/${table}`, {
    method: 'POST',
    body: JSON.stringify(data),
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
  const response = await request<T[]>(`/search/${table}`, {
    method: 'POST',
    body: JSON.stringify(criteria),
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
  await request(`/update/${table}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
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
