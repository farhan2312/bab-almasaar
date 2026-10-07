"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STEPS = [
  {
    n: "01",
    title: "Sourcing",
    body: "Qualified supply lines and material procurement, coordinated end to end.",
  },
  {
    n: "02",
    title: "Logistics",
    body: "Freight, customs and last-mile movement across the region, tracked throughout.",
  },
  {
    n: "03",
    title: "Delivery",
    body: "On-site handover with full documentation and quality verification.",
  },
];

/**
 * Apple-style pinned scrollytelling section powered by GSAP ScrollTrigger.
 * The inner panel pins to the viewport while the user scrolls through a fixed
 * distance; progress scrubs a steel-blue indicator and advances the steps.
 */
export default function PinnedProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: `+=${STEPS.length * 100}%`,
        pin: "[data-pin]",
        scrub: true,
        onUpdate: (self) => {
          if (barRef.current) {
            barRef.current.style.transform = `scaleX(${self.progress})`;
          }
          const idx = Math.min(
            STEPS.length - 1,
            Math.floor(self.progress * STEPS.length),
          );
          if (idx !== activeRef.current) {
            activeRef.current = idx;
            setActive(idx);
          }
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative border-t border-border">
      <div
        data-pin
        className="flex h-screen flex-col justify-center overflow-hidden"
      >
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            / Process
          </p>

          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
            {/* Index column */}
            <div>
              <div className="flex items-baseline gap-4">
                <span className="tabular font-mono text-7xl font-semibold text-primary md:text-8xl">
                  {STEPS[active].n}
                </span>
                <span className="font-mono text-sm text-muted-foreground">
                  / 0{STEPS.length}
                </span>
              </div>

              {/* Scrub progress bar */}
              <div className="mt-8 h-px w-full bg-border">
                <div
                  ref={barRef}
                  className="h-px origin-left bg-primary"
                  style={{ transform: "scaleX(0)" }}
                />
              </div>
            </div>

            {/* Content column */}
            <div className="relative min-h-[9rem]">
              {STEPS.map((step, i) => (
                <div
                  key={step.n}
                  className="absolute inset-0 transition-all duration-500 ease-out"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform:
                      i === active ? "translateY(0)" : "translateY(12px)",
                    pointerEvents: i === active ? "auto" : "none",
                  }}
                >
                  <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
