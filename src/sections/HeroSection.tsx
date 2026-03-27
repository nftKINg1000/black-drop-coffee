"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* 1. LOGO — top-left, mix-blend-mode: difference */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "48px",
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: "15px",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "white",
          mixBlendMode: "difference",
          pointerEvents: "none",
          zIndex: 10,
          whiteSpace: "pre",
        }}
      >
        {"BLACK\nDROP\nCOFFEE"}
      </div>

      {/* 2. CUP VIDEO — centered, gentle Y-axis rock animation */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          src="/antigravity_assets/hero_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            height: "72vh",
            width: "auto",
            objectFit: "contain",
            animation: "rotateCup 12s ease-in-out infinite",
          }}
        />
      </div>

      {/* 3. FOOTER NAV — pinned to bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "28px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          color: "white",
          mixBlendMode: "difference",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        {/* Left EN Column */}
        <div
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.08em",
            lineHeight: 2,
            textAlign: "left",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <span>Roastery</span>
            <span>Sales</span>
            <span>Website</span>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <span>For Business</span>
            <span>Branches</span>
            <span>Social Media</span>
            <span>Inquiries</span>
          </div>
        </div>

        {/* Right AR Column */}
        <div
          dir="rtl"
          style={{
            fontFamily: "'Tajawal', sans-serif",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.08em",
            lineHeight: 2,
            textAlign: "right",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <span>موقع الكتروني</span>
            <span>المبيعات</span>
            <span>مبيعات المحمصة</span>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <span>للاستفسارات</span>
            <span>فروعنا</span>
            <span>تواصل اجتماعي</span>
            <span>للتواصل</span>
          </div>
        </div>

      </div>
    </section>
  );
}
