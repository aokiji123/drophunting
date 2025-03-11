import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;
  const pathname = request.nextUrl.pathname;

  const publicRoutes = new Set([
    "/auth/login",
    "/auth/sign-up",
    "/auth/forgot-password",
    "/auth/email-confirmation",
    "/auth/password-reset-confirmation",
    "/password-reset",
  ]);

  const privateRoutes = [
    "/",
    "/profile",
    "/subaccounts",
    "/subscriptions",
    "/referal",
    "/guides",
    "/favorites",
    "/blog",
    "/store",
  ];

  const dynamicRoutePatterns = [
    /^\/guides\/.+$/, // Matches /guides/:id
    /^\/favorites\/.+$/, // Matches /favorites/:id
    /^\/blog\/.+$/, // Matches /blog/:id
    /^\/store\/.+$/, // Matches /store/:id
    /^\/profile\/.+$/, // Matches /profile/:something
  ];

  if (!token) {
    if (publicRoutes.has(pathname)) return NextResponse.next();
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (publicRoutes.has(pathname)) {
    return NextResponse.redirect(new URL("/guides", request.url));
  }

  const isKnownRoute =
    privateRoutes.includes(pathname) ||
    dynamicRoutePatterns.some((pattern) => pattern.test(pathname));

  if (!isKnownRoute) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
