import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Filter, TrendingUp } from "lucide-react";
import { useState } from "react";

// Import generated project images
import beforeImage from "@assets/generated_images/Before_renovation_plain_walls_0c93cace.png";
import duringImage from "@assets/generated_images/During_installation_process_d116c398.png";
import afterImage from "@assets/generated_images/After_renovation_luxury_walls_63ec8e29.png";
import commercialBeforeImage from "@assets/generated_images/Commercial_building_before_renovation_f076c2f7.png";
import commercialAfterImage from "@assets/generated_images/Commercial_building_after_renovation_77168409.png";
import professionalInstallationImage from "@assets/generated_images/Professional_installation_process_image_9587fee8.png";
import completedOfficeImage from "@assets/generated_images/Completed_office_installation_showcase_fdb07259.png";

export default function FeaturedProjects() {
  useScrollReveal();

  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const filters = ["All", "Residential", "Commercial", "Exterior", "Healthcare"];

  const caseStudies = [
    {
      id: 1,
      title: "Madurai Villa Transformation",
      location: "Madurai, Tamil Nadu",
      category: "Residential",
      beforeImage: beforeImage,
      duringImage: duringImage,
      afterImage: afterImage,
      before: "Traditional cement walls showing age and requiring frequent maintenance with high upkeep costs.",
      during: "Our team installing lightweight polymarble sheets using advanced adhesive technology for seamless application.",
      after: "Stunning marble-finish walls that transformed the entire space with modern elegance and durability.",
      roiSavings: "₹850",
      sqft: "1,200",
      year: "2023"
    },
    {
      id: 2,
      title: "Chennai Office Complex",
      location: "Chennai, Tamil Nadu", 
      category: "Commercial",
      beforeImage: commercialBeforeImage,
      duringImage: duringImage,
      afterImage: commercialAfterImage,
      before: "Plain concrete walls in corporate lobby lacking visual appeal and brand representation.",
      during: "Installing premium Calacatta pattern polymarble sheets with precision cutting and professional mounting techniques.",
      after: "Luxurious marble-clad reception area that elevates the company's professional image significantly.",
      roiSavings: "₹1,200",
      sqft: "800",
      year: "2023"
    },
    {
      id: 3,
      title: "Tirunelveli Hospital Wing",
      location: "Tirunelveli, Tamil Nadu",
      category: "Healthcare", 
      beforeImage: beforeImage,
      duringImage: duringImage,
      afterImage: afterImage,
      before: "Clinical white walls requiring frequent cleaning and showing wear from constant sanitization procedures.",
      during: "Installing antimicrobial polymarble sheets designed specifically for healthcare environments with medical-grade adhesives.",
      after: "Beautiful, hygienic surfaces that maintain elegance while meeting strict healthcare facility standards.",
      roiSavings: "₹950",
      sqft: "2,000",
      year: "2024"
    },
    {
      id: 4,
      title: "Coimbatore Restaurant Exterior",
      location: "Coimbatore, Tamil Nadu",
      category: "Exterior",
      beforeImage: commercialBeforeImage,
      duringImage: duringImage,
      afterImage: commercialAfterImage,
      before: "Weather-beaten exterior walls requiring frequent repainting and showing monsoon damage.",
      during: "Applying weather-resistant polymarble cladding system designed to withstand Tamil Nadu's tropical climate.",
      after: "Striking façade that attracts customers while resisting weather damage and maintaining appearance year-round.",
      roiSavings: "₹700",
      sqft: "600",
      year: "2024"
    },
    {
      id: 5,
      title: "Salem Residential Complex",
      location: "Salem, Tamil Nadu",
      category: "Residential", 
      beforeImage: beforeImage,
      duringImage: professionalInstallationImage,
      afterImage: completedOfficeImage,
      before: "Basic painted walls throughout common areas lacking visual interest and requiring frequent maintenance.",
      during: "Installing multiple polymarble patterns to create unique zones while maintaining design cohesion.",
      after: "Elegant common spaces that increased property value and resident satisfaction dramatically.",
      roiSavings: "₹1,100",
      sqft: "3,500",
      year: "2024"
    },
    {
      id: 6,
      title: "Thanjavur Shopping Mall",
      location: "Thanjavur, Tamil Nadu",
      category: "Commercial",
      beforeImage: commercialBeforeImage,
      duringImage: duringImage,
      afterImage: commercialAfterImage,
      before: "Plain retail spaces with generic finishes failing to attract premium brands and customers.",
      during: "Creating luxury retail environment using premium polymarble finishes throughout main corridors and storefronts.",
      after: "High-end shopping destination that successfully attracted luxury brands and increased foot traffic.",
      roiSavings: "₹1,500",
      sqft: "5,000",
      year: "2024"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(project => project.category === activeFilter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section id="projects" className="relative overflow-hidden py-20">
      {/* Ambient Background with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-pure-white to-light-silver/20"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="parallax-slow absolute top-20 right-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="parallax-medium absolute bottom-40 left-10 w-80 h-80 bg-brand-peach/5 rounded-full blur-3xl"></div>
        <div className="parallax-fast absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-light-silver/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold mb-6 reveal-up">
            Case <span className="text-brand-teal text-shimmer">Studies</span>
          </h3>
          <p className="text-xl text-cool-grey max-w-2xl mx-auto reveal-up">
            Real transformations. Real savings. Real results from across Tamil Nadu.
          </p>
        </div>

        {/* Filtering Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(3);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-brand-teal text-pure-white'
                  : 'bg-pure-white/50 text-deep-charcoal hover:bg-brand-teal/20 hover:text-brand-teal border border-brand-teal/20'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {filter}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-1 gap-12 stagger-group">
          {visibleProjects.map((study, index) => (
            <div
              key={study.id}
              className="bg-pure-white/80 backdrop-blur-xl rounded-3xl p-8 border border-brand-teal/30 stagger-item reveal-up shadow-2xl hover:shadow-3xl transition-all duration-500 group"
              style={{
                transform: `perspective(1000px) rotateX(${index % 2 === 0 ? '1deg' : '-1deg'})`,
              }}
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-teal via-brand-peach to-brand-teal rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 reveal-left">
                <div>
                  <div className="inline-flex items-center gap-2 bg-brand-teal/10 px-3 py-1 rounded-full mb-3">
                    <span className="text-xs font-bold text-brand-teal uppercase tracking-wide">Project {index + 1}</span>
                  </div>
                  <h4 className="text-3xl font-bold text-brand-teal mb-2 group-hover:text-shimmer transition-all">
                    {study.title}
                  </h4>
                  <p className="text-cool-grey">{study.location} • {study.year}</p>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0 bg-gradient-to-r from-brand-teal/10 to-brand-peach/10 p-4 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-brand-teal animate-pulse" />
                  <span className="text-brand-teal font-bold text-lg">Saved {study.roiSavings}/sq.ft.</span>
                </div>
              </div>

              {/* Scrollytelling Timeline: Before → During → After */}
              <div className="grid md:grid-cols-3 gap-6 mb-8 relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-brown via-brand-peach to-brand-teal opacity-30"></div>
                
                {/* Before */}
                <div className="group/stage relative reveal-left">
                  <div className="relative overflow-hidden rounded-2xl mb-4 border-2 border-brand-brown/30 shadow-lg">
                    <img
                      src={study.beforeImage}
                      alt={`${study.title} - Before`}
                      className="w-full h-56 object-cover transition-all duration-700 group-hover/stage:scale-110 group-hover/stage:rotate-1"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/50 to-transparent opacity-0 group-hover/stage:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-brown text-pure-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        Before
                      </span>
                    </div>
                    {/* Timeline Marker */}
                    <div className="hidden md:block absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brand-brown rounded-full border-4 border-pure-white shadow-lg"></div>
                  </div>
                  <p className="text-cool-grey text-sm leading-relaxed bg-pure-white/50 p-4 rounded-lg">{study.before}</p>
                </div>

                {/* During */}
                <div className="group/stage relative reveal-scale">
                  <div className="relative overflow-hidden rounded-2xl mb-4 border-2 border-brand-peach/30 shadow-lg">
                    <img
                      src={study.duringImage}
                      alt={`${study.title} - During`}
                      className="w-full h-56 object-cover transition-all duration-700 group-hover/stage:scale-110 group-hover/stage:rotate-1"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/50 to-transparent opacity-0 group-hover/stage:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-peach text-pure-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        During Installation
                      </span>
                    </div>
                    {/* Timeline Marker */}
                    <div className="hidden md:block absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brand-peach rounded-full border-4 border-pure-white shadow-lg"></div>
                  </div>
                  <p className="text-cool-grey text-sm leading-relaxed bg-pure-white/50 p-4 rounded-lg">{study.during}</p>
                </div>

                {/* After */}
                <div className="group/stage relative reveal-right">
                  <div className="relative overflow-hidden rounded-2xl mb-4 border-2 border-brand-teal/30 shadow-lg">
                    <img
                      src={study.afterImage}
                      alt={`${study.title} - After`}
                      className="w-full h-56 object-cover transition-all duration-700 group-hover/stage:scale-110 group-hover/stage:rotate-1"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/50 to-transparent opacity-0 group-hover/stage:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-brand-teal text-pure-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                        After
                      </span>
                    </div>
                    {/* Timeline Marker */}
                    <div className="hidden md:block absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brand-teal rounded-full border-4 border-pure-white shadow-lg"></div>
                    {/* Success Badge */}
                    <div className="absolute bottom-4 right-4 bg-pure-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                      <span className="text-xs font-bold text-brand-teal">✓ Completed</span>
                    </div>
                  </div>
                  <p className="text-cool-grey text-sm leading-relaxed bg-pure-white/50 p-4 rounded-lg">{study.after}</p>
                </div>
              </div>

              {/* Project Stats */}
              <div className="flex flex-wrap items-center justify-between pt-6 border-t border-brand-teal/20">
                <div className="flex gap-6 text-sm text-cool-grey">
                  <span>Area: <strong className="text-deep-charcoal">{study.sqft} sq.ft.</strong></span>
                  <span>Category: <strong className="text-brand-teal">{study.category}</strong></span>
                </div>
                <button className="inline-flex items-center text-brand-teal hover:text-brand-peach transition-all duration-300 hover:scale-105 magnetic perspective-tilt mt-4 md:mt-0">
                  View Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-12">
            <button
              onClick={showMore}
              className="inline-flex items-center px-8 py-4 bg-brand-teal text-pure-white font-bold rounded-full hover:bg-brand-teal/90 transition-all duration-300 hover:scale-105 magnetic flip-slab"
              style={{
                animation: 'flipSlab 0.6s ease-in-out'
              }}
            >
              Show me more
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
