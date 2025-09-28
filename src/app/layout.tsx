import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display, Bodoni_Moda } from "next/font/google";
import { MouseSpotlight } from "@/components/anim/MouseSpotlight";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic", "normal"],
});
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-accent",
  style: ["italic", "normal"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Memoray — creating memorays",
  description:
    "Memoray helps people and caregivers with face recognition, safe zones, and daily reminders—creating memorays with confidence and care.",
  openGraph: {
    title: "Memoray",
    description: "Memory support, made personal. With Ray-Ban Meta glasses integration.",
    type: "website",
  },
  keywords: "memory care, reminders, safe zones, face recognition, Ray-Ban Meta, caregiving, Alzheimer's support",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Keep bg-hero for the soft page glow */}
      <body className={`${inter.variable} ${playfair.variable} ${bodoni.variable} bg-hero min-h-dvh`}>
        {/* Spotlight sits “under” the main content via CSS ::after */}
        <MouseSpotlight />
        {/* Ensure your page content stays above the spotlight (z-index) */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
