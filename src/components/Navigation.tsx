"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="fixed top-0 inset-x-0 z-[100] px-8 py-8 pointer-events-none flex justify-between items-start mix-blend-normal">
      
      {/* Logo Top Left */}
      <div className="pointer-events-auto">
        <h1 className="text-[18px] font-sans font-bold leading-tight text-black tracking-tight" style={{ fontWeight: 900 }}>
          BLACK DROP<br />COFFEE
        </h1>
      </div>

      {/* Center Umbrella Icon */}
      <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 top-8">
        <img src="/assets/umbrella-exact.png" alt="BD Logo" className="w-[28px] h-[28px] object-contain" />
      </div>

      {/* Language Switcher */}
      <div className="pointer-events-auto flex items-center gap-4">
        <button 
          onClick={toggleLanguage}
          className="group flex items-center gap-2 px-4 py-2 border border-black/10 text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 text-[10px] font-sans font-bold tracking-[0.2em] uppercase"
        >
          <Globe className="w-3 h-3 group-hover:rotate-180 duration-500" />
          <span>{language === "en" ? "Ar" : "En"}</span>
        </button>
      </div>

    </header>
  );
}
