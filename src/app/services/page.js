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
              Modern, clean, and user-friendly interface designs focused on
              better user experience.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-indigo-500 hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="text-indigo-400 text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-400 text-sm">
              Fast, responsive, and scalable websites using modern technologies
              like React and Next.js.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-indigo-500 hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="text-indigo-400 text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Illustration</h3>
            <p className="text-gray-400 text-sm">
              Creative visuals and graphics that enhance brand identity and user
              engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
