"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Top 5 Benefits of Hiring Professional Security Guards",
    date: "October 18, 2025",
    image: "/images/security-guards.jpg",
    description:
      "Learn how professional security guards can protect your business and create a safe environment for employees and customers.",
  },
  {
    id: 2,
    title: "How CCTV Systems Reduce Crime in Commercial Areas",
    date: "October 10, 2025",
    image: "/images/cctv-security.jpg",
    description:
      "Explore how CCTV surveillance plays a key role in deterring theft, vandalism, and unauthorized access to restricted zones.",
  },
  {
    id: 3,
    title: "Choosing the Right Security Solution for Your Business",
    date: "September 25, 2025",
    image: "/images/security-control.jpg",
    description:
      "Discover the best ways to evaluate your security needs and implement a tailored protection plan that fits your goals.",
  },
  {
    id: 4,
    title: "How Alarm Systems Improve Emergency Response Time",
    date: "August 30, 2025",
    image: "/images/alarm-system.jpg",
    description:
      "Understand how modern alarm systems enhance real-time monitoring and ensure quick response during critical situations.",
  },
];

export default function Blog() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Security Insights & Updates
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Explore expert articles, industry tips, and the latest trends in
          security technology.
        </motion.p>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 mb-10"
        >
          Latest Articles
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition-all"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {blog.date}
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-700 transition">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <a
                  href={`/blog/${blog.id}`}
                  className="inline-block text-blue-700 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Want to Stay Updated?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg mb-8"
        >
          Subscribe to our newsletter for the latest updates and expert advice
          on security.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200"
        >
          Subscribe Now
        </motion.a>
      </section>
    </div>
  );
}
