import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/data";
export default function Blogs() {
  return (
    <section className="w-full py-24 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest Articles
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Insights, tutorials, and updates from my development journey.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:scale-105 hover:border-indigo-500 transition-all duration-300 shadow-lg"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="text-xs text-gray-400 mb-2">{blog.date}</p>

                <h3 className="text-lg font-semibold mb-3">{blog.title}</h3>

                <p className="text-gray-400 text-sm mb-4">{blog.excerpt}</p>

                <Link
                  href="#"
                  className="text-indigo-400 text-sm font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
