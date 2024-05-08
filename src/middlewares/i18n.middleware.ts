import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

export function i18nMiddleware(): (
  request: NextRequest
) => NextResponse<unknown> {
  return createMiddleware({
    locales: ['en'],
    defaultLocale: 'en',
  });
}

export const config = {
  matcher: ['/', '/(en)/:page*'],
};
