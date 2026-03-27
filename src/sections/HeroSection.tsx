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
      {/* LOGO — top-left */}
      <div
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "0.1em",
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

      {/* HERO VIDEO — centered, no animation, no transform */}
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
            display: "block",
            transform: "none",
            animation: "none",
          }}
        />
      </div>

      {/* FOOTER NAV — text only, no video, two columns */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "28px 48px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 10,
        }}
      >
        {/* Left — EN */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            letterSpacing: "0.08em",
            lineHeight: 2.2,
            color: "#ffffff",
            mixBlendMode: "difference",
          }}
        >
          <div style={{ display: "flex", gap: "28px" }}>
            <span>Roastery</span>
            <span>Sales</span>
            <span>Website</span>
          </div>
          <div style={{ display: "flex", gap: "28px" }}>
            <span>For Business</span>
            <span>Branches</span>
            <span>Social Media</span>
            <span>Inquiries</span>
          </div>
        </div>

        {/* Right — AR */}
        <div
          dir="rtl"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            fontFamily: "'Tajawal', sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            letterSpacing: "0.04em",
            lineHeight: 2.2,
            color: "#ffffff",
            mixBlendMode: "difference",
            textAlign: "right",
          }}
        >
          <div style={{ display: "flex", gap: "28px" }}>
            <span>مبيعات المحمصة</span>
            <span>المبيعات</span>
            <span>موقع الكتروني</span>
          </div>
          <div style={{ display: "flex", gap: "28px" }}>
            <span>للتواصل</span>
            <span>تواصل اجتماعي</span>
            <span>فروعنا</span>
            <span>للاستفسارات</span>
          </div>
        </div>
      </div>
    </section>
  );
}
