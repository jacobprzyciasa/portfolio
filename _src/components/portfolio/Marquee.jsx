export default function Marquee({ children, speed = 30, className = "", reverse = false }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-flex"
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`
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