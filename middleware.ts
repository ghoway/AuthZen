import NextAuth from 'next-auth';
import { auth } from '@/auth';
import { NextResponse } from 'next/server';

const publicRoutes = ['/', '/login', '/register'];
const authRoutes = ['/login', '/register'];

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/dashboard', nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', nextUrl));
  }

  return;
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
