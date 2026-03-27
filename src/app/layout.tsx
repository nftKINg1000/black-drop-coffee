import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700", "900"], variable: "--font-sans" });
const arabicFont = Tajawal({ weight: ['400', '500', '700'], subsets: ["arabic"], variable: "--font-arabic" });

export const metadata: Metadata = {
  title: "Black Drop Coffee",
  description: "Minimal. White-background. Typographic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${arabicFont.variable}`}>
      <body className="antialiased bg-white text-black selection:bg-black selection:text-white cursor-none font-sans">
        <LanguageProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
