"use client";

import React from "react";
import { motion } from "framer-motion";

export default function UmbrellaSection() {
  return (
    <section className="relative w-full bg-[#f7f6f3] flex flex-col items-center justify-center py-24 md:py-32 border-t border-black/5 z-20 overflow-hidden">
      
      {/* 5. FINAL UMBRELLA SECTION (HARD RECOVERY - VISIBLE RENDERING) */}
      <div className="relative w-full max-w-7xl flex flex-col items-center justify-center px-8 md:px-0">
        
        {/* THE FINAL DESIGN OBJECT (STRICT ASSET PRESENTATION) */}
        <div className="relative flex flex-col items-center justify-center">
           
           {/* MANDATORY: UMBRELLA-EXACT.PNG (STRICTLY STATIC, VISIBLY RENDERED) */}
           <motion.img 
             src="/assets/umbrella-exact.png" 
             alt="Final Production Branded Asset" 
             width={700}
             height={700}
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             className="w-64 h-64 md:w-[750px] md:h-[750px] object-contain opacity-100 block z-10"
           />

           {/* Brand Narrative Signature (Elite Final Branded Moment) */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 1.2 }}
             className="text-center max-w-2xl px-8 mt-16 md:mt-24 z-20"
           >
             <h2 className="text-4xl md:text-7xl font-serif font-medium text-[#1a1a1a] mb-12 tracking-[-0.04em] leading-[0.8]">
                CRAFTING<br />COVERAGE
             </h2>
             <span className="tagline !opacity-20 !tracking-[1.2em] !text-[9px] uppercase">
                Artisanal Resilience & Roast Ethics / Archive.26
             </span>
           </motion.div>
        </div>

      </div>

      {/* FINAL EDITORIAL BASELINE (STRICT CLOSURE) */}
      <div className="absolute bottom-12 w-full text-center px-12 border-t border-[#1a1a1a]/5 pt-8 opacity-40">
         <span className="text-[10px] uppercase tracking-[1.8em] font-bold text-black/10 italic">Brewing For Perfection Without Competing With It</span>
      </div>

    </section>
  );
}
