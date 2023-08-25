import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const email = request.cookies.get('email');

    // redirect if user has logged in
    if (
        request.nextUrl.pathname.startsWith('/login') ||
        request.nextUrl.pathname.startsWith('/signup')
    ) {
        if (email?.value) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    // redirect if user hasn't already logged in
    if (
        request.nextUrl.pathname.startsWith('/shopping-cart') ||
        request.nextUrl.pathname.startsWith('/account')
    ) {
        if (!email?.value) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}
