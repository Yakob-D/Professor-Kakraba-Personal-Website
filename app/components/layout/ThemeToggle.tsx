"use client";

import { useEffect, useState } from "react";
import { cn } from "@/app/lib/utils";
import { Icon } from "../ui/Icon";

const KEY = "kakraba-theme";

export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  // Read the state ThemeScript already applied, rather than deciding again.
  // Must happen post-mount: the server has no `document`, so reading this
  // during render would mismatch hydration.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of DOM state set by the inline ThemeScript before hydration
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem(KEY, next ? "dark" : "light");
    } catch {
      // Private browsing or blocked storage: the choice just won't persist.
    }
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        dark === null ? "Switch colour theme" : dark ? "Switch to light theme" : "Switch to dark theme"
      }
      aria-pressed={dark ?? false}
      className={cn(
        "group/t relative grid size-10 place-items-center rounded-full border border-line bg-surface/80 text-ink-soft backdrop-blur transition-colors hover:border-brand-400 hover:text-brand-700 dark:hover:text-brand-200",
        className,
      )}
    >
      <Icon
        name="sun"
        className={cn(
          "absolute size-[1.05rem] transition-all duration-500",
          dark ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
        )}
      />
      <Icon
        name="moon"
        className={cn(
          "absolute size-[1.05rem] transition-all duration-500",
          dark ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0",
        )}
      />
    </button>
  );
}
