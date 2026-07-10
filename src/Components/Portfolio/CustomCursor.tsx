"use client";

import { useEffect, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  active: boolean;
  label: string;
  visible: boolean;
};

export default function CustomCursor() {
  const [cursor, setCursor] = useState<CursorState>({
    x: -200,
    y: -200,
    active: false,
    label: "",
    visible: false,
  });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const element = target?.closest<HTMLElement>("[data-cursor='viewfinder']");

      setCursor({
        x: event.clientX,
        y: event.clientY,
        active: Boolean(element),
        label: element?.dataset.cursorLabel ?? "",
        visible: true,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!cursor.visible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`portfolio-cursor ${cursor.active ? "is-active" : ""}`}
      style={{
        transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      {cursor.active && (
        <>
          <span className="portfolio-cursor__tick portfolio-cursor__tick--left" />
          <span className="portfolio-cursor__tick portfolio-cursor__tick--right" />
          <span className="portfolio-cursor__tick portfolio-cursor__tick--top" />
          <span className="portfolio-cursor__tick portfolio-cursor__tick--bottom" />
          {cursor.label && <span className="portfolio-cursor__label">{cursor.label}</span>}
        </>
      )}
    </div>
  );
}
