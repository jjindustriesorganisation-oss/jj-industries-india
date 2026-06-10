"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoImg from "@/../public/images/logo.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: pathname === "/" ? "#" : "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Industries", href: pathname === "/" ? "#industries" : "/#industries" },
    { name: "Contact", href: pathname === "/" ? "#contact" : "/#contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href) && href !== "#" && href !== "/#industries" && href !== "/#contact";
  };

  return (
    <>
      <header className="bg-surface-light dark:bg-surface-dark shadow-md sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between md:grid md:grid-cols-3 items-center py-4">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2 group">
                <Image
                  src={logoImg}
                  alt="JJ Industries Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain group-hover:scale-105 transition-transform rounded"
                  placeholder="blur"
                />
                <span className="font-display font-bold text-xl text-primary-dark dark:text-primary tracking-wide">
                  JJ INDUSTRIES
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 justify-self-center">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-medium transition duration-200 pb-1 ${
                      active
                        ? "text-primary border-b-2 border-primary"
                        : "text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block"></div>

            {/* Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="text-text-light dark:text-text-dark hover:text-primary focus:outline-none transition p-1"
                aria-label="Open menu"
              >
                <span className="material-icons text-3xl">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern mobile navigation popup drawer overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop blur overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer container with slide-in look */}
          <div className="relative w-4/5 max-w-sm bg-surface-light dark:bg-surface-dark h-full shadow-2xl p-6 flex flex-col justify-between z-10 border-l border-gray-200 dark:border-gray-800 transition-transform duration-300">
            <div>
              {/* Close Button */}
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center space-x-2">
                  <Image
                    src={logoImg}
                    alt="JJ Industries Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain rounded"
                    placeholder="blur"
                  />
                  <span className="font-display font-bold text-lg text-primary-dark dark:text-primary tracking-wide">
                    JJ INDUSTRIES
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-text-light dark:text-text-dark hover:text-primary focus:outline-none transition p-1"
                  aria-label="Close menu"
                >
                  <span className="material-icons text-3xl">close</span>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`text-2xl font-display font-semibold transition ${
                        active
                          ? "text-primary pl-2 border-l-4 border-primary"
                          : "text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom CTA in Drawer */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <Link
                href={pathname === "/" ? "#contact" : "/#contact"}
                onClick={handleLinkClick}
                className="w-full text-center bg-primary text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition shadow-md block text-lg"
              >
                Get a Quote
              </Link>
              <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
                © {new Date().getFullYear()} JJ Industries
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
