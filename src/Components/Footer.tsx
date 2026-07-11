import ContactForm from "./ContactForm";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-obsidian px-5 py-20 text-linen md:px-10 md:py-28">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-heading text-[clamp(7rem,24vw,24rem)] uppercase leading-none text-linen/[0.03]">
          Contact
        </span>
      </div>

      <div className="relative mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <p className="mb-4 font-body text-[10px] uppercase tracking-mega text-flare">
            / Collaboration
          </p>
          <h2 className="font-heading text-5xl uppercase leading-[0.9] text-linen md:text-7xl">
            Let&apos;s make
            <br />
            some shots.
          </h2>
          <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-khaki">
            If you want to collaborate, need a photoshoot, or want to build a visual
            story around your project, hit me up.
          </p>
          <a
            href="https://www.instagram.com/jacobprzyciasa"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-mega text-khaki transition-colors hover:text-flare"
          >
            <span>Instagram</span>
            <FaInstagram />
          </a>
        </div>

        <div className="self-end">
          <ContactForm />
        </div>
      </div>
    </footer>
  );
}
