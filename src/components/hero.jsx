// components/Hero.js
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white">
      <p className="mb-4 text-lg">Hello! I’m</p>
      <h1 className="text-5xl font-bold mb-6">Mirta Akins</h1>
      <p className="mb-8 max-w-xl">
        UI/UX Designer specializing in Shopify & Webflow.
      </p>
      <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg mb-10">
        Get Resume
      </button>
      {/* Replace with Next.js <Image> or embed media */}
    </section>
  );
}
