"use client";

import React, { useState } from "react";

export default function UmbrellaSection() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [numFocus, setNumFocus] = useState(false);

  const inputStyle = (focused: boolean): React.CSSProperties => ({
    width: "260px",
    padding: "10px 20px",
    border: `1px solid ${focused ? "#000000" : "#cccccc"}`,
    borderRadius: "999px",
    fontSize: "13px",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    outline: "none",
    background: "#fff",
    color: "#000",
    transition: "border-color 0.2s",
  });

  const labelStyle: React.CSSProperties = {
    fontSize: "11px",
    fontWeight: 400,
    letterSpacing: "0.1em",
    color: "#999",
    width: "52px",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  };

  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ffffff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "64px",
      }}
    >
      {/* Umbrella image — static, in normal flow */}
      <img
        src="/assets/umbrella-exact.png"
        alt="Black Drop Coffee umbrella"
        style={{ width: "260px", height: "auto", display: "block" }}
      />

      {/* Contact form */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="iblackdrop@trymore.com"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            style={inputStyle(emailFocus)}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <label style={labelStyle}>Number</label>
          <input
            type="tel"
            placeholder="0500000000"
            onFocus={() => setNumFocus(true)}
            onBlur={() => setNumFocus(false)}
            style={inputStyle(numFocus)}
          />
        </div>

        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", paddingRight: "0px" }}>
          <button
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.05em",
              color: "#000",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              opacity: 1,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.4")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Send →
          </button>
        </div>
      </div>
    </section>
  );
}
