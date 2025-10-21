"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Bell, Cpu } from "lucide-react";

export default function Surveillancing() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Surveillance & Monitoring Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-lg md:text-xl"
        >
          Advanced CCTV and surveillance systems providing real-time protection
          and peace of mind.
        </motion.p>
      </section>

      <section className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/surveillance.jpg"
            alt="Surveillance Service"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Smart Security Systems
          </h2>
          <p className="text-gray-600 mb-6">
            Our advanced surveillance systems combine high-definition CCTV,
            motion detection, and real-time alerts to protect your property.
          </p>

          <div className="space-y-4">
            {[
              { icon: <Camera />, text: "HD CCTV Installation" },
              { icon: <Bell />, text: "Real-time Alerts & Notifications" },
              { icon: <Cpu />, text: "Smart AI-based Monitoring" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-gray-700"
              >
                <div className="text-blue-700">{item.icon}</div>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-blue-900 text-white text-center py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Upgrade Your Security Surveillance Today
        </motion.h2>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200"
        >
          Get a Quote
        </motion.a>
      </section>
    </div>
  );
}
