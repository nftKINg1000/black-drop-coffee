"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function IngredientSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  return (
    <div ref={containerRef} className="relative min-h-screen bg-white flex flex-col items-center justify-center p-8 overflow-hidden">
      
      {/* Precise Golden Ratio Grid Placeholder Layer (as in Screenshot) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none z-0">
          <div className="relative w-[400px] md:w-[600px] aspect-[1/1.6] border border-black/10">
              {/* Golden Ratio Rectangles Mockup */}
              <div className="absolute inset-0 border-r border-black/10 w-[61.8%]" />
              <div className="absolute top-0 right-0 h-[38.2%] w-[38.2%] border-b border-black/10" />
              {/* The Spiral Path */}
              <svg viewBox="0 0 100 161.8" className="absolute inset-0 w-full h-full stroke-black/20 fill-none stroke-[0.3]">
                 <path d="M 0 161.8 A 161.8 161.8 0 0 1 161.8 0" transform="scale(0.618)" />
                 <path d="M 100 61.8 A 61.8 61.8 0 0 0 38.2 0" />
              </svg>
          </div>
      </div>

      {/* Main Ingredient Visual (Croissant Exact Centered) */}
      <div className="relative w-full max-w-5xl aspect-square flex items-center justify-center z-10">
         
         <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-full flex items-center justify-center"
         >
            <img 
              src="/antigravity_assets/ingredients.png" 
              alt="Golden Ratio Croissant"
              className="w-[75%] h-[75%] object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.1)] pointer-events-none"
            />
         </motion.div>

         {/* Precise Ingredient Markers & Lines - Screenshot Exact Pos */}
         <div className="absolute inset-0 pointer-events-none w-full h-full">
            
            {/* Almond (Top Right) */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-[32%] right-[5%] md:right-[12%] flex items-center"
             >
              <div className="w-1.5 h-1.5 rounded-full border border-black mr-2" />
              <div className="h-px w-24 md:w-32 bg-black/30 mr-4" />
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase opacity-70">Almond</span>
            </motion.div>

            {/* Crust (Center Left) */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-[52%] left-[5%] md:left-[10%] flex items-center flex-row-reverse"
             >
              <div className="w-1.5 h-1.5 rounded-full border border-black ml-2" />
              <div className="h-px w-24 md:w-48 bg-black/30 ml-4" />
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase opacity-70">Crust</span>
            </motion.div>

            {/* Powdered Sugar (Bottom Right) */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-[28%] right-[8%] md:right-[18%] flex items-center"
             >
              <div className="w-1.5 h-1.5 rounded-full border border-black mr-2" />
              <div className="h-px w-24 md:w-32 bg-black/30 mr-4" />
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase opacity-70">Powdered Sugar</span>
            </motion.div>

         </div>
      </div>

    </div>
  );
}
