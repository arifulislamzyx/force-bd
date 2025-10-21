"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Camera,
  Users,
  Bell,
  Building,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: <Camera className="w-10 h-10 text-blue-600" />,
    title: "CCTV Installation",
    description:
      "Professional CCTV setup for homes, offices, and industries to ensure round-the-clock monitoring.",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: "Security Guards",
    description:
      "Trained and licensed security personnel for your business, event, or residential area.",
  },
  {
    icon: <Bell className="w-10 h-10 text-blue-600" />,
    title: "Alarm & Access Control",
    description:
      "Smart alarm systems and digital access solutions to strengthen your property’s safety.",
  },
  {
    icon: <Building className="w-10 h-10 text-blue-600" />,
    title: "Corporate Security",
    description:
      "Comprehensive security management for corporate offices, warehouses, and factories.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    title: "Event Security",
    description:
      "Professional event security ensuring smooth operations and crowd control.",
  },
  {
    icon: <Headphones className="w-10 h-10 text-blue-600" />,
    title: "24/7 Monitoring",
    description:
      "Our control room monitors all sites 24/7, ready to respond in seconds.",
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Professional Security Services You Can Trust
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Your safety is our priority — providing reliable protection and peace
          of mind 24/7.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 mb-10"
        >
          Our Key Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg p-8 rounded-2xl border hover:shadow-2xl transition"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 mb-10"
        >
          Why Choose Our Security Service?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            "24/7 Support and Response",
            "Experienced and Licensed Staff",
            "Advanced Security Technology",
          ].map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-50 border border-blue-100 p-8 rounded-2xl shadow-sm hover:shadow-md"
            >
              <h4 className="text-lg font-semibold text-blue-700">{point}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Secure Your Property?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg mb-8"
        >
          Contact us today and let our experts design a custom security plan for
          you.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200"
        >
          Get in Touch
        </motion.a>
      </section>
    </div>
  );
}
