import { useState } from "react";
import { Play, X, MapPin, Filter } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import video1 from "@assets/IMG_7687-optimized_1762339119496.mp4";
import video2 from "@assets/IMG_7689-optimized_1762339119497.mp4";
import video3 from "@assets/IMG_7694-optimized_1762339119497.mp4";
import video4 from "@assets/IMG_7701-optimized_1762339119497.mp4";
import video5 from "@assets/IMG_7707-optimized_1762339119497.mp4";
import video6 from "@assets/IMG_4476-optimized_1762339251996.mp4";
import video7 from "@assets/IMG_4477-optimized_1762339251996.mp4";
import video8 from "@assets/IMG_4478-optimized_1762339251996.mp4";
import video9 from "@assets/IMG_4480-optimized_1762339251997.mp4";
import video10 from "@assets/IMG_4488-optimized_1762339251997.mp4";
import video11 from "@assets/IMG_4490-optimized_1762339251997.mp4";
import video12 from "@assets/IMG_4495-optimized_1762339251997.mp4";
import video13 from "@assets/IMG_4496-optimized_1762339251997.mp4";
import video14 from "@assets/IMG_4500-optimized_1762339251997.mp4";
import video15 from "@assets/IMG_4506-optimized_1762339251998.mp4";
import video16 from "@assets/IMG_4519-optimized_1762339251998.mp4";
import video17 from "@assets/IMG_4526-optimized_1762339251998.mp4";
import video18 from "@assets/IMG_4528-optimized_1762339251998.mp4";

interface Video {
  id: string;
  src: string;
  location: string;
  thumbnail?: string;
}

export default function VideoGallery() {
  useScrollReveal();



  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    { id: "1", src: video1, location: "Achampathu" },
    { id: "2", src: video2, location: "Achampathu" },
    { id: "3", src: video3, location: "Achampathu" },
    { id: "4", src: video4, location: "Achampathu" },
    { id: "5", src: video5, location: "Achampathu" },
    { id: "6", src: video6, location: "Maathur" },
    { id: "7", src: video7, location: "Maathur" },
    { id: "8", src: video8, location: "Maathur" },
    { id: "9", src: video9, location: "Maathur" },
    { id: "10", src: video10, location: "Maathur" },
    { id: "11", src: video11, location: "Maathur" },
    { id: "12", src: video12, location: "Maathur" },
    { id: "13", src: video13, location: "Maathur" },
    { id: "14", src: video14, location: "Maathur" },
    { id: "15", src: video15, location: "Maathur" },
    { id: "16", src: video16, location: "Maathur" },
    { id: "17", src: video17, location: "Maathur" },
    { id: "18", src: video18, location: "Maathur" },
  ];



  return (
    <section className="relative overflow-hidden py-20">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-pure-white to-light-silver/20"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-80 h-80 bg-brand-peach/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <h3 className="text-4xl lg:text-5xl font-bold mb-4">
            Customer{" "}
            <span className="text-brand-teal text-shimmer">Installations</span>
          </h3>
          <p className="text-xl text-cool-grey max-w-3xl mx-auto">
            Real installations from our valued customers. See how polymarble
            transforms spaces.
          </p>
        </div>

        {/* Location Filters */}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 stagger-group">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative bg-pure-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-teal/20 hover:border-brand-teal/40 transition-all duration-500 hover:shadow-2xl hover:scale-105 stagger-item reveal-scale cursor-pointer"
              onClick={() => setSelectedVideo(video)}
              data-testid={`video-card-${video.id}`}
            >
              {/* Video Preview */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-light-silver/20 to-warm-cream/20">
                <video
                  src={video.src}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  muted
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLVideoElement;
                    target.currentTime = 0;
                    target.play();
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLVideoElement;
                    target.pause();
                    target.currentTime = 0;
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-brand-teal/90 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-100 group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <Play
                      className="w-8 h-8 text-pure-white ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 bg-pure-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                    <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                    <span className="text-xs font-bold text-brand-teal">
                      {video.location}
                    </span>
                  </div>
                </div>

                {/* Video Number */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-brand-teal/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold text-pure-white">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-charcoal/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-pure-white text-sm font-medium">
                  Click to view full installation
                </p>
              </div>
            </div>
          ))}
        </div>



      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-deep-charcoal/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-black backdrop-blur-sm hover:bg-pure-white/20 rounded-full flex items-center justify-center transition-all duration-300 group z-10"
            data-testid="button-close-modal"
          >
            <X className="w-6 h-6 text-pure-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div
            className="relative w-full max-w-6xl h-[85vh] bg-deep-charcoal rounded-3xl overflow-hidden border border-brand-teal/30 shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-deep-charcoal/90 to-transparent z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brand-teal" />
                  <span className="text-pure-white font-bold text-lg">
                    {selectedVideo.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-pure-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-pure-white text-sm">
                    Customer Installation
                  </span>
                </div>
              </div>
            </div>

            {/* Video Player */}
            <video
              src={selectedVideo.src}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
              data-testid="modal-video-player"
            />
          </div>
        </div>
      )}
    </section>
  );
}
