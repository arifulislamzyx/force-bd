"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import cops from "../../../public/assets/services/company_security.png";
import eves from "../../../public/assets/services/event_security.png";
import cctv from "../../../public/assets/services/cctv_Installation.png";
import secg from "../../../public/assets/services/security_guards.png";
import alarm from "../../../public/assets/services/alarm_access_control.png";
import monitor from "../../../public/assets/services/24:7_monitoring.png";

const services = [
  { title: "Corporate Security", img: cops },
  { title: "Event Security", img: eves },
  { title: "CCTV Installation", img: cctv },
  { title: "Security Guards", img: secg },
  { title: "Alarm & Access Control", img: alarm },
  { title: "24/7 Monitoring", img: monitor },
];

export default function ServicesSection() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    renderMode: "performance",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  // Optional: you can access the instance like this
  useEffect(() => {
    if (instanceRef.current) {
      console.log("✅ Keen Slider ready:", instanceRef.current);
    }
  }, [instanceRef]);

  return (
    <div className="py-16 px-4 md:px-12 bg-gray-50">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
      >
        Our Services
      </motion.h2>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider py-5">
        {services.map((service, i) => (
          <div
            key={i}
            className="keen-slider__slide bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all"
          >
            <motion.div whileHover={{ scale: 1.03 }}>
              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional {service.title.toLowerCase()} services designed
                  to ensure safety, reliability, and 24/7 protection.
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
