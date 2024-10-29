import { NextResponse } from 'next/server';

export function middleware(request) {
  const userToken = request.cookies.get('jwtToken')?.value;

  if (!userToken) {
    // Redirect to login if the token is missing
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  
  // Allow the request to proceed to protected routes if the token exists
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/profile', '/settings'], // Adjust paths as needed
};
    