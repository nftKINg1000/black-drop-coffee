"use client";

import React from "react";
import { Search } from "lucide-react";

export default function Navigation() {
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

      {/* Search Top Right */}
      <div className="pointer-events-auto flex items-center gap-4">
        <button className="flex items-center justify-center p-2 text-black hover:opacity-50 transition-opacity">
          <Search className="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>

    </header>
  );
}
