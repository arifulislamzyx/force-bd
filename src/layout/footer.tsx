"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {/* Column 1: Logo and Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Force-BD</h2>
          <p className="mb-4 text-sm text-gray-300">
            We provide reliable and professional security services to ensure
            your safety and peace of mind.
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> +880 123 456 789
          </p>
          <p className="text-sm">
            <strong>Email:</strong> info@forcebd.com
          </p>
          <p className="text-sm">
            <strong>Address:</strong> 123/A, Gulshan, Dhaka, Bangladesh
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>👮‍♂️ Security Guard Service</li>
            <li>🎥 CCTV Monitoring</li>
            <li>🚨 Emergency Response</li>
            <li>🛡️ VIP Protection</li>
            <li>🏢 Corporate Security</li>
          </ul>
        </div>

        {/* Column 3: Recent News */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent News</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="border-b border-gray-700 pb-2">
              New training program launched for security staff.
            </li>
            <li className="border-b border-gray-700 pb-2">
              Force-BD signs new contract with XYZ Corp.
            </li>
            <li className="border-b border-gray-700 pb-2">
              Tips for improving home security.
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to get our latest updates and offers.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-gray-800 text-sm text-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-sm rounded transition"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-6 flex gap-4">
            {/* Social Icons using inline SVGs */}
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-white"
              >
                <path d="M18 0h-3a6 6 0 00-6 6v3H6v4h3v10h4V13h3l1-4h-4V6a1 1 0 011-1h3V0z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-white"
              >
                <path d="M20 3.538a8.19 8.19 0 01-2.356.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996A4.107 4.107 0 009.847 7.03a11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.482A4.073 4.073 0 01.8 7.072v.052a4.108 4.108 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.109 4.109 0 003.834 2.85A8.233 8.233 0 010 17.542a11.616 11.616 0 006.29 1.84c7.547 0 11.675-6.155 11.675-11.49 0-.175-.004-.349-.012-.522A8.18 8.18 0 0020 3.538z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-white"
              >
                <path d="M4.98 3.5c0 1.38-1.11 2.5-2.49 2.5S0 4.88 0 3.5 1.11 1 2.49 1 4.98 2.12 4.98 3.5zM.5 6h4v14h-4V6zM6.5 6h3.7v1.8h.1c.5-.9 1.7-1.8 3.4-1.8 3.7 0 4.4 2.4 4.4 5.5V20h-4v-6.5c0-1.6 0-3.7-2.3-3.7s-2.7 1.8-2.7 3.6V20h-4V6z" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>

      <div className="text-center mt-10 text-sm text-gray-500 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Force-BD. All rights reserved. By{" "}
        <Link href={"https://hexnova.com"} className="text-blue-600 font-bold">
          Hexnova
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
