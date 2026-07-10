import { motion } from "framer-motion";
import { IMAGES } from "./photos";

const STATS = [
  { value: "12+", label: "Years Behind the Lens" },
  { value: "240", label: "Published Features" },
  { value: "38", label: "Countries Documented" },
  { value: "∞", label: "Frames Captured" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-obsidian py-20 md:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden"
          >
            <img src={IMAGES.photographer} alt="Portrait of the photographer holding a vintage film camera" className="aspect-[4/5] w-full object-cover grayscale-[20%]" />
            <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-gradient-to-t from-obsidian to-transparent p-4 pt-12 font-body text-[9px] uppercase tracking-mega text-khaki">
              <span>The Photographer</span>
              <span>2025</span>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col justify-center md:col-span-7">
          <p className="mb-4 font-body text-[10px] uppercase tracking-mega text-flare">/ About</p>
          <h2 className="font-heading text-4xl uppercase leading-[0.9] text-linen md:text-7xl">
            Chasing light<br />through the noise.
          </h2>
          <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-khaki">
            I'm a photographer drawn to friction — the moment motion meets stillness, where grit and grace collide.
            From dust-blown desert highways to the hush of an industrial warehouse, my work lives in the space between
            control and chaos. Every frame is a decision never to be made twice.
          </p>
          <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-khaki">
            Available for automotive, editorial, and portrait commissions worldwide.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-linen/10 pt-8 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-heading text-4xl text-flare md:text-5xl">{s.value}</p>
                <p className="mt-1 font-body text-[10px] uppercase tracking-mega text-khaki">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}