/**
 * Custom MEP-themed hero backdrop: a blueprint grid with a routed pipe
 * network, valves, flanges, pressure gauges and flowing medium. Pure SVG +
 * CSS animation (pipe flow + gauge needles), weighted to the right so the
 * hero copy on the left stays legible. Decorative only.
 */

const ROUTES = [
  "M1240 140 L920 140 L920 380 L690 380",
  "M1240 300 L1040 300 L1040 600 L1240 600",
  "M740 780 L740 470 L1240 470",
  "M1240 210 L1120 210 L1120 120",
];

const BOLTS: [number, number][] = [
  [920, 140],
  [920, 380],
  [1040, 300],
  [1040, 600],
  [740, 470],
  [1120, 210],
];

const VALVES: [number, number][] = [
  [800, 380],
  [1040, 470],
];

const GAUGES = [
  { x: 985, y: 150, r: 46, delay: "0s" },
  { x: 1112, y: 262, r: 32, delay: "-2.6s" },
];

export default function HeroPipes() {
  return (
    <svg
      viewBox="0 0 1200 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="absolute inset-0 -z-20 h-full w-full"
    >
      <defs>
        <radialGradient id="bm-glow" cx="68%" cy="34%" r="62%">
          <stop offset="0%" stopColor="#13564a" />
          <stop offset="100%" stopColor="#081d1a" stopOpacity="0" />
        </radialGradient>
        <pattern
          id="bm-grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M40 0 H0 V40"
            fill="none"
            stroke="rgba(255,255,255,0.045)"
            strokeWidth="1"
          />
        </pattern>
        <pattern
          id="bm-grid-lg"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M200 0 H0 V200"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      {/* Base + grid */}
      <rect width="1200" height="760" fill="#081d1a" />
      <rect width="1200" height="760" fill="url(#bm-glow)" />
      <rect width="1200" height="760" fill="url(#bm-grid)" />
      <rect width="1200" height="760" fill="url(#bm-grid-lg)" />

      {/* Dimension line accents */}
      <g stroke="rgba(255,255,255,0.12)" strokeWidth="1">
        <line x1="560" y1="690" x2="760" y2="690" />
        <line x1="560" y1="684" x2="560" y2="696" />
        <line x1="760" y1="684" x2="760" y2="696" />
        <line x1="1020" y1="690" x2="1180" y2="690" />
        <line x1="1020" y1="684" x2="1020" y2="696" />
        <line x1="1180" y1="684" x2="1180" y2="696" />
      </g>

      {/* Pipes */}
      {ROUTES.map((d, i) => (
        <g key={i} fill="none" strokeLinejoin="round" strokeLinecap="round">
          <path d={d} stroke="#082621" strokeWidth={22} />
          <path d={d} stroke="#227567" strokeWidth={14} />
          <path d={d} stroke="#4fb8a1" strokeWidth={2.5} opacity={0.4} />
          <path
            d={d}
            className="pipe-flow"
            stroke="#e8c36a"
            strokeWidth={3.5}
            style={{
              animationDelay: `${i * -1.4}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        </g>
      ))}

      {/* Flange cap on P1 end */}
      <g transform="translate(690 380)">
        <rect
          x={-6}
          y={-26}
          width={12}
          height={52}
          rx={2}
          fill="#227567"
          stroke="#082621"
          strokeWidth={2}
        />
        {[-18, 0, 18].map((cy) => (
          <circle key={cy} cx={0} cy={cy} r={2.4} fill="#082621" />
        ))}
      </g>

      {/* Elbow bolts */}
      {BOLTS.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={5}
          fill="#0b2a25"
          stroke="#3a9c88"
          strokeWidth={2.5}
        />
      ))}

      {/* Valves */}
      {VALVES.map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <line
            x1={-24}
            y1={0}
            x2={24}
            y2={0}
            stroke="#3a9c88"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <line
            x1={0}
            y1={-24}
            x2={0}
            y2={24}
            stroke="#3a9c88"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <circle r={15} fill="#0c2e28" stroke="#2b8a79" strokeWidth={3} />
          <circle r={6} fill="#e8c36a" />
        </g>
      ))}

      {/* Pressure gauges */}
      {GAUGES.map((g, i) => (
        <g key={i} transform={`translate(${g.x} ${g.y})`}>
          <circle r={g.r} fill="#0b2a25" stroke="#2b8a79" strokeWidth={3} />
          <circle
            r={g.r - 8}
            fill="none"
            stroke="#3a9c88"
            strokeWidth={2}
            strokeDasharray="1 7"
          />
          <path
            className="gauge-needle"
            d={`M-2 0 L0 ${-(g.r - 14)} L2 0 Z`}
            fill="#e8c36a"
            style={{ animationDelay: g.delay }}
          />
          <circle r={4} fill="#e8c36a" />
        </g>
      ))}
    </svg>
  );
}
