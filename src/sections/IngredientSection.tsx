"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function IngredientSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const customEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const slideInVariants = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.9, 
        ease: customEasing,
        delay: custom * 0.15
      }
    })
  };

  return (
    <section ref={containerRef} className="relative w-full h-[100vh] bg-white flex items-center justify-center overflow-hidden snap-start shrink-0">
      
      <div className="relative w-full h-full max-w-[1200px] flex items-center justify-center pointer-events-none">
         
         {/* THE PASTRY IMAGE */}
         <motion.div 
            custom={0}
            variants={slideInVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative w-[80%] md:w-[60%] lg:w-[45%] h-auto max-h-[80vh] flex items-center justify-center"
         >
            <img 
              src="/assets/pastry-callout-exact.png" 
              alt="Pastry Callout Overlay with Fibonacci Spiral"
              className="w-full object-contain pointer-events-none drop-shadow-none"
            />

            {/* CALLOUTS (Positioned absolutely over the pastry wrapper) */}
            
            {/* Almond - Top Right */}
            <motion.div 
              custom={1}
              variants={slideInVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute top-[16%] left-[68%] flex items-center z-20 pointer-events-none whitespace-nowrap"
            >
               <div className="w-[4px] h-[4px] bg-black rounded-full" />
               <div className="h-[1px] bg-black w-[80px] md:w-[120px]" />
               <span className="ml-3 text-[12px] md:text-[14px] font-sans text-black">Almond</span>
            </motion.div>

            {/* Crust - Mid Left */}
            <motion.div 
              custom={2}
              variants={slideInVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute top-[48%] right-[85%] flex items-center flex-row-reverse z-20 pointer-events-none whitespace-nowrap"
            >
               <div className="w-[4px] h-[4px] bg-black rounded-full" />
               <div className="h-[1px] bg-black w-[100px] md:w-[150px]" />
               <span className="mr-3 text-[12px] md:text-[14px] font-sans text-black">Crust</span>
            </motion.div>

            {/* Powdered Sugar - Bottom Right */}
            <motion.div 
              custom={3}
              variants={slideInVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute top-[78%] left-[80%] flex items-center z-20 pointer-events-none whitespace-nowrap"
            >
               <div className="w-[4px] h-[4px] bg-black rounded-full" />
               <div className="h-[1px] bg-black w-[60px] md:w-[100px]" />
               <span className="ml-3 text-[12px] md:text-[14px] font-sans text-black">Powdered Sugar</span>
            </motion.div>

         </motion.div>

      </div>

    </section>
  );
}
