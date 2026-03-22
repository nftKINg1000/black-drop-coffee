import React from "react";
import HeroSection from "@/sections/HeroSection";
import ProductShowcase from "@/sections/ProductShowcase";
import IngredientSection from "@/sections/IngredientSection";
import BookingSection from "@/sections/BookingSection";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Persistent Navigation */}
      <Navigation />
      
      {/* Sections Container */}
      <div className="relative z-10 w-full overflow-x-hidden">
        
        {/* Slide 1: Hero scrollytelling */}
        <HeroSection />

        {/* Slide 2: Product bag showcase */}
        <ProductShowcase />

        {/* Slide 3: Ingredient breakdown */}
        <IngredientSection />

        {/* Slide 4: Catering bookings */}
        <BookingSection />

      </div>

      {/* Background Ambience Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dust.png')]" />
      </div>
    </main>
  );
}
