import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// Import generated product images
import highGlossImage from "@assets/generated_images/High-gloss_polymarble_sheets_b1da0e5d.png";
import woodyPanelImage from "@assets/generated_images/Woody_panel_polymarble_sheets_479b86f5.png";
import solidColorImage from "@assets/generated_images/Solid_color_polymarble_sheets_f47ccc7d.png";
import texturedImage from "@assets/generated_images/Textured_polymarble_surface_detail_e034d7bf.png";
import mirrorImage from "@assets/generated_images/Mirror_finish_polymarble_sheets_1e70ee77.png";

export default function Gallery3D() {
  useScrollReveal();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const productCategories = [
    {
      id: "high-gloss",
      name: "High-Gloss Premium",
      description: "Timeless elegance with authentic marble patterns and veining",
      image: highGlossImage,
    },
    {
      id: "woody-panels",
      name: "Woody Panels",
      description: "Natural wood textures with superior durability and water resistance",
      image: woodyPanelImage,
    },
    {
      id: "solid-color",
      name: "Solid Color Range",
      description: "Clean, contemporary colors for modern architectural applications",
      image: solidColorImage,
    },
    {
      id: "textured-finishes",
      name: "Textured Finishes",
      description: "Dimensional surfaces that add depth and character to any space",
      image: texturedImage,
    },
    {
      id: "mirror-sheets",
      name: "Mirror Sheets",
      description: "Mirror-like finish for luxurious, high-impact installations",
      image: mirrorImage,
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % productCategories.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, productCategories.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % productCategories.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + productCategories.length) % productCategories.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="gallery" className="relative h-screen w-full overflow-hidden">
      {/* Full-Width Carousel */}
      <div className="relative w-full h-full">
        {productCategories.map((texture, index) => (
          <div
            key={texture.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'transform translate-x-0' : 
              index < currentSlide ? 'transform -translate-x-full' : 
              'transform translate-x-full'
            }`}
          >
            {/* Image Background with 3D Hover Effect */}
            <div className="relative w-full h-full group">
              <img
                src={texture.image}
                alt={texture.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ 
                  transform: 'perspective(1000px) rotateY(0deg)',
                  transition: 'transform 0.5s ease-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(5deg) rotateX(2deg) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
                }}
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 via-transparent to-deep-charcoal/30"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                <div className="max-w-4xl">
                  <h3 className="text-4xl md:text-6xl font-bold text-pure-white mb-4 reveal-up">
                    {texture.name}
                  </h3>
                  <p className="text-xl md:text-2xl text-warm-cream mb-6 reveal-fade">
                    {texture.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-metallic-gold/20 text-metallic-gold rounded-full text-sm font-medium">
                      Premium Quality
                    </span>
                    <span className="px-4 py-2 bg-metallic-gold/20 text-metallic-gold rounded-full text-sm font-medium">
                      Fire Resistant
                    </span>
                    <span className="px-4 py-2 bg-metallic-gold/20 text-metallic-gold rounded-full text-sm font-medium">
                      Easy Installation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={prevSlide}
          className="p-3 bg-deep-charcoal/50 backdrop-blur-sm text-pure-white rounded-full hover:bg-metallic-gold hover:text-deep-charcoal transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>
      
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={nextSlide}
          className="p-3 bg-deep-charcoal/50 backdrop-blur-sm text-pure-white rounded-full hover:bg-metallic-gold hover:text-deep-charcoal transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Auto-play Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={toggleAutoPlay}
          className="p-2 bg-deep-charcoal/50 backdrop-blur-sm text-pure-white rounded-full hover:bg-metallic-gold hover:text-deep-charcoal transition-all duration-300"
        >
          {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {productCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-metallic-gold scale-125'
                  : 'bg-pure-white/50 hover:bg-pure-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Pinch-to-zoom for mobile (placeholder - would need additional implementation) */}
      <div className="absolute top-4 left-4 z-10 md:hidden">
        <div className="text-xs text-pure-white/70 bg-deep-charcoal/50 backdrop-blur-sm px-3 py-1 rounded-full">
          Pinch to zoom
        </div>
      </div>
    </section>
  );
}