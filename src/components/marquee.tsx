const ITEMS = [
  "Air-Conditioning & HVAC",
  "AC Maintenance",
  "Electrical Works",
  "Plumbing & Sanitary",
  "False Ceiling & Partitions",
  "Plaster Works",
  "Painting",
  "Wallpaper Fixing",
  "Floor & Wall Tiling",
  "Carpentry & Wood Flooring",
  "Engraving & Ornamentation",
  "Fit-Out & Renovation",
];

/**
 * Auto-scrolling services ticker. Content is duplicated once and the track
 * translates by -50% for a seamless loop (pauses on hover, off for
 * reduced-motion). Pure CSS, no JS.
 */
export default function Marquee() {
  return (
    <div className="marquee-group relative flex overflow-hidden border-y border-border bg-primary text-primary-foreground">
      <div className="animate-marquee flex shrink-0 items-center py-3">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em]"
          >
            <span className="px-6">{item}</span>
            <span className="text-gold" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
