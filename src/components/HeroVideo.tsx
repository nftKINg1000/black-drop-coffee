"use client";

import React from "react";

export default function HeroVideo() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[40px] shadow-4xl bg-black">
      {/* 
        This is your cinematic video player. 
        Please place your video file at: /public/antigravity_assets/hero_video.mp4
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-100 scale-[1.07]"
      >
        <source src="/antigravity_assets/hero_video.mp4" type="video/mp4" />
        <img 
          src="/antigravity_assets/hero.png" 
          alt="Black Drop Coffee Hero Backup"
          className="w-full h-full object-cover"
        />
      </video>
      
      {/* Cinematic Shadow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}
