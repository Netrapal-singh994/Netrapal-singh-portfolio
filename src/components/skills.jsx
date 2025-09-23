// components/SkillsSection.tsx
export default function Skills() {
  const skills = [
    { name: "Communication", level: 75 },
    { name: "Leadership", level: 70 },
    { name: "Teamwork", level: 90 },
    { name: "Flexibility", level: 80 },
  ];

  return (
    <section className="bg-[#1A1C2B] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="uppercase tracking-wide text-gray-400 text-sm">
            || Special Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            My Special Skill <br /> Field Here.
          </h2>

          <a
            href="#"
            className="inline-block mt-6 px-8 py-3 rounded-full bg-[#24263A] hover:bg-[#2F3147] transition"
          >
            Get Resume ⬇
          </a>
        </div>

        {/* Right Content - Skills Progress */}
        <div className="space-y-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-[#24263A] p-6 rounded-md shadow-sm space-y-3"
            >
              <div className="flex justify-between text-gray-300 text-sm">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 h-1.5 rounded-full">
                <div
                  className="bg-white h-1.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
