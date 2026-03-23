"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function IngredientSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Balanced Editorial Motion
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  
  return (
    <div ref={containerRef} className="editorial-section border-t border-black/5 bg-[#f7f6f3] flex flex-col items-center justify-center p-8 overflow-hidden z-20">
      
      {/* Editorial Space (Rebalanced Scale) */}
      <div className="relative w-full max-w-6xl aspect-square flex flex-col items-center justify-center z-10">
         
         <motion.div 
            style={{ rotate, opacity }}
            className="relative w-full h-full flex items-center justify-center mb-16"
         >
            <img 
              src="/antigravity_assets/pure_croissant.png" 
              alt="Artisinal Bakery"
              className="w-[45%] md:w-[50%] h-auto object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.03)] grayscale-[0.05]"
            />
         </motion.div>

         {/* MASTER EDITORIAL CALLOUTS - ULTRA-MINIMAL ARCHITECTURE */}
         <div className="absolute inset-x-12 md:inset-x-24 inset-y-0 pointer-events-none w-full h-full opacity-30">
            
            {/* Callout A (Upper Corner) */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="absolute top-[38%] right-[2%] md:right-[5%] flex items-center"
             >
              <div className="h-[0.5px] w-48 md:w-64 bg-[#1a1a1a] mr-12" />
              <div className="flex flex-col text-left">
                 <span className="tagline !tracking-[1em] !text-[7px]">Origin 01</span>
                 <span className="tagline !tracking-[0.8em] !text-[6px] !opacity-30 mt-2">Organic Almond Roast</span>
              </div>
            </motion.div>

            {/* Callout B (Lower Corner) */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="absolute bottom-[42%] left-[2%] md:left-[5%] flex items-center flex-row-reverse"
             >
              <div className="h-[0.5px] w-48 md:w-80 bg-[#1a1a1a] ml-12" />
              <div className="flex flex-col text-right">
                 <span className="tagline !tracking-[1em] !text-[7px]">Selection 02</span>
                 <span className="tagline !tracking-[0.8em] !text-[6px] !opacity-30 mt-2">Golden Sourdough Core</span>
              </div>
            </motion.div>

         </div>

         {/* COMPOSITION CTA (CENTER BASELINE) */}
         <div className="absolute bottom-24 flex flex-col items-center">
            <button className="button-editorial">
               <ShoppingCart className="w-3.5 h-3.5" strokeWidth={1} />
               <span>Add To Selection</span>
            </button>
         </div>
         
      </div>

    </div>
  );
}
