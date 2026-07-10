import type { ReactNode } from "react";

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
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-flex"
        style={{
          animation: `portfolio-marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        <span className="flex shrink-0">{children}</span>
        <span className="flex shrink-0" aria-hidden="true">
          {children}
        </span>
      </div>
    </div>
  );
}
