import { useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  type: string;
  rating: number;
  video: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Residential Customer",
    location: "Madurai",
    type: "Home Interior",
    rating: 5,
    video: "https://res.cloudinary.com/doeodacsg/video/upload/v1771570730/polymarble/videos/IMG_4517.mov",
  },
  {
    id: 2,
    name: "Commercial Client",
    location: "Chennai",
    type: "Office Space",
    rating: 5,
    video: "https://res.cloudinary.com/doeodacsg/video/upload/v1771578707/Model2_zxdgwg.mp4",
  },
  {
    id: 3,
    name: "Independent Architect",
    location: "Coimbatore",
    type: "Luxury Projects",
    rating: 5,
    video: "https://res.cloudinary.com/doeodacsg/video/upload/v1771578775/Model_1_fiqfyf.mp4",
  }
];

const VideoCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className="relative rounded-3xl overflow-hidden group border border-brand-teal/20 shadow-xl hover:shadow-2xl hover:border-brand-teal/50 transition-all duration-500 bg-deep-charcoal aspect-[9/16] flex flex-col cursor-pointer stagger-item reveal-up"
      onClick={togglePlay}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        src={testimonial.video}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loop
        playsInline
        muted={isMuted}
        preload="metadata"
      />

      {/* Gradient Overlays for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 pointer-events-none transition-opacity duration-300" />

      {/* Top Controls */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-black/60 transition-colors"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Play/Pause Overlay - Center */}
      <div className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-16 h-16 rounded-full bg-brand-teal/80 backdrop-blur-md flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative mt-auto p-6 z-20 w-full">
        {/* Rating */}
        <div className="flex gap-1 mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-brand-peach text-brand-peach drop-shadow-md" />
          ))}
        </div>

        {/* Customer Details */}
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h4 className="text-white font-bold text-xl drop-shadow-md mb-1">
            {testimonial.name}
          </h4>
          <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded border border-white/10">
              {testimonial.type}
            </span>
            <span>•</span>
            <span>{testimonial.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  useScrollReveal();

  return (
    <section className="relative py-24 bg-deep-charcoal overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-peach/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-4xl lg:text-5xl font-bold text-white reveal-up mb-4 leading-tight">
              Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-peach to-brand-teal">Customers</span>
            </h3>
            <p className="text-xl text-white/70 reveal-fade">
              Watch real installations and stories from contractors and homeowners who transformed their spaces with Polymarble.
            </p>
          </div>

          {/* Stats Summary */}
          <div className="flex gap-8 reveal-up delay-200">
            <div>
              <div className="text-3xl font-bold text-brand-teal mb-1">2,00,000+</div>
              <div className="text-sm text-white/60">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-white/10 self-center" />
            <div>
              <div className="text-3xl font-bold text-brand-peach mb-1">4.8/5</div>
              <div className="text-sm text-white/60">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-group max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <VideoCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}