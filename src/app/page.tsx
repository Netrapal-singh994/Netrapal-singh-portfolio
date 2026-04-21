// app/page.jsx — Lendex Homepage with Tailwind CSS

import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Services from "@/components/services";
import Projects from "@/components/projects";``
import Counter from "@/components/projectcount";
export default function Home() {
  return (
    <main className="text-white bg-gray-900">
      {/* Hero */}
      <Hero/>
      {/* Services */}
      <Services/> 
      {/* Skills */}
           <Skills/>
      {/* Stats */}

      <Counter />
     
      {/* Portfolio */}
        <Projects/>
    </main>
  );
}
