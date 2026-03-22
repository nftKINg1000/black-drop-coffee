"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar as CalendarIcon, Clock, Users, ArrowRight } from "lucide-react";

export default function BookingSection() {
  const { t, language } = useLanguage();

  return (
    <div className="scrolly-section bg-white text-black p-8 md:p-24 overflow-hidden relative border-t border-black/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-black/5 rounded-full blur-[200px]" />
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-16 py-24 z-10">
        
        {/* Machine Video Placeholder */}
        <div className="text-center group cursor-pointer">
           <p className="text-xl font-medium tracking-tight mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
             in here will be a video of the coffee being spun around in the machine
           </p>
           <div className="w-1 h-32 bg-black/10 mx-auto" />
        </div>

        {/* Coffee Umbrella Graphic */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="relative"
        >
           <img 
             src="/antigravity_assets/ingredients.png" 
             alt="Coffee Graphics" 
             className="w-48 h-48 object-contain mix-blend-multiply opacity-80 filter brightness-110"
             style={{ 
               maskImage: 'url("/antigravity_assets/product.png")', 
               maskSize: 'contain', 
               maskRepeat: 'no-repeat',
               maskPosition: 'center'
             }} 
           />
           {/* Line Pointer as seen in screenshot */}
           <div className="absolute top-0 right-0 w-48 h-px bg-black/40 rotate-[-45deg] origin-left translate-x-12 -translate-y-8" />
        </motion.div>

        {/* Input Fields */}
        <div className="w-full max-w-sm space-y-4">
           <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest opacity-40 w-16">Email</span>
              <input 
                type="email" 
                placeholder="iblackdrop@trymore.com"
                className="flex-1 bg-white border border-black/10 rounded-xl px-6 py-3 text-sm focus:outline-none focus:border-black/30 transition-colors shadow-sm"
              />
           </div>
           <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest opacity-40 w-16">Number</span>
              <input 
                type="tel" 
                placeholder="0500000000"
                className="flex-1 bg-white border border-black/10 rounded-xl px-6 py-3 text-sm focus:outline-none focus:border-black/30 transition-colors shadow-sm"
              />
           </div>
        </div>

      </div>
    </div>
  );
}
