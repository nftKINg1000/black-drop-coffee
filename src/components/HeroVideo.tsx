"use client";

import React from "react";

export default function HeroVideo() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[40px] shadow-2xl bg-white border border-black/5">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover scale-[1.05] brightness-[1.05] contrast-[1.05]"
      >
        <source src="/antigravity_assets/hero_video.mp4" type="video/mp4" />
        <img 
          src="/antigravity_assets/hero.png" 
          alt="Black Drop Coffee Hero Backup"
          className="w-full h-full object-cover grayscale opacity-20"
        />
      </video>
    </div>
  );
}
