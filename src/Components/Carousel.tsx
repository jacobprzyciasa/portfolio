"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { clientLogos } from "@/config/media";

const images = clientLogos;

export default function InfiniteCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate content for continuous scroll
    const totalItems = [...track.children];
    totalItems.forEach((item) => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });

    totalItems.forEach((item) => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });

    let x = 0;
    const speed = 0.5; // pixels per frame
    let animationFrame: number;

    const step = () => {
      x -= speed;

      // when first child fully leaves viewport → move it to end
      const first = track.children[0] as HTMLElement;
      if (first) {
        const firstWidth = first.offsetWidth + 160; // 80px = gap-20 * 4px base spacing
        if (Math.abs(x) >= firstWidth) {
          track.appendChild(first);
          x += firstWidth;
        }
      }

      track.style.transform = `translateX(${x}px)`;
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-20">
      <div
        ref={trackRef}
        className="carousel-track flex gap-40 will-change-transform"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative shrink-0 w-64 h-40 rounded-xl overflow-hidden"
          >
            <Image
              src={src}
              alt={`Carousel image ${i + 1}`}
              fill
              sizes="256px"
              className={`object-contain w-full brightness-100 ${i == 1 && ' '}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
