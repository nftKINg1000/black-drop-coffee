"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Search } from "lucide-react";

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="fixed top-0 inset-x-0 w-full z-[100] px-8 py-8 pointer-events-none flex justify-between items-start">
      
      {/* Left Menu Item */}
      <div className="pointer-events-auto">
        <h1 
          className="text-black leading-tight" 
          style={{ 
            fontFamily: "var(--font-display)", 
            fontSize: "13px", 
            letterSpacing: "0.12em", 
            fontWeight: 600 
          }}
        >
          BLACK<br />DROP<br />COFFEE
        </h1>
      </div>

      {/* Center Icon */}
      <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 top-8">
        <img src="/assets/umbrella-exact.png" alt="BD Logo Icon" style={{ width: "24px", height: "auto" }} />
      </div>

      {/* Right Menu Item */}
      <div className="pointer-events-auto flex items-center gap-6">
        <button 
          onClick={toggleLanguage}
          className="text-black uppercase"
          style={{ fontFamily: "var(--font-body)", fontSize: "11px", letterSpacing: "0.05em" }}
        >
          {language === "en" ? "EN / AR" : "AR / EN"}
        </button>
        <button className="text-black hover:opacity-50 transition-opacity">
          <Search className="w-4 h-4 stroke-[1.5]" />
        </button>
      </div>

    </header>
  );
}
