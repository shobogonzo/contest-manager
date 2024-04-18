import { NextRequest, NextResponse } from 'next/server';
import { AmplifyServer } from 'aws-amplify/adapter-core';
import { fetchAuthSession } from 'aws-amplify/auth/server';
import { getTenantContext } from '@/utils/amplifyServerUtils';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  // TODO get tenantId from request
  const tenantId = 'default';
  const context = await getTenantContext(tenantId);

  const authenticated = await context.runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec: AmplifyServer.ContextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return session.tokens !== undefined;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  });

  if (authenticated) {
    return response;
  }

  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - app root (login page)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|$).*)'
  ]
};
