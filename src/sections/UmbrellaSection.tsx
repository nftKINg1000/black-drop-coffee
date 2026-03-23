"use client";

import React from "react";
import { motion } from "framer-motion";

export default function UmbrellaSection() {
  return (
    <section className="relative min-h-[90vh] bg-[#f7f6f3] flex flex-col items-center justify-center py-24 md:py-32 border-t border-black/5 z-20 overflow-hidden">
      
      {/* FINAL CINEMATIC VISUAL (VIBRANT & INTEGRATED) */}
      <div className="relative w-full max-w-7xl flex flex-col items-center justify-center px-8 md:px-0">
        
        {/* THE FINAL DESIGN OBJECT (FULL INTENTIONALITY) */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="relative flex flex-col items-center justify-center"
        >
           {/* Detailed Coffee Bean Umbrella (Linear Smooth Rotation) */}
           <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
              className="relative mb-24 md:mb-32 flex items-center justify-center"
           >
              {/* FIXED OPACITY: Fully intentional visual, no longer ghosted or faded */}
              <img 
                src="/antigravity_assets/umbrella.png" 
                alt="Crafted Coffee Umbrella Sculpture" 
                className="w-48 h-48 md:w-[500px] md:h-[500px] object-contain opacity-100 grayscale-[0.02] drop-shadow-2xl transition-grayscale duration-[2000ms]"
              />
              
              {/* Clinical Architectural Frame (Centered Integration vs Tilted Board) */}
              <div className="absolute inset-0 w-[110%] h-[110%] rounded-full border border-black/[0.03] -translate-x-[5%] -translate-y-[5%]" />
           </motion.div>

           {/* Brand Narrative Signature (Elite Closing) */}
           <div className="text-center max-w-2xl px-8">
             <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#1a1a1a] mb-12 tracking-[-0.03em] leading-tight">
               Crafting Coverage
             </h2>
             <span className="tagline !opacity-20 !tracking-[1.2em] !text-[8px] uppercase">
                Artisanal Resilience & Roast Ethics / Archive.2026
             </span>
           </div>
        </motion.div>

      </div>

      {/* FINAL EDITORIAL BASELINE (STRICT CLOSURE) */}
      <div className="absolute bottom-16 w-full text-center px-12 border-t border-[#1a1a1a]/5 pt-12 opacity-30">
         <span className="text-[10px] uppercase tracking-[1.5em] font-bold text-black/10 italic">Brewing For Perfection Without Competing With It</span>
      </div>

    </section>
  );
}
