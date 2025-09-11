export default function Services() {
  return (
    <section className="container mx-auto py-20 px-6 text-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-12">Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 shadow-lg rounded-lg bg-gray-800 hover:bg-gray-700 transition">
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-300">Modern and user-friendly interfaces.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-gray-800 hover:bg-gray-700 transition">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-300">Fast, secure, and scalable websites.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-gray-800 hover:bg-gray-700 transition">
          <h3 className="text-xl font-semibold mb-2">Illustration</h3>
          <p className="text-gray-300">
            Creative graphics for digital products.
          </p>
        </div>
      </div>
    </section>
  );
}
