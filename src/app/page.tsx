"use client"; 
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Services from "@/components/services";
import Projects from "@/components/projects";``

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
      {/* Portfolio */}
        <Projects/>
    </main>
  );
}
