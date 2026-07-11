"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Marquee({
  children,
  speed = 30,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.querySelectorAll("[data-marquee-clone='true']").forEach((clone) => clone.remove());

    const originalItems = Array.from(track.children);
    originalItems.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.dataset.marqueeClone = "true";
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });

    originalItems.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.dataset.marqueeClone = "true";
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });

    let x = 0;
    let previousTime = performance.now();
    let animationFrame: number;

    const step = (time: number) => {
      const delta = time - previousTime;
      previousTime = time;

      const first = track.children[0] as HTMLElement | undefined;
      const last = track.children[track.children.length - 1] as HTMLElement | undefined;

      if (first) {
        const firstWidth = first.offsetWidth;
        const pixelsPerMillisecond = firstWidth / (speed * 1000);

        if (reverse) {
          x += pixelsPerMillisecond * delta;

          if (last && x >= 0) {
            track.insertBefore(last, first);
            x -= last.offsetWidth;
          }
        } else {
          x -= pixelsPerMillisecond * delta;

          if (Math.abs(x) >= firstWidth) {
            track.appendChild(first);
            x += firstWidth;
          }
        }

        track.style.transform = `translateX(${x}px)`;
      }

      animationFrame = requestAnimationFrame(step);
    };

    if (reverse) {
      const last = track.children[track.children.length - 1] as HTMLElement | undefined;
      x = last ? -last.offsetWidth : 0;
      track.style.transform = `translateX(${x}px)`;
    }

    animationFrame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrame);
      track.querySelectorAll("[data-marquee-clone='true']").forEach((clone) => clone.remove());
      track.style.transform = "";
    };
  }, [reverse, speed]);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        ref={trackRef}
        className="inline-flex will-change-transform"
      >
        <span className="flex shrink-0">{children}</span>
      </div>
    </div>
  );
}
