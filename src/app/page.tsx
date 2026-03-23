"use client";

import React from "react";
import HeroSection from "@/sections/HeroSection";
import ProductShowcase from "@/sections/ProductShowcase";
import CateringBooking from "@/sections/CateringBooking";
import UmbrellaSection from "@/sections/UmbrellaSection";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f7f6f3] selection:bg-black selection:text-white">
      
      {/* FINAL APPROVED FLAGSHIP NAVIGATION */}
      <Navigation />
      
      {/* FINAL APPROVED SHIP-LEVEL CONTENT FLOW (4 SECTIONS) */}
      <div className="relative z-10 w-full overflow-x-hidden">
        
        {/* ONE: DOMINANT HERO (MODERN CINEMATIC VIEWPORT) */}
        <HeroSection />

        {/* TWO: MAIN COFFEE PRODUCT SHOWCASE (MASTER COFFEE BAG) */}
        <ProductShowcase />

        {/* THREE: CATERING / BOOKING SECTION (DISTINCT PRODUCT-STYLE BLOCK) */}
        <CateringBooking />

        {/* FOUR: ROTATING UMBRELLA SECTION (FINAL VISUAL CLOSURE) */}
        <UmbrellaSection />

      </div>

      {/* NO REPEATED SECTIONS, NO INVENTED FILLER, NO FOOTER */}
    </main>
  );
}
