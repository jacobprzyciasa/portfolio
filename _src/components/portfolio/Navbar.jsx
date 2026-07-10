import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { IMAGES } from "./photos";

const LINKS = [
  { label: "Work", href: "#gallery", img: IMAGES.autoMountain },
  { label: "About", href: "#about", img: IMAGES.photographer },
  { label: "Contact", href: "#contact", img: IMAGES.editorial },
  { label: "Instagram", href: "https://instagram.com", img: IMAGES.street },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <nav className="fixed left-0 top-0 z-[8000] flex w-full items-center justify-between p-5 md:p-8">
        <a href="#top" className="font-heading text-xl uppercase tracking-mega text-linen">
          A.<span className="text-flare">K</span>
        </a>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="group flex items-center gap-3 font-body text-[11px] uppercase tracking-mega text-linen"
        >
          <span className="hidden md:inline">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-7 bg-linen transition-all duration-300 group-hover:w-4 group-hover:bg-flare" />
            <span className="block h-px w-7 bg-linen transition-all duration-300 group-hover:w-7 group-hover:bg-flare" />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9500] bg-obsidian"
          >
            <AnimatePresence mode="wait">
              {hovered && (
                <motion.img
                  key={hovered}
                  src={LINKS.find((l) => l.label === hovered)?.img}
                  alt=""
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-obsidian/60" />

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-linen/30 text-linen transition-colors hover:border-flare hover:bg-flare hover:text-obsidian md:right-8 md:top-8"
            >
              <X size={18} />
            </button>

            <div className="relative z-10 flex h-full flex-col justify-center gap-1 p-6 md:p-16">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  onHoverStart={() => setHovered(l.label)}
                  onHoverEnd={() => setHovered(null)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="group flex items-baseline gap-4 font-heading uppercase leading-[0.9] text-linen transition-colors hover:text-flare"
                  style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)" }}
                >
                  <span className="font-body text-xs text-khaki">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}