"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/app/lib/utils";
import { navCta, primaryNav, profile, socialLinks } from "@/app/data/site";
import { Icon } from "../ui/Icon";

export function MobileMenu({
  open,
  onClose,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  const panel = useRef<HTMLDivElement>(null);

  // Lock the page behind the drawer and wire up Escape.
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-60 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        tabIndex={open ? 0 : -1}
        aria-label="Close menu"
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-brand-950/40 backdrop-blur-sm transition-opacity duration-400",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        ref={panel}
        role="dialog"
        aria-modal={open}
        aria-label="Site menu"
        tabIndex={-1}
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto border-l border-line bg-bg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <span className="font-display text-sm font-semibold text-ink">
            {profile.displayName}
            <span className="text-muted">, {profile.credential}</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
            className="grid size-9 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-brand-400"
          >
            <Icon name="x" className="size-4" />
          </button>
        </div>

        <nav aria-label="Site" className="flex-1 px-4 py-4">
          <ul className="space-y-1">
            {primaryNav.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={onClose}
                  style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                  className={cn(
                    "group/m flex items-center justify-between gap-4 rounded-2xl px-4 py-3.5 transition-[background-color,opacity,transform] duration-400",
                    open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                    isActive(item.href) ? "bg-brand-50 dark:bg-brand-900/50" : "hover:bg-surface-2",
                  )}
                >
                  <span>
                    <span
                      className={cn(
                        "block font-display text-[1.0625rem] font-medium",
                        isActive(item.href)
                          ? "text-brand-700 dark:text-brand-200"
                          : "text-ink",
                      )}
                    >
                      {item.label}
                    </span>
                    {item.blurb && (
                      <span className="mt-0.5 block text-[0.8125rem] text-muted">
                        {item.blurb}
                      </span>
                    )}
                  </span>
                  <Icon
                    name="arrow-right"
                    className="size-4 text-faint transition-transform group-hover/m:translate-x-0.5"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={navCta.href}
            tabIndex={open ? 0 : -1}
            onClick={onClose}
            className="mt-5 flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gradient text-sm font-medium text-white shadow-sm dark:text-brand-950"
          >
            {navCta.label}
            <Icon name="arrow-right" className="size-4" />
          </Link>
        </nav>

        <div className="border-t border-line px-6 py-5">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-faint">
            Profiles
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  tabIndex={open ? 0 : -1}
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-brand-400 hover:text-brand-700 dark:hover:text-brand-200"
                >
                  <Icon name={s.icon} className="size-[1.05rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
