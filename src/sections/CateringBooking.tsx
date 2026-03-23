"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideCalendar } from "lucide-react";

export default function CateringBooking() {
  return (
    <section className="relative min-h-[90vh] bg-[#f7f6f3] flex flex-col items-center justify-center py-20 border-t border-black/5 z-20 overflow-hidden">
      
      {/* DISTINCT CATERING GRID (EDITORIAL SERVICE LAYOUT) */}
      <div className="w-full max-w-7xl px-12 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        
        {/* INFORMATION CORE (DISTINCT HIERARCHY) */}
        <div className="space-y-12 md:space-y-20 order-2 md:order-1 pt-12">
           
           {/* Section Meta Title */}
           <div className="space-y-6">
              <span className="tagline !tracking-[0.8em] !text-[9px]">Services / Boutique</span>
              <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-[#1a1a1a] leading-none">
                 Catering & Events
              </h2>
           </div>

           {/* Bilingual Paired Narrative (Tight Horizontal Alignment) */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-12 border-t border-[#1a1a1a]/5">
              <div className="text-left space-y-4">
                 <p className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-[#1a1a1a]/50 leading-relaxed uppercase">
                    Professional brewing services and artisanal pairings for corporate gatherings and private celebrations.
                 </p>
              </div>
              
              <div className="text-right space-y-4" dir="rtl">
                 <p className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-[#1a1a1a]/50 leading-relaxed">
                    خدمات الباريستا المختصة والضيافة الراقية المصممة خصيصاً للفعاليات المؤسسية والمناسبات الخاصة.
                 </p>
              </div>
           </div>

           {/* Master Booking CTA (Standardized Class) */}
           <div className="pt-4">
              <button className="flex items-center gap-4 bg-[#1a1a1a] text-white px-12 py-5 rounded-full text-[11px] font-sans font-bold tracking-[0.3em] uppercase hover:bg-black transition-all shadow-2xl hover:scale-105 active:scale-95">
                 <LucideCalendar className="w-4 h-4" />
                 <span>Inquire Selection</span>
              </button>
           </div>
        </div>

        {/* DISTINCT MEDIA TREATMENT (REPLACING BAG WITH PASTRY VISUAL) */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="relative flex items-center justify-center order-1 md:order-2"
        >
           {/* Visual Differentiator: Using the Artisanal Croissant visual to distinguish Catering from Product Bag section */}
           <div className="relative w-full aspect-square border-l border-b border-[#1a1a1a]/5 p-8 flex items-center justify-center group overflow-hidden">
              <img 
                src="/antigravity_assets/pure_croissant.png" 
                alt="Elite Catering Selection" 
                className="w-[70%] h-auto object-contain opacity-70 grayscale-[0.2] transform group-hover:scale-105 transition-transform duration-[2000ms]"
              />
              
              {/* Architecture Context Mark */}
              <div className="absolute top-0 right-0 w-32 h-[1px] bg-[#1a1a1a]/10" />
           </div>
        </motion.div>

      </div>

    </section>
  );
}
