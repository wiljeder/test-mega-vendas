import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_AUTHORIZED,
  DEFAULT_UNAUTHORIZED,
  PUBLIC_ROUTES,
} from "./lib/routes";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;

  const session = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });

  const isAuthenticated = Boolean(session);
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

  if (isPublicRoute && isAuthenticated)
    return Response.redirect(new URL(DEFAULT_AUTHORIZED, req.url));

  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(DEFAULT_UNAUTHORIZED, req.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
