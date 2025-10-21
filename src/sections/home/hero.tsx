"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image, { StaticImageData } from "next/image";
import img1 from "../../../public/assets/force-bd-img1.png";
import img2 from "../../../public/assets/force-bd-img2.png";
import img3 from "../../../public/assets/force-bd-img3.jpg";
import { KeenSliderInstance } from "keen-slider";

const images: StaticImageData[] = [img1, img2, img3];

const texts = [
  {
    title: "Welcome to Force-BD",
    subtitle: "Professional Security & Smart Safety Solutions",
  },
  {
    title: "Your Safety, Our Priority",
    subtitle: "Trusted guarding and surveillance across the nation",
  },
  {
    title: "Securing the Future Together",
    subtitle: "Modern patrol, monitoring & rapid response",
  },
];

// Autoplay plugin for Keen Slider
function autoplay(ms = 2000) {
  return (slider: KeenSliderInstance) => {
    let timer: number | null = null;

    const clear = () => {
      if (timer !== null) {
        window.clearInterval(timer);
        timer = null;
      }
    };

    const start = () => {
      clear();
      timer = window.setInterval(() => {
        // only advance if slider exists
        if (!slider) return;
        slider.next();
      }, ms);
    };

    // start when created
    slider.on("created", () => {
      start();
      // pause/resume on mouse
      if (slider.container) {
        slider.container.addEventListener("mouseover", clear);
        slider.container.addEventListener("mouseleave", start);
      }
    });

    // pause while dragging, resume when animation ends
    slider.on("dragStarted", clear);
    slider.on("animationEnded", start);
    slider.on("updated", start);

    // cleanup
    slider.on("destroyed", () => {
      clear();
      if (slider.container) {
        slider.container.removeEventListener("mouseover", clear);
        slider.container.removeEventListener("mouseleave", start);
      }
    });
  };
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [autoplay(2000)] // <-- autoplay plugin here (ms = 4000)
  );

  return (
    <div
      ref={sliderRef}
      className="keen-slider relative h-[80vh] w-full overflow-hidden"
    >
      {images.map((src, i) => (
        <div key={i} className="keen-slider__slide relative">
          <Image
            src={src}
            alt={`Slide ${i}`}
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
      ))}

      {/* Animated Text Overlay (kept centered) */}
      <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white px-4 max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
              {texts[currentSlide].title}
            </h1>
            <p className="mt-4 text-lg md:text-2xl drop-shadow-md">
              {texts[currentSlide].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
