"use client";

import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 max-w-7xl w-full">
        {/* Left Content */}
        <div className="text-white space-y-6 text-center lg:text-left order-2 lg:order-1">
          <h1 className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl">
            Hello! I’m <br />
            <span className="text-white">Netrapal Singh</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Turning ideas into interactive, high-performance web experiences
            with modern frontend technologies.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button
              className="
                px-6 py-3
                rounded-full
                bg-gray-900
                hover:bg-gray-800
                transition
                flex items-center gap-2
                border border-gray-600
                font-medium
                text-sm sm:text-base
              "
            >
              Get Resume <span className="text-lg">⬇</span>
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          {/* Profile Image */}
          <img
            src="/neta.jpeg"
            alt="Netrapal Singh"
            className="
              relative z-10
              object-cover
              rounded-full
              border border-gray-600

              w-[220px] h-[220px]
              sm:w-[280px] sm:h-[280px]
              md:w-[340px] md:h-[340px]
              lg:w-[420px] lg:h-[420px]
            "
          />

          {/* Outer Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
                relative
                rounded-full
                border border-gray-500

                w-[270px] h-[270px]
                sm:w-[340px] sm:h-[340px]
                md:w-[410px] md:h-[410px]
                lg:w-[500px] lg:h-[500px]
              "
            >
              {/* Github */}
              <Link
                href="https://github.com/Netrapal-singh994"
                target="_blank"
                className="
                  absolute
                  top-0 left-1/2
                  -translate-x-1/2 -translate-y-1/2

                  w-10 h-10 sm:w-12 sm:h-12
                  rounded-full
                  border border-gray-500
                  bg-gray-900
                  flex items-center justify-center
                  hover:bg-gray-800
                  transition
                "
              >
                <FaGithub className="text-white text-sm sm:text-lg" />
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/netrapalsinghbasendra/"
                target="_blank"
                className="
                  absolute
                  right-0 top-1/2
                  translate-x-1/2 -translate-y-1/2

                  w-10 h-10 sm:w-12 sm:h-12
                  rounded-full
                  border border-gray-500
                  bg-gray-900
                  flex items-center justify-center
                  hover:bg-gray-800
                  transition
                "
              >
                <FaInstagram className="text-white text-sm sm:text-lg" />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/netrapal-singh-a1b300325/"
                target="_blank"
                className="
                  absolute
                  bottom-4 right-8
                  sm:bottom-6 sm:right-12
                  md:bottom-8 md:right-16

                  w-10 h-10 sm:w-12 sm:h-12
                  rounded-full
                  border border-gray-500
                  bg-gray-900
                  flex items-center justify-center
                  hover:bg-gray-800
                  transition
                "
              >
                <FaLinkedinIn className="text-white text-sm sm:text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
