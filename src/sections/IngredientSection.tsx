"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function IngredientSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  return (
    <section ref={containerRef} className="relative w-full bg-[#f7f6f3] flex flex-col items-center justify-center p-8 md:p-32 border-t border-black/5 z-20 min-h-[70vh] md:min-h-0">
      
      {/* 3. PASTRY / DETAIL SECTION (HARD RECOVERY - VISIBLE RENDERING) */}
      <div className="relative w-full max-w-5xl flex flex-col items-center justify-center z-10">
         
         <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full h-full flex items-center justify-center mb-24 md:mb-32"
         >
            {/* MANDATORY: The ACTUAL EXACT pastry image (Visibly Renders only) */}
            <img 
              src="/assets/pastry-callout-exact.png" 
              alt="Exact Pastry Detail Production"
              width={650}
              height={650}
              className="w-[65%] md:w-[75%] h-auto object-contain block opacity-100 grayscale-[0.05]"
            />
         </motion.div>

         {/* LABELLING CALLOUTS (Slide-In Concept faithfully followed) */}
         <div className="absolute inset-0 pointer-events-none w-full h-full z-20">
            
            {/* Callout 1: Almond (Following PDF Slide-in Note) */}
            <motion.div 
              initial={{ x: 60, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 60, opacity: 0 }}
              transition={{ delay: 1, duration: 1.2 }}
              className="absolute top-[32%] right-[5%] md:right-[15%] flex items-center"
             >
              <div className="h-[0.5px] w-24 md:w-64 bg-[#1a1a1a] mr-8" />
              <span className="text-[10px] uppercase font-sans font-bold tracking-[0.4em] text-black opacity-30">Almond</span>
            </motion.div>

            {/* Callout 2: Crust (Following PDF Slide-in Note) */}
            <motion.div 
              initial={{ x: -60, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
              transition={{ delay: 1.2, duration: 1.2 }}
              className="absolute top-[50%] left-[2%] md:left-[10%] flex items-center flex-row-reverse"
             >
              <div className="h-[0.5px] w-32 md:w-72 bg-[#1a1a1a] ml-8" />
              <span className="text-[10px] uppercase font-sans font-bold tracking-[0.4em] text-black opacity-30">Crust</span>
            </motion.div>

            {/* Callout 3: Powdered Sugar (Following PDF Slide-in Note) */}
            <motion.div 
              initial={{ x: 60, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 60, opacity: 0 }}
              transition={{ delay: 1.4, duration: 1.2 }}
              className="absolute bottom-[28%] right-[8%] md:right-[20%] flex items-center"
             >
              <div className="h-[0.5px] w-24 md:w-56 bg-[#1a1a1a] mr-8" />
              <span className="text-[10px] uppercase font-sans font-bold tracking-[0.4em] text-black opacity-30">Powdered Sugar</span>
            </motion.div>

         </div>

         {/* Selection CTA (Grounded & Centered) */}
         <div className="absolute bottom-12 flex flex-col items-center">
            <span className="mb-8 text-[9px] uppercase font-bold text-black/15 tracking-[1em] italic">Artisinal Craftsmanship</span>
            <button className="button-editorial !px-12 !py-4 bg-transparent border border-black/15 text-black hover:bg-black hover:text-white uppercase font-bold tracking-[0.2em] shadow-xl">
               <span>Add to Selection</span>
            </button>
         </div>
         
      </div>

    </section>
  );
}
