"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="text-gray-800">
      {/* Header Section */}
      <div className="relative h-60 md:h-80 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-white text-4xl md:text-6xl font-bold"
        >
          Contact Us
        </motion.h1>
      </div>

      {/* Contact Section */}
      <div className="relative bg-white py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-100 rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4 text-gray-600">
              Have any questions? We&apos;d love to hear from you. Reach out to
              us through any of the channels below.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Phone:</strong> +880 1234-567890
              </li>
              <li>
                <strong>Email:</strong> info@force-bd.com
              </li>
              <li>
                <strong>Address:</strong> House #12, Road #5, Dhaka, Bangladesh
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Background Shape */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-2xl opacity-20 -z-10" />
      </div>

      {/* Map Section */}
      <div className="w-full h-96 mt-10">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.465233906628!2d90.4125189154316!3d23.80130499245706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f945dce5f3%3A0x88a4c8e9eeb71560!2sDhaka!5e0!3m2!1sen!2sbd!4v1623789314779!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
}
