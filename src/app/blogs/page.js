export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "How to Build a Scalable Web App",
      date: "August 28, 2025",
      excerpt:
        "Learn the key strategies for building web applications that scale efficiently and handle heavy traffic.",
      image: "/images/blog1.jpg",
    },
    {
      id: 2,
      title: "UI/UX Design Principles for 2025",
      date: "September 5, 2025",
      excerpt:
        "A modern approach to designing user-friendly and engaging interfaces with accessibility in mind.",
      image: "/images/blog2.jpg",
    },
    {
      id: 3,
      title: "Next.js 14 Features You Should Know",
      date: "September 10, 2025",
      excerpt:
        "Explore the latest improvements in Next.js and how they can help boost performance and productivity.",
      image: "/images/blog3.jpg",
    },
  ];

  return (
    <section className="container mx-auto py-20 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12">Latest Blogs</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <p className="text-sm text-gray-500">{blog.date}</p>
              <h3 className="text-xl font-semibold mt-2 mb-3">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <a href="#" className="text-red-500 font-medium hover:underline">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
