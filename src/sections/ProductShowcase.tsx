"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: 1,
    image: "/assets/coffee-bag-exact.png",
    enLine1: (<>Colombia with <strong>lychee</strong> notes.</>),
    enLine2: "Soft balance. Clean taste.",
    arLine1: (<>كولومبيا بنفحات <strong>ليتشي</strong></>),
    arLine2: "توازن ناعم. مذاق نظيف",
  },
  {
    id: 2,
    image: "/assets/coffee-bag-exact.png",
    enLine1: (<>Ethiopia with <strong>jasmine</strong> notes.</>),
    enLine2: "Bright acidity. Floral finish.",
    arLine1: (<>إثيوبيا بنفحات <strong>ياسمين</strong></>),
    arLine2: "حموضة مشرقة. نهاية مذهلة",
  },
];

const ChevronLeft = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function ProductShowcase() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((p) => (p + 1) % SLIDES.length);
  const prev = () => setIndex((p) => (p - 1 + SLIDES.length) % SLIDES.length);

  const handleDragEnd = (_: any, { offset }: any) => {
    if (offset.x < -50) next();
    else if (offset.x > 50) prev();
  };

  const slide = SLIDES[index];

  const arrowBase: React.CSSProperties = {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    border: "1px solid #000000",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Left arrow */}
      <button onClick={prev} style={{ ...arrowBase, left: "48px" }} aria-label="Previous">
        <ChevronLeft />
      </button>

      {/* Right arrow */}
      <button onClick={next} style={{ ...arrowBase, right: "48px" }} aria-label="Next">
        <ChevronRight />
      </button>

      {/* Bag — dead center */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slide.image}
            alt="Coffee bag"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{ height: "58vh", width: "auto", display: "block" }}
          />
        </AnimatePresence>
      </div>

      {/* Caption bottom-left EN */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "48px",
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: "15px",
          fontWeight: 300,
          color: "#1a1a1a",
          lineHeight: 1.8,
          zIndex: 10,
        }}
      >
        <div>{slide.enLine1}</div>
        <div>{slide.enLine2}</div>
      </div>

      {/* Caption bottom-right AR */}
      <div
        dir="rtl"
        style={{
          position: "absolute",
          bottom: "32px",
          right: "48px",
          fontFamily: "'Tajawal', sans-serif",
          fontSize: "15px",
          fontWeight: 300,
          color: "#1a1a1a",
          lineHeight: 1.8,
          textAlign: "right",
          zIndex: 10,
        }}
      >
        <div>{slide.arLine1}</div>
        <div>{slide.arLine2}</div>
      </div>
    </section>
  );
}
