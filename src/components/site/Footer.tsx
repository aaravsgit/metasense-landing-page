export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 py-10">
      <div className="section flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/70" />
          <span>MetaSense</span>
        </div>
        <div>
          Prototype for ShellHacks • Not medical advice
        </div>
      </div>
    </footer>
  );
}
