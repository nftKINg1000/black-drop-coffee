"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, any> = {
  en: {
    heroTitle: "BLACK DROP COFFEE",
    heroSubtitle: "Brewed for Perfection",
    productTitle: "Premium Coffee Bag",
    productDesc: "Colombia with lychee notes. Soft balance. Clean taste.",
    ingredientsTitle: "PASTRY CRAFT",
    crust: "Crispy Crust",
    almond: "Toasted Almond",
    sugar: "Powdered Sugar",
    bookingTitle: "Book Catering",
    bookingDesc: "Reserve our specialty coffee service for your event.",
    addToCart: "Add to Cart",
    navRoastery: "Roastery",
    navSales: "Sales",
    navWebsite: "Website",
    navInquiries: "Inquiries",
  },
  ar: {
    heroTitle: "بلاك دروب كوفي",
    heroSubtitle: "مُعدّة بإتقان",
    productTitle: "كيس قهوة فاخر",
    productDesc: "كولومبيا بنفحات ليتشي. توازن ناعم. مذاق نظيف.",
    ingredientsTitle: "عجينة الفطائر",
    crust: "قشرة مقرمشة",
    almond: "لوز محمص",
    sugar: "سكر بودرة",
    bookingTitle: "حجز تموين",
    bookingDesc: "احجز خدمة القهوة المختصة لمناسبتك.",
    addToCart: "أضف إلى السلة",
    navRoastery: "المحمصة",
    navSales: "المبيعات",
    navWebsite: "الموقع الإلكتروني",
    navInquiries: "للاستفسارات",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
