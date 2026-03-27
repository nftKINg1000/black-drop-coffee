"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* A. LOGO */}
      <div
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#ffffff",
          mixBlendMode: "difference",
          position: "absolute",
          top: "40px",
          left: "48px",
          zIndex: 10,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        BLACK<br />DROP<br />COFFEE
      </div>

      {/* B. CUP VIDEO — centered, gently rocks */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/antigravity_assets/hero_video.mp4"
          style={{
            height: "80vh",
            width: "auto",
            objectFit: "contain",
            animation: "cupRock 8s ease-in-out infinite",
          }}
        />
      </div>

      {/* C. FOOTER NAV */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "28px 48px",
          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          mixBlendMode: "difference",
          pointerEvents: "none",
        }}
      >
        {/* Left – EN */}
        <div
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.07em",
            color: "#ffffff",
            lineHeight: 2,
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <span>Roastery</span>
            <span>Sales</span>
            <span>Website</span>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <span>For Business</span>
            <span>Branches</span>
            <span>Social Media</span>
            <span>Inquiries</span>
          </div>
        </div>

        {/* Right – AR */}
        <div
          dir="rtl"
          style={{
            fontFamily: "'Tajawal', sans-serif",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.07em",
            color: "#ffffff",
            lineHeight: 2,
            textAlign: "right",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <span>موقع الكتروني</span>
            <span>المبيعات</span>
            <span>مبيعات المحمصة</span>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
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
