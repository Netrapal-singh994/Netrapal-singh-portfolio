"use client";
import { useState } from "react";
import { faqs } from "../../data/data";
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-4">
            Find answers to common questions about my services and process.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden transition"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium">{faq.question}</span>

                <span className="text-indigo-400 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`px-5 transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
