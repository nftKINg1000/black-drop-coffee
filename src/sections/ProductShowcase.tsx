"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    if (swipe < -50) {
      next();
    } else if (swipe > 50) {
      prev();
    }
  };

  return (
    <section className="relative w-full h-[100vh] bg-white text-black flex flex-col justify-between overflow-hidden snap-start shrink-0">
      
      {/* Navigation Arrows (Hidden & turned to swipe on mobile, but prompt says "arrows become swipe"... I'll show arrows on md+ and hide on mobile) */}
      <div className="hidden md:flex absolute inset-x-8 top-1/2 -translate-y-1/2 justify-between items-center z-40 pointer-events-none">
        <button 
          onClick={prev}
          className="w-16 h-16 rounded-full border border-black flex items-center justify-center pointer-events-auto hover:bg-black hover:text-white transition-all text-black"
        >
          <ChevronLeft className="w-8 h-8" strokeWidth={1} />
        </button>
        <button 
          onClick={next}
          className="w-16 h-16 rounded-full border border-black flex items-center justify-center pointer-events-auto hover:bg-black hover:text-white transition-all text-black"
        >
          <ChevronRight className="w-8 h-8" strokeWidth={1} />
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
                className="h-[40vh] object-contain pointer-events-none drop-shadow-none"
              />
            </motion.div>
         </AnimatePresence>
      </div>

      <div className="flex-1" />

      {/* Bottom Bilingual Caption */}
      <div className="w-full flex justify-between items-end p-8 z-20 font-sans text-[13px] font-light md:flex-row flex-col gap-4">
         
         {/* EN (Left Align) */}
         <div className="max-w-xs leading-relaxed">
            {PRODUCTS[index].enPrefix}
            <span className="font-bold">{PRODUCTS[index].enBold}</span>
            {PRODUCTS[index].enSuffix}
         </div>

         {/* AR (Right Align) */}
         <div className="max-w-xs leading-relaxed font-arabic text-right md:text-right w-full" dir="rtl">
            {PRODUCTS[index].arPrefix}
            <span className="font-bold">{PRODUCTS[index].arBold}</span>
            {PRODUCTS[index].arSuffix}
         </div>

      </div>

    </section>
  );
}
