export default function Contact() {
  return (
    <section className="container mx-auto py-20 px-6 text-center bg-gray-900">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-3 rounded h-32"
        />
        <button className="bg-indigo-600 text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
