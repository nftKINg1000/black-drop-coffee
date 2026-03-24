"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LucideCalendar, LucideClock, LucideArrowRight } from "lucide-react";

export default function CateringSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  // Ethiopia Border Path (Artist-Level Geometry for Drawing)
  const ethiopiaPath = "M62.5,12.5c-4.2-2.1-12.5-4.2-16.7-4.2c-4.2,0-8.3,4.2-8.3,8.3c0,4.2,4.2,8.3,8.3,12.5c2.1,2.1,4.2,4.2,4.2,8.3c0,4.2-2.1,8.3-4.2,12.5 c-2.1,4.2-4.2,8.3-4.2,12.5c0,4.2,4.2,8.3,8.3,12.5c4.2,4.2,8.3,4.2,12.5,4.2c4.2,0,8.3-4.2,12.5-8.3c4.2-4.2,4.2-8.3,4.2-12.5 c0-4.2-2.1-8.3-4.2-12.5c-2.1-4.2-4.2-8.3-4.2-12.5C70.8,20.8,66.7,14.6,62.5,12.5z";

  return (
    <section ref={containerRef} className="relative w-full bg-[#f7f6f3] flex flex-col items-center justify-center py-24 md:py-32 border-t border-[#1a1a1a]/5 z-20 overflow-hidden">
      
      {/* 4. CATERING / BOOKING SECTION (HARD RECOVERY - DISTINCT LAYOUT) */}
      <div className="w-full max-w-7xl px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32 items-center">
        
        {/* LEFT COLUMN: SERVICE INTRO & BOOKING UI (STRICT HIERARCHY) */}
        <div className="space-y-16 md:space-y-20 order-2 md:order-1 pt-12">
           
           {/* Section Framing */}
           <div className="space-y-8">
              <span className="tagline !tracking-[0.8em] !text-[10px]">Flagship Events</span>
              <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight leading-[0.85] text-[#1a1a1a]">
                 Bespoke<br />Catering
              </h2>
           </div>

           {/* BOOKING FLOW (DATE & TIME INTERACTION - MOCK) */}
           <div className="space-y-12">
              
              {/* Date Selection Row */}
              <div className="space-y-6">
                 <div className="flex items-center gap-4 text-[9px] uppercase font-bold tracking-[0.4em] text-black/20">
                    <LucideCalendar className="w-3.5 h-3.5" />
                    <span>Select Service Date</span>
                 </div>
                 <div className="grid grid-cols-7 gap-4 py-4 border-y border-[#1a1a1a]/10 opacity-30">
                    {[18, 19, 20, 21, 22, 23, 24].map((d) => (
                       <div key={d} className="w-full aspect-square flex items-center justify-center text-[10px] font-sans font-bold hover:bg-black hover:text-white transition-all cursor-pointer rounded-full">{d}</div>
                    ))}
                 </div>
              </div>

              {/* Time Selection Row */}
              <div className="space-y-6">
                 <div className="flex items-center gap-4 text-[9px] uppercase font-bold tracking-[0.4em] text-black/20">
                    <LucideClock className="w-3.5 h-3.5" />
                    <span>Select Time Slot</span>
                 </div>
                 <div className="flex gap-4 py-4 overflow-x-auto opacity-30">
                    {["09:00", "12:00", "15:00", "18:00"].map((t) => (
                       <div key={t} className="px-8 py-3 border border-[#1a1a1a]/15 rounded-full text-[10px] font-sans font-bold whitespace-nowrap cursor-pointer hover:bg-black hover:text-white transition-all">{t}</div>
                    ))}
                 </div>
              </div>

           </div>

           {/* Master Service CTA (Consistent & Elegant) */}
           <div className="pt-8 flex items-center gap-8">
              <button className="flex items-center gap-6 bg-[#1a1a1a] text-white px-12 py-5 rounded-full text-[12px] font-sans font-bold tracking-[0.3em] uppercase hover:bg-black transition-all shadow-2xl active:scale-95">
                 <span>Inquire Selection</span>
                 <LucideArrowRight className="w-4 h-4" />
              </button>
           </div>
        </div>

        {/* RIGHT COLUMN: ETHIOPIA BORDER DRAW-IN (STRICT ANIMATION) */}
        <div className="relative flex items-center justify-center order-1 md:order-2 h-full min-h-[40vh]">
           
           {/* SVG DRAW-IN ANIMATION (MANDATORY REQUIREMENT) */}
           <svg 
              viewBox="0 0 100 100" 
              className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
           >
              <motion.path 
                d={ethiopiaPath}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="0.5"
              />
           </svg>

           {/* CATERING VISUAL RECOVERY (STABLE FILE ATHE) */}
           <motion.div 
             initial={{ opacity: 0, x: 40 }}
             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             className="relative z-10 w-full max-w-[400px]"
           >
              {/* USING THE BAG AS SERVICE VISUAL IN THE ABSENCE OF UNIQUE ASSET */}
              <img 
                src="/assets/coffee-bag-exact.png" 
                alt="Boutique Catering Service Presence" 
                width={400}
                height={550}
                className="w-full h-auto object-contain block opacity-100 grayscale-[0.05]"
              />
              
              {/* Architecture Clinical Mark */}
              <div className="absolute top-0 right-0 border border-[#1a1a1a]/15 p-6 opacity-30">
                 <span className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase">Archive / S.001</span>
              </div>
           </motion.div>

        </div>

      </div>

    </section>
  );
}
