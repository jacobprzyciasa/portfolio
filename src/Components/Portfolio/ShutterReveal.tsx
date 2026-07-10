"use client";

import { useEffect, useState } from "react";

export default function ShutterReveal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }

    const timeout = window.setTimeout(() => setShow(false), 1650);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className="portfolio-shutter" aria-hidden="true">
      <div className="portfolio-shutter__panel portfolio-shutter__panel--left">
        <span>REC</span>
      </div>
      <div className="portfolio-shutter__panel portfolio-shutter__panel--right">
        <span>ISO 400 / F2.8</span>
      </div>
    </div>
  );
}
