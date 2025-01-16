'use client';


import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from 'react';


export function AdminLink({ href, icon, titre }) {
    const pathname = usePathname();

    // Normalise les chemins en supprimant les barres obliques finales pour une comparaison cohérente
    const normalizedPathname = pathname === '/' ? pathname : pathname.replace(/\/+$/, '');
    const normalizedHref = href === '/' ? href : href.replace(/\/+$/, '');

    // Vérifie si le lien est actif pour la page racine ou une sous-page
    const isActive =
        (normalizedHref === '/' && normalizedPathname === '/') || // Active uniquement pour la page d'accueil
        (normalizedHref !== '/' && (normalizedPathname === normalizedHref || normalizedPathname.startsWith(`${normalizedHref}/`)));

    return (
        <li className={`${isActive ? ' border-l-4 !border-[#D5711C]' : ' text-[#5b626e] hover:text-white'} px-7 py-2 `}>
        <a
          className={`flex items-center justify-center lg:justify-normal ${isActive ? '!text-[#D5711C]' : ' text-[#5b626e] hover:text-white'}  gap-4 `}
          href={href}
        >
          <span className={`text-3xl lg:text-2xl ${isActive ? '!text-[#D5711C]' : ' text-[#5b626e] hover:text-white'} transition-colors duration-300`}>
            {icon}
          </span>
          <span className={`hidden lg:flex transition-colors ${isActive ? '!text-[#fff]' : ' text-[#5b626e] hover:text-white'}  duration-300`}>
            {titre}
          </span>
        </a>
      </li>
    );
}