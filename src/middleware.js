import { NextResponse } from "next/server";

export async function middleware(request) {
  const authToken = request.cookies.get("authToken");
  const { pathname } = request.nextUrl;

  console.log('token :', authToken)

  // Si l'utilisateur n'est pas authentifié et essaie d'accéder au tableau de bord
  if (!authToken && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Si l'utilisateur est authentifié et essaie d'accéder à la page de connexion
  if (authToken && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/"],
};