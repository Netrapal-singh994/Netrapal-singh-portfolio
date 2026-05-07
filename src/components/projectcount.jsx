"use client";
import { useEffect, useRef, useState } from "react";

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  // 👇 Detect scroll (Intersection Observer)
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

  // 👇 Count animation
  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;

      const value = Math.min(Math.floor((progress / duration) * end), end);

      setCount(value);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}+</span>;
}

export default function StatsSection() {
  return (
    <section className="w-full py-20 bg-gray-900 text-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        <div>
          <h2 className="text-5xl font-extrabold text-white">
            <Counter end={3} />
          </h2>
          <p className="text-gray-400 mt-2">Happy Clients</p>
        </div>

        <div>
          <h2 className="text-5xl font-extrabold text-white">
            <Counter end={3} />
          </h2>
          <p className="text-gray-400 mt-2">Project Complete</p>
        </div>

        <div>
          <h2 className="text-5xl font-extrabold text-white">
            <Counter end={1} />
          </h2>
          <p className="text-gray-400 mt-2">Years of Experience</p>
        </div>
      </div>
    </section>
  );
}
