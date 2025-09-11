"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <img
              src="/assets/images/logo/logo.png"
              alt="Logo"
              className="h-10 w-auto"
            /> */}
            <p>Netrapal</p>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="hover:text-red-500 font-medium">
              Home
            </Link>
            <div className="group relative">
              <Link href="/services" className="hover:text-red-500 font-medium">
                Services
              </Link>
              <ul className="absolute left-0 hidden w-48 bg-gray-800 shadow-lg rounded-lg group-hover:block">
                <li>
                  <Link
                    href="/service-list"
                    className="block px-4 py-2 hover:text-red-500"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-details"
                    className="block px-4 py-2 hover:text-red-500"
                  >
                    Service Details
                  </Link>
                </li>
              </ul>
            </div>
            <div className="group relative">
              <Link href="/blog" className="hover:text-red-500 font-medium">
                Blog
              </Link>
              <ul className="absolute left-0 hidden w-56 bg-gray-800 shadow-lg rounded-lg group-hover:block">
                <li>
                  <Link
                    href="/blog-list"
                    className="block px-4 py-2 hover:text-red-500"
                  >
                    Blog List Full Width
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog-list-sidebar-left"
                    className="block px-4 py-2 hover:text-red-500"
                  >
                    Blog List Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog-list-sidebar-right"
                    className="block px-4 py-2 hover:text-red-500"
                  >
                    Blog List Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog-details"
                    className="block px-4 py-2 hover:text-red-500"
                  >
                    Blog Details Full Width
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog-details-sidebar-left"
                    className="block px-4 py-2 hover:text-red-500"
                  >
                    Blog Details Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog-details-sidebar-right"
                    className="block px-4 py-2 hover:text-red-500"
                  >
                    Blog Details Right Sidebar
                  </Link>
                </li>
              </ul>
            </div>
            <div className="group relative">
              <Link href="#" className="hover:text-red-500 font-medium">
                Pages
              </Link>
              <ul className="absolute left-0 hidden w-48 bg-gray-800 shadow-lg rounded-lg group-hover:block">
                <li>
                  <Link
                    href="/about"
                    className="block px-4 py-2 hover:text-red-500"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project-list"
                    className="block px-4 py-2 hover:text-red-500"
                  >
                    Project
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project-details"
                    className="block px-4 py-2 hover:text-red-500"
                  >
                    Project Details
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="block px-4 py-2 hover:text-red-500"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/404"
                    className="block px-4 py-2 hover:text-red-500"
                  >
                    404 Page
                  </Link>
                </li>
              </ul>
            </div>
            <Link href="/contact" className="hover:text-red-500 font-medium">
              Contact
            </Link>
          </nav>

          {/* Hire Me Button (Desktop) */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Hire Me →
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
          <div className="lg:hidden bg-white shadow-md border-t">
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
                <Link
                  href="/contact"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Hire Me →
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
