export default function About() {
  return (
    <section className="w-full min-h-screen bg-gray-900 flex items-center px-6 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT - IMAGE */}
        <div className="w-full">
          <img
            src="/images1.jpg" // apni image yaha daalna
            alt="About"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I’m a passionate UI/UX Designer and Frontend Developer with
            experience in building modern, responsive, and user-friendly
            websites. I specialize in Webflow, Shopify, and React-based
            applications that focus on performance and seamless user experience.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Over the years, I have helped multiple clients transform their ideas
            into high-quality digital products. My goal is to create designs
            that are not only visually appealing but also highly functional.
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3 mt-4">
            {["React", "Next.js", "Tailwind", "Webflow", "Shopify"].map(
              (skill, i) => (
                <span
                  key={i}
                  className="bg-indigo-600/20 text-indigo-400 px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
