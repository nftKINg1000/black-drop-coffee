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
        background: "#ffffff",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "56px",
        overflow: "hidden",
      }}
    >
      {/* UMBRELLA — full-section background, faded */}
      <img
        src="/assets/umbrella-exact.png"
        alt=""
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -56%)",
          width: "520px",
          height: "auto",
          opacity: 0.09,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* SPINNING CUP VIDEO — square crop, centered */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "260px",
          height: "260px",
          overflow: "hidden",
          borderRadius: 0,
        }}
      >
        <video
          src="/antigravity_assets/hero_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            height: "340px",
            width: "auto",
            animation: "slowSpin 14s linear infinite",
          }}
        />
      </div>

      {/* CONTACT FORM */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        {/* Email */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <label
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.18em",
              color: "#888888",
              width: "64px",
              textAlign: "right",
              textTransform: "uppercase",
            }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="iblackdrop@trymore.com"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            style={{
              width: "300px",
              padding: "13px 22px",
              border: `1px solid ${emailFocus ? "#000000" : "#d8d8d8"}`,
              borderRadius: "999px",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "#1a1a1a",
              background: "#ffffff",
              outline: "none",
              letterSpacing: "0.04em",
              transition: "border-color 200ms",
            }}
          />
        </div>

        {/* Number */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <label
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.18em",
              color: "#888888",
              width: "64px",
              textAlign: "right",
              textTransform: "uppercase",
            }}
          >
            Number
          </label>
          <input
            type="tel"
            placeholder="0500000000"
            onFocus={() => setNumFocus(true)}
            onBlur={() => setNumFocus(false)}
            style={{
              width: "300px",
              padding: "13px 22px",
              border: `1px solid ${numFocus ? "#000000" : "#d8d8d8"}`,
              borderRadius: "999px",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "#1a1a1a",
              background: "#ffffff",
              outline: "none",
              letterSpacing: "0.04em",
              transition: "border-color 200ms",
            }}
          />
        </div>
      </div>
    </section>
  );
}
