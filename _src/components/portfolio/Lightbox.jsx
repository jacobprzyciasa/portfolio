import { motion } from "framer-motion";
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ photos, index, onClose, onNav }) {
  const photo = photos[index];

  useEffect(() => {
    const key = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onNav((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", key);
      document.body.style.overflow = "";
    };
  }, [index, photos.length, onClose, onNav]);

  return (
    <motion.div
      className="fixed inset-0 z-[9500] flex items-center justify-center bg-obsidian/95 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button onClick={onClose} aria-label="Close" className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-linen/30 text-linen transition-colors hover:border-flare hover:bg-flare hover:text-obsidian">
        <X size={18} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNav((index - 1 + photos.length) % photos.length); }}
        aria-label="Previous"
        className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-linen/70 transition-colors hover:text-flare md:left-8"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNav((index + 1) % photos.length); }}
        aria-label="Next"
        className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-linen/70 transition-colors hover:text-flare md:right-8"
      >
        <ChevronRight size={28} />
      </button>

      <motion.div
        key={photo.id}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        className="relative px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={photo.url} alt={`${photo.category} photograph — ${photo.title}`} className="max-h-[78vh] max-w-[90vw] object-contain" />
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 font-body text-[10px] uppercase tracking-mega text-khaki">
          <span className="text-linen">{photo.title}</span>
          <span>ISO {photo.meta.iso}</span>
          <span>{photo.meta.aperture}</span>
          <span>{photo.meta.focal}</span>
          <span className="text-flare">{String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}