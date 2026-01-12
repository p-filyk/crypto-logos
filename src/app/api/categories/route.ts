import { NextResponse } from 'next/server';

// lib
import { getCategories } from '@/lib/categories';

// helpers
import toErrorResponse from '@/shared/helpers/to-error-response';

// constants
import CACHE_HEADERS from '@/shared/constants/cache-headers';

export async function GET() {
  try {
    const data = await getCategories();
    return NextResponse.json(data, {
      status: 200,
      headers: CACHE_HEADERS,
    });
  } catch {
    return toErrorResponse(500, 'INTERNAL_ERROR', 'Unexpected server error.');
  }
}
