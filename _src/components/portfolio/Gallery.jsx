import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PHOTOS, CATEGORIES } from "./photos";
import GalleryItem from "./GalleryItem";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visible = PHOTOS.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="gallery" className="relative bg-obsidian py-20 md:py-32">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-5 md:flex-row md:px-10">
        {/* Filter sidebar */}
        <aside className="md:w-48 md:shrink-0">
          <p className="mb-4 font-body text-[10px] uppercase tracking-mega text-khaki md:rotate-0">Filter / Index</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`group relative font-heading text-2xl uppercase leading-none tracking-wide transition-colors md:text-3xl ${
                  filter === cat ? "text-flare" : "text-linen/40 hover:text-linen"
                }`}
              >
                {cat}
                <span className="ml-2 align-super font-body text-[9px] text-khaki">
                  {cat === "All" ? PHOTOS.length : PHOTOS.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          <div className="mb-8 flex items-baseline justify-between border-b border-linen/10 pb-4">
            <h2 className="font-heading text-4xl uppercase leading-none text-linen md:text-6xl">Selected Work</h2>
            <span className="font-body text-[10px] uppercase tracking-mega text-khaki">{visible.length} Frames</span>
          </div>
          <div className="grid grid-cols-2 auto-rows-[150px] grid-flow-dense gap-2 md:grid-cols-12 md:auto-rows-[200px] md:gap-3">
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => (
                <GalleryItem key={p.id} photo={p} index={i} onClick={() => setLightboxIndex(i)} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox photos={visible} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNav={setLightboxIndex} />
        )}
      </AnimatePresence>
    </section>
  );
}