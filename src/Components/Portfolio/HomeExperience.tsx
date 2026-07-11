"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import type { Photo } from "@/utils/photos";
import CustomCursor from "./CustomCursor";
import Marquee from "./Marquee";
import ShutterReveal from "./ShutterReveal";
import SiteNav from "./SiteNav";
import me from "../../../public/me.jpg"
import hero from "../../../public/baner.jpg"

const CATEGORY_LABELS: Record<string, string> = {
  "/people": "People",
  "/cars": "Cars",
  "/places": "Places",
};

function getCategoryLabel(photo: Photo) {
  if (!photo.category) {
    return "Archive";
  }

  if (photo.category.startsWith("/events")) {
    return "Events";
  }

  if (photo.category.startsWith("/clients")) {
    return "Clients";
  }

  return CATEGORY_LABELS[photo.category] ?? "Archive";
}

function getSpan(index: number) {
  const spans = [
    "col-span-2 row-span-2 md:col-span-7 md:row-span-4",
    "col-span-1 row-span-1 md:col-span-3 md:row-span-2",
    "col-span-1 row-span-1 md:col-span-5 md:row-span-2",
    "col-span-1 row-span-2 md:col-span-4 md:row-span-3",
    "col-span-1 row-span-1 md:col-span-3 md:row-span-2",
    "col-span-2 row-span-1 md:col-span-5 md:row-span-2",
    "col-span-1 row-span-1 md:col-span-4 md:row-span-2",
    "col-span-1 row-span-2 md:col-span-3 md:row-span-3",
    "col-span-2 row-span-1 md:col-span-5 md:row-span-2",
  ];

  return spans[index % spans.length];
}

export default function HomeExperience({ photos }: { photos: Photo[] }) {
  const [scrollY, setScrollY] = useState(0);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(photos.map(getCategoryLabel)))],
    [photos]
  );

  const visible = useMemo(
    () => photos.filter((photo) => filter === "All" || getCategoryLabel(photo) === filter),
    [filter, photos]
  );

  const heroImage = hero ?? "/baner.jpg";
  const aboutImage = me ?? "/me.jpg";

  return (
    <main id="top" className="portfolio-shell grain min-h-screen bg-obsidian text-linen">
      <CustomCursor />
      <ShutterReveal />
      <SiteNav />

      <section className="relative h-[100svh] w-full overflow-hidden">
        <div
          className="absolute inset-0 scale-[1.08]"
          style={{ transform: `translateY(${scrollY * 0.28}px) scale(1.08)` }}
        >
          <Image
            src={heroImage}
            alt="Jakub Przyciasa portfolio hero photo"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-obsidian/60" />
        </div>

        <div
          className="relative z-10 flex h-full flex-col justify-between p-6 transition-opacity duration-300 md:p-10"
          style={{ opacity: Math.max(0, 1 - scrollY / 760) }}
        >
          <div className="flex justify-center font-body text-[10px] uppercase tracking-mega text-khaki">
            <span className="hidden sm:block">Kraków / Worldwide</span>
          </div>

          <div className="portfolio-hero-copy">
            <h1 className="font-heading uppercase leading-[0.82] text-linen">
              Jacob
              <br />
              <span className="text-stroke">Przyciasa</span>
            </h1>
            <p className="mt-5 max-w-md font-body text-xs leading-relaxed text-khaki md:text-sm">
              Dive into my world with magnificent shots and works that are full of incredible stories.
            </p>
          </div>

          <div className="flex items-end justify-between gap-8">
            <a
              href="#gallery"
              data-cursor="viewfinder"
              data-cursor-label="ENTER"
              className="group flex items-center gap-4 font-body text-[11px] uppercase tracking-mega text-linen"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-linen/40 transition-all duration-300 group-hover:border-flare group-hover:bg-flare">
                <span className="block relative -top-0.5 h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 border-linen transition-colors group-hover:border-obsidian" />
              </span>
              Enter the archive
            </a>
            <div className="portfolio-scroll-cue font-body text-[10px] uppercase tracking-mega text-khaki">
              Scroll
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-linen/10 bg-flare py-4 text-obsidian">
        <Marquee speed={28}>
          <span className="flex items-center">
            {["Creativity", "Story", "Passion", "Work", "Build", "Art"].map((label) => (
              <span key={label} className="flex items-center">
                <span className="px-20 font-heading text-lg uppercase tracking-wide">{label}</span>
                <span className="text-2xl">/</span>
              </span>
            ))}
          </span>
        </Marquee>
      </div>

      <section id="gallery" className="relative bg-obsidian py-20 md:py-32">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-5 md:flex-row md:px-10">
          <aside className="md:w-52 md:shrink-0">
            <p className="mb-4 font-body text-[10px] uppercase tracking-mega text-khaki">
              Filter / Index
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`group relative font-heading text-2xl uppercase leading-none tracking-wide transition-colors md:text-3xl ${
                    filter === category ? "text-flare" : "text-linen/40 hover:text-linen"
                  }`}
                >
                  {category}
                  <span className="ml-2 align-super font-body text-[9px] text-khaki">
                    {category === "All"
                      ? photos.length
                      : photos.filter((photo) => getCategoryLabel(photo) === category).length}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-8 flex items-baseline justify-between border-b border-linen/10 pb-4">
              <h2 className="font-heading text-4xl uppercase leading-none text-linen md:text-6xl">
                Selected Work
              </h2>
              <span className="font-body text-[10px] uppercase tracking-mega text-khaki">
                {visible.length} Frames
              </span>
            </div>

            <div className="grid auto-rows-[150px] grid-cols-2 grid-flow-dense gap-2 md:auto-rows-[200px] md:grid-cols-12 md:gap-3">
              {visible.map((photo, index) => (
                <Link
                  key={photo.id}
                  href={photo.category ?? "#gallery"}
                  data-cursor="viewfinder"
                  data-cursor-label="OPEN"
                  className={`portfolio-gallery-card group relative overflow-hidden bg-secondary ${getSpan(index)}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    unoptimized
                    sizes="(max-width: 768px) 50vw, 60vw"
                    className="object-cover grayscale-[25%] brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="font-heading text-lg uppercase leading-none tracking-wide text-linen">
                      {getCategoryLabel(photo)}
                    </p>
                    <p className="mt-1 font-body text-[10px] uppercase tracking-mega text-khaki">
                      Frame / {String(photo.id).padStart(3, "0")}
                    </p>
                  </div>
                  <span className="absolute right-3 top-3 font-body text-[9px] uppercase tracking-mega text-linen/40">
                    No {String(index + 1).padStart(3, "0")}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-obsidian py-20 md:py-32">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 md:grid-cols-12 md:gap-16 md:px-10">
          <div className="md:col-span-5">
            <div className="portfolio-reveal relative overflow-hidden">
              <Image
                src={aboutImage}
                alt="Portrait from Jakub Przyciasa portfolio"
                width={900}
                height={1125}
                className="aspect-[4/5] w-full object-cover grayscale-[20%]"
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-gradient-to-t from-obsidian to-transparent p-4 pt-12 font-body text-[9px] uppercase tracking-mega text-khaki">
                <span>The Photographer</span>
                <span>2026</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center md:col-span-7">
            <p className="mb-4 font-body text-[10px] uppercase tracking-mega text-flare">/ About</p>
            <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-khaki">
              Hi, I&apos;m Jacob and I am photographer from Poland. Since the age of 15, I have been creating photos that reflect my style, tell stories and help others in their various projects. I have completed a professional portrait photography course and have been awarded in local and international photography competitions. In my photography journey I had a pleasure to work with firms like Autodrom Sosnowiec, FD Studio, Starway Studio and many others.
            </p>
            <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-khaki">
              If you need the highest quality shots for an event, project or just for fun, feel free to contact me. Together, we will create amazing things!
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-linen/10 pt-8 sm:grid-cols-4">
              {[
                ["6+", "Years behind the lens"],
                ["50+", "Delivered stories"],
                ["Every", "Happy clients"],
                ["∞", "Frames captured"],
              ].map(([value, label]) => (
                <div key={label} className="portfolio-stat">
                  <p className="font-heading text-4xl text-flare md:text-5xl">{value}</p>
                  <p className="mt-1 font-body text-[10px] uppercase tracking-mega text-khaki">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-obsidian py-24 md:py-40">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="font-heading uppercase leading-none text-linen/[0.03] text-[clamp(8rem,30vw,30rem)]">
            Talk
          </span>
        </div>

        <div className="relative mx-auto flex max-w-[1600px] flex-col items-center px-5 text-center md:px-10">
          <p className="mb-4 font-body text-[10px] uppercase tracking-mega text-flare">
            / Ready to shoot
          </p>
          <h2 className="font-heading uppercase leading-[0.85] text-linen text-[clamp(3rem,11vw,12rem)]">
            Got a story
            <br />
            <span className="text-stroke">worth shooting?</span>
          </h2>

          <p className="mt-8 max-w-lg font-body text-sm leading-relaxed text-khaki">
            Whether it is a campaign, a concert, a whip or a portrait session, let&apos;s
            build something with quality.
          </p>

          <Link
            href="/connect"
            data-cursor="viewfinder"
            data-cursor-label="EMAIL"
            className="group mt-10 flex items-center gap-4 bg-flare px-8 py-5 text-obsidian transition-transform duration-300 hover:scale-[1.02]"
          >
            <Mail size={20} />
            <span className="font-heading text-lg uppercase tracking-wide">Start a project</span>
            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
