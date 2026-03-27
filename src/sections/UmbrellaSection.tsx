"use client";

import React, { useState } from "react";

export default function UmbrellaSection() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [numFocus, setNumFocus] = useState(false);

  return (
    <section
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "72px",
        padding: "80px 0",
        boxSizing: "border-box",
      }}
    >
      {/* UMBRELLA IMAGE — upright, static, centered */}
      <img
        src="/assets/umbrella-exact.png"
        alt=""
        style={{
          width: "280px",
          height: "auto",
          display: "block",
          position: "static",
          transform: "none",
          margin: "0 auto",
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
        {/* Email row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              color: "#999999",
              width: "56px",
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
              width: "280px",
              padding: "11px 22px",
              border: `1px solid ${emailFocus ? "#000000" : "#cccccc"}`,
              borderRadius: "999px",
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "13px",
              color: "#1a1a1a",
              background: "#ffffff",
              outline: "none",
              transition: "border-color 200ms",
            }}
          />
        </div>

        {/* Number row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              color: "#999999",
              width: "56px",
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
              width: "280px",
              padding: "11px 22px",
              border: `1px solid ${numFocus ? "#000000" : "#cccccc"}`,
              borderRadius: "999px",
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "13px",
              color: "#1a1a1a",
              background: "#ffffff",
              outline: "none",
              transition: "border-color 200ms",
            }}
          />
        </div>
      </div>
    </section>
  );
}
