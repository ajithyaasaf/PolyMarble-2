import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export default function Gallery3D() {
  useScrollReveal();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const textureVideos = [
    {
      id: "calacatta",
      name: "Calacatta Gold",
      description: "Ultra-close marble veining with golden highlights",
      videoSrc: "https://videos.pexels.com/video-files/8419207/8419207-hd_1920_1080_30fps.mp4",
      fallbackImage: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    },
    {
      id: "noir",
      name: "Noir Elegance",
      description: "Deep black marble with dramatic white veining",
      videoSrc: "https://videos.pexels.com/video-files/8068779/8068779-hd_1920_1080_30fps.mp4",
      fallbackImage: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    },
    {
      id: "verde",
      name: "Verde Luxe",
      description: "Rich green marble with flowing natural patterns",
      videoSrc: "https://videos.pexels.com/video-files/8419207/8419207-hd_1920_1080_30fps.mp4",
      fallbackImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    },
    {
      id: "emperador",
      name: "Emperador Brown",
      description: "Warm brown marble with intricate fossil patterns",
      videoSrc: "https://videos.pexels.com/video-files/8068779/8068779-hd_1920_1080_30fps.mp4",
      fallbackImage: "https://images.unsplash.com/photo-1615529162924-f8c8b4c7b623?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % textureVideos.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, textureVideos.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % textureVideos.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + textureVideos.length) % textureVideos.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="gallery" className="relative h-screen w-full overflow-hidden">
      {/* Full-Width Carousel */}
      <div className="relative w-full h-full">
        {textureVideos.map((texture, index) => (
          <div
            key={texture.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'transform translate-x-0' : 
              index < currentSlide ? 'transform -translate-x-full' : 
              'transform translate-x-full'
            }`}
          >
            {/* Video Background */}
            <div className="relative w-full h-full group">
              <video
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
                style={{ 
                  transform: 'perspective(1000px) rotateY(0deg)',
                  transition: 'transform 0.5s ease-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(5deg) rotateX(2deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
                }}
              >
                <source src={texture.videoSrc} type="video/mp4" />
                {/* Fallback image */}
                <img
                  src={texture.fallbackImage}
                  alt={texture.name}
                  className="w-full h-full object-cover"
                />
              </video>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 via-transparent to-rich-black/30"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                <div className="max-w-4xl">
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 reveal-up">
                    {texture.name}
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-300 mb-6 reveal-fade">
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
          className="p-3 bg-rich-black/50 backdrop-blur-sm text-white rounded-full hover:bg-metallic-gold hover:text-rich-black transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>
      
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={nextSlide}
          className="p-3 bg-rich-black/50 backdrop-blur-sm text-white rounded-full hover:bg-metallic-gold hover:text-rich-black transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Auto-play Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={toggleAutoPlay}
          className="p-2 bg-rich-black/50 backdrop-blur-sm text-white rounded-full hover:bg-metallic-gold hover:text-rich-black transition-all duration-300"
        >
          {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {textureVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-metallic-gold scale-125'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Pinch-to-zoom for mobile (placeholder - would need additional implementation) */}
      <div className="absolute top-4 left-4 z-10 md:hidden">
        <div className="text-xs text-white/70 bg-rich-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
          Pinch to zoom
        </div>
      </div>
    </section>
  );
}