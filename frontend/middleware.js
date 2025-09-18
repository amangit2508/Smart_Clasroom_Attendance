import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token')?.value || null; // or use localStorage token if using client-side check
  const { pathname } = req.nextUrl;

  // Protect /admin/dashboard
  if (pathname.startsWith('/admin/dashboard')) {
    if (!token) {
      const loginUrl = new URL('/admin/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Apply only to admin routes
export const config = {
  matcher: ['/admin/dashboard/:path*'],
};
