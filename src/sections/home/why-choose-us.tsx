// app/home/whychooseus/page.tsx
"use client";
import { motion } from "framer-motion";

const reasons = [
  "Client-focused & result-driven approach",
  "Experienced & passionate team",
  "Transparent communication & updates",
  "100% responsive across all devices",
  "Affordable packages with high ROI",
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Why Choose Force-BD?
      </motion.h2>
      <ul className="grid md:grid-cols-2 gap-6 text-lg">
        {reasons.map((reason, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-100 p-6 rounded-xl shadow"
          >
            ✅ {reason}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
