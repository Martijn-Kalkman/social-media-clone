const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs text-white/60">
        <span>copyright {currentYear} Social Media Clone</span>
      </div>
    </footer>
  );
}