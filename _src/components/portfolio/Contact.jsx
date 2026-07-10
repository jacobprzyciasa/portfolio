import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const SOCIALS = ["Instagram", "Behance", "Vimeo", "LinkedIn"];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-obsidian py-24 md:py-40">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-heading uppercase leading-none text-linen/[0.03]" style={{ fontSize: "clamp(8rem, 30vw, 30rem)" }}>
          Let's Talk
        </span>
      </div>

      <div className="relative mx-auto flex max-w-[1600px] flex-col items-center px-5 text-center md:px-10">
        <p className="mb-4 font-body text-[10px] uppercase tracking-mega text-flare">/ Available for Commissions</p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading uppercase leading-[0.85] text-linen"
          style={{ fontSize: "clamp(3rem, 11vw, 12rem)" }}
        >
          Got a story<br /><span className="text-stroke">worth shooting?</span>
        </motion.h2>

        <p className="mt-8 max-w-lg font-body text-sm leading-relaxed text-khaki">
          Whether it's a campaign, a car, or a character — let's build something with weight. Reach out and let the frames do the talking.
        </p>

        <motion.a
          href="mailto:hello@yourdomain.com"
          data-cursor="viewfinder"
          data-cursor-label="EMAIL"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group mt-10 flex items-center gap-4 bg-flare px-8 py-5 text-obsidian"
        >
          <Mail size={20} />
          <span className="font-heading text-lg uppercase tracking-wide">Start a Project</span>
          <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {SOCIALS.map((s) => (
            <a
              key={s}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative font-body text-[11px] uppercase tracking-mega text-khaki transition-colors hover:text-linen"
            >
              {s}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-flare transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}