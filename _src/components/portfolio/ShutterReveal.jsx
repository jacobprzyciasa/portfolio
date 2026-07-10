import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ShutterReveal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex" aria-hidden="true">
      <motion.div
        className="flex h-full w-1/2 items-center justify-end bg-obsidian"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
      >
        <span className="font-body text-[10px] uppercase tracking-mega text-khaki/60 pr-4">
          ◉ REC
        </span>
      </motion.div>
      <motion.div
        className="flex h-full w-1/2 items-center bg-obsidian"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
      >
        <span className="font-heading text-[10px] uppercase tracking-mega text-khaki/60 pl-4">
          ISO 400 · F/2.8
        </span>
      </motion.div>
    </div>
  );
}