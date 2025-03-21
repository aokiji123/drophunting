import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;
  const pathname = request.nextUrl.pathname;
  const params = request.nextUrl.searchParams;

  const publicRoutes = new Set([
    "/auth/login",
    "/google/callback",
    "/auth/sign-up",
    "/auth/forgot-password",
    "/auth/email-confirmation",
    "/auth/password-reset-confirmation",
    "/password-reset",
    "/landing",
  ]);

  const privateRoutes = [
    "/",
    "/profile",
    "/subaccounts",
    "/subscriptions",
    "/referal",
    "/progress",
    "/guides",
    "/suggest-guide",
    "/favorites",
    "/blog",
    "/store",
  ];

  const dynamicRoutePatterns = [
    /^\/guides\/.+$/,
    /^\/favorites\/.+$/,
    /^\/blog\/.+$/,
    /^\/store\/.+$/,
  ];

  if (!token) {
    if (publicRoutes.has(pathname)) return NextResponse.next();

    if (params.get("refer")) {
      return NextResponse.redirect(
        new URL(`/auth/sign-up?refer=${params.get("refer")}`, request.url),
      );
    }

    if (params.get("mainaccount")) {
      return NextResponse.redirect(
        new URL(
          `/auth/sign-up?mainaccount=${params.get("mainaccount")}`,
          request.url,
        ),
      );
    }

    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (publicRoutes.has(pathname)) {
    return NextResponse.redirect(new URL("/guides", request.url));
  }

  const isKnownRoute =
    privateRoutes.includes(pathname) ||
    dynamicRoutePatterns.some((pattern) => pattern.test(pathname));

  if (!isKnownRoute && pathname !== "/not-found") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
