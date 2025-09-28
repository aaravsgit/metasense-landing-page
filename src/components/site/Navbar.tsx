"use client";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="section flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,.6)]" />
          <span className="font-semibold">Memoray</span>
        </Link>

        <nav className="hidden gap-8 text-sm text-white/70 md:flex">
          <a href="#how-it-works" className="hover:text-white">How it works</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#get" className="btn-primary">Get Started</a>
        </div>
      </div>
    </header>
  );
}
