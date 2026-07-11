"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";
import logo_linen from "../../../public/jp_linen.png"

const LINKS = [
  { label: "Work", href: "/#gallery", image: "/home/3.jpg" },
  { label: "People", href: "/people", image: "/people/1.jpg" },
  { label: "Events", href: "/events", image: "/events/FD_Studio/banner_1.jpg" },
  { label: "Cars", href: "/cars", image: "/cars/1.jpg" },
  { label: "Places", href: "/places", image: "/places/1.jpg" },
  { label: "Clients", href: "/clients", image: "/clients/Autodrom_Sosnowiec/banner_1.jpg" },
  { label: "Contact", href: "/connect", image: "/me.jpg" },
];

export default function SiteNav({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(LINKS[0]);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-[8000] flex w-full items-center justify-between p-5 transition-colors duration-300 md:p-8 ${
          solid ? "bg-obsidian/85 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Link href="/" className="font-heading text-xl uppercase tracking-mega text-linen">
          <Image
            src={logo_linen}
            alt="Logo"
            className="w-10"
          />
        </Link>
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

      {open && (
        <div className="portfolio-menu fixed inset-0 z-[9500] bg-obsidian">
          <Image
            key={hovered.label}
            src={hovered.image}
            alt=""
            fill
            sizes="100vw"
            className="portfolio-menu__image object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-obsidian/60" />

          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute right-5 top-5 z-40 flex h-11 w-11 items-center justify-center border border-linen/30 text-linen transition-colors hover:border-flare hover:bg-flare hover:text-obsidian md:right-8 md:top-8"
          >
            <X size={18} />
          </button>

          <div className="relative z-10 flex h-full flex-col justify-center gap-1 p-6 md:p-16">
            {LINKS.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                onMouseEnter={() => setHovered(link)}
                className="portfolio-menu__link group flex items-baseline gap-4 font-heading uppercase leading-[0.9] text-linen transition-colors hover:text-flare"
                style={{ animationDelay: `${0.08 + index * 0.05}s` }}
              >
                <span className="font-body text-xs text-khaki">0{index + 1}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
