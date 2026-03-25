"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "@/hooks/useAuth";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/reservation", label: "Reservations" },
  { href: "/contact", label: "Contact Us" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isSticky
          ? "bg-[#0a0a0a]/95 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/">
          <Image
            src="/images/Rational.png"
            alt="Ricom Dining Co."
            width={100}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <span className="text-sm text-gray-300">Hi, {user.name}</span>
              <button
                onClick={logout}
                className="rounded-md border border-primary px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signup"
                className="rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="rounded-md border border-primary px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Login
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="text-2xl text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-t border-gray-800 bg-[#0a0a0a]/95 backdrop-blur-sm lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#1a1a2e] ${
                    pathname === link.href ? "text-primary" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex gap-3 border-t border-gray-800 pt-3">
              {user ? (
                <button
                  onClick={logout}
                  className="w-full rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    href="/signup"
                    className="flex-1 rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/login"
                    className="flex-1 rounded-md border border-primary px-4 py-2 text-center text-sm font-medium text-primary"
                  >
                    Login
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
