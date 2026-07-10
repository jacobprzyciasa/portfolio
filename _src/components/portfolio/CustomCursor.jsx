import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 600, damping: 35, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 35, mass: 0.4 });
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setVisible(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target.closest("[data-cursor='viewfinder']");
      setActive(!!el);
      setLabel(el?.dataset?.cursorLabel || "");
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex items-center justify-center border border-linen/70"
        animate={{
          width: active ? 110 : 16,
          height: active ? 110 : 16,
          backgroundColor: active ? "rgba(217,58,38,0.12)" : "rgba(15,15,15,0)",
          borderColor: active ? "#D93A26" : "rgba(232,226,217,0.7)"
        }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
      >
        {active && (
          <>
            <span className="absolute left-0 top-1/2 h-px w-3 -translate-x-1/2 bg-flare" />
            <span className="absolute right-0 top-1/2 h-px w-3 translate-x-1/2 bg-flare" />
            <span className="absolute top-0 left-1/2 w-px h-3 -translate-y-1/2 bg-flare" />
            <span className="absolute bottom-0 left-1/2 w-px h-3 translate-y-1/2 bg-flare" />
            {label && (
              <span className="font-body text-[9px] uppercase tracking-mega text-flare">
                {label}
              </span>
            )}
          </>
        )}
      </motion.div>
    </motion.div>
  );
}