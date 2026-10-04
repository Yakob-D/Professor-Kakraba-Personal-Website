"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/app/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, string> = {
  up: "translate-y-6",
  down: "-translate-y-6",
  left: "translate-x-6",
  right: "-translate-x-6",
  none: "",
};

/**
 * Fades content in as it scrolls into view. Server-rendered children stay in
 * the HTML (good for SEO and for no-JS visitors — the fallback is "visible"),
 * and the motion is skipped entirely under `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  delay = 0,
  duration = 700,
  className,
  once = true,
  amount = 0.15,
}: {
  children: React.ReactNode;
  as?: "div" | "section" | "li" | "article" | "span" | "header" | "footer";
  direction?: Direction;
  /** Milliseconds. Use with an index to stagger a list. */
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  /** Fraction of the element that must be visible before it animates. */
  amount?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  // Narrow the polymorphic tag to one element type so the ref has a single,
  // concrete signature instead of an intersection of every allowed tag.
  const Component = Tag as "div";

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- no IntersectionObserver available, so skip straight to the settled (visible) state
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: amount, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, amount]);

  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement>}
      data-revealed={shown ? "" : undefined}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: shown ? `${delay}ms` : "0ms",
      }}
      className={cn(
        "transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        shown ? "opacity-100 translate-none" : cn("opacity-0", offsets[direction]),
        className,
      )}
    >
      {children}
    </Component>
  );
}
