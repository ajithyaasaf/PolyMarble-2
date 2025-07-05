import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/8068779/8068779-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/30 via-transparent to-rich-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 reveal-up">
          Sculpting <span className="text-metallic-gold text-shimmer">Dimensions</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto reveal-fade">
          Redefining luxury with bespoke 3D marble surfaces, where artistry meets architectural innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-group">
          <button
            onClick={() => scrollToSection("gallery")}
            className="inline-flex items-center px-8 py-4 rounded-full bg-metallic-gold text-rich-black font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 duration-300 stagger-item"
          >
            Explore Creations
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-rich-black transition-all duration-300 stagger-item"
          >
            Our Story
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float-animation">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer"
             onClick={() => scrollToSection("about")}>
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
