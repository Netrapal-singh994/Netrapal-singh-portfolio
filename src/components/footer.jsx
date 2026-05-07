import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 ">
        {/* LEFT - LOGO */}
        <div className="flex flex-col  col-span-1 md:col-span-2  mt-[-50px]">
          <Link href="/" className="">
            <img
              src="nslogo.png"
              className="w-[150px] h-auto object-contain"
              alt="logo"
            />
          </Link>

          <p className="text-sm leading-relaxed max-w-xs">
            Frontend Developer building modern, responsive and user-friendly web
            applications using React, Next.js and Tailwind CSS.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col items-start lg:items-center">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-indigo-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-indigo-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-indigo-400 transition"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-indigo-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONNECT */}
        <div className="flex flex-col  lg:items-center">
          <h3 className="text-lg font-semibold text-white mb-4 ">Connect</h3>

          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/netrapal-singh-a1b300325/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-indigo-500 transition"
            >
              <FaLinkedinIn />
            </Link>

            <Link
              href="https://github.com/Netrapal-singh994"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-indigo-500 transition"
            >
              <FaGithub />
            </Link>

            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-indigo-500 transition"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Netrapal Singh. All rights reserved.
      </div>
    </footer>
  );
}
