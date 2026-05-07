import Image from "next/image";

export default function About() {
  return (
    <section className="w-full min-h-screen bg-gray-900 flex items-center px-6 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT - IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px]">
            {/* Glow Ring (optional premium effect) */}
            <div className="absolute inset-0 rounded-full bg-indigo-500 blur-2xl opacity-20"></div>

            {/* Image */}
            <Image
              src="/neta.jpeg"
              alt="Netrapal Singh"
              fill
              className="rounded-full object-cover border-4 border-gray-700 relative z-10"
            />
          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I’m a passionate Frontend Developer and UI/UX Designer with a strong
            focus on building modern, responsive, and high-performance web
            applications. I specialize in React, Next.js, and Tailwind CSS,
            creating seamless user experiences with clean and intuitive
            interfaces.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I enjoy turning ideas into real-world digital products that are both
            visually appealing and highly functional. With a keen eye for design
            and a developer mindset, I aim to deliver scalable solutions that
            enhance user engagement and performance. phone - 9785932291
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind",
              "Bootstrap",
              "Redux toolkit",
              "React Query",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-indigo-600/20 text-indigo-400 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
