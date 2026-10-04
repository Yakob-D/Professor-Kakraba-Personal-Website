"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `value` the first time it scrolls into view.
 * Renders the final value immediately for reduced-motion users and as the
 * server-side HTML, so the real number is always in the document.
 */
export function Counter({
  value,
  duration = 1500,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const [armed, setArmed] = useState(false);

  // Only drop to 0 once we know JS is running and motion is welcome. The
  // server-rendered value stays as the final number until this runs.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time opt-in to the count-up animation, gated on browser capability checks unavailable during SSR
    setDisplay(0);
    setArmed(true);
  }, []);

  useEffect(() => {
    if (!armed) return;
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutExpo — fast first, settles on the exact number
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setDisplay(Math.round(eased * value));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [armed, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <span className="tabular-nums">{display.toLocaleString("en-US")}</span>
      {suffix}
    </span>
  );
}
