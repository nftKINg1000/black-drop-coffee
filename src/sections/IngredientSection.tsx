"use client";

import React, { useRef, useEffect } from "react";

export default function IngredientSection() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("pastry-visible");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pastry-anim {
          opacity: 0;
          transform: translateX(-80px);
          will-change: opacity, transform;
        }
        .pastry-anim.pastry-visible {
          opacity: 1;
          transform: translateX(0);
          transition:
            opacity 1100ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 1100ms cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
      <section
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          background: "#ffffff",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          ref={imgRef}
          id="pastry-anim"
          className="pastry-anim"
          src="/assets/pastry-callout-exact.png"
          alt="Pastry callout"
          style={{ height: "72vh", width: "auto", display: "block" }}
        />
      </section>
    </>
  );
}
