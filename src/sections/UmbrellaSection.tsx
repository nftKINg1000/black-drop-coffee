"use client";

import React, { useState } from "react";

export default function UmbrellaSection() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [numFocus, setNumFocus] = useState(false);

  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "64px",
        padding: "80px 0",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* SPINNING CUP VIDEO — replaces static umbrella */}
      <video
        src="/antigravity_assets/hero_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          height: "340px",
          width: "auto",
          display: "block",
          animation: "spinCupY 6s linear infinite",
          transformOrigin: "center center",
        }}
      />

      {/* CONTACT FORM */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "18px",
        }}
      >
        {/* Email */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.12em",
              color: "#999",
              width: "60px",
              textAlign: "right",
            }}
          >
            Email
          </span>
          <input
            type="email"
            placeholder="iblackdrop@trymore.com"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            style={{
              width: "300px",
              padding: "13px 24px",
              border: `1px solid ${emailFocus ? "#000" : "#cccccc"}`,
              borderRadius: "999px",
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "15px",
              color: "#1a1a1a",
              background: "#fff",
              outline: "none",
              transition: "border-color 200ms",
            }}
          />
        </div>

        {/* Number */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.12em",
              color: "#999",
              width: "60px",
              textAlign: "right",
            }}
          >
            Number
          </span>
          <input
            type="tel"
            placeholder="0500000000"
            onFocus={() => setNumFocus(true)}
            onBlur={() => setNumFocus(false)}
            style={{
              width: "300px",
              padding: "13px 24px",
              border: `1px solid ${numFocus ? "#000" : "#cccccc"}`,
              borderRadius: "999px",
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "15px",
              color: "#1a1a1a",
              background: "#fff",
              outline: "none",
              transition: "border-color 200ms",
            }}
          />
        </div>
      </div>
    </section>
  );
}
