import { useScrollReveal, useScrollProgress } from "@/hooks/useScrollReveal";
import {
    Lightbulb,
    Target,
    ShieldCheck,
    Sparkles,
    Wrench,
    Globe,
    Users,
    Clock,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import manufacturingImage from "@assets/generated_images/Polymarble_manufacturing_facility_58dc2199.png";
import facilityOverview from "@assets/generated_images/Manufacturing_facility_overview_4794804a.png";

export default function About() {
    useScrollReveal();
    useScrollProgress();

    return (
        <section id="about" className="py-24 bg-white text-deep-charcoal border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* 1. EDITORIAL HEADER */}
                <div className="max-w-4xl mx-auto mb-20 text-center reveal-up">
                    <h4 className="text-brand-teal font-bold tracking-widest uppercase text-xs mb-4">Who We Are</h4>
                    <h3 className="text-4xl md:text-5xl font-bold leading-[1.15] mb-8">
                        We deliver the <span className="text-brand-teal">elegance of stone</span> <br className="hidden md:block" />
                        with the <span className="text-brand-brown">resilience of engineering</span>
                    </h3>
                    <div className="h-1 w-20 bg-brand-teal mb-10 mx-auto rounded-full" />
                    <p className="text-xl text-cool-grey leading-relaxed max-w-2xl mx-auto">
                        Founded in 2017, Polymarble Sheet has evolved from a local manufacturer to a global innovator,
                        redefining how the world builds interiors.
                    </p>
                </div>

                {/* 2. UNIFIED METRICS STRIP (The "Ribbon") */}
                <div className="w-full bg-warm-cream rounded-none md:rounded-2xl border-y md:border border-black/5 mb-16 reveal-up">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/5">

                        {/* Stat 1 */}
                        <div className="p-8 flex items-center gap-6">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-black/5 shrink-0">
                                <Users className="w-5 h-5 text-brand-teal" />
                            </div>
                            <div>
                                <div className="text-3xl font-bold tabular-nums">
                                    <span className="counter" data-target={200000}>0</span>+
                                </div>
                                <div className="text-sm font-medium text-cool-grey uppercase tracking-wide">Customers Served</div>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="p-8 flex items-center gap-6">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-black/5 shrink-0">
                                <Clock className="w-5 h-5 text-brand-brown" />
                            </div>
                            <div>
                                <div className="text-3xl font-bold tabular-nums">
                                    <span className="counter" data-target={9}>0</span> Years
                                </div>
                                <div className="text-sm font-medium text-cool-grey uppercase tracking-wide">Of Excellence</div>
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="p-8 flex items-center gap-6">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-black/5 shrink-0">
                                <Globe className="w-5 h-5 text-brand-peach" />
                            </div>
                            <div>
                                <div className="text-3xl font-bold tabular-nums">
                                    <span className="counter" data-target={5}>0</span> Countries
                                </div>
                                <div className="text-sm font-medium text-cool-grey uppercase tracking-wide">Global Expansion</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 3. THE "BENTO" VISION BLOCK */}
                <div className="grid lg:grid-cols-12 gap-6 mb-24 auto-rows-[minmax(300px,auto)]">

                    {/* Large Visual (Span 7) */}
                    <div className="lg:col-span-7 relative h-full min-h-[400px] rounded-2xl overflow-hidden group reveal-left bg-gray-900">
                        <img src={facilityOverview} alt="Factory" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 md:p-12">
                            <h3 className="text-white text-2xl font-bold mb-2">Made in Madurai, for the World</h3>
                            <p className="text-white/90 max-w-md">Our state-of-the-art facility combines traditional craftsmanship with precision technology.</p>
                        </div>
                    </div>

                    {/* Stacked Philosophy & Mission (Span 5) */}
                    <div className="lg:col-span-5 flex flex-col gap-6 reveal-right">
                        {/* Philosophy Box */}
                        <div className="flex-1 bg-deep-charcoal text-white rounded-2xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                            <Lightbulb className="w-8 h-8 text-brand-teal mb-6" />
                            <h4 className="text-xl font-bold mb-3">Our Philosophy</h4>
                            <p className="text-white/70 leading-relaxed">
                                We don’t just look for customers for our products — we look for problems to solve.
                                <span className="text-white block mt-2 font-medium">We create products that perform.</span>
                            </p>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />
                        </div>

                        {/* Mission Box */}
                        <div className="flex-1 bg-brand-teal/5 border border-brand-teal/10 rounded-2xl p-8 md:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                                <Target className="w-6 h-6 text-brand-teal" />
                                <h4 className="text-xl font-bold text-deep-charcoal">Our Mission</h4>
                            </div>
                            <p className="text-cool-grey leading-relaxed">
                                To unlock stunning interiors without compromise. We bridge the gap between luxury aesthetics and practical functionality.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4. STRUCTURED LISTS (Timeline & Features) */}
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 border-t border-gray-100 pt-16">

                    {/* Left: Defined Timeline List */}
                    <div className="reveal-up">
                        <h3 className="text-2xl font-bold mb-8">History of Innovation</h3>
                        <div className="space-y-0 divide-y divide-gray-100">
                            {[
                                { year: "2017", title: "Inception", desc: "Founded in Madurai with a clear vision for accessible luxury surfaces." },
                                { year: "2019", title: "Regional Growth", desc: "Rapid expansion across South India, establishing a strong dealer network." },
                                { year: "2023", title: "Global Reach", desc: "Operations launched in Malaysia and New York, proving our quality on the world stage." },
                            ].map((item, i) => (
                                <div key={i} className="py-6 flex gap-6 md:gap-12 group hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-xl">
                                    <span className="text-lg font-bold text-brand-teal shrink-0 w-16">{item.year}</span>
                                    <div>
                                        <h4 className="font-bold text-deep-charcoal text-lg mb-1">{item.title}</h4>
                                        <p className="text-cool-grey text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Feature Grid (Compact) */}
                    <div className="reveal-up delay-100">
                        <h3 className="text-2xl font-bold mb-8">Why Polymarble?</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Lasting Durability",
                                    desc: "Engineered to resist scratches, stains, and daily wear.",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "Design Freedom",
                                    desc: "Textures that emulate nature's rarest stones.",
                                    icon: Sparkles
                                },
                                {
                                    title: "Seamless Install",
                                    desc: "Lightweight and easy to cut, reducing project time.",
                                    icon: Wrench
                                },
                                {
                                    title: "Eco-Conscious",
                                    desc: "Sustainable manufacturing with minimal waste.",
                                    icon: Globe
                                },
                            ].map((feat, idx) => (
                                <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-transparent hover:border-brand-teal/20 transition-all">
                                    <feat.icon className="w-6 h-6 text-brand-teal mb-4" />
                                    <h4 className="font-bold text-deep-charcoal mb-2">{feat.title}</h4>
                                    <p className="text-sm text-cool-grey leading-relaxed">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
