"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isNotificationMenuOpen, setNotificationMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Gestion du menu mobile

  const pathname = usePathname();

  // Map des chemins vers les textes correspondants
  const pathTextMap = {
    "/": "Bienvenue",
    "/global": "Global Order",
    "/produits": "Produits",
    "/sousCategorie": "Catégorie",
    "/commission": "Commission",
    "/order": "Commande",
    "/parametre": "Parametre",
  };

  const defaultText = "Bienvenue";
  const textToDisplay = pathTextMap[pathname] || defaultText;

  return (
    <div className="container-fluid bg-[#f7f9fa] sticky top-0 w-full z-[9999]">
      {/* Navbar Header */}
      <div className="flex justify-between  w-full sticky top-0 z-[9999] items-center px-10 py-6  transition-all duration-300 ease-in-out">
        {/* Left Section */}
        <div className="flex items-center">
          <h4 className="text-lg font-semibold text-[#707894] uppercase transition-colors duration-700 hover:text-orange-600">
          {textToDisplay}
          </h4>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Toggle Button for Mobile Menu */}
          <button
            className="block lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <Icon icon="bx:menu" className="text-xl" width="20" height="20" />
          </button>

          {/* Notification Menu */}
          <NotificationMenu
            isOpen={isNotificationMenuOpen}
            toggleMenu={() => setNotificationMenuOpen(!isNotificationMenuOpen)}
          />

          {/* Settings Button */}
          <a
            href="/parametre"
            className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            aria-label="Settings"
          >
            <Icon
              icon="solar:settings-bold-duotone"
              className="text-xl text-[#707894] align-middle w-6 h-6 transition-transform duration-300 hover:scale-150 hover:rotate-180"
            />
          </a>

          {/* Clock Button */}
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            aria-label="Clock"
          >
            <Icon
              icon="solar:clock-circle-bold-duotone"
              className="text-xl text-[#707894] align-middle transition-transform duration-300 hover:scale-150"
            />
          </button>

          {/* User Dropdown */}
          <UserDropdown
            isOpen={isUserMenuOpen}
            toggleMenu={() => setUserMenuOpen(!isUserMenuOpen)}
          />

          {/* Search Form */}
          <SearchForm />
        </div>
      </div>

      {/* Mobile Menu (hidden by default, visible when state is true) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-white shadow-lg p-4 space-y-4">
          <NotificationMenu
            isOpen={isNotificationMenuOpen}
            toggleMenu={() => setNotificationMenuOpen(!isNotificationMenuOpen)}
          />
          <a
            href="/parametre"
            className="p-2 text-gray-800 hover:text-orange-600"
            aria-label="Settings"
          >
            <Icon icon="solar:settings-bold-duotone" className="text-xl" />
          </a>
          <button
            type="button"
            className="p-2 text-gray-800 hover:text-orange-600"
            aria-label="Clock"
          >
            <Icon icon="solar:clock-circle-bold-duotone" className="text-xl" />
          </button>
          <UserDropdown
            isOpen={isUserMenuOpen}
            toggleMenu={() => setUserMenuOpen(!isUserMenuOpen)}
          />
          <SearchForm />
        </div>
      )}
    </div>
  );
}

/* Subcomponents */

// Notification Menu
function NotificationMenu({ isOpen, toggleMenu }) {
  return (
    <div className="relative">
      <button
        type="button"
        className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Icon
          icon="solar:bell-bing-bold-duotone"
          className="text-xl text-[#707894] align-middle hover:scale-105"
        />
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          3
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-3 space-y-2 max-h-72 overflow-y-auto transition-all duration-300">
          <div className="flex justify-between items-center">
            <h6 className="text-lg text-black font-semibold">Notifications</h6>
            <button className="text-gray-500 text-sm">Clear All</button>
          </div>
          {[1, 2].map((_, idx) => (
            <div
              key={idx}
              className="flex items-center py-3 border-b hover:bg-gray-50 transition-all duration-300"
            >
              <Image
                layout="fill"
                src="/assets/images/users/avatar-3.jpg"
                className="w-8 h-8 rounded-full"
                alt="avatar"
              />
              <div>
                <p className="text-black font-medium">Jacob Gines</p>
                <p className="text-sm text-gray-600">
                  A répondu à votre commentaire.
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// User Dropdown
function UserDropdown({ isOpen, toggleMenu }) {
  const { logout } = useUser();
  const router = useRouter();

  const handleLogout = ()=> {
    logout()
    router.push('/')
  }

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center space-x-2"
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Image
          width={100}
          height={100}
          src="/avatar-1.jpg"
          className="w-8 h-8 rounded-full hover:scale-105"
          alt="avatar"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 space-y-2 transition-all duration-300">
          <h6 className="text-gray-600 text-sm">Bienvenue Gaston!</h6>
          <a
            href="pages-profile.html"
            className="flex items-center gap-4 text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            <Icon icon="bx:user-circle" width="20" height="20" />
            Profile
          </a>
          <a
            href="apps-chat.html"
            className="flex items-center gap-4 text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            <Icon icon="bx:message-dots" width="20" height="20" />
            Messages
          </a>
        
          <button onClick={() => handleLogout()} className="flex items-center gap-4 text-red-600 hover:text-red-700 transition-colors duration-300"
          ><Icon icon="bx:log-out " width="20" height="20" />
          Déconnexion</button>
        </div>
      )}
    </div>
  );
}

// Search Form
function SearchForm() {
  return (
    <form className=" flex items-center">
      <button
        type="submit"
        className="flex rounded-l-lg bg-[#ebe8e8] p-2 items-center text-gray-500 "
        aria-label="Search"
      >
        <Icon icon="hugeicons:search-02" width="24" height="24" className="" />
      </button><input
        type="search"
        className="py-2 w-full outline-none text-[#000] rounded-r-lg bg-[#ebe8e8] transition-all duration-300"
        placeholder="Rechercher..."
        autoComplete="off"
      />
      
    </form>
  );
}
