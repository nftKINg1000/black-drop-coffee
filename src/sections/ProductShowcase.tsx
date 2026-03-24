"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Colombia La Maria",
    desc: "Colombia with lychee notes. Soft balance. Clean taste.",
    descAr: "كولومبيا بنكهات ليتشي. توازن ناعم. مذاق نظيف.",
    image: "/assets/coffee-bag-exact.png"
  },
  {
    id: 2,
    name: "Ethiopia Yirgacheffe",
    desc: "Jasmine aroma. Bergamot notes. Bright acidity.",
    descAr: "رائحة الياسمين. نكهات البرغموت. حموضة مشرقة.",
    image: "/assets/coffee-bag-exact.png"
  }
];

export default function ProductShowcase() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % PRODUCTS.length);
  const prev = () => setIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

  return (
    <section className="relative w-full bg-[#f7f6f3] flex flex-col items-center justify-center py-24 md:py-32 border-t border-black/5 z-20 overflow-hidden">
      
      {/* RECOVERY: ENSURE NO CLIPPING ON NAVIGATION ARROWS */}
      <div className="absolute inset-x-8 md:inset-x-12 top-[35%] flex justify-between items-center z-40 pointer-events-none">
         <button 
           onClick={prev}
           className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-black/10 flex items-center justify-center pointer-events-auto hover:bg-black/5 transition-all opacity-40 hover:opacity-100"
         >
           <ChevronLeft className="w-6 h-6" strokeWidth={1} />
         </button>
         <button 
           onClick={next}
           className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-black/10 flex items-center justify-center pointer-events-auto hover:bg-black/5 transition-all opacity-40 hover:opacity-100"
         >
           <ChevronRight className="w-6 h-6" strokeWidth={1} />
         </button>
      </div>

      {/* RECOVERY: MASTER VISUAL RENDER (STRICT LOCAL PATH) */}
      <div className="relative w-full max-w-5xl flex flex-col items-center justify-center z-10 px-8">
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center"
          >
             {/* STRICT PRODUCTION RENDER: MUST BE VISIBLE */}
             <div className="relative w-full max-w-[450px] mb-12">
                <img 
                  src={PRODUCTS[index].image} 
                  alt={PRODUCTS[index].name}
                  width={450}
                  height={600}
                  className="w-full h-auto object-contain block opacity-100"
                />
             </div>
             
             {/* CTA Position (Grounded Center) */}
             <button className="button-editorial !px-16 !py-5 bg-black text-white hover:bg-black uppercase font-bold tracking-[0.3em]">
                <span>Add to Selection</span>
             </button>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* RECOVERY: BILINGUAL TASTING NOTES (ALIGNED GRID) */}
      <div className="w-full max-w-6xl px-12 md:px-24 mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 border-t border-black/5 pt-16">
         
         <div className="text-left space-y-4 max-w-xs">
            <h3 className="text-2xl md:text-4xl font-serif font-medium tracking-tight text-[#1a1a1a]">
               {PRODUCTS[index].name}
            </h3>
            <p className="text-[11px] uppercase tracking-[0.4em] font-sans font-bold text-black/30 leading-relaxed">
               {PRODUCTS[index].desc}
            </p>
         </div>

         <div className="text-right space-y-4 max-w-xs" dir="rtl">
            <h3 className="text-2xl md:text-4xl font-serif font-medium tracking-tight text-[#1a1a1a]">
               {index === 0 ? "كولومبيا لا ماريا" : "إثيوبيا يرغاتشيف"}
            </h3>
            <p className="text-[11px] uppercase tracking-[0.4em] font-sans font-bold text-black/30 leading-relaxed">
               {PRODUCTS[index].descAr}
            </p>
         </div>

      </div>

    </section>
  );
}
