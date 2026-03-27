"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] bg-white text-black overflow-hidden snap-start shrink-0">
      
      {/* 2. HERO VIDEO (Full bleed background, NO animation or rotation) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/antigravity_assets/hero_video.mp4"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* 3. TEXT OVERLAY (Centered overlay, single line, bottom 12%) */}
      <div 
        className="absolute w-full z-10 flex justify-center text-center pointer-events-none"
        style={{ bottom: "12%" }}
      >
        <span 
          style={{ 
            fontFamily: "var(--font-body)", 
            fontSize: "11px", 
            letterSpacing: "0.25em", 
            color: "white", 
            opacity: 0.75 
          }}
        >
          EST. 2016 &middot; SPECIALTY ROASTERY
        </span>
      </div>

      {/* 4. SCROLL INDICATOR (Centered bottom 3%, pulsing line) */}
      <div 
        className="absolute w-full flex justify-center z-10 pointer-events-none"
        style={{ bottom: "3%" }}
      >
        <div 
          className="w-[1px] bg-white animate-pulse"
          style={{ height: "40px", opacity: 0.6 }}
        />
      </div>

    </section>
  );
}
