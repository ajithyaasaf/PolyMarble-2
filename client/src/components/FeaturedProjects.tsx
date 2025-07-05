import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  useScrollReveal();

  const projects = [
    {
      id: 1,
      title: "Luxury Hotel Lobby",
      description: "A breathtaking feature wall utilizing our Ethereal Series creates an atmosphere of sophisticated calm and leaves an unforgettable first impression for guests entering this prestigious hotel.",
      location: "Dubai, UAE",
      year: "2023",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Hospitality", "3D Texture", "LED Integration"],
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      description: "Transforming a corporate environment with our Architectural Series, creating an inspiring workspace that balances professionalism with artistic elegance through innovative 3D marble applications.",
      location: "New York, USA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Corporate", "Architectural", "Custom Design"],
    },
    {
      id: 3,
      title: "Residential Sanctuary",
      description: "A private residence showcasing our Sculptural Series, where every surface tells a story of luxury and refinement through meticulously crafted 3D marble elements.",
      location: "London, UK",
      year: "2023",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Residential", "Sculptural", "Bespoke"],
    },
    {
      id: 4,
      title: "Flagship Retail Space",
      description: "Revolutionary retail design featuring our Interactive Series, creating an immersive shopping experience where customers can engage with 3D marble elements that respond to touch and movement.",
      location: "Tokyo, Japan",
      year: "2023",
      image: "https://images.unsplash.com/photo-1555529669-2269763671c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["Retail", "Interactive", "Technology"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-forest">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold mb-6 reveal-up">Featured <span className="text-metallic-gold text-shimmer">Projects</span></h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto reveal-up">
            Discover how our 3D marble innovations transform architectural spaces worldwide.
          </p>
        </div>

        <div className="space-y-20 stagger-group">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center stagger-item ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`relative overflow-hidden rounded-2xl ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              } ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white reveal-fade">
                  <div className="text-sm font-medium">{project.location}</div>
                  <div className="text-xs text-gray-300">{project.year}</div>
                </div>
              </div>
              
              <div className={`${
                index % 2 === 0 ? "reveal-elastic" : "reveal-bounce"
              } ${index % 2 === 1 ? "lg:order-1 lg:pr-8" : "lg:pl-8"}`}>
                <h4 className="text-3xl font-bold text-metallic-gold mb-4 text-shimmer type-effect">{project.title}</h4>
                <p className="text-gray-300 text-lg mb-6 velocity-blur">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6 stagger-group">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-deep-jade/30 text-deep-jade border border-deep-jade/50 rounded-full text-sm stagger-item hover:bg-deep-jade/50 transition-all duration-300 magnetic liquid-blob"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center text-metallic-gold hover:text-yellow-400 transition-all duration-300 hover:scale-105 magnetic perspective-tilt">
                  View Project Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
