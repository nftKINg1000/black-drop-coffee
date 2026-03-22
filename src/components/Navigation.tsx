"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function Navigation() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <>
      {/* Top Left Logo */}
      <div className="fixed top-8 left-8 z-50">
        <h1 className="text-3xl font-bold tracking-tighter leading-none">
          BLACK<br />DROP
          <span className="block text-[10px] tracking-[0.3em] font-sans font-medium mt-1">COFFEE</span>
        </h1>
      </div>

      {/* Top Right Toggle */}
      <div className="fixed top-8 right-8 z-50 flex items-center gap-4">
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/20 transition-all text-xs font-semibold tracking-wider uppercase"
        >
          <Globe className="w-4 h-4" />
          {language === "en" ? "ARABIC" : "ENGLISH"}
        </button>
      </div>

      {/* Dynamic Navigation Footer (English) */}
      <div className="fixed bottom-8 left-8 z-50 flex gap-8 text-[10px] font-sans tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
        <div className="flex flex-col gap-1">
          <span className="font-bold mb-2">Roastery</span>
          <span>For Business</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold mb-2">Sales</span>
          <span>Branches</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold mb-2">Website</span>
          <span>Social Media</span>
        </div>
        <div className="flex flex-col gap-1 hidden md:flex">
          <span className="font-bold mb-2">Inquiries</span>
          <span>Contact Us</span>
        </div>
      </div>

      {/* Dynamic Navigation Footer (Arabic) */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-8 text-[10px] font-sans tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity text-right">
        <div className="flex flex-col gap-1 hidden md:flex">
          <span className="font-bold mb-2">للاستفسارات</span>
          <span>تواصل</span>
        </div>
         <div className="flex flex-col gap-1">
          <span className="font-bold mb-2">مواقع</span>
          <span>فروعنا</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold mb-3">المبيعات</span>
          <span>تواصل اجتماعي</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold mb-2">المحمصة</span>
          <span>خدماتنا</span>
        </div>
      </div>
    </>
  );
}
