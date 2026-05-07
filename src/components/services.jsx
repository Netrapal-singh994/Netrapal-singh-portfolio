"use client";
import { FaPencilRuler, FaCode, FaBezierCurve } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaPencilRuler size={40} />,
      title: "UI/UX Design",
      items: [
        "Landing Pages",
        "User Flow",
        "Dashboard UI",
        "Animation basics",
        "Typography basics",
      ],
    },
    {
      icon: <FaCode size={40} />,
      title: "Development",
      items: [
        "HTML/CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "SCSS",
      ],
    },
    {
      icon: <FaBezierCurve size={40} />,
      title: "library",
      items: [
        "Redux Toolkit",
        "React query(TanStack)",
        "Framer Motion",
        "Zustand",
        "Mantaine",
      ],
    },
  ];

  return (
    <section className="w-full py-24 px-6  text-white" id="services">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Service Provide For My Clients
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            I deliver high-quality design and development solutions that help
            businesses grow and stand out in the digital world.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:scale-105 hover:border-indigo-500 transition-all duration-300 shadow-lg"
            >
              {/* ICON */}
              <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

              {/* LIST */}
              <ul className="space-y-2 text-gray-300 text-sm">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 group-hover:translate-x-1 transition"
                  >
                    <span className="text-indigo-400">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
