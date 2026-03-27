"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function IngredientSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="relative w-full h-[100vh] bg-white flex items-center justify-center overflow-hidden snap-start shrink-0">
      <motion.img 
        src="/assets/pastry-callout-exact.png" 
        alt="Pastry Detail"
        initial={{ transform: "translateX(-80px)", opacity: 0 }}
        animate={isInView ? { transform: "translateX(0)", opacity: 1 } : { transform: "translateX(-80px)", opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: "55vw", maxWidth: "55vw", display: "block", margin: "auto" }}
      />
    </section>
  );
}
