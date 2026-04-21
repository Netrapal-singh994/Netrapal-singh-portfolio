"use client";
import { useEffect, useRef, useState } from "react";

// 🔵 Circular Skill Component
function CircleSkill({ name, level, start }) {
  const radius = 40;
  const stroke = 6;
  const normalized = radius - stroke * 2;
  const circumference = normalized * 2 * Math.PI;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= level) {
        current = level;
        clearInterval(interval);
      }
      setProgress(current);
    }, 15);

    return () => clearInterval(interval);
  }, [start, level]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg height={100} width={100}>
        {/* Background */}
        <circle
          stroke="#374151"
          fill="transparent"
          strokeWidth={stroke}
          r={normalized}
          cx="50"
          cy="50"
        />

        {/* Progress */}
        <circle
          stroke="url(#grad)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={normalized}
          cx="50"
          cy="50"
        />

        {/* Gradient */}
        <defs>
          <linearGradient id="grad">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {/* Percentage Text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-white text-sm font-semibold"
        >
          {progress}%
        </text>
      </svg>

      <p className="mt-3 text-sm text-gray-300">{name}</p>
    </div>
  );
}

// 🔥 Main Skills Section
export default function Skills() {
  const skills = [
    { name: "Communication", level: 75 },
    { name: "Leadership", level: 70 },
    { name: "Teamwork", level: 90 },
    { name: "Flexibility", level: 80 },
  ];

  const ref = useRef(null);
  const [start, setStart] = useState(false);

  // 👇 Scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">My Expertise</h2>
        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {skills.map((skill, i) => (
            <CircleSkill
              key={i}
              name={skill.name}
              level={skill.level}
              start={start}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
