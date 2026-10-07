import { ArrowDown, ArrowUpRight, Boxes, Truck, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Reveal from "@/components/reveal";
import PinnedProcess from "@/components/pinned-process";

const CAPABILITIES = [
  {
    n: "01",
    title: "Sourcing",
    body: "Qualified supply lines and procurement for industrial materials and equipment.",
    Icon: Boxes,
  },
  {
    n: "02",
    title: "Logistics",
    body: "Regional freight, customs clearance and last-mile movement, fully tracked.",
    Icon: Truck,
  },
  {
    n: "03",
    title: "Assurance",
    body: "Quality verification and documentation at every handover point.",
    Icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em]">
            Bab&nbsp;Al&nbsp;Masaar
          </span>
          <span className="hidden font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground sm:block">
            UAE · Est. 2026
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-14">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 border border-border bg-card px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="inline-block size-1.5 bg-primary" />
              باب المسار
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
              bab al masaar
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 h-px w-24 bg-primary" />
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              A gateway for industrial sourcing, logistics and delivery —
              engineered for precision, built on trust.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#process"
                className={buttonVariants({ size: "lg" }) + " h-11 px-5"}
              >
                Explore
                <ArrowDown className="transition-transform group-hover/button:translate-y-0.5" />
              </a>
              <a
                href="#capabilities"
                className={
                  buttonVariants({ variant: "outline", size: "lg" }) +
                  " h-11 px-5"
                }
              >
                Capabilities
              </a>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ArrowDown className="size-4 animate-bounce text-muted-foreground" />
        </div>
      </section>

      {/* Capabilities */}
      <section
        id="capabilities"
        className="mx-auto w-full max-w-6xl scroll-mt-14 px-6 py-28 md:py-36"
      >
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            / Capabilities
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            End-to-end, under one roof.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.n} delay={i * 0.08} className="bg-card">
              <div className="group flex h-full flex-col p-8 transition-colors hover:bg-accent/40">
                <div className="flex items-center justify-between">
                  <cap.Icon
                    className="size-6 text-primary"
                    strokeWidth={1.5}
                  />
                  <span className="tabular font-mono text-sm text-muted-foreground">
                    {cap.n}
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-semibold tracking-tight">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {cap.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pinned, scroll-driven process */}
      <div id="process" className="scroll-mt-0">
        <PinnedProcess />
      </div>

      {/* Closing */}
      <section className="border-t border-border">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 md:py-36">
          <Reveal>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Let&rsquo;s move your operation forward.
            </h2>
            <a
              href="#"
              className={buttonVariants({ size: "lg" }) + " mt-10 h-11 px-5"}
            >
              Get in touch
              <ArrowUpRight className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-10 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Bab Al Masaar</span>
          <span>© 2026 · All rights reserved</span>
        </div>
      </footer>
    </div>
  );
}
