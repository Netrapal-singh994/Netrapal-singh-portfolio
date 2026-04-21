import Image from "next/image";
import { projects } from "../data/data";
import Link from "next/link";
export default function Projects() {
  return (
    <section className="w-full py-24 px-6  text-white">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A collection of my recent work showcasing design, development, and
            creativity.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-700"
            >
              {/* IMAGE */}
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={400}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4  ">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-sm text-gray-300 mb-3">
                  Web Design / Development
                </p>

                <Link
                  // onClick={() => window.open(project.link, "_blank")}
                  href={project.link}
                  className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-900 transition
                   text-sm border border-gray-600 hover:border-gray-900"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
