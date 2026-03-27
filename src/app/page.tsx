"use client";

import React from "react";
import HeroSection from "@/sections/HeroSection";
import ProductShowcase from "@/sections/ProductShowcase";
import IngredientSection from "@/sections/IngredientSection";
import UmbrellaSection from "@/sections/UmbrellaSection";

export default function Home() {
  return (
    <main style={{ background: "#ffffff" }}>
      <HeroSection />
      <ProductShowcase />
      <IngredientSection />
      <UmbrellaSection />
    </main>
  );
}
