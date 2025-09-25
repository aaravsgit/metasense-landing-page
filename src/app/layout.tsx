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
  title: "MetaSense — Memory assistance for everyday life",
  description:
    "MetaSense uses Ray-Ban Meta glasses to recognize familiar faces, give gentle prompts, and help practice memory — with optional speech screening for early indicators.",
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
