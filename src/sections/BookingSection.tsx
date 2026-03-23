"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BookingSection() {
  return (
    <footer className="relative bg-[#f7f6f3] border-t border-black/5 flex flex-col items-center justify-center section-padding overflow-hidden z-20">
      
      {/* BRAND STORY (CINEMATIC VISUAL REBALANCED) */}
      <div className="relative w-full max-w-7xl min-h-[70vh] flex flex-col items-center justify-center px-8 py-24 mb-24">
        
        {/* CINEMATIC UMBRELLA COMPOSITION (ULTRA-DOMINANT SCALE) */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 2 }}
           className="relative flex flex-col items-center justify-center -translate-y-12"
        >
           {/* Detailed Coffee Bean Umbrella (Subtle Continuous Linear Rotation) */}
           <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
              className="relative mb-32 md:mb-40 flex items-center justify-center"
           >
              <img 
                src="/antigravity_assets/umbrella.png" 
                alt="Coffee Umbrella Craft" 
                className="w-64 h-64 md:w-[600px] md:h-[600px] object-contain opacity-60 grayscale-[0.05]"
              />
           </motion.div>

           {/* Brand Narrative Section (Elite Space) */}
           <div className="text-center max-w-2xl px-8">
             <h2 className="text-4xl md:text-7xl font-serif font-medium text-[#1a1a1a] mb-12 tracking-[-0.035em] leading-[0.85]">
                CRAFTING<br />COVERAGE
             </h2>
             <span className="tagline !opacity-20 !tracking-[1.2em] !text-[7px]">
                Artisanal Resilience & Roast Ethics / From Bean to Shield
             </span>
           </div>
        </motion.div>

      </div>

      {/* FINAL EDITORIAL FOOTER (REBALANCED BILINGUAL GRID) */}
      <div className="w-full max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-32 px-12 md:px-24 py-32 border-t border-black/5">
         
         {/* Identity Group */}
         <div className="flex flex-col text-left space-y-20">
            <h4 className="font-serif text-3xl font-medium tracking-tight text-[#1a1a1a]">Black Drop</h4>
            <div className="space-y-4 tagline !tracking-[0.5em] !opacity-10 !text-[8px]">
               <p>Global Roastery HQ</p>
               <p>&copy; 2026 Crafted Excellence</p>
            </div>
         </div>

         {/* Access Group */}
         <div className="flex flex-col text-left space-y-20">
            <h5 className="tagline !opacity-10 !text-[8px]">Access</h5>
            <nav className="flex flex-col space-y-8 text-[10px] uppercase tracking-[0.8em] font-bold text-[#1a1a1a]/40 font-sans">
               <span className="hover:text-black cursor-pointer transition-colors underline-offset-8 hover:underline">Roastery</span>
               <span className="hover:text-black cursor-pointer transition-colors underline-offset-8 hover:underline">Digital Portal</span>
               <span className="hover:text-black cursor-pointer transition-colors underline-offset-8 hover:underline">Inquiries</span>
            </nav>
         </div>

         {/* Local Identity Group (Arabic) */}
         <div className="flex flex-col text-right space-y-20" dir="rtl">
            <h4 className="font-serif text-3xl font-medium tracking-tight text-[#1a1a1a]">بلاك دروب</h4>
            <div className="space-y-4 tagline !tracking-[0.5em] !opacity-10 !text-[8px]">
               <p>محمصة قهوة عالمية</p>
               <p>فخر الصناعة ٢٠٢٦</p>
            </div>
         </div>

         {/* Regional Contact Group (Arabic) */}
         <div className="flex flex-col text-right space-y-20" dir="rtl">
            <h5 className="tagline !opacity-10 !text-[8px]">تواصل</h5>
            <nav className="flex flex-col space-y-8 text-[10px] uppercase tracking-[0.8em] font-bold text-[#1a1a1a]/40 font-sans">
               <span className="hover:text-black cursor-pointer transition-colors underline-offset-8 hover:underline">الموقع</span>
               <span className="hover:text-black cursor-pointer transition-colors underline-offset-8 hover:underline">للاستفسارات</span>
               <span className="hover:text-black cursor-pointer transition-colors underline-offset-8 hover:underline">المبيعات</span>
            </nav>
         </div>

      </div>

      {/* FINAL EDITORIAL SIGNATURE */}
      <div className="w-full text-center py-20 px-12 border-t border-black/5 opacity-40">
         <span className="text-[9px] uppercase tracking-[2em] font-bold text-black/5 italic">Brewing For Perfection Without Competing With It</span>
      </div>

    </footer>
  );
}
