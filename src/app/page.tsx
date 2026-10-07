import Image from "next/image";
import {
  Wind,
  Zap,
  Droplets,
  Layers,
  SquareStack,
  PaintRoller,
  Wallpaper,
  Grid3x3,
  Hammer,
  Sparkles,
  PanelsTopLeft,
  Wrench,
  ArrowDown,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Check,
} from "lucide-react";
import Logo from "@/components/logo";
import HeroPipes from "@/components/hero-pipes";
import Marquee from "@/components/marquee";
import CountUp from "@/components/count-up";
import Reveal from "@/components/reveal";
import PinnedProcess from "@/components/pinned-process";

const PHONE_DISPLAY = "+971 50 527 6723";
const PHONE_TEL = "+971505276723";
const WHATSAPP = "https://wa.me/971505276723";
const EMAIL = "basheer@babalmasaar.ae";

const SERVICES = [
  {
    Icon: Wind,
    title: "Air-Conditioning & Ventilation",
    desc: "AC, ventilation & air-filtration systems: installation and maintenance.",
    tag: "MEP",
  },
  {
    Icon: Zap,
    title: "Electrical Works",
    desc: "Electrical fittings & fixtures repairing and maintenance.",
    tag: "MEP",
  },
  {
    Icon: Droplets,
    title: "Plumbing & Sanitary",
    desc: "Sanitary installation and water-pipe repairing.",
    tag: "MEP",
  },
  {
    Icon: Layers,
    title: "False Ceiling & Partitions",
    desc: "Gypsum false ceilings and light partition installation.",
    tag: "Fit-Out",
  },
  {
    Icon: SquareStack,
    title: "Plaster Works",
    desc: "Internal and external plastering for walls and ceilings.",
    tag: "Finishing",
  },
  {
    Icon: PaintRoller,
    title: "Painting",
    desc: "Interior and exterior painting contracting.",
    tag: "Finishing",
  },
  {
    Icon: Wallpaper,
    title: "Wallpaper Fixing",
    desc: "Precision wallpaper supply and fixing works.",
    tag: "Finishing",
  },
  {
    Icon: Grid3x3,
    title: "Floor & Wall Tiling",
    desc: "Ceramic, porcelain and stone tiling works.",
    tag: "Finishing",
  },
  {
    Icon: Hammer,
    title: "Carpentry & Wood Flooring",
    desc: "Custom joinery and wooden flooring installation.",
    tag: "Fit-Out",
  },
  {
    Icon: Sparkles,
    title: "Engraving & Ornamentation",
    desc: "Decorative engraving and ornamental detailing.",
    tag: "Finishing",
  },
  {
    Icon: PanelsTopLeft,
    title: "Fit-Out & Renovation",
    desc: "Complete interior fit-out and refurbishment, managed end to end.",
    tag: "Fit-Out",
  },
  {
    Icon: Wrench,
    title: "Annual Maintenance (AMC)",
    desc: "Scheduled building and AC maintenance contracts for villas and buildings.",
    tag: "Maintenance",
  },
];

const MEP_POINTS = [
  "Central, split & package AC installation",
  "AC servicing, repair & gas charging",
  "Annual Maintenance Contracts (AMC)",
  "Ventilation & air-filtration systems",
  "Electrical & plumbing maintenance",
  "24/7 response for buildings & villas",
];

const STATS = [
  { to: 10, suffix: "+", label: "Years of Experience" },
  { to: 200, suffix: "+", label: "Projects Completed" },
  { to: 7, suffix: "", label: "Emirates Covered" },
  { static: "24/7", label: "Maintenance Support" },
];

const WORK = [
  { src: "/works/work-1.jpg", title: "Residential Block", loc: "Deira, Dubai" },
  { src: "/works/work-2.jpg", title: "Building Finishing", loc: "Dubai" },
  {
    src: "/works/work-3.jpg",
    title: "Facade & Painting",
    loc: "Dubai",
    tall: true,
  },
  { src: "/works/work-4.jpg", title: "Accommodation Project", loc: "Dubai" },
  {
    src: "/works/work-5.jpg",
    title: "Rooftop Waterproofing & AC",
    loc: "Dubai",
  },
  { src: "/works/work-6.jpg", title: "Completed Handover", loc: "Dubai" },
];

const SECTORS = [
  "Residential Buildings",
  "Labour Accommodation",
  "Commercial & Retail",
  "Offices & Fit-Out",
  "Villas",
  "Warehouses",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
          <Logo size="lg" />
          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Services", "#services"],
              ["Our Work", "#work"],
              ["Process", "#process"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden font-mono text-xs tracking-wide text-foreground lg:inline"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              className="inline-flex h-9 items-center gap-1.5 rounded-sm bg-gold px-4 text-sm font-medium text-gold-foreground transition-colors hover:bg-gold/90"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#081d1a]">
        <HeroPipes />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(100deg, rgba(6,20,18,0.96) 0%, rgba(6,20,18,0.82) 42%, rgba(6,20,18,0.22) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-16">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 border border-white/25 bg-white/5 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm">
              <span className="inline-block size-1.5 bg-gold" />
              باب المسار · Dubai, U.A.E.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
              We build, finish &amp; maintain across the UAE.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 h-px w-24 bg-gold" />
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              Air-conditioning &amp; MEP maintenance, electrical, plumbing,
              false ceilings, plastering, painting, tiling and fit-out. One
              reliable technical services team in Dubai.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex h-11 items-center gap-2 rounded-sm bg-gold px-5 font-medium text-gold-foreground transition-colors hover:bg-gold/90"
              >
                Get a Free Quote
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#services"
                className="inline-flex h-11 items-center gap-2 rounded-sm border border-white/30 bg-white/5 px-5 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Our Services
              </a>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ArrowDown className="size-4 animate-bounce text-white/70" />
        </div>
      </section>

      {/* Services ticker */}
      <Marquee />

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-background p-8 text-center">
              <div className="text-4xl font-semibold tracking-tight text-primary md:text-5xl">
                {"static" in s ? s.static : <CountUp to={s.to} suffix={s.suffix} />}
              </div>
              <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-24 md:py-32"
      >
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            / Our Services
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            Every trade your building needs.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Fully licensed by Dubai Economic Development across ten technical
            and finishing activities.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06} className="bg-card">
              <div className="group flex h-full flex-col p-7 transition-colors hover:bg-accent/40">
                <div className="flex items-center justify-between">
                  <s.Icon className="size-6 text-primary" strokeWidth={1.5} />
                  <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AC / MEP feature */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border">
              <Image
                src="/works/ac.jpg"
                alt="Rooftop air-conditioning condenser units maintained by Bab Al Masaar"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                / AC &amp; MEP Maintenance
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Keep the cool running, all year round.
              </h2>
              <p className="mt-5 text-muted-foreground">
                From single split units to full rooftop condenser arrays, our
                technicians install, service and maintain AC and MEP systems
                across Dubai and the Northern Emirates.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {MEP_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-9 inline-flex h-11 items-center gap-2 rounded-sm bg-primary px-5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request AC Maintenance
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pinned process */}
      <div id="process" className="scroll-mt-0">
        <PinnedProcess />
      </div>

      {/* Our Work */}
      <section
        id="work"
        className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-24 md:py-32"
      >
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            / Our Work
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            Recently delivered in Dubai.
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-3 md:auto-rows-[230px]">
          {WORK.map((w, i) => (
            <Reveal
              key={w.src}
              delay={(i % 3) * 0.06}
              className={w.tall ? "row-span-2" : ""}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-sm border border-border">
                <Image
                  src={w.src}
                  alt={`${w.title}, ${w.loc}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-semibold text-white">{w.title}</p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/70">
                    {w.loc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Sectors */}
        <Reveal>
          <div className="mt-16 flex flex-wrap gap-2">
            {SECTORS.map((sec) => (
              <span
                key={sec}
                className="rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"
              >
                {sec}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Contact / CTA */}
      <section
        id="contact"
        className="scroll-mt-20 border-t border-border bg-primary text-primary-foreground"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-gold">
                / Get in Touch
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Request a free site visit &amp; quote.
              </h2>
              <p className="mt-5 max-w-md text-primary-foreground/80">
                Tell us what you need: AC maintenance, a fit-out or any
                finishing work, and we&rsquo;ll arrange a visit and a clear
                quotation.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex h-11 items-center gap-2 rounded-sm bg-gold px-5 font-medium text-gold-foreground transition-colors hover:bg-gold/90"
                >
                  <Phone className="size-4" />
                  Call Now
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-sm border border-primary-foreground/30 bg-primary-foreground/5 px-5 font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-px overflow-hidden rounded-sm border border-primary-foreground/15 bg-primary-foreground/15">
              {[
                {
                  Icon: Phone,
                  label: "Phone / WhatsApp",
                  value: PHONE_DISPLAY,
                  href: `tel:${PHONE_TEL}`,
                },
                {
                  Icon: Mail,
                  label: "Email",
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                },
                {
                  Icon: MapPin,
                  label: "Office",
                  value: "Port Saeed, Deira, Dubai, U.A.E.",
                },
                {
                  Icon: Clock,
                  label: "Working Hours",
                  value: "Sat - Thu · 8:00 AM - 6:00 PM",
                },
              ].map((c) => {
                const content = (
                  <div className="flex items-center gap-4 bg-primary p-6">
                    <c.Icon className="size-5 shrink-0 text-gold" />
                    <div>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary-foreground/60">
                        {c.label}
                      </p>
                      <p className="mt-1 text-sm font-medium">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="transition-colors hover:bg-primary-foreground/5"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}
            </div>
            <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-primary-foreground/50">
              Khaja M. Basheeruddin · Project Manager
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Bab Al Masaar Technical Services L.L.C is a Dubai-based
              contractor for AC &amp; MEP maintenance, fit-out and finishing
              works across the UAE.
            </p>
            <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
              Dubai DED License No. 1634237
            </p>
          </div>

          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground">
              Services
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>AC &amp; MEP Maintenance</li>
              <li>Electrical &amp; Plumbing</li>
              <li>False Ceiling &amp; Partitions</li>
              <li>Painting &amp; Plaster</li>
              <li>Tiling &amp; Carpentry</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="hover:text-foreground">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-foreground">
                  {EMAIL}
                </a>
              </li>
              <li>Port Saeed, Deira</li>
              <li>Dubai, U.A.E.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>باب المسار للخدمات الفنية</span>
            <span>© 2026 Bab Al Masaar Technical Services L.L.C</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
