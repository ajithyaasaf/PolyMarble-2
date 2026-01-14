import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ArrowRight,
  Filter,
  TrendingUp,
  MapPin,
  Ruler,
  CalendarDays,
  Home,
  Building2,
  Hospital,
  Layers,
  ArrowUpRight,
} from "lucide-react";

type CaseStudy = {
  id: number;
  title: string;
  location: string;
  category: string;
  before: string;
  during: string;
  after: string;
  roiSavings: string;
  sqft: string;
  year: string;
};

export default function FeaturedProjects() {
  useScrollReveal();

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Residential", "Commercial", "Exterior", "Healthcare"];

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Madurai Villa Transformation",
      location: "Madurai, Tamil Nadu",
      category: "Residential",
      before: "Aging cement walls with frequent maintenance issues.",
      during: "Lightweight polymarble installed with seamless joints.",
      after: "Marble-finish walls with modern elegance and durability.",
      roiSavings: "₹850",
      sqft: "1,200",
      year: "2023",
    },
    {
      id: 2,
      title: "Chennai Office Complex",
      location: "Chennai, Tamil Nadu",
      category: "Commercial",
      before: "Plain lobby lacking brand presence.",
      during: "Calacatta-pattern polymarble fitted with precision.",
      after: "Luxury reception that elevates brand image.",
      roiSavings: "₹1,200",
      sqft: "800",
      year: "2023",
    },

    {
      id: 4,
      title: "Coimbatore Restaurant Exterior",
      location: "Coimbatore, Tamil Nadu",
      category: "Exterior",
      before: "Weathered façade needing frequent repainting.",
      during: "Weather-resistant polymarble cladding system applied.",
      after: "Durable, striking exterior with lasting appeal.",
      roiSavings: "₹700",
      sqft: "600",
      year: "2024",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((p) => p.category === activeFilter);

  const CategoryIcon = ({ category }: { category: string }) => {
    switch (category) {
      case "Residential":
        return <Home className="w-3.5 h-3.5" />;
      case "Commercial":
        return <Building2 className="w-3.5 h-3.5" />;
      case "Exterior":
        return <Layers className="w-3.5 h-3.5" />;
      case "Healthcare":
        return <Hospital className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-deep-charcoal text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-brown/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal-up">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              <span className="block text-transparent stroke-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Case</span>
              <span className="block text-white">Studies</span>
            </h2>
            <p className="mt-6 text-xl text-white/50 max-w-lg">
              Real projects. Real transformations. See how we deliver value across sectors.
            </p>
          </div>

          {/* Filters - Dark Mode */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${active
                    ? "bg-brand-teal text-white border-brand-teal"
                    : "bg-transparent text-white/60 border-white/10 hover:border-brand-teal/50 hover:text-white"
                    }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>


        {/* Project Cards - Horizontal Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-up">
          {filteredProjects.map((p, idx) => {
            // Make the first item 'featured' visually if showing 'All', or just styling
            const isFeatured = idx === 0 && activeFilter === 'All';

            return (
              <article
                key={p.id}
                className={`group rounded-[2rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 border ${isFeatured
                  ? 'bg-brand-teal text-white border-brand-teal shadow-2xl shadow-brand-teal/20 scale-100 md:scale-105 z-10'
                  : 'bg-white/5 backdrop-blur-sm text-white border-white/10 hover:border-white/30 hover:bg-white/10'
                  }`}
              >
                <div>
                  {/* Header */}
                  <div className="flex flex-col gap-4 mb-8">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-max ${isFeatured ? 'bg-white/20 text-white' : 'bg-brand-teal/20 text-brand-teal'
                      }`}>
                      <CategoryIcon category={p.category} />
                      {p.category}
                    </span>
                    <h4 className="text-2xl font-bold leading-tight">{p.title}</h4>
                  </div>

                  {/* Key Stats */}
                  <div className={`grid grid-cols-2 gap-4 mb-8 pb-8 border-b ${isFeatured ? 'border-white/20' : 'border-white/10'}`}>
                    <div>
                      <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isFeatured ? 'text-white/60' : 'text-white/40'}`}>ROI Savings</div>
                      <div className="text-xl font-bold">{p.roiSavings}<span className="text-sm font-normal opacity-70">/sq.ft</span></div>
                    </div>
                    <div>
                      <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isFeatured ? 'text-white/60' : 'text-white/40'}`}>Area</div>
                      <div className="text-xl font-bold">{p.sqft}<span className="text-sm font-normal opacity-70"> sq.ft</span></div>
                    </div>
                  </div>

                  {/* Transformation Summary */}
                  <div className="space-y-3 mb-8">
                    <div className="flex gap-3 text-sm">
                      <span className={`shrink-0 font-bold uppercase text-xs mt-1 ${isFeatured ? 'text-white/60' : 'text-white/40'}`}>Before</span>
                      <p className="opacity-80">{p.before}</p>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <span className={`shrink-0 font-bold uppercase text-xs mt-1 ${isFeatured ? 'text-white/60' : 'text-brand-teal'}`}>After</span>
                      <p className={isFeatured ? "font-medium" : "text-white"}>{p.after}</p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between">
                  <span className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${isFeatured ? 'text-white/60' : 'text-white/40'}`}>
                    <MapPin className="w-3 h-3" /> {p.location}
                  </span>
                  <button className={`p-2 rounded-full transition-transform group-hover:translate-x-1 ${isFeatured ? 'bg-white text-brand-teal' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
