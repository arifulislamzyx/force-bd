"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import about from "../../../public/assets/who_we_are.png";
import member from "../../../public/assets/ceo_rana.jpg";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-28 text-gray-900">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-blue-600"
        >
          About Force-BD
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base sm:text-lg leading-relaxed text-gray-700"
        >
          We are committed to delivering reliable and professional security
          services tailored to your needs, backed by years of experience and a
          dedicated team.
        </motion.p>
      </section>

      {/* Who We Are */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-4">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Force-BD is a leading security service provider in Bangladesh.
            Founded in 2010, we specialize in guarding, surveillance, VIP
            protection, and event security. Our dedicated professionals ensure
            safety and peace of mind for individuals and businesses alike.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            We leverage cutting-edge technology and rigorous training to deliver
            unmatched security solutions customized for each client.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={about}
            alt="Force-BD Security Team"
            className="rounded-lg shadow-lg w-full h-60 sm:h-72 md:h-80 object-cover"
            placeholder="blur"
            priority
          />
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="text-center space-y-8 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl font-bold text-blue-600"
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-gray-700">
          {[
            {
              title: "Integrity",
              desc: "We uphold honesty and transparency in all our actions, building trust with our clients.",
            },
            {
              title: "Professionalism",
              desc: "Our team is highly trained and committed to delivering top-quality security services.",
            },
            {
              title: "Innovation",
              desc: "We embrace modern technology to enhance our security solutions and adapt to evolving threats.",
            },
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.7 }}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="text-center px-4 max-w-5xl mx-auto space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl font-bold text-blue-600"
        >
          What We Offer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-sm sm:text-base text-gray-700"
        >
          From corporate guarding and event security to surveillance and VIP
          protection, Force-BD offers comprehensive security services designed
          for every client’s unique needs.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-gray-700">
          {[
            "Corporate Security",
            "Event Protection",
            "CCTV Monitoring",
            "VIP Protection",
            "Mobile Patrolling",
            "Emergency Response",
          ].map((service) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 rounded-lg p-5 shadow text-sm sm:text-base"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto text-center px-4 py-16 bg-blue-50 rounded-lg shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl font-bold mb-8 text-blue-700"
        >
          Why Choose Force-BD?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-800">
          {[
            { count: "10+", label: "Years of Experience" },
            { count: "1000+", label: "Satisfied Clients" },
            { count: "500+", label: "Trained Security Professionals" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.7 }}
              className="bg-white rounded-lg p-6 shadow"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-2">
                {item.count}
              </p>
              <p className="text-sm sm:text-base">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Members */}
      {/* Team Members */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition"
              >
                <Image
                  src={member}
                  alt={`Team Member ${index}`}
                  className="w-full h-52 rounded-full object-cover mb-4 b-2"
                  placeholder="blur"
                />
                <h4 className="font-bold text-base">Member Name {index}</h4>
                <p className="text-sm text-gray-500">Position</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
