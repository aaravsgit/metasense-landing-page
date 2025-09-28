export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 py-10">
      <div className="section flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/70" />
          <span>Memoray</span>
          <span className="text-xs">creating memorays</span>
        </div>
        <div className="flex gap-6 text-xs">
          <a href="#" className="hover:text-white/70">Product</a>
          <a href="#" className="hover:text-white/70">Care hub</a>
          <a href="#" className="hover:text-white/70">Support</a>
          <a href="#" className="hover:text-white/70">Privacy</a>
          <a href="#" className="hover:text-white/70">Terms</a>
        </div>
        <div className="text-xs">
          © {new Date().getFullYear()} Memoray. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
