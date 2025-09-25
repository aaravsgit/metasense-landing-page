import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "MetaSense — Memory assistance for everyday life",
  description:
    "MetaSense uses Ray-Ban Meta glasses to recognize familiar faces, give gentle prompts, and help practice memory — with optional speech screening for early Alzheimer’s indicators.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* These variables make fonts available to CSS */}
      <body className={`${inter.variable} ${playfair.variable} bg-hero min-h-dvh`}>
        {children}
      </body>
    </html>
  );
}
