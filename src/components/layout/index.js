// components/Layout.js
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Layout({ children }) {
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle the sidebar visibility on mobile
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - Visible on larger screens and toggleable on smaller screens */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block w-64 bg-blue-600 text-white flex flex-col transition-all duration-300`}
      >
        <div className="px-4 py-4 font-bold text-2xl">Sidebar</div>
        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className={`block px-4 py-2 rounded-lg ${
                  router.pathname === "/" ? "bg-blue-800" : "hover:bg-blue-700"
                }`}
              >
                Daftar Anggota
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className={`block px-4 py-2 rounded-lg ${
                  router.pathname === "/users"
                    ? "bg-blue-800"
                    : "hover:bg-blue-700"
                }`}
              >
                API User
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="lg:hidden p-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
        </div>
        {children}
      </main>
    </div>
  );
}
