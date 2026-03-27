"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function CateringSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Ethiopia Border Path
  const ethiopiaPath = "M62.5,12.5c-4.2-2.1-12.5-4.2-16.7-4.2c-4.2,0-8.3,4.2-8.3,8.3c0,4.2,4.2,8.3,8.3,12.5c2.1,2.1,4.2,4.2,4.2,8.3c0,4.2-2.1,8.3-4.2,12.5 c-2.1,4.2-4.2,8.3-4.2,12.5c0,4.2,4.2,8.3,8.3,12.5c4.2,4.2,8.3,4.2,12.5,4.2c4.2,0,8.3-4.2,12.5-8.3c4.2-4.2,4.2-8.3,4.2-12.5 c0-4.2-2.1-8.3-4.2-12.5c-2.1-4.2-4.2-8.3-4.2-12.5C70.8,20.8,66.7,14.6,62.5,12.5z";

  return (
    <section ref={containerRef} className="relative w-full min-h-[100vh] bg-white text-black flex flex-col md:flex-row items-center justify-center overflow-hidden snap-start shrink-0 p-8 md:p-16 gap-16 md:gap-32">
      
      {/* LEFT COLUMN: INTRO & BOOKING UI */}
      <div className="flex-1 space-y-12 w-full max-w-lg mt-24 md:mt-0">
          
         <div className="space-y-4">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "48px", fontWeight: 300, color: "#000", lineHeight: 1 }}>
               Bespoke<br />Catering
            </h2>
         </div>

         {/* BOOKING FLOW */}
         <div className="space-y-10 w-full">
            
            {/* Date Selection */}
            <div className="space-y-4">
               <div style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Select Date
               </div>
               <div className="flex flex-wrap gap-3 pb-4">
                  {[18, 19, 20, 21, 22, 23, 24].map((d) => {
                     const isSelected = selectedDate === d;
                     return (
                        <button 
                           key={d} 
                           onClick={() => setSelectedDate(d)}
                           style={{ 
                              width: "40px", 
                              height: "40px", 
                              borderRadius: "50%", 
                              border: isSelected ? "1px solid #000" : "1px solid #e0e0e0", 
                              backgroundColor: isSelected ? "#000" : "transparent",
                              color: isSelected ? "#fff" : "#000",
                              fontFamily: "var(--font-body)",
                              fontSize: "14px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                              transition: "all 0.3s"
                           }}
                        >
                          {d}
                        </button>
                     );
                  })}
               </div>
            </div>

            {/* Time Selection */}
            <div className="space-y-4">
               <div style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Select Time
               </div>
               <div className="flex flex-wrap gap-3 pb-6 border-b border-[#e0e0e0]">
                  {["09:00", "12:00", "15:00", "18:00"].map((t) => {
                     const isSelected = selectedTime === t;
                     return (
                        <button 
                           key={t}
                           onClick={() => setSelectedTime(t)}
                           style={{ 
                              padding: "10px 16px",
                              borderRadius: "4px", 
                              border: isSelected ? "1px solid #000" : "1px solid #e0e0e0", 
                              backgroundColor: isSelected ? "#000" : "transparent",
                              color: isSelected ? "#fff" : "#000",
                              fontFamily: "var(--font-body)",
                              fontSize: "14px",
                              cursor: "pointer",
                              transition: "all 0.3s"
                           }}
                        >
                          {t}
                        </button>
                     );
                  })}
               </div>
            </div>

         </div>

         {/* CTA */}
         <div className="pt-2">
            <button 
               style={{ 
                  border: "1px solid #000", 
                  backgroundColor: "transparent",
                  color: "#000",
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  padding: "12px 32px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "opacity 0.3s"
               }}
               className="hover:opacity-50"
            >
               Inquire Selection
            </button>
         </div>

      </div>

      {/* RIGHT COLUMN: DRAW-IN & IMAGE */}
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
