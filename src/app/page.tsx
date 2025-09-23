// app/page.jsx — Lendex Homepage with Tailwind CSS

import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Services from "@/components/services";
import Projects from "@/components/projects";``

export default function Home() {
  return (
    <main className="text-white bg-[#1A1C2B]">
      {/* Hero */}
      <Hero/>
      {/* Services */}
      <Services/> 
      {/* Skills */}
           <Skills/>
      {/* Stats */}
      <section className="py-16 container mx-auto text-center  bg-[#1A1C2B]">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <span className="text-5xl font-extrabold">2,58+</span>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <span className="text-5xl font-extrabold">590 K</span>
            <p className="text-gray-600">Project Complete</p>
          </div>
          <div>
            <span className="text-5xl font-extrabold">28+</span>
            <p className="text-gray-600">Years of Experience</p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
        <Projects/>
    </main>
  );
}
