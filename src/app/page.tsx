"use client";

import React from "react";
import HeroSection from "@/sections/HeroSection";
import ProductShowcase from "@/sections/ProductShowcase";
import IngredientSection from "@/sections/IngredientSection";
import BookingSection from "@/sections/BookingSection";
import Navigation from "@/components/Navigation";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-[10000]"
        style={{ scaleX }}
      />
      
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
