import { useScrollReveal, useScrollProgress } from "@/hooks/useScrollReveal";
import {
  Lightbulb,
  Award,
  Building,
  Microscope,
  Target,
  ShieldCheck,
  Sparkles,
  Wrench,
  Globe,
  Users,
  Clock,
} from "lucide-react";
import manufacturingImage from "@assets/generated_images/Polymarble_manufacturing_facility_58dc2199.png";
import facilityOverview from "@assets/generated_images/Manufacturing_facility_overview_4794804a.png";

export default function About() {
  // Keep your existing animation hooks so your counters/progress classes still work
  useScrollReveal();
  useScrollProgress();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-warm-cream via-pure-white to-warm-cream"
    >
      {/* Layered Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={facilityOverview}
          alt="Polymarble manufacturing facility"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(55%_55%_at_50%_40%,#000_30%,transparent_70%)]"
      >
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-teal/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-peach/25 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADLINE */}
        <header className="text-center pt-16 lg:pt-20 mb-14 lg:mb-16">
          <h3
            className="text-4xl lg:text-5xl font-extrabold text-deep-charcoal reveal-up mb-3"
            data-testid="heading-our-story"
          >
            We design surfaces for the future
          </h3>
          <p className="text-lg text-cool-grey max-w-2xl mx-auto reveal-fade">
            9 Years of Excellence since 2017 — from Madurai to global markets
          </p>
        </header>

        {/* HERO SPLIT */}
        <section className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Copy */}
          <div className="lg:col-span-5 space-y-6 reveal-left">
            <h4 className="text-2xl lg:text-3xl font-bold text-deep-charcoal">
              Premium polymarble, engineered to inspire
            </h4>
            <p className="text-cool-grey leading-relaxed">
              We combine advanced resins, precision curing and meticulous
              finishing to deliver the elegance of natural stone without the
              cost, weight or upkeep.
            </p>
            {/* badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { Icon: ShieldCheck, label: "ISO-grade QC" },
                { Icon: Wrench, label: "Precision tooling" },
                { Icon: Sparkles, label: "Designer finishes" },
              ].map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-pure-white/80 px-3 py-1.5 shadow-sm backdrop-blur"
                >
                  <Icon className="h-4 w-4 text-brand-teal" />
                  <span className="text-sm text-deep-charcoal">{label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="lg:col-span-7 reveal-right">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-brand-teal/20">
              <img
                src={facilityOverview}
                alt="Manufacturing campus overview"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute bottom-4 right-4 w-[68%] rounded-2xl overflow-hidden border-8 border-pure-white shadow-xl">
                <img
                  src={manufacturingImage}
                  alt="Inside the production line"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUT-OF-THE-BOX METRICS: Orbital Rings (sole stats block) */}
        <section className="mb-18">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Customers — big orbital ring */}
            <div className="relative rounded-3xl p-6 bg-pure-white/80 border border-brand-teal/20 shadow overflow-hidden group">
              <div className="absolute -inset-1 opacity-40 blur-2xl transition-opacity group-hover:opacity-60 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(20,184,166,0.25),transparent_60%),radial-gradient(40%_40%_at_20%_80%,rgba(253,186,116,0.25),transparent_60%)]" />
              <div className="relative flex items-center gap-5">
                <div className="relative h-28 w-28 shrink-0">
                  <div className="absolute inset-0 rounded-full bg-[conic-gradient(theme(colors.brand-teal)_60%,theme(colors.brand-peach)_0)]" />
                  <div className="absolute inset-[10px] rounded-full bg-pure-white border border-brand-teal/20 grid place-items-center">
                    <Users className="h-6 w-6 text-brand-teal" />
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold tracking-tight text-deep-charcoal">
                    <span
                      className="counter text-brand-teal text-shimmer"
                      data-target={200000}
                    >
                      0
                    </span>
                    <span className="ml-1 align-top text-base font-semibold text-cool-grey">
                      +
                    </span>
                  </div>
                  <div className="text-sm text-cool-grey">Customers</div>
                  <div
                    className="progress-bar mt-2 scroll-progress"
                    data-progress={92}
                  />
                </div>
              </div>
            </div>

            {/* Years — kinetic ticket */}
            <div className="rounded-3xl p-6 bg-gradient-to-br from-brand-teal/10 to-brand-peach/10 border border-brand-teal/20 shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="p-3 rounded-xl bg-pure-white/80 border border-brand-teal/20">
                    <Clock className="h-5 w-5 text-brand-teal" />
                  </span>
                  <div>
                    <div className="text-sm text-cool-grey">Years</div>
                    <div className="text-3xl font-extrabold text-deep-charcoal">
                      <span
                        className="counter text-brand-teal text-shimmer"
                        data-target={9}
                      >
                        0
                      </span>
                    </div>
                  </div>
                </div>
                {/* perforated edge */}
                <div className="h-12 w-16 -my-6 bg-[repeating-linear-gradient(90deg,transparent_0_6px,rgba(20,184,166,0.18)_6px_8px)] rounded-e-2xl" />
              </div>
              <div
                className="progress-bar mt-4 scroll-progress"
                data-progress={75}
              />
            </div>

            {/* Countries — stacked capsule with orbit dots */}
            <div className="rounded-3xl p-6 bg-pure-white/80 border border-brand-teal/20 shadow relative overflow-hidden">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full blur-3xl bg-brand-peach/30" />
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0">
                  <div className="absolute inset-0 rounded-full bg-[conic-gradient(theme(colors.brand-peach)_35%,theme(colors.brand-teal)_0)]" />
                  <div className="absolute inset-[10px] rounded-full bg-pure-white border border-brand-teal/20 grid place-items-center">
                    <Globe className="h-6 w-6 text-brand-peach" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-cool-grey">Countries</div>
                  <div className="text-3xl font-extrabold text-deep-charcoal">
                    <span
                      className="counter text-brand-peach text-shimmer"
                      data-target={5}
                    >
                      0
                    </span>
                  </div>
                  <div
                    className="progress-bar mt-2 scroll-progress"
                    data-progress={65}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* subtle scroller below */}
          <div className="mt-6 overflow-hidden rounded-xl border border-brand-teal/20 bg-pure-white/60">
            <div className="flex gap-8 whitespace-nowrap animate-[ticker_25s_linear_infinite] py-3 px-4 text-sm text-cool-grey">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal inline-block" />
                  Trusted by architects, retailers & installers
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* EDITORIAL: Philosophy & Mission */}
        <section className="grid lg:grid-cols-3 gap-8 items-stretch mb-16">
          <article className="lg:col-span-2 bg-pure-white/85 backdrop-blur rounded-3xl p-8 border border-brand-teal/20 shadow-lg reveal-left">
            <div className="flex items-center gap-3 mb-5">
              <span className="p-3 bg-brand-teal/15 rounded-full">
                <Lightbulb className="w-6 h-6 text-brand-teal" />
              </span>
              <h4 className="text-xl font-bold text-deep-charcoal">
                Our Philosophy
              </h4>
            </div>
            <p className="text-cool-grey leading-relaxed">
              Polymarble Sheet crafts premium, durable and versatile surface
              solutions that transform homes and commercial spaces. We don’t
              look for products for customers — we create products for them.
            </p>
          </article>

          <aside className="bg-gradient-to-br from-brand-teal/10 to-brand-peach/10 backdrop-blur rounded-3xl p-8 border border-brand-teal/20 shadow-lg reveal-right">
            <div className="flex items-center gap-3 mb-5">
              <span className="p-3 bg-brand-teal/15 rounded-full">
                <Target className="w-6 h-6 text-brand-teal" />
              </span>
              <h4 className="text-xl font-bold text-deep-charcoal">
                Our Mission
              </h4>
            </div>
            <p className="text-cool-grey leading-relaxed italic">
              To deliver beautiful, durable and affordable polymarble that
              unlocks stunning interiors without compromise.
            </p>
          </aside>
        </section>

        {/* TIMELINE */}
        <section className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div className="reveal-left">
            <h4 className="text-2xl font-bold text-deep-charcoal mb-6">
              Our Journey
            </h4>
            <ol className="relative border-s-2 border-brand-teal/30 pl-8 space-y-8">
              <li className="relative fade-in">
                <span className="absolute -left-[42px] top-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-pure-white border border-brand-teal/40 shadow">
                  <Award className="h-5 w-5 text-brand-teal" />
                </span>
                <h5 className="font-semibold text-deep-charcoal">
                  Founded in Madurai
                </h5>
                <p className="text-sm text-cool-grey">
                  2017 — Started with a vision for accessible luxury
                </p>
              </li>
              <li className="relative fade-in">
                <span className="absolute -left-[42px] top-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-pure-white border border-brand-teal/40 shadow">
                  <Building className="h-5 w-5 text-brand-teal" />
                </span>
                <h5 className="font-semibold text-deep-charcoal">
                  South India Expansion
                </h5>
                <p className="text-sm text-cool-grey">
                  2019 — Expanded across Tamil Nadu, Andaman & Goa
                </p>
              </li>
              <li className="relative fade-in">
                <span className="absolute -left-[42px] top-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-pure-white border border-brand-teal/40 shadow">
                  <Microscope className="h-5 w-5 text-brand-teal" />
                </span>
                <h5 className="font-semibold text-deep-charcoal">
                  Global Expansion
                </h5>
                <p className="text-sm text-cool-grey">
                  2023 — Operations in Malaysia and New York
                </p>
              </li>
            </ol>
          </div>

          {/* STATS CARD WITH ICONS */}
          <div className="reveal-right space-y-6">
            <div className="rounded-3xl border border-brand-teal/20 bg-pure-white/80 p-8 shadow-lg">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Lasting durability",
                    desc: "Scratch & stain resistant reinforced resins.",
                    Icon: ShieldCheck,
                  },
                  {
                    title: "Design freedom",
                    desc: "Veins & textures that emulate rare marbles.",
                    Icon: Sparkles,
                  },
                  {
                    title: "Easy install",
                    desc: "Lightweight panels simplify transport & fitting.",
                    Icon: Wrench,
                  },
                  {
                    title: "Global trust",
                    desc: "Serving projects across regions.",
                    Icon: Globe,
                  },
                ].map(({ title, desc, Icon }) => (
                  <div
                    key={title}
                    className="group rounded-2xl border border-brand-teal/20 bg-pure-white/70 p-5 hover:bg-pure-white hover:shadow"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-3 rounded-xl bg-brand-teal/10 group-hover:bg-brand-teal/15 transition-colors">
                        <Icon className="h-5 w-5 text-brand-teal" />
                      </span>
                      <h6 className="font-semibold text-deep-charcoal">
                        {title}
                      </h6>
                    </div>
                    <p className="mt-2 text-sm text-cool-grey">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
