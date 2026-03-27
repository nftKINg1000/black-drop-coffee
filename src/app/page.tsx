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
    <main className="relative bg-white text-black">
      
      {/* GLOBAL NAVIGATION */}
      <Navigation />
      
      {/* 5 CORE SECTIONS */}
      <div className="relative z-10 w-full overflow-x-hidden flex flex-col snap-y snap-mandatory h-screen overflow-y-scroll">
        
        {/* ONE: IMMERSIVE HERO */}
        <HeroSection />

        {/* TWO: MAIN COFFEE PRODUCT SHOWCASE */}
        <ProductShowcase />

        {/* THREE: PASTRY / DETAIL SECTION */}
        <IngredientSection />

        {/* FOUR: CATERING / BOOKING SECTION */}
        <CateringSection />

        {/* FIVE: ROASTING VIDEO / UMBRELLA */}
        <UmbrellaSection />

      </div>

    </main>
  );
}
