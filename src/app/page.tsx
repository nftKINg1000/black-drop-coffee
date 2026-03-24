"use client";

import React from "react";
import HeroSection from "@/sections/HeroSection";
import ProductShowcase from "@/sections/ProductShowcase";
import IngredientSection from "@/sections/IngredientSection";
import CateringSection from "@/sections/CateringSection";
import UmbrellaSection from "@/sections/UmbrellaSection";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f7f6f3] selection:bg-black selection:text-white">
      
      {/* FINAL APPROVED FLAGSHIP NAVIGATION */}
      <Navigation />
      
      {/* FINAL APPROVED SHIP-LEVEL CONTENT FLOW (5 CORE SECTIONS) */}
      <div className="relative z-10 w-full overflow-x-hidden">
        
        {/* ONE: IMMERSIVE HERO (LOCKED AS-IS) */}
        <HeroSection />

        {/* TWO: MAIN COFFEE PRODUCT SHOWCASE (PDF-FIDELITY BAG PRESENTATION) */}
        <ProductShowcase />

        {/* THREE: PASTRY / DETAIL SECTION (PDF-FIDELITY PASTRY LABELS) */}
        <IngredientSection />

        {/* FOUR: CATERING / BOOKING SECTION (AI-FIDELITY ETHIOPIA DRAW-IN + BOOKING FLOW) */}
        <CateringSection />

        {/* FIVE: FINAL UMBRELLA SECTION (FIDELITY UMBRELLA CROP PRESENTATION) */}
        <UmbrellaSection />

      </div>

      {/* NO INVENTED FILLER, NO FOOTER, NO SPACING SPARES */}
    </main>
  );
}
