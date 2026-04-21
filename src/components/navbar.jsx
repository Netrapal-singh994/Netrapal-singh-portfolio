"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full  sticky top-0 z-50 bg-gray-900 shadow-md text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-4 h-[90px]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <img
              src="/assets/images/logo/logo.png"
              alt="Logo"
              className="h-10 w-auto"
            /> */}
            <p>
              <img src="nslogo.png" className="w-[200px] h-auto" />
            </p>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              href="/"
              className="hover:text-indigo-400 transition font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-indigo-400 transition font-medium"
            >
              Services
            </Link>
            <Link
              href="/blogs"
              className="hover:text-indigo-400 transition font-medium"
            >
              Blog
            </Link>
            {/* <Link href="#" className="hover:text-indigo-400 transition font-medium">
              Pages
            </Link> */}
            <Link
              href="/faq"
              className="hover:text-indigo-400 transition font-medium"
            >
              FAQ
            </Link>
            {/* <Link href="/404" className="hover:text-indigo-400 transition font-medium">
              404 Page
            </Link> */}
          </nav>

          {/* Hire Me Button (Desktop) */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-gray-900 text-white hover:text-indigo-400 px-5 py-2 rounded-lg hover:bg-gray-800 
               transition border border-gray-600 font-medium "
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md border border-gray-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-gray-800 shadow-md border-t w-full">
            <ul className="flex flex-col space-y-4 py-4 px-6">
              <li>
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => setMobileOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={() => setMobileOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setMobileOpen(false)}>
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                {/* <Link
                  href="/contact"
                  className="bg-[#1A1C2B] text-white px-5 py-2 rounded-lg hover:bg-[#24263A] transition border border-gray-600 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link> */}
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
