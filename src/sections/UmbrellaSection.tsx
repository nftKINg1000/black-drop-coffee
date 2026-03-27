"use client";

import React from "react";

export default function UmbrellaSection() {
  return (
    <section className="relative w-full min-h-[100vh] bg-white text-black flex flex-col items-center justify-center overflow-hidden snap-start shrink-0 pt-24 pb-12 px-8">
      
      {/* Centered Umbrella Mask Video */}
      <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center mb-16">
        
        {/* CSS Mask Approach */}
        <div 
          className="w-full h-full bg-black flex items-center justify-center"
          style={{
            WebkitMaskImage: "url('/assets/umbrella-exact.png')",
            maskImage: "url('/assets/umbrella-exact.png')",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat"
          }}
        >
           <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale opacity-90"
           >
             <source src="/antigravity_assets/hero_video.mp4" type="video/mp4" />
           </video>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-[300px] flex flex-col gap-6">
         
         <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-sans font-bold tracking-widest text-black/50 ml-4">
               Email
            </label>
            <input 
              type="email" 
              placeholder="iblackdrop@trymore.com"
              className="w-full px-6 py-4 rounded-full border border-black text-[13px] bg-transparent outline-none placeholder:text-black/30 font-sans"
            />
         </div>

         <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-sans font-bold tracking-widest text-black/50 ml-4">
               Number
            </label>
            <input 
              type="tel" 
              placeholder="0500000000"
              className="w-full px-6 py-4 rounded-full border border-black text-[13px] bg-transparent outline-none placeholder:text-black/30 font-sans"
            />
         </div>

         <div className="w-full flex justify-end mt-2 pr-4">
            <button className="text-[12px] font-sans font-bold hover:opacity-50 transition-opacity">
               Send &rarr;
            </button>
         </div>

      </div>

    </section>
  );
}
