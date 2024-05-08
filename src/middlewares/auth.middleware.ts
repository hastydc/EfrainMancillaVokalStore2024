import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from 'next/server';
import { CustomMiddleware } from './chain';

export function authMiddleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const isAuthenticated = true;
    let response = NextResponse.next();

    if (!isAuthenticated && !request.url.includes('/sign-in')) {
      return NextResponse.redirect(new URL('/en/auth/sign-in', request.url));
    }

    return middleware(request, event, response);
  };
}
