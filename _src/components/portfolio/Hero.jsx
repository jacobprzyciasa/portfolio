import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero({ heroImage }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={heroImage} alt="Featured cinematic automotive photography in the desert at dusk" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-obsidian/50" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-between p-6 md:p-10">
        <div className="flex justify-between font-body text-[10px] uppercase tracking-mega text-khaki">
          <span>Portfolio · Est. 2014</span>
          <span className="hidden sm:block">34°N · Desert Series</span>
          <span>◉ Rec</span>
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading uppercase leading-[0.82] text-linen"
            style={{ fontSize: "clamp(3.5rem, 14vw, 16rem)" }}
          >
            The<br /><span className="text-stroke">Archive</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.8 }}
            className="mt-5 max-w-md font-body text-xs leading-relaxed text-khaki md:text-sm"
          >
            A visceral catalogue of motion, light, and quiet chaos — captured frame by frame through the lens of a relentless eye.
          </motion.p>
        </div>

        <div className="flex items-end justify-between">
          <a
            href="#gallery"
            data-cursor="viewfinder"
            data-cursor-label="ENTER"
            className="group flex items-center gap-4 font-body text-[11px] uppercase tracking-mega text-linen"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-linen/40 transition-all duration-300 group-hover:border-flare group-hover:bg-flare">
              <span className="block h-2.5 w-2.5 rotate-45 border-r-2 border-b-2 border-linen transition-colors group-hover:border-obsidian" />
            </span>
            Enter the Archive
          </a>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="font-body text-[10px] uppercase tracking-mega text-khaki"
          >
            Scroll ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}