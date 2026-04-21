// app/page.tsx (Next.js 13+ App Router)
// or pages/index.tsx (Next.js 12/Pages Router)

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaDribbble } from "react-icons/fa";

export default function Hero() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
        {/* Left Side Content */}
        <div className="text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Hello! I’m <br />
            <span className="text-6xl md:text-7xl">Netrapal Singh</span>
          </h1>
          <p className="text-gray-400 text-lg">
            UI/UX Designer specializing in Shopify & Webflow.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="px-6 py-3 rounded-full bg-gray-900 hover:bg-gray-800 transition flex items-center gap-2 border border-gray-600 font-medium"
            >
              Get Resume <span className="text-lg">⬇</span>
            </Link>
            {/* <button className="flex items-center gap-3 text-gray-300 hover:text-white transition">
              <div className="w-14 h-14 flex items-center justify-center rounded-full border-4 border-gray-500">
                <div className="w-4 h-4 border-l-8 border-transparent border-l-white" />
              </div>
              <span>Watch Video</span>
            </button> */}
          </div>
        </div>

        {/* Right Side - Image with Social Icons */}
        <div className="relative flex justify-center">
          <Image
            src="/images1.jpg"
            alt="Mirta Akins"
            width={350}
            height={400}
            className="relative z-10 w-[400px] h-[380px] rounded-full border border-gray-600 object-cover mr-28 mt-8"
          />

          {/* Social Links Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] rounded-full border border-gray-600 relative">
              {/* Facebook */}
              <Link
                href="#"
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700"
              >
                <FaFacebookF />
              </Link>
              {/* Dribbble */}
              <Link
                href="#"
                className="absolute  right-[-25px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700"
              >
                <FaDribbble />
              </Link>
              {/* LinkedIn */}
              <Link
                href="#"
                className="absolute  right-[13px] top-[320px] -translate-x-1/2 w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="#"
                className="absolute right-[22px] top-1/6 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
