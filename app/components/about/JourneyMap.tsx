"use client";

import { useState } from "react";
import { cn } from "@/app/lib/utils";
import { journey } from "@/app/about/data";
import { Icon } from "../ui/Icon";

/**
 * The signature visual: an interactive career map.
 *
 * On wide screens it's a stylised Atlantic view with the five stops plotted
 * and an arc connecting them; selecting a stop reveals its detail. On narrow
 * screens the map is hidden and the same data renders as a vertical timeline,
 * which is also what a screen reader walks through.
 */
export function JourneyMap() {
  const [activeId, setActiveId] = useState(journey[journey.length - 1].id);
  const active = journey.find((s) => s.id === activeId) ?? journey[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
      {/* ------------------------------------------------------------- map */}
      <div className="relative hidden overflow-hidden rounded-3xl border border-line bg-brand-gradient-soft p-4 sm:block">
        <div
          aria-hidden
          className="absolute inset-0 grid-faint opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]"
        />

        <svg
          viewBox="0 0 100 70"
          className="relative w-full"
          role="img"
          aria-label="A map showing five career stops: Cape Coast in Ghana, then Johnson City, Little Rock, Richmond and New Orleans in the United States."
        >
          <defs>
            <linearGradient id="jm-arc" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--accent-400)" />
              <stop offset="100%" stopColor="var(--brand-500)" />
            </linearGradient>
          </defs>

          {/* Stylised land masses — deliberately loose, read as a map not an atlas. */}
          <g fill="var(--brand-200)" fillOpacity="0.55" stroke="var(--brand-400)" strokeWidth="0.25" className="dark:fill-brand-700/50">
            {/* North America */}
            <path d="M4 14 L16 9 L30 11 L34 17 L31 25 L26 33 L24 44 L19 48 L14 42 L10 31 L5 24 Z" />
            {/* South America */}
            <path d="M26 48 L32 46 L35 53 L33 63 L28 68 L25 61 Z" />
            {/* Europe / North Africa */}
            <path d="M44 12 L56 10 L60 16 L57 23 L50 26 L45 21 Z" />
            {/* West & Central Africa */}
            <path d="M44 26 L56 25 L60 33 L57 46 L51 57 L45 51 L43 38 Z" />
          </g>

          {/* The arc through the stops, drawn as a soft curve. */}
          <path
            d="M46.5 54 C 40 30, 30 26, 23.5 39 C 21 40, 20.5 40, 20 40.5 C 21 38, 22 37, 23 36.5 C 22 39, 21 41, 20.5 42.5"
            fill="none"
            stroke="url(#jm-arc)"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeDasharray="1.6 1.4"
            opacity="0.85"
          />

          {journey.map((stop, i) => {
            const isActive = stop.id === activeId;
            return (
              <g key={stop.id}>
                {isActive && (
                  <circle
                    cx={stop.map.x}
                    cy={stop.map.y}
                    r="2.4"
                    fill="var(--accent-400)"
                    className="animate-pulse-ring motion-reduce:hidden"
                    style={{ transformOrigin: `${stop.map.x}px ${stop.map.y}px` }}
                  />
                )}
                <circle
                  cx={stop.map.x}
                  cy={stop.map.y}
                  r={isActive ? 2 : 1.3}
                  fill={isActive ? "var(--accent-400)" : "var(--brand-600)"}
                  stroke="var(--surface)"
                  strokeWidth="0.5"
                  className="transition-all duration-300"
                />
                <text
                  x={stop.map.x}
                  y={stop.map.y - 3.4}
                  textAnchor="middle"
                  fontSize="2.3"
                  fontFamily="var(--font-mono)"
                  fill={isActive ? "var(--ink)" : "var(--muted)"}
                  className="pointer-events-none transition-colors duration-300"
                >
                  0{i + 1}
                </text>
                {/* Generous invisible hit area over each pin. */}
                <circle
                  cx={stop.map.x}
                  cy={stop.map.y}
                  r="4"
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setActiveId(stop.id)}
                  onFocus={() => setActiveId(stop.id)}
                />
              </g>
            );
          })}
        </svg>

        <p className="relative mt-2 text-center font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
          Hover or select a stop
        </p>
      </div>

      {/* ------------------------------------------------- stops + detail */}
      <div>
        <ol className="space-y-1.5">
          {journey.map((stop) => {
            const isActive = stop.id === activeId;
            return (
              <li key={stop.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(stop.id)}
                  onMouseEnter={() => setActiveId(stop.id)}
                  aria-expanded={isActive}
                  className={cn(
                    "group/stop flex w-full items-start gap-4 rounded-2xl border px-4 py-3.5 text-left transition-[background-color,border-color] duration-300",
                    isActive
                      ? "border-brand-300 bg-surface shadow-sm dark:border-brand-600"
                      : "border-transparent hover:bg-surface-2",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl transition-colors duration-300",
                      isActive
                        ? "bg-brand-gradient text-white dark:text-brand-950"
                        : "border border-line text-muted",
                    )}
                  >
                    <Icon name={stop.icon} className="size-4" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline gap-x-2.5">
                      <span
                        className={cn(
                          "font-display text-[0.9375rem] font-semibold",
                          isActive ? "text-ink" : "text-ink-soft",
                        )}
                      >
                        {stop.place}
                      </span>
                      <span className="text-[0.8125rem] text-muted">{stop.region}</span>
                      <span className="ml-auto font-mono text-[0.6875rem] tracking-[0.06em] text-faint">
                        {stop.period}
                      </span>
                    </span>

                    <span
                      className={cn(
                        "mt-1 block text-[0.8125rem] leading-snug text-muted",
                        isActive && "text-ink-soft",
                      )}
                    >
                      {stop.role}
                    </span>

                    {/* Detail expands in place, so nothing jumps around. */}
                    <span
                      className={cn(
                        "grid transition-all duration-500 ease-out",
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <span className="overflow-hidden">
                        <span className="mt-3 block border-t border-line pt-3 text-[0.8125rem] leading-relaxed text-muted">
                          <span className="block font-medium text-ink-soft">
                            {stop.institution}
                          </span>
                          <span className="mt-1.5 block">{stop.description}</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <p className="mt-5 flex items-center gap-2 px-4 text-[0.75rem] text-faint">
          <Icon name="map-pin" className="size-3.5 text-accent-500" />
          Currently in {active.place}, {active.region}
        </p>
      </div>
    </div>
  );
}
