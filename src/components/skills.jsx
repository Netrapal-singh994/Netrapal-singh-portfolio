// components/Skills.jsx
export default function Skills() {
  const skills = [
    { name: "Communication", percent: 75 },
    { name: "Leadership", percent: 70 },
    { name: "Teamwork", percent: 90 },
    { name: "Flexibility", percent: 80 },
  ];

  return (
    <section className="bg-gray-800 text-white py-16 ">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          My Special Skill Field Here.
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ name, percent }) => (
            <div key={name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{name}</span>
                <span className="font-medium">{percent}%</span>
              </div>
              <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-500 h-full rounded-full transition-width duration-500 ease-in-out"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
