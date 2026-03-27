"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();

  return (
    <section className="relative w-full h-[100vh] bg-white text-black flex flex-col justify-between overflow-hidden snap-start shrink-0">
      
      {/* Central Rotating Cup */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] md:w-[40vw] max-w-[500px] aspect-square animate-[spin_6s_linear_infinite]" style={{ animationName: "spinY" }}>
          {/* Note: we use CSS rotateY for continuous vertical axis rotation */}
          <style>{`
            @keyframes spinY {
              from { transform: perspective(1000px) rotateY(0deg); }
              to { transform: perspective(1000px) rotateY(360deg); }
            }
          `}</style>
          <img 
            src="/antigravity_assets/hero.png" 
            alt="Rotating Cup" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Spacer to push footer down */}
      <div className="flex-1" />

      {/* Bottom Footer Nav inside Hero */}
      <div className="w-full px-8 pb-8 z-20">
        {/* Left EN row */}
        <div className="flex flex-wrap justify-between items-center text-[11px] font-sans font-bold uppercase tracking-widest border-b border-black pb-4 mb-4">
          <span>Roastery</span>
          <span>Sales</span>
          <span>Website</span>
          <span>For Business</span>
          <span>Branches</span>
          <span>Social Media</span>
          <span>Inquiries</span>
        </div>
        {/* Right AR row */}
        <div className="flex flex-wrap justify-between items-center text-[12px] font-arabic font-bold text-right w-full" dir="rtl">
           <span>موقع الكتروني</span>
           <span>المبيعات</span>
           <span>مبيعات المحمصة</span>
           <span>للاستفسارات</span>
           <span>فروعنا</span>
           <span>تواصل اجتماعي</span>
           <span>للتواصل</span>
        </div>
      </div>

    </section>
  );
}
