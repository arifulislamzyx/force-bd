"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    submenu: [
      { name: "Company", href: "/about/company" },
      { name: "Team", href: "/about/team" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Guarding", href: "/services/guarding" },
      { name: "Surveillance", href: "/services/surveillance" },
      { name: "Patrol", href: "/services/patrol" },
    ],
  },
  {
    name: "Blog",
    href: "/blog",
    submenu: [
      { name: "News", href: "/blog/news" },
      { name: "Tips", href: "/blog/tips" },
      { name: "Security Trends", href: "/blog/trends" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

  const toggleDropdown = (name: string) => {
    setActiveMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <nav className="w-full fixed top-0 z-50 bg-white shadow-md px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Force<span className="text-black">BD</span>
          </Link>

          {/* Large Screen Navigation */}
          <div className="hidden lg:flex space-x-6 items-center relative">
            {navItems.map((item) => (
              <div key={item.name} className="group relative">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition flex items-center gap-1"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={16} />}
                </Link>

                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-44 bg-white shadow-lg rounded-md p-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Drawer Trigger */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-700 hover:text-blue-600"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-700 hover:text-blue-600"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col p-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  <div
                    className="flex justify-between items-center cursor-pointer text-gray-800 hover:text-blue-600 font-medium"
                    onClick={() =>
                      item.submenu
                        ? toggleDropdown(item.name)
                        : setIsOpen(false)
                    }
                  >
                    <Link
                      href={item.href}
                      className="flex-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <ChevronDown
                        className={clsx(
                          "ml-2 transition-transform duration-300",
                          activeMobileDropdown === item.name && "rotate-180"
                        )}
                        size={18}
                      />
                    )}
                  </div>

                  {/* Dropdown for mobile */}
                  <AnimatePresence>
                    {item.submenu && activeMobileDropdown === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 mt-2 space-y-1 overflow-hidden"
                      >
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-gray-600 hover:text-blue-600"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
