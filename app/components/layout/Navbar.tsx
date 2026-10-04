"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/app/lib/utils";
import { navCta, primaryNav, profile } from "@/app/data/site";
import { Icon } from "../ui/Icon";
import { ThemeToggle } from "./ThemeToggle";
import { ScrollProgress } from "./ScrollProgress";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [lifted, setLifted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes (covers back/forward and the
  // logo/CTA links, which don't go through MobileMenu's own onClose).
  // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing UI with router state, not deriving it from props
  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-500",
          lifted
            ? "border-b border-line bg-bg/80 shadow-sm backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-18 w-full max-w-(--container-page) items-center justify-between gap-6 px-5 sm:px-8"
        >
          <Link
            href="/"
            className="group/logo flex items-center gap-3 rounded-full"
            aria-label={`${profile.displayName} — home`}
          >
            <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-brand-gradient text-sm font-semibold text-white shadow-sm dark:text-brand-950">
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover/logo:translate-x-full motion-reduce:hidden"
              />
              SK
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-[0.9375rem] font-semibold tracking-tight text-ink">
                {profile.displayName}
                <span className="text-muted">, {profile.credential}</span>
              </span>
              <span className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-faint">
                Biostatistics &amp; Data Science
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {primaryNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group/nav relative inline-flex h-9 items-center rounded-full px-3.5 text-sm font-medium transition-colors",
                      active ? "text-brand-700 dark:text-brand-200" : "text-ink-soft hover:text-ink",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-3.5 bottom-0.5 h-px origin-left bg-brand-gradient transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href={navCta.href}
              className="group/cta relative hidden h-10 items-center gap-2 overflow-hidden rounded-full bg-brand-gradient px-5 text-sm font-medium text-white shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex dark:text-brand-950"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full motion-reduce:hidden"
              />
              <span className="relative">{navCta.label}</span>
              <Icon
                name="arrow-right"
                className="relative size-4 transition-transform duration-300 group-hover/cta:translate-x-0.5"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="grid size-10 place-items-center rounded-full border border-line bg-surface/80 text-ink-soft backdrop-blur transition-colors hover:border-brand-400 lg:hidden"
            >
              <Icon name="menu" className="size-[1.05rem]" />
            </button>
          </div>
        </nav>

        {lifted && <ScrollProgress />}
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} isActive={isActive} />
    </>
  );
}
