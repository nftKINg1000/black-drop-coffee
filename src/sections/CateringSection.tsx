"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { LucideCalendar, LucideClock, LucideArrowRight } from "lucide-react";

export default function CateringSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Ethiopia Border Path (Artist-Level Geometry for Drawing)
  const ethiopiaPath = "M62.5,12.5c-4.2-2.1-12.5-4.2-16.7-4.2c-4.2,0-8.3,4.2-8.3,8.3c0,4.2,4.2,8.3,8.3,12.5c2.1,2.1,4.2,4.2,4.2,8.3c0,4.2-2.1,8.3-4.2,12.5 c-2.1,4.2-4.2,8.3-4.2,12.5c0,4.2,4.2,8.3,8.3,12.5c4.2,4.2,8.3,4.2,12.5,4.2c4.2,0,8.3-4.2,12.5-8.3c4.2-4.2,4.2-8.3,4.2-12.5 c0-4.2-2.1-8.3-4.2-12.5c-2.1-4.2-4.2-8.3-4.2-12.5C70.8,20.8,66.7,14.6,62.5,12.5z";

  return (
    <section ref={containerRef} className="relative w-full min-h-[100vh] bg-white text-black flex flex-col md:flex-row items-center justify-center overflow-hidden snap-start shrink-0 p-8 md:p-16 gap-16 md:gap-32">
      
      {/* LEFT COLUMN: SERVICE INTRO & BOOKING UI */}
      <div className="flex-1 space-y-16 w-full max-w-lg mt-24 md:mt-0">
          
         {/* Title area matching minimalist style */}
         <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-widest font-sans font-bold opacity-50">Flagship Events</span>
            <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight leading-none text-black">
               Bespoke<br />Catering
            </h2>
         </div>

         {/* BOOKING FLOW */}
         <div className="space-y-12 w-full">
            
            {/* Date Selection Row */}
            <div className="space-y-6">
               <div className="flex items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-black/50">
                  <LucideCalendar className="w-3 h-3" />
                  <span>Select Date</span>
               </div>
               <div className="grid grid-cols-7 gap-2 md:gap-4 py-4 border-b border-black/10">
                  {[18, 19, 20, 21, 22, 23, 24].map((d) => (
                     <button 
                        key={d} 
                        onClick={() => setSelectedDate(d)}
                        className={`w-full aspect-square flex items-center justify-center text-[11px] font-sans font-bold transition-all rounded-full ${
                          selectedDate === d ? "border border-black" : "hover:border border-transparent text-black/40 hover:text-black"
                        }`}
                     >
                       {d}
                     </button>
                  ))}
               </div>
            </div>

            {/* Time Selection Row */}
            <div className="space-y-6">
               <div className="flex items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-black/50">
                  <LucideClock className="w-3 h-3" />
                  <span>Select Time</span>
               </div>
               <div className="flex flex-wrap gap-4 py-2 border-b border-black/10 pb-6">
                  {["09:00", "12:00", "15:00", "18:00"].map((t) => (
                     <button 
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`px-6 py-2 rounded-full text-[11px] font-sans font-bold border transition-all ${
                          selectedTime === t ? "border-black" : "border-transparent text-black/40 hover:text-black hover:border-black/20"
                        }`}
                     >
                       {t}
                     </button>
                  ))}
               </div>
            </div>

         </div>

         {/* CTA */}
         <div className="pt-4">
            <button className="flex items-center gap-4 border border-black text-black px-8 py-3 rounded-full text-[10px] font-sans font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all">
               <span>Inquire Selection</span>
               <LucideArrowRight className="w-4 h-4" />
            </button>
         </div>

      </div>

      {/* RIGHT COLUMN: ETHIOPIA BORDER DRAW-IN */}
      <div className="flex-1 relative flex items-center justify-center h-full min-h-[40vh] w-full">
         
         <svg 
            viewBox="0 0 100 100" 
            className="absolute inset-0 w-[120%] h-[120%] left-[-10%] top-[-10%] opacity-20 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <motion.path 
              d={ethiopiaPath}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 4, ease: "easeInOut", delay: 0.2 }}
              fill="none"
              stroke="#000"
              strokeWidth="0.2"
            />
         </svg>

         <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="relative z-10 w-full max-w-[300px]"
         >
            <img 
              src="/assets/coffee-bag-exact.png" 
              alt="Catering Reference Bag" 
              className="w-[80%] md:w-full h-auto object-contain block drop-shadow-none"
            />
         </motion.div>

      </div>

    </section>
  );
}
