"use client";

import React, { useState } from "react";

export default function UmbrellaSection() {
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusNumber, setFocusNumber] = useState(false);

  return (
    <section 
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
      className="w-full bg-white text-black snap-start shrink-0"
    >
      
      {/* Umbrella image block */}
      <img src="/assets/umbrella-exact.png"
           alt="Umbrella Reference"
           style={{ width: "280px", height: "auto", display: "block", margin: "0 auto 64px auto", position: "static" }} 
      />

      {/* Contact Form */}
      <div style={{ width: "280px", display: "flex", flexDirection: "column", gap: "24px" }}>
         
         <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#888", letterSpacing: "0.1em" }}>
               Email
            </label>
            <input 
              type="text" 
              placeholder="iblackdrop@trymore.com"
              onFocus={() => setFocusEmail(true)}
              onBlur={() => setFocusEmail(false)}
              style={{
                border: `1px solid ${focusEmail ? "#000" : "#d0d0d0"}`,
                borderRadius: "999px",
                padding: "10px 20px",
                width: "280px",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                outline: "none",
                background: "transparent",
                color: "#000"
              }}
              className="placeholder-[#bbb]"
            />
         </div>

         <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#888", letterSpacing: "0.1em" }}>
               Number
            </label>
            <input 
              type="text" 
              placeholder="0500000000"
              onFocus={() => setFocusNumber(true)}
              onBlur={() => setFocusNumber(false)}
              style={{
                border: `1px solid ${focusNumber ? "#000" : "#d0d0d0"}`,
                borderRadius: "999px",
                padding: "10px 20px",
                width: "280px",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                outline: "none",
                background: "transparent",
                color: "#000"
              }}
              className="placeholder-[#bbb]"
            />
         </div>

         <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", marginTop: "4px" }}>
            <button 
              style={{ fontFamily: "var(--font-body)", fontSize: "12px", cursor: "pointer", background: "none", border: "none", padding: 0, color: "#000" }}
              className="hover:opacity-50 transition-opacity"
            >
               Send &rarr;
            </button>
         </div>

      </div>

    </section>
  );
}
