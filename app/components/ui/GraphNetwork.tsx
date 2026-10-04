import { cn } from "@/app/lib/utils";

/* A deterministic graph drawn as inline SVG — a quiet nod to the
   graph-theoretic side of the research. Coordinates are hard-coded rather
   than random so the server and client markup always match. */

const nodes = [
  { x: 64, y: 118, r: 5.5 },
  { x: 148, y: 56, r: 3.5 },
  { x: 196, y: 162, r: 7 },
  { x: 268, y: 92, r: 4 },
  { x: 332, y: 196, r: 5 },
  { x: 392, y: 74, r: 3.5 },
  { x: 118, y: 232, r: 4 },
  { x: 244, y: 268, r: 5.5 },
  { x: 404, y: 252, r: 4.5 },
  { x: 460, y: 148, r: 6 },
  { x: 40, y: 48, r: 3 },
  { x: 476, y: 46, r: 3 },
  { x: 332, y: 20, r: 3 },
  { x: 60, y: 300, r: 3 },
  { x: 470, y: 316, r: 3.5 },
];

const edges: Array<[number, number]> = [
  [0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [4, 8], [2, 7],
  [0, 6], [6, 7], [5, 9], [4, 9], [8, 9], [10, 0], [1, 12], [5, 11],
  [6, 13], [8, 14], [7, 4], [9, 11], [3, 4],
];

export function GraphNetwork({
  className,
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 520 340"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id="gn-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="gn-node">
          <stop offset="0%" stopColor="var(--accent-300)" />
          <stop offset="100%" stopColor="var(--brand-500)" />
        </radialGradient>
      </defs>

      <g stroke="url(#gn-edge)" strokeWidth="1" fill="none">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            strokeOpacity={0.3 + ((i * 7) % 5) * 0.08}
          />
        ))}
      </g>

      {/* A few edges carry a travelling dash, like signal moving through the graph. */}
      {animated && (
        <g stroke="var(--accent-400)" strokeWidth="1.6" fill="none" strokeLinecap="round">
          {[[0, 2], [2, 4], [4, 9], [1, 3], [6, 7]].map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              strokeDasharray="6 114"
              className="animate-dash motion-reduce:hidden"
              style={{ animationDelay: `${i * 0.55}s` }}
            />
          ))}
        </g>
      )}

      <g fill="url(#gn-node)">
        {nodes.map((n, i) => (
          <g key={i}>
            {animated && n.r >= 5 && (
              <circle
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill="var(--brand-400)"
                className="animate-pulse-ring motion-reduce:hidden"
                style={{ animationDelay: `${i * 0.4}s`, transformOrigin: `${n.x}px ${n.y}px` }}
              />
            )}
            <circle cx={n.x} cy={n.y} r={n.r} />
          </g>
        ))}
      </g>
    </svg>
  );
}

/** The molecules → patients → populations diagram used on the research page. */
export function ScaleDiagram({ className }: { className?: string }) {
  const stages = [
    { label: "Molecules", detail: "Simulation, docking, QSAR", icon: "flask", cx: 90 },
    { label: "Patients", detail: "Records, images, handwriting", icon: "activity", cx: 300 },
    { label: "Populations", detail: "Surveillance and policy", icon: "globe", cx: 510 },
  ];

  return (
    <svg viewBox="0 0 600 190" className={cn("w-full", className)} role="img"
      aria-label="A diagram showing research scale moving from molecules, through patients, to populations.">
      <defs>
        <linearGradient id="sd-track" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-600)" />
          <stop offset="55%" stopColor="var(--brand-400)" />
          <stop offset="100%" stopColor="var(--accent-400)" />
        </linearGradient>
      </defs>

      <line x1="90" y1="70" x2="510" y2="70" stroke="url(#sd-track)" strokeWidth="2.5" strokeLinecap="round" />
      <line
        x1="90" y1="70" x2="510" y2="70"
        stroke="var(--accent-300)" strokeWidth="4" strokeLinecap="round"
        strokeDasharray="10 420" className="animate-dash motion-reduce:hidden"
      />

      {stages.map((s, i) => (
        <g key={s.label}>
          <circle cx={s.cx} cy="70" r="26" fill="var(--surface)" stroke="url(#sd-track)" strokeWidth="2" />
          <circle cx={s.cx} cy="70" r="7" fill="url(#sd-track)" />
          <text
            x={s.cx} y="124" textAnchor="middle"
            fill="var(--ink)" fontSize="16" fontWeight="600"
            fontFamily="var(--font-display)"
          >
            {s.label}
          </text>
          <text x={s.cx} y="148" textAnchor="middle" fill="var(--muted)" fontSize="12.5">
            {s.detail}
          </text>
          <text
            x={s.cx} y="34" textAnchor="middle"
            fill="var(--faint)" fontSize="11" fontFamily="var(--font-mono)"
            letterSpacing="1.5"
          >
            0{i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}
