import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickQuote from "@/components/QuickQuote";
import { Play, Pause, Eye } from "lucide-react";

export default function Inspiration() {
  useScrollReveal();

  const [hoveredLookbook, setHoveredLookbook] = useState<string | null>(null);

  const lookbooks = [
    {
      id: "urban-minimal",
      title: "Urban Minimal",
      description: "Clean lines and sophisticated simplicity for modern city living",
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      videoSrc: "https://videos.pexels.com/video-files/8068779/8068779-hd_1920_1080_30fps.mp4",
      projects: ["Madurai Penthouse", "Chennai Corporate HQ", "Coimbatore Loft"]
    },
    {
      id: "tropical-luxe",
      title: "Tropical Luxe",
      description: "Rich textures and warm tones inspired by Tamil Nadu's natural beauty",
      thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      videoSrc: "https://videos.pexels.com/video-files/8419207/8419207-hd_1920_1080_30fps.mp4",
      projects: ["Thanjavur Resort", "Madurai Villa", "Salem Spa"]
    },
    {
      id: "heritage-modern",
      title: "Heritage Modern",
      description: "Traditional craftsmanship meets contemporary design aesthetics",
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      videoSrc: "https://videos.pexels.com/video-files/8068779/8068779-hd_1920_1080_30fps.mp4",
      projects: ["Tirunelveli Temple Complex", "Madurai Heritage Hotel", "Chennai Museum"]
    },
    {
      id: "wellness-sanctuary",
      title: "Wellness Sanctuary",
      description: "Calming spaces designed for health, healing, and rejuvenation",
      thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      videoSrc: "https://videos.pexels.com/video-files/8419207/8419207-hd_1920_1080_30fps.mp4",
      projects: ["Coimbatore Wellness Center", "Salem Hospital", "Chennai Yoga Studio"]
    }
  ];

  const styledSpaces = [
    {
      id: 1,
      title: "Luxury Living Room",
      location: "Chennai Villa",
      videoSrc: "https://videos.pexels.com/video-files/8068779/8068779-hd_1920_1080_30fps.mp4",
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      pattern: "Calacatta Gold",
      category: "Residential"
    },
    {
      id: 2,
      title: "Corporate Reception",
      location: "Madurai Tech Park",
      videoSrc: "https://videos.pexels.com/video-files/8419207/8419207-hd_1920_1080_30fps.mp4",
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      pattern: "Noir Elegance",
      category: "Commercial"
    },
    {
      id: 3,
      title: "Spa Treatment Room",
      location: "Thanjavur Resort",
      videoSrc: "https://videos.pexels.com/video-files/8068779/8068779-hd_1920_1080_30fps.mp4",
      thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      pattern: "Verde Luxe",
      category: "Wellness"
    },
    {
      id: 4,
      title: "Restaurant Interior",
      location: "Coimbatore Fine Dining",
      videoSrc: "https://videos.pexels.com/video-files/8419207/8419207-hd_1920_1080_30fps.mp4",
      thumbnail: "https://images.unsplash.com/photo-1555529669-2269763671c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      pattern: "Emperador Brown",
      category: "Hospitality"
    },
    {
      id: 5,
      title: "Master Bedroom",
      location: "Salem Residence",
      videoSrc: "https://videos.pexels.com/video-files/8068779/8068779-hd_1920_1080_30fps.mp4",
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      pattern: "Calacatta Gold",
      category: "Residential"
    },
    {
      id: 6,
      title: "Retail Showroom",
      location: "Tirunelveli Mall",
      videoSrc: "https://videos.pexels.com/video-files/8419207/8419207-hd_1920_1080_30fps.mp4",
      thumbnail: "https://images.unsplash.com/photo-1555529669-2269763671c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      pattern: "Noir Elegance",
      category: "Retail"
    }
  ];

  return (
    <div className="relative min-h-screen bg-rich-black text-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-rich-black to-dark-forest">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 reveal-up">
                Inspiration <span className="text-metallic-gold text-shimmer">Lab</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto reveal-fade">
                Explore curated design collections and see how polymarble transforms spaces across Tamil Nadu. 
                Discover your perfect style and envision your dream space.
              </p>
            </div>
          </div>
        </section>

        {/* Mood-Board Gallery */}
        <section className="py-20 bg-dark-forest">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 reveal-up">
                Design <span className="text-metallic-gold text-shimmer">Lookbooks</span>
              </h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto reveal-fade">
                Curated collections showcasing different aesthetic approaches and design philosophies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {lookbooks.map((lookbook, index) => (
                <div
                  key={lookbook.id}
                  className="relative group bg-rich-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-metallic-gold/20 reveal-up"
                  onMouseEnter={() => setHoveredLookbook(lookbook.id)}
                  onMouseLeave={() => setHoveredLookbook(null)}
                >
                  {/* Background Image/Video */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {hoveredLookbook === lookbook.id ? (
                      <video
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={lookbook.videoSrc} type="video/mp4" />
                        <img
                          src={lookbook.thumbnail}
                          alt={lookbook.title}
                          className="w-full h-full object-cover"
                        />
                      </video>
                    ) : (
                      <img
                        src={lookbook.thumbnail}
                        alt={lookbook.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-transparent to-transparent"></div>
                    
                    {/* Play Indicator */}
                    <div className="absolute top-4 right-4">
                      <div className="p-2 bg-rich-black/50 backdrop-blur-sm rounded-full">
                        {hoveredLookbook === lookbook.id ? (
                          <Pause className="w-4 h-4 text-metallic-gold" />
                        ) : (
                          <Play className="w-4 h-4 text-metallic-gold" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-metallic-gold mb-3">{lookbook.title}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{lookbook.description}</p>
                    
                    {/* Featured Projects */}
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium text-gray-400 uppercase tracking-wide">Featured Projects:</h5>
                      <div className="flex flex-wrap gap-2">
                        {lookbook.projects.map((project, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-metallic-gold/20 text-metallic-gold text-sm rounded-full"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Auto-play Styled Spaces */}
        <section className="py-20 bg-rich-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 reveal-up">
                Styled <span className="text-metallic-gold text-shimmer">Spaces</span>
              </h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto reveal-fade">
                See polymarble in action across different space types and design contexts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {styledSpaces.map((space, index) => (
                <div
                  key={space.id}
                  className="group bg-dark-forest/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-metallic-gold/20 reveal-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Video Background */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <video
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={space.videoSrc} type="video/mp4" />
                      <img
                        src={space.thumbnail}
                        alt={space.title}
                        className="w-full h-full object-cover"
                      />
                    </video>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-metallic-gold/90 text-rich-black text-sm font-medium rounded-full">
                        {space.category}
                      </span>
                    </div>

                    {/* View Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-2 bg-rich-black/50 backdrop-blur-sm rounded-full">
                        <Eye className="w-4 h-4 text-metallic-gold" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2">{space.title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{space.location}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-metallic-gold text-sm font-medium">{space.pattern}</span>
                      <button className="text-metallic-gold hover:text-yellow-400 text-sm font-medium transition-colors">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <QuickQuote />
    </div>
  );
}