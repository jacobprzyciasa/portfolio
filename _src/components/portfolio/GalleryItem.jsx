import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function GalleryItem({ photo, index, onClick }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 18 });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <motion.button
      ref={ref}
      layout
      data-cursor="viewfinder"
      data-cursor-label="VIEW"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
      className={`group relative overflow-hidden bg-secondary ${photo.span} cursor-pointer`}
    >
      <img
        src={photo.url}
        alt={`${photo.category} photograph — ${photo.title}`}
        loading="lazy"
        className="h-full w-full object-cover grayscale-[25%] brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-heading text-lg uppercase leading-none tracking-wide text-linen">{photo.title}</p>
        <p className="mt-1 font-body text-[10px] uppercase tracking-mega text-khaki">{photo.category} · {photo.meta.focal}</p>
      </div>
      <span className="absolute right-3 top-3 font-body text-[9px] uppercase tracking-mega text-linen/40">№{String(index + 1).padStart(3, "0")}</span>
    </motion.button>
  );
}