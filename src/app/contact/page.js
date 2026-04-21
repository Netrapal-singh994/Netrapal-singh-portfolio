export default function Contact() {
  return (
    <section className="w-full min-h-screen bg-gray-900 flex items-center justify-center px-6">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Contact Me
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
