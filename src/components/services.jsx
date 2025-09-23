// components/ServicesSection.tsx
import { FaPencilRuler, FaCode, FaBezierCurve } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaPencilRuler size={40} />,
      title: "UI/UX Design",
      items: [
        "Landing Pages",
        "User Flow",
        "Wireframing",
        "Prototyping",
        "Mobile App Design",
      ],
    },
    {
      icon: <FaCode size={40} />,
      title: "Development",
      items: ["HTML/CSS", "JavaScript", "Animation", "WordPress", "React"],
    },
    {
      icon: <FaBezierCurve size={40} />,
      title: "Illustration",
      items: [
        "Character Design",
        "Icon Set",
        "Illustration Guide",
        "Illustration Set",
        "Motion Graphic",
      ],
    },
  ];

  return (
    <section className="bg-[#1A1C2B] text-white py-20 px-6" id="services">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="uppercase tracking-wide text-gray-400 text-sm">
            || My Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Service Provide For My Clients.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#24263A] p-8 rounded-md shadow hover:shadow-lg transition"
            >
              <div className="mb-6 text-white">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-gray-400">»</span> {item}
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
