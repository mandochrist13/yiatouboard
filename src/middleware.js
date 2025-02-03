// middleware.js
import { NextResponse } from 'next/server';
import { Auth } from '@/lib/firebase';

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Vérifiez si l'utilisateur est authentifié
  const user = Auth.currentUser;

  // Si l'utilisateur n'est pas authentifié et essaie d'accéder au tableau de bord
  if (!user && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Si l'utilisateur est authentifié et essaie d'accéder à la page de connexion
  if (user && pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Sinon, laissez passer la requête
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/'],
};