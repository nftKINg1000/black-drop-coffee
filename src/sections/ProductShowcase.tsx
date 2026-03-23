"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Colombia La Maria",
    desc: "Colombia with lychee notes. Soft balance. Clean taste.",
    descAr: "كولومبيا بنكهات ليتشي. توازن ناعم. مذاق نظيف.",
    image: "/antigravity_assets/product.png",
  },
  {
    id: 2,
    name: "Ethiopia Yirgacheffe",
    desc: "Jasmine aroma. Bergamot notes. Bright acidity.",
    descAr: "رائحة الياسمين. نكهات البرغموت. حموضة مشرقة.",
    image: "/antigravity_assets/product.png",
  }
];

export default function ProductShowcase() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % PRODUCTS.length);
  const prev = () => setIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

  return (
    <section className="relative min-h-screen bg-[#f7f6f3] flex flex-col items-center justify-center py-20 border-t border-black/5 z-20 overflow-hidden">
      
      {/* PRODUCT DISPLAY (ARCHITECTURAL & POLISHED) */}
      <div className="relative w-full max-w-7xl flex flex-col items-center justify-center px-12 md:px-0 mb-16">
        
        {/* REFINED NAVIGATION (EDITORIAL ARROWS) */}
        <div className="absolute inset-x-8 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between items-center z-30 pointer-events-none">
           <button 
             onClick={prev}
             className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#1a1a1a]/5 flex items-center justify-center pointer-events-auto hover:bg-[#1a1a1a]/5 transition-all opacity-20 hover:opacity-100"
           >
             <ChevronLeft className="w-5 h-5 pointer-events-none" strokeWidth={1} />
           </button>
           <button 
             onClick={next}
             className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#1a1a1a]/5 flex items-center justify-center pointer-events-auto hover:bg-[#1a1a1a]/5 transition-all opacity-20 hover:opacity-100"
           >
             <ChevronRight className="w-5 h-5 pointer-events-none" strokeWidth={1} />
           </button>
        </div>

        {/* MASTER VISUAL CARD (FOLLOWING SCREENSHOT FIDELITY) */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-[340px] sm:w-[450px] aspect-[4/5] bg-[#ffffff] shadow-sm flex flex-col items-center justify-center p-12 overflow-hidden"
          >
             <img 
               src={PRODUCTS[index].image} 
               alt={PRODUCTS[index].name}
               className="w-full h-auto object-contain mb-8 grayscale-[0.05] hover:grayscale-0 transition-all duration-1000"
             />
             
             {/* Product CTA Below Image (Following Screenshot) */}
             <div className="mt-4 pt-4 border-t border-black/5 w-full flex justify-center">
                <button className="flex items-center gap-4 bg-[#1a1a1a] text-white px-10 py-4 rounded-full text-[11px] font-sans font-bold tracking-[0.2em] uppercase hover:bg-black transition-all shadow-xl active:scale-95">
                   <ShoppingCart className="w-3.5 h-3.5" />
                   <span>Add to Cart</span>
                </button>
             </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* TASTING NOTES (ALIGNED GRID - SCREENSHOT COMPLIANT) */}
      <div className="w-full max-w-6xl px-12 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 border-t border-[#1a1a1a]/5 pt-12">
         
         {/* English Specs */}
         <div className="text-left space-y-4 max-w-xs">
            <h3 className="text-xl md:text-2xl font-serif font-medium tracking-tight text-[#1a1a1a]">
               {PRODUCTS[index].name}
            </h3>
            <p className="text-[11px] uppercase tracking-[0.4em] font-sans font-medium text-[#1a1a1a]/40 leading-relaxed">
               {PRODUCTS[index].desc}
            </p>
         </div>

         {/* Arabic Specs (Proper RTL) */}
         <div className="text-right space-y-4 max-w-xs" dir="rtl">
            <h3 className="text-xl md:text-2xl font-serif font-medium tracking-tight text-[#1a1a1a]">
               {index === 0 ? "كولومبيا لا ماريا" : "إثيوبيا يرغاتشيف"}
            </h3>
            <p className="text-[11px] uppercase tracking-[0.4em] font-sans font-medium text-[#1a1a1a]/40 leading-relaxed">
               {PRODUCTS[index].descAr}
            </p>
         </div>

      </div>

    </section>
  );
}
