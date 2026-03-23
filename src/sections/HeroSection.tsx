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

  // PROFESSIONAL CAMPAIGN MOTION: IMMERSIVE BUT OPEN
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-[#f7f6f3] z-20">
      
      {/* FINAL CAMPAIGN VIEWPORT (STICKY) */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* REFINED SIDE SLABS (NARROWER & INTEGRATED) */}
        <div className="absolute inset-y-0 left-0 w-[12vw] bg-[#000000] z-10 hidden lg:block" />
        <div className="absolute inset-y-0 right-0 w-[12vw] bg-[#000000] z-10 hidden lg:block" />

        {/* DOMINANT CENTRAL VISUAL (CUP) */}
        <motion.div 
           style={{ scale, opacity }}
           className="relative w-full h-full flex items-center justify-center z-0 px-8"
        >
          {/* Centered High-Authority Render */}
          <div className="w-[90vw] h-[90vh] flex items-center justify-center">
             <HeroVideo />
          </div>
        </motion.div>

        {/* RECOMPOSED EDITORIAL OVERLAY (NO COLLISION) */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none text-center px-8"
        >
          {/* Main Solid Serif Heading (Lower Baseline for Non-Intersection) */}
          <div className="mt-auto mb-[15vh]">
             <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="text-[clamp(2.5rem,15vw,10.5rem)] font-serif font-medium leading-[0.85] tracking-[-0.04em] text-[#1a1a1a] drop-shadow-sm px-12 md:px-24"
             >
                {t("heroSubtitle").toUpperCase()}
             </motion.h1>
             
             {/* Supporting Bilinguality (Balanced Baseline) */}
             <div className="flex justify-center items-center gap-16 mt-16 opacity-30">
                <span className="tagline !text-[9px] tracking-[0.7em]">Brewing Crafts</span>
                <div className="w-12 h-[0.5px] bg-[#1a1a1a]" />
                <span className="tagline !text-[9px] tracking-[0.7em]">بلاك دروب المختصة</span>
             </div>
          </div>
        </motion.div>

        {/* SECTION METADATA ARCHITECTURE */}
        <div className="absolute bottom-12 right-[15vw] hidden lg:block">
           <span className="label-meta tracking-[1em] !text-[7px] opacity-10 uppercase">Signature.001 / Edition.2026</span>
        </div>

      </div>
    </section>
  );
}
