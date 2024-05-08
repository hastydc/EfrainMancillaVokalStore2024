import { NextRequest, NextResponse, type NextFetchEvent } from 'next/server';
import { CustomMiddleware } from './chain';

const PUBLIC_FILE = /\.(.*)$/;
// middleware to prevent concat locale in url to use api rest or view public assets
export function pathsMiddleware(middleware: CustomMiddleware) {
  return async (req: NextRequest, event: NextFetchEvent) => {
    if (
      req.nextUrl.pathname.includes('/api/') ||
      PUBLIC_FILE.test(req.nextUrl.pathname)
    ) {
      return;
    }

    return middleware(req, event, NextResponse.next());
  };
}
