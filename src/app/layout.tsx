import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Black Drop Coffee | 3D Storytelling Storefront",
  description: "Experience the narrative of premium coffee roasting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-white selection:bg-black selection:text-white cursor-none">
        <LanguageProvider>
          <SmoothScroll>
            <CustomCursor />
            {/* Premium Grain Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
