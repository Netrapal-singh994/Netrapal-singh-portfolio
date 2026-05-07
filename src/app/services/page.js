export default function Services() {
  return (
    <section className="w-full min-h-screen bg-gray-900 px-6 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I provide high-quality design and development services to build
            modern and user-friendly digital experiences.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="group p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-indigo-500 hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="text-indigo-400 text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-400 text-sm">
              Experienced in crafting intuitive user experiences through landing
              pages, dashboard interfaces, and structured user flows, with
              strong fundamentals in typography and interaction design.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-indigo-500 hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="text-indigo-400 text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-400 text-sm">
              Experienced in building modern, responsive, and scalable web
              applications using HTML, CSS, JavaScript, React.js, Next.js,
              Tailwind CSS, and Bootstrap, with a focus on performance and clean
              UI.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-indigo-500 hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="text-indigo-400 text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Libraries</h3>
            <p className="text-gray-400 text-sm">
              Proficient in modern React libraries like Redux Toolkit, React
              Query (TanStack), Framer Motion, GSAP, Zustand, and Mantine to
              build scalable, high-performance, and visually engaging web
              applications with efficient state management and smooth
              animations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
