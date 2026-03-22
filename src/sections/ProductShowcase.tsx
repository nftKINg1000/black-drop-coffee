"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import ModelWrapper from "@/components/ModelWrapper";

export default function ProductShowcase() {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1.1, 0.8]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-white overflow-hidden border-t border-black/5">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center p-8">
        
        {/* Navigation Arrows */}
        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between items-center z-30 pointer-events-none">
          <button className="w-16 h-16 rounded-full bg-white/50 backdrop-blur border border-black/10 flex items-center justify-center pointer-events-auto hover:bg-black hover:text-white transition-all shadow-xl">
            <ChevronLeft />
          </button>
          <button className="w-16 h-16 rounded-full bg-white/50 backdrop-blur border border-black/10 flex items-center justify-center pointer-events-auto hover:bg-black hover:text-white transition-all shadow-xl">
            <ChevronRight />
          </button>
        </div>

        {/* Product Card Container */}
        <motion.div 
          style={{ x, rotate, scale }}
          className="relative w-full max-w-6xl aspect-video bg-white rounded-[80px] shadow-4xl overflow-hidden flex flex-col items-center justify-center p-12"
        >
          {/* Subtle Grid Pattern Background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10" />
          
          <ModelWrapper className="w-[500px] h-[700px] z-20">
            {/* Featured Product Bag Asset */}
            <div className="relative w-full h-full group preserve-3d">
               <img 
                 src="/antigravity_assets/product.png" 
                 alt="Black Drop Coffee Bag"
                 className="w-full h-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)] transition-transform duration-500 pointer-events-none"
               />
               
               {/* Dynamic Shine Overlay */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-3xl" />
            </div>
          </ModelWrapper>

          {/* Bilingual Information & CTA Overlay */}
          <div className={`absolute bottom-16 inset-x-16 flex justify-between items-end z-30 ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`max-w-md ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <span className="text-[12px] tracking-[0.6em] uppercase opacity-40 mb-4 block">{t("productTitle")}</span>
              <h3 className="text-5xl font-bold tracking-tighter mt-2 leading-tight">{t("productDesc")}</h3>
            </div>
            
            <button className="group flex items-center gap-4 bg-black text-white px-12 py-8 rounded-full text-base font-bold tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">
              <ShoppingCart className="w-6 h-6" />
              {t("addToCart")}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
