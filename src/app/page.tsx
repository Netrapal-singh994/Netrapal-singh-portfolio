// app/page.jsx — Lendex Homepage with Tailwind CSS

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white bg-gray-900">
      {/* Hero */}
      <section className="py-20 bg-gray-900 text-center">
        <h1 className="text-4xl font-bold">Hello! I’m</h1>
        <h2 className="text-5xl font-extrabold mt-2">Mirta Akins</h2>
        <p className="mt-4 text-xl text-gray-600">UI/UX Designer specializing in Shopify & Webflow.</p>
        <div className="mt-6 space-x-4">
          <Link href="#" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Get Resume
          </Link>
          <a href="https://youtu.be/" target="_blank" rel="noopener noreferrer"
             className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
            Watch Video
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8">My Services</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-[200px] items-center">
          {/* UI/UX Design */}
          <div className="space-y-4 bg-gray-700 py-3">
            <Image src="/assets/images/service-icon1.png" alt="UI/UX Design" width={80} height={80} className="mx-auto" />
            <h4 className="text-xl font-bold">UI/UX Design</h4>
            <ul className="text-gray-100">
              <li>Landing Pages</li>
              <li>User Flow</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Mobile App Design</li>
            </ul>
          </div>
          {/* Development */}
          <div className="space-y-4 bg-gray-700 py-3">
            <Image src="/assets/images/service-icon2.png" alt="Development" width={80} height={80} className="mx-auto" />
            <h4 className="text-xl font-bold">Development</h4>
            <ul className="text-gray-100">
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Animation</li>
              <li>WordPress</li>
              <li>React</li>
            </ul>
          </div>
          {/* Illustration */}
          {/* <div className="space-y-4 bg-gray-700 py-3">
            <Image src="/assets/images/service-icon3.png" alt="Illustration" width={80} height={80} className="mx-auto" />
            <h4 className="text-xl font-bold">Illustration</h4>
            <ul className="text-gray-100">
              <li>Character Design</li>
              <li>Icon Set</li>
              <li>Illustration Guide</li>
              <li>Illustration Set</li>
              <li>Motion Graphic</li>
            </ul>
          </div> */}
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gray-900 container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8">Special Skills</h3>
        <div className="max-w-lg mx-auto space-y-6">
          {[
            { name: "Communication", pct: 75 },
            { name: "Leadership", pct: 70 },
            { name: "Teamwork", pct: 90 },
            { name: "Flexibility", pct: 80 },
          ].map(skill => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.pct}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: `${skill.pct}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 container mx-auto text-center">
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
      <section className="py-16 bg-gray-900 container mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-10">Awesome Portfolio</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder project items */}
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="bg-gray-700 rounded-lg shadow overflow-hidden">
              <Image src={`/assets/images/portfolio-${i}.jpg`} alt={`Project ${i}`} width={400} height={300} className="w-full" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
