import { cn } from "@/lib/utils";

/**
 * Bab Al Masaar brand lockup: a gateway arch over a skyline + house
 * (echoing the business-card emblem), paired with the wordmark.
 * Single-colour (currentColor) so it adapts to light/dark placements.
 */
export default function Logo({
  className,
  showText = true,
  markClassName,
}: {
  className?: string;
  showText?: boolean;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className={cn("size-8 text-primary", markClassName)}
      >
        {/* Gateway arch */}
        <path
          d="M8 42 V23 A16 16 0 0 1 40 23 V42"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <g fill="currentColor">
          {/* Towers */}
          <rect x="13.5" y="28" width="4.5" height="12" />
          <rect x="19.5" y="22.5" width="5.5" height="17.5" />
          <rect x="26.5" y="30" width="4" height="10" />
          {/* House with pitched roof */}
          <path d="M31 31.5 L35.5 27 L40 31.5 Z" />
          <rect x="32" y="31.5" width="7" height="8.5" />
          {/* Ground line */}
          <rect x="9.5" y="40" width="29" height="2.2" rx="1" />
        </g>
      </svg>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.18em]">
            Bab Al Masaar
          </span>
          <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-muted-foreground">
            Technical Services L.L.C
          </span>
        </span>
      )}
    </span>
  );
}
