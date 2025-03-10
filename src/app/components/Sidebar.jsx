"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import React from "react";
import { AdminLink } from "./sidebar/AdminLink";


const Link = [
  {
    id: 1,
    href: "/admin/dashboard",
    icon: <Icon icon="solar:widget-5-bold-duotone" />,
    titre: "Dashboard",
  },
  {
    id: 6,
    href: "/admin/global",
    icon: <Icon icon="solar:box-bold-duotone"/>,
    titre: "Global order",
    // icon-park-twotone:order
  },
  {
    id: 2,
    href: "/admin/produits",
    icon: <Icon icon="solar:t-shirt-bold-duotone" />,
    titre: " Produits",
  },
  // {
  //   id: 3,
  //   href: "/categorie",
  //   icon: <Icon icon="icon-park-twotone:view-list"/>,
  //   titre: "Sous-catégorie",
  // },
  {
    id: 7,
     href: "/admin/sousCategorie",
     icon: <Icon icon="solar:clipboard-list-bold-duotone" />,
     titre: "Categorie",
   },
  {
    id: 4,
    href: "/admin/commission",
    icon: <Icon icon="solar:users-group-two-rounded-bold-duotone" />,
    titre: "Commission",
  },
  {
    id: 5,
    href: "/admin/order",
    icon: <Icon icon="solar:bag-smile-bold-duotone" />,
    titre: "Commande",
  },
 
   
  // {
  //   id: 8,
  //   href: "/roles",
  //   icon: <Icon icon="solar:card-send-bold-duotone" />,
  //   titre: "  Invoices",
  // },
  {
    id: 9,
    href: "/admin/parametre",
    icon: <Icon icon="solar:settings-bold-duotone" />,
    titre: "Parametre",
  },
];

export { Link };
export default function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);


    const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
    };
  
    return (
      <>
        {isSidebarVisible && (
          <aside className="w-full min-h-screen bg-[#252c33]">
            <div className="space-y-10">
              {/* Logo et bouton de masquage */}
              <div className="flex p-7 justify-between">
                <a href="index.html">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={130}
                    height={38}
                    priority
                  />
                </a>
                <button
                  onClick={toggleSidebar}
                  type="button"
                  className="button-sm-hover flex md:hidden"
                  aria-label="Masquer Sidebar"
                >
                  <Icon
                    icon="solar:double-alt-arrow-left-bold-duotone"
                    className="text-3xl text-white"
                  />
                </button>
              </div>
  
              {/* Liens de la sidebar */}
              <div className="overflow-y-auto" data-simplebar>
                <ul className="space-y-1" id="navbar-nav">
                  <li className="px-7 mb-5 text-[#5b626e]">General</li>
  
                  {Link.map((tab) => (
                    <AdminLink
                      key={tab.id}
                      href={tab.href}
                      icon={tab.icon}
                      titre={tab.titre}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        )}
  
        {/* Bouton pour afficher la sidebar si elle est masquée */}
        {!isSidebarVisible && (
          <button
            onClick={toggleSidebar}
            type="button"
            className="fixed top-4 left-4 bg-[#252c33] p-3 rounded-full text-white shadow-lg"
            aria-label="Afficher Sidebar"
          >
            <Icon
              icon="solar:double-alt-arrow-right-bold-duotone"
              className="text-3xl"
            />
          </button>
        )}
      </>
    );
  }
