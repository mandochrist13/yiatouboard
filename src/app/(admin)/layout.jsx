"use client"

import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <section className="h-screen overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar */}
        {isSidebarVisible && (
          <div className={`overflow-y-hidden ${isSidebarVisible ? "w-1/5" : "w-0"}`}>
            <Sidebar toggleSidebar={toggleSidebar} />
          </div>
        )}

        {/* Main Content */}
        <div
          className={`flex overflow-y-auto flex-col transition-all duration-300 w-full`}
        >
          <div className={`fixed ${isSidebarVisible ? "md:w-4/5" : "w-full"}`}>
            <Nav />
          </div>
          <div className="mt-[100px]">{children}</div>
        </div>
      </div>
    </section>
  );
}
