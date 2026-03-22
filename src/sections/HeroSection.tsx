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
  const blur = useTransform(scrollYProgress, [0, 0.15], ["blur(30px)", "blur(0px)"]);

  return (
    <div ref={containerRef} className="scrolly-section bg-white h-[300vh]">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        
        {/* CINEMATIC VIDEO BACKDROP - Smoother Slide-In */}
        <motion.div 
           initial={{ opacity: 0, y: 150 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
           style={{ blur }}
           className="absolute inset-0 z-0 mask-scrolly"
        >
          <motion.div 
            style={{ scale, y: yOffset }}
            className="w-full h-full p-4 md:p-12"
          >
            <HeroVideo />
          </motion.div>
        </motion.div>

        {/* Hero Title (Cinematic Reveal Over Video) */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, -120]), opacity }}
          className="absolute text-center z-10 pointer-events-none mix-blend-difference"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "1.5rem" }}
            animate={{ opacity: 0.8, letterSpacing: "1em" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-[10px] tracking-[1em] uppercase block mb-8 px-4 text-white"
          >
            Specialty Coffee
          </motion.span>
          <h2 className="text-7xl font-bold tracking-tighter sm:text-9xl px-4 flex flex-wrap justify-center overflow-hidden text-white drop-shadow-2xl">
            {t("heroSubtitle").split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 200, rotate: 15 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ 
                  duration: 1.4, 
                  delay: 0.2 + i * 0.1, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="inline-block mr-[0.2em] last:mr-0 origin-bottom-left"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="w-24 h-px bg-white/40 mx-auto mt-16"
          />
        </motion.div>
      </div>
    </div>
  );
}
