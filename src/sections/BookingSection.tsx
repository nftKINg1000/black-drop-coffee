"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar as CalendarIcon, Clock, Users, ArrowRight } from "lucide-react";

export default function BookingSection() {
  const { t, language } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  return (
    <div className="scrolly-section bg-white text-black p-8 md:p-24 overflow-hidden relative border-t border-black/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-black/5 rounded-full blur-[200px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto z-10">
        
        {/* Left: Text & Info */}
        <div className={language === 'ar' ? 'order-last text-right' : 'text-left'}>
           <span className="text-[10px] tracking-[0.8em] uppercase opacity-40 mb-8 block">Event Services</span>
           <h2 className="text-6xl font-bold tracking-tighter leading-none mb-8">{t("bookingTitle")}</h2>
           <p className="text-xl text-black/60 mb-12 max-w-md">{t("bookingDesc")}</p>
           
           <div className={`flex flex-col gap-6 ${language === 'ar' ? 'items-end' : 'items-start'}`}>
              <div className="flex items-center gap-4 text-sm font-semibold tracking-widest text-black/80">
                 <div className="p-3 bg-black/5 rounded-xl"><Clock className="w-5 h-5" /></div>
                 <span>Fixed 4h Duration</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-semibold tracking-widest text-black/80">
                 <div className="p-3 bg-black/5 rounded-xl"><Users className="w-5 h-5" /></div>
                 <span>20 - 200 Guests</span>
              </div>
           </div>
        </div>

        {/* Right: Interactive Calendar Mock */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="bg-black/5 backdrop-blur-3xl p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden border border-black/5"
        >
           <div className="flex justify-between items-center mb-12">
              <h3 className="text-xl font-bold">SELECT DATE</h3>
              <div className="flex gap-2">
                 <span className="p-2 bg-black/5 text-[10px] uppercase font-bold tracking-widest rounded-lg">MARCH 2026</span>
              </div>
           </div>

           {/* Calendar Grid Mockup */}
           <div className="grid grid-cols-7 gap-2 mb-12">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                 <div key={`${day}-${i}`} className="h-8 flex items-center justify-center text-[10px] opacity-20 font-bold">{day}</div>
              ))}
              {Array.from({ length: 31 }, (_, i) => i + 1).map(date => (
                 <button 
                   key={date}
                   onClick={() => setSelectedDate(date)}
                   className={`h-12 w-full rounded-2xl flex items-center justify-center text-xs font-bold transition-all relative
                     ${selectedDate === date ? 'bg-black text-white scale-110 shadow-xl' : 'bg-black/5 hover:bg-black/10 opacity-60 hover:opacity-100'}
                     ${date < 22 ? 'opacity-5 pointer-events-none line-through' : ''}
                   `}
                 >
                   {date}
                   {selectedDate === date && <div className="absolute -top-1 w-1 h-1 bg-white rounded-full" />}
                 </button>
              ))}
           </div>

           {/* Book Now Button */}
           <button className="w-full bg-black text-white px-8 py-6 rounded-[24px] flex items-center justify-between group overflow-hidden relative shadow-2xl">
              <span className="text-xs font-bold tracking-[0.4em] uppercase z-10">CONFIRM BOOKING</span>
              <div className="relative z-10 bg-white text-black p-3 rounded-xl transition-all group-hover:bg-white/80">
                 <ArrowRight />
              </div>
              <div className="absolute inset-0 bg-neutral-800 -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
           </button>
        </motion.div>

      </div>
    </div>

      </div>
    </div>
  );
}
