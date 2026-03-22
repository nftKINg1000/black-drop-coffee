"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import HeroVideo from "@/components/HeroVideo";

export default function HeroSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Balanced cinematic easing for the video alignment
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 1.15, 1]);
  const yOffset = useTransform(scrollYProgress, [0.7, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  return (
    <div ref={containerRef} className="scrolly-section bg-white h-[300vh]">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        
        {/* CINEMATIC VIDEO BACKDROP - CRYSTAL CLEAR & IMMEDIATE */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
           className="absolute inset-0 z-0 mask-scrolly"
        >
          <motion.div 
            style={{ scale, y: yOffset }}
            className="w-full h-full p-0 md:p-12"
          >
            <HeroVideo />
          </motion.div>
        </motion.div>

        {/* Hero Title (Bold Cinematic Typography) */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, -120]), opacity }}
          className="absolute text-center z-10 pointer-events-none w-full px-6"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "1.5rem" }}
            animate={{ opacity: 1, letterSpacing: "1em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[8px] sm:text-[10px] tracking-[1em] uppercase block mb-4 md:mb-8 text-white font-semibold drop-shadow-md"
          >
            Specialty Coffee
          </motion.span>
          
          <h2 
            style={{ WebkitTextStroke: "1px rgba(0,0,0,0.15)" }}
            className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter flex flex-wrap justify-center overflow-hidden text-white drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          >
            {t("heroSubtitle").split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.1 + i * 0.08, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="inline-block mr-[0.2em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="w-16 md:w-24 h-px bg-white/60 mx-auto mt-8 md:mt-16 shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
