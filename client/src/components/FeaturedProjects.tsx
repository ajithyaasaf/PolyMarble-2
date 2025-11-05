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
    <section id="projects" className="relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold mb-6 reveal-up">Case <span className="text-brand-teal text-shimmer">Studies</span></h3>
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
              className="bg-pure-white/80 backdrop-blur-sm rounded-2xl p-8 border border-brand-teal/20 stagger-item reveal-up shadow-lg"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <h4 className="text-2xl font-bold text-brand-teal mb-2">{study.title}</h4>
                  <p className="text-cool-grey">{study.location} • {study.year}</p>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <TrendingUp className="w-5 h-5 text-brand-teal" />
                  <span className="text-brand-teal font-bold text-lg">Saved {study.roiSavings}/sq.ft. vs. natural marble</span>
                </div>
              </div>

              {/* Before → During → After */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Before */}
                <div className="group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={study.beforeImage}
                      alt={`${study.title} - Before`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-brown/80 text-pure-white px-3 py-1 rounded-full text-sm font-medium">
                        Before
                      </span>
                    </div>
                  </div>
                  <p className="text-cool-grey text-sm leading-relaxed">{study.before}</p>
                </div>

                {/* During */}
                <div className="group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={study.duringImage}
                      alt={`${study.title} - During`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-peach/80 text-pure-white px-3 py-1 rounded-full text-sm font-medium">
                        During
                      </span>
                    </div>
                  </div>
                  <p className="text-cool-grey text-sm leading-relaxed">{study.during}</p>
                </div>

                {/* After */}
                <div className="group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={study.afterImage}
                      alt={`${study.title} - After`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-teal/80 text-pure-white px-3 py-1 rounded-full text-sm font-medium">
                        After
                      </span>
                    </div>
                  </div>
                  <p className="text-cool-grey text-sm leading-relaxed">{study.after}</p>
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
