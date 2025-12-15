import { NextResponse } from 'next/server';
import { BUILDER_API_KEY, BUILDER_CONTENT_API } from '@/lib/builderConfig';

export async function GET() {
  const url = `${BUILDER_CONTENT_API}/blog-post?apiKey=${BUILDER_API_KEY}&limit=10`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return NextResponse.json({
        error: 'Failed to fetch',
        status: response.status,
        statusText: response.statusText,
      }, { status: 500 });
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      postCount: data.results?.length || 0,
      posts: data.results || [],
      rawResponse: data,
    });
  } catch (error) {
    return NextResponse.json({
      error: 'Exception occurred',
      message: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
