"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
  {
    id: 1,
    image: "/assets/coffee-bag-exact.png",
    enPrefix: "Colombia with ",
    enBold: "lychee",
    enSuffix: " notes. / Soft balance. Clean taste.",
    arPrefix: "كولومبيا بنفحات ",
    arBold: "ليتشي",
    arSuffix: " / توازن ناعم. مذاق نظيف",
  },
  {
    id: 2,
    image: "/assets/coffee-bag-exact.png",
    enPrefix: "Ethiopia with ",
    enBold: "jasmine",
    enSuffix: " notes. / Bright acidity. Floral finish.",
    arPrefix: "إثيوبيا بنفحات ",
    arBold: "ياسمين",
    arSuffix: " / حموضة مشرقة. نهاية مذهلة",
  }
];

export default function ProductShowcase() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % PRODUCTS.length);
  const prev = () => setIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

  // Swipe for mobile
  const handleDragEnd = (e: any, { offset }: any) => {
    const swipe = offset.x;
    if (swipe < -50) next();
    else if (swipe > 50) prev();
  };

  return (
    <section className="relative w-full h-[100vh] bg-white text-black flex flex-col justify-between overflow-hidden snap-start shrink-0">
      
      {/* Navigation Arrows */}
      <div className="hidden md:flex absolute inset-x-8 top-1/2 -translate-y-1/2 justify-between items-center z-40 pointer-events-none">
        <button 
          onClick={prev}
          style={{ width: "52px", height: "52px", border: "1px solid #000", borderRadius: "50%", background: "none", boxShadow: "none" }}
          className="flex items-center justify-center pointer-events-auto hover:opacity-50 transition-opacity"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={next}
          style={{ width: "52px", height: "52px", border: "1px solid #000", borderRadius: "50%", background: "none", boxShadow: "none" }}
          className="flex items-center justify-center pointer-events-auto hover:opacity-50 transition-opacity"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      {/* Centered Coffee Bag Image */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
         <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              className="pointer-events-auto w-full h-full flex items-center justify-center"
            >
              <img 
                src={PRODUCTS[index].image} 
                alt="Coffee Bag"
                style={{ height: "48vh", width: "auto", display: "block", margin: "auto" }}
                className="pointer-events-none"
              />
            </motion.div>
         </AnimatePresence>
      </div>

      <div className="flex-1" />

      {/* Bottom Bilingual Caption */}
      <div className="w-full flex justify-between items-end p-8 z-20 md:flex-row flex-col gap-4">
         
         {/* EN (Left Align) */}
         <div 
            className="leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 300, color: "#1a1a1a" }}
         >
            {PRODUCTS[index].enPrefix}
            <span style={{ fontWeight: 500 }}>{PRODUCTS[index].enBold}</span>
            {PRODUCTS[index].enSuffix}
         </div>

         {/* AR (Right Align) */}
         <div 
            className="leading-relaxed text-right md:text-right w-full" 
            dir="rtl"
            style={{ fontFamily: "var(--font-arabic)", fontSize: "12px", fontWeight: 300, color: "#1a1a1a" }}
         >
            {PRODUCTS[index].arPrefix}
            <span style={{ fontWeight: 500 }}>{PRODUCTS[index].arBold}</span>
            {PRODUCTS[index].arSuffix}
         </div>

      </div>

    </section>
  );
}
