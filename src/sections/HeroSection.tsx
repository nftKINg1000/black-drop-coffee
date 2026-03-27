"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();

  return (
    <section className="relative w-full h-[100vh] bg-[#ffffff] text-[#000000] flex flex-col items-center justify-center overflow-hidden snap-start shrink-0 pt-24 pb-12">
      
      {/* 2. Headline -> BLACK DROP COFFEE */}
      <h1 className="text-[72px] font-sans font-bold text-black tracking-[-0.04em] leading-none mb-4 text-center">
        BLACK DROP COFFEE
      </h1>

      {/* 3. Sub-line -> EST. 2016 · SPECIALTY ROASTERY */}
      <span className="text-[13px] font-sans font-light uppercase tracking-[0.2em] text-black/40 text-center mb-8">
        EST. 2016 &middot; SPECIALTY ROASTERY
      </span>

      {/* 4. Rotating cup video -> 420px wide */}
      <div className="flex items-center justify-center mb-12 relative z-10 w-full max-w-[420px]">
        <video
          src="/antigravity_assets/hero_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "420px",
            height: "auto",
            animation: "spinCup 8s linear infinite",
            transformOrigin: "center center",
            transformStyle: "preserve-3d",
          }}
          className="object-contain"
        />
      </div>

      {/* 5. English Caption -> centered */}
      <p className="text-[16px] font-sans font-light text-black text-center mb-4">
        Every cup begins with a single origin.
      </p>

      {/* 6. Arabic line -> centered, right-to-left */}
      <p className="text-[16px] font-arabic font-light text-black text-center" dir="rtl">
        كل فنجان يبدأ بمصدر واحد.
      </p>

    </section>
  );
}
