"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ModelWrapper from "@/components/ModelWrapper";

export default function IngredientSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-white flex flex-col items-center justify-center p-8 overflow-hidden">
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        
        {/* Title Section (Dynamic Reveal) */}
        <motion.div 
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[12px] tracking-[0.6em] uppercase block mb-4 opacity-40">Detail & Origin</span>
          <h2 className="text-7xl font-black italic tracking-tighter">{t("ingredientsTitle")}</h2>
        </motion.div>

        {/* Main Pastry Visual (Huge Scale) */}
        <ModelWrapper className="relative w-full max-w-7xl aspect-square flex items-center justify-center">
          <motion.div 
             style={{ rotate, scale }}
             className="relative w-full h-full flex items-center justify-center group preserve-3d"
          >
             <img 
               src="/antigravity_assets/ingredients.png" 
               alt="Pastry Spiral"
               className="w-[85%] h-[85%] object-contain drop-shadow-[0_60px_120px_rgba(0,0,0,0.25)] pointer-events-none"
             />
             
             {/* Fibonacci Spiral Overlay Layer - More Precise */}
             <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none opacity-10 group-hover:opacity-40 transition-opacity duration-1000">
                <path d="M 50 50 m -0.5 0 a 0.5 0.5 0 1 0 1 0 a 0.5 0.5 0 1 0 -1 0 M 50 50 C 52 48 55 48 58 50 C 65 55 60 65 52 68 C 35 72 25 55 30 35 C 40 10 75 15 85 45 C 100 85 40 110 5 75" fill="none" stroke="black" strokeWidth="0.15" />
             </svg>
          </motion.div>
        </ModelWrapper>

        {/* Floating Ingredient Markers */}
        <div className="absolute inset-0 pointer-events-none">
           {/* Crust Label */}
           <motion.div 
             animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
             transition={{ delay: 0.2 }}
             className="absolute top-[20%] left-[15%] flex flex-col items-start"
            >
             <div className="w-3 h-3 rounded-full bg-black mb-2" />
             <div className="h-px w-32 bg-black/10 origin-left" />
             <span className="text-[12px] font-bold tracking-widest mt-3 uppercase italic">{t("crust")}</span>
           </motion.div>

           {/* Almond Label */}
           <motion.div 
             animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
             transition={{ delay: 0.4 }}
             className="absolute top-[35%] right-[10%] flex flex-col items-end text-right"
            >
             <div className="w-3 h-3 rounded-full bg-black mb-2" />
             <div className="h-px w-48 bg-black/10 origin-right" />
             <span className="text-[12px] font-bold tracking-widest mt-3 uppercase italic">{t("almond")}</span>
           </motion.div>

           {/* Sugar Label */}
           <motion.div 
             animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
             transition={{ delay: 0.6 }}
             className="absolute bottom-[20%] right-[25%] flex flex-col items-center"
            >
             <div className="w-3 h-3 rounded-full bg-black mb-2" />
             <div className="w-px h-24 bg-black/10" />
             <span className="text-[12px] font-bold tracking-widest mt-3 uppercase italic">{t("sugar")}</span>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
