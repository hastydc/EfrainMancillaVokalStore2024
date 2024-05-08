import { chain } from '@/middlewares/chain';
import { i18nMiddleware } from './middlewares/i18n.middleware';
import { authMiddleware } from './middlewares/auth.middleware';
import { pathsMiddleware } from './middlewares/paths.middleware';

export default chain([pathsMiddleware, authMiddleware, i18nMiddleware]);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
