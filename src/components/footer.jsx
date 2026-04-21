import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* LEFT - BRAND */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-3">Netrapal Singh</h2>
          <p className="text-sm leading-relaxed">
            Frontend Developer focused on building modern, responsive and
            user-friendly web applications using React, Next.js and Tailwind.
          </p>
        </div>

        {/* CENTER - QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#home" className="hover:text-indigo-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-indigo-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:text-indigo-400 transition"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-indigo-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT - SOCIAL LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <ul
            className="space-y-2
          "
          >
            <li>
              <Link
                href="https://www.linkedin.com/in/netrapal-singh-a1b300325/"
                target="_blank"
                className="hover:text-indigo-400 transition "
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Netrapal-singh994"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Netrapal Singh. All rights reserved.
      </div>
    </footer>
  );
}
