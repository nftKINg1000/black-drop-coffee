"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="fixed top-0 inset-x-0 z-[100] px-8 py-10 pointer-events-none flex justify-between items-start mix-blend-difference">
      
      {/* Editorial Logo */}
      <div className="pointer-events-auto">
        <h1 className="text-2xl md:text-3xl font-serif font-black tracking-tighter leading-[0.85] text-white">
          BLACK<br />DROP
          <span className="block text-[8px] md:text-[9px] tracking-[0.6em] font-sans font-bold mt-2 text-white/60">EST. 2026</span>
        </h1>
      </div>

      {/* Minimal Language Switcher */}
      <div className="pointer-events-auto flex items-center gap-4">
        <button 
          onClick={toggleLanguage}
          className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-white backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-500 text-[10px] font-sans font-bold tracking-[0.2em] uppercase"
        >
          <Globe className="w-3 h-3 transition-transform group-hover:rotate-180 duration-700" />
          <span>{language === "en" ? "Ar" : "En"}</span>
        </button>
      </div>

    </header>
  );
}
