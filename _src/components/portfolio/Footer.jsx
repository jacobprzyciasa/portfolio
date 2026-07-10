import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-linen/10 bg-obsidian px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-heading text-xl uppercase tracking-mega text-linen">A.<span className="text-flare">K</span></span>
          <span className="font-body text-[10px] uppercase tracking-mega text-khaki">© {new Date().getFullYear()} — All Frames Reserved</span>
        </div>

        <div className="flex items-center gap-6 font-body text-[10px] uppercase tracking-mega text-khaki">
          <a href="#gallery" className="transition-colors hover:text-linen">Work</a>
          <a href="#about" className="transition-colors hover:text-linen">About</a>
          <a href="#contact" className="transition-colors hover:text-linen">Contact</a>
        </div>

        <a
          href="#top"
          className="group flex items-center gap-2 font-body text-[10px] uppercase tracking-mega text-linen transition-colors hover:text-flare"
        >
          Back to Top
          <span className="flex h-8 w-8 items-center justify-center border border-linen/30 transition-colors group-hover:border-flare">
            <ArrowUp size={14} />
          </span>
        </a>
      </div>
    </footer>
  );
}