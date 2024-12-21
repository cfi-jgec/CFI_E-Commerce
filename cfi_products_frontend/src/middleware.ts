import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getSession } from "./app/lib";

const publicPaths = ['/login', '/register', '/', '/product/:path*'];
// const privatePaths = ['/profile', '/profile/:path*', '/cart', '/checkout', '/orders', '/orders/:path*', '/wishlist', '/wishlist/:path*'];

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const session = await getSession();
    const isPublic = publicPaths.includes(path);
    // const isPrivate = privatePaths.includes(path);
    console.log(path, isPublic)
    console.log(session)
    if (!isPublic && !session) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
    if (isPublic && session) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }
    return NextResponse.next()
}

export const config = {
    matcher: [
        '/',
        '/login',
        '/register',
        '/product',
        '/product/:path*',
        '/profile',
        '/profile/:path*',
        '/cart',
        '/checkout',
        '/orders',
        '/orders/:path*',
        '/wishlist',
        '/wishlist/:path*'
    ]
};
