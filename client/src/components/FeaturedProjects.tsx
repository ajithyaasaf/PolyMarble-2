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
      id: 3,
      title: "Tirunelveli Hospital Wing",
      location: "Tirunelveli, Tamil Nadu",
      category: "Healthcare",
      before: "White walls showing wear from constant cleaning.",
      during: "Antimicrobial polymarble with hygienic installation.",
      after: "Clean, elegant walls built for healthcare standards.",
      roiSavings: "₹950",
      sqft: "2,000",
      year: "2024",
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
    <section id="projects" className="relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl lg:text-5xl font-bold mb-3 reveal-up">
            Case <span className="text-brand-teal">Studies</span>
          </h3>
          <p className="text-lg text-cool-grey max-w-2xl mx-auto reveal-up">
            Real projects. Real transformations. Real savings.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => {
            const active = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  active
                    ? "bg-brand-teal text-white"
                    : "bg-white text-deep-charcoal border border-brand-teal/20 hover:bg-brand-teal/10 hover:text-brand-teal"
                }`}
                aria-pressed={active}
              >
                <Filter className="w-3.5 h-3.5 inline mr-2" />
                {f}
              </button>
            );
          })}
        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-1 gap-8">
          {filteredProjects.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border border-brand-teal/20 bg-white p-6 shadow-sm reveal-up"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                <h4 className="text-xl font-bold text-deep-charcoal">{p.title}</h4>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-teal/10 text-brand-teal px-3 py-1 text-xs font-semibold w-max">
                  <CategoryIcon category={p.category} />
                  {p.category}
                </span>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-cool-grey mb-4">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                  {p.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-brand-teal" />
                  {p.year}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-brand-teal" />
                  {p.sqft} sq.ft.
                </span>
              </div>

              {/* Summary */}
              <ul className="space-y-2 text-sm text-deep-charcoal/90 mb-4">
                <li>
                  <strong className="text-deep-charcoal">Before:</strong> {p.before}
                </li>
                <li>
                  <strong className="text-deep-charcoal">During:</strong> {p.during}
                </li>
                <li>
                  <strong className="text-deep-charcoal">After:</strong> {p.after}
                </li>
              </ul>

              {/* Savings */}
              <div className="flex items-center justify-between pt-4 border-t border-brand-teal/15">
                <span className="inline-flex items-center gap-2 text-brand-teal font-semibold text-sm">
                  <TrendingUp className="w-4 h-4" />
                  Saved {p.roiSavings}/sq.ft vs natural marble
                </span>
                <button className="inline-flex items-center text-sm text-brand-teal hover:text-brand-peach transition">
                  View full case study
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
