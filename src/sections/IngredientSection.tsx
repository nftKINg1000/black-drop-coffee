"use client";

import React, { useRef, useEffect } from "react";

export default function IngredientSection() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateX(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ffffff",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        ref={imgRef}
        src="/assets/pastry-callout-exact.png"
        alt="Pastry callout"
        style={{
          height: "72vh",
          width: "auto",
          display: "block",
          opacity: 0,
          transform: "translateX(-72px)",
          transition:
            "opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1), transform 1000ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </section>
  );
}
