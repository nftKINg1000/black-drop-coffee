"use client";

import React, { useRef, useState } from "react";
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
  const { t, language } = useLanguage();
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % PRODUCTS.length);
  const prev = () => setIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

  return (
    <div className="relative h-screen bg-white overflow-hidden flex flex-col items-center justify-center p-8">
      
      {/* Product Image & UI */}
      <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
        
        {/* Navigation Arrows - Circular Buttons as in Screenshot */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center z-30 pointer-events-none md:px-0 px-4">
           <button 
             onClick={prev}
             className="w-16 h-16 rounded-full bg-white border border-black/10 flex items-center justify-center pointer-events-auto hover:bg-black/5 active:scale-95 transition-all shadow-lg"
           >
             <ChevronLeft className="w-6 h-6" />
           </button>
           <button 
             onClick={next}
             className="w-16 h-16 rounded-full bg-white border border-black/10 flex items-center justify-center pointer-events-auto hover:bg-black/5 active:scale-95 transition-all shadow-lg"
           >
             <ChevronRight className="w-6 h-6" />
           </button>
        </div>

        {/* The Product Bag Case - Centered */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[300px] sm:w-[500px] h-full flex flex-col items-center justify-center"
          >
             <img 
               src={PRODUCTS[index].image} 
               alt={PRODUCTS[index].name}
               className="w-full h-full object-contain mb-8 drop-shadow-3xl"
             />
             
             {/* Add to Cart Button - Centered below bag as in screenshot */}
             <button className="flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full text-base font-bold tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl z-40">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
             </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Persistent Info Footer Bar - Exact to Screenshot */}
      <div className="absolute bottom-12 inset-x-12 flex justify-between items-end">
         {/* English Info */}
         <div className="max-w-xs text-left">
            <h3 className="text-xl md:text-2xl font-serif leading-tight text-neutral-950/80">
               {PRODUCTS[index].desc}
            </h3>
         </div>

         {/* Arabic Info */}
         <div className="max-w-xs text-right">
            <h3 className="text-xl md:text-2xl font-serif leading-tight text-neutral-950/80">
               {PRODUCTS[index].descAr}
            </h3>
         </div>
      </div>

    </div>
  );
}
