import { useScrollReveal, useScrollProgress } from "@/hooks/useScrollReveal";
import { Lightbulb, Award, Building, Microscope } from "lucide-react";

export default function About() {
  useScrollReveal();
  useScrollProgress();

  return (
    <section id="about" className="py-20 bg-dark-forest relative overflow-hidden">
      {/* Subtle marble texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Marble texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold text-metallic-gold reveal-up mb-4">Our Story</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto reveal-fade">
            From breakthrough innovation to industry leadership
          </p>
        </div>

        {/* Two-Panel Horizontal Timeline */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Panel - Founder's "Aha!" Moment */}
          <div className="space-y-6 reveal-left">
            <div className="bg-rich-black/50 backdrop-blur-sm rounded-2xl p-8 border border-metallic-gold/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-metallic-gold/20 rounded-full">
                  <Lightbulb className="w-6 h-6 text-metallic-gold" />
                </div>
                <h4 className="text-xl font-bold text-metallic-gold">The Breakthrough Moment</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                It struck me while watching traditional marble craftsmen in Rajasthan—what if we could capture that 
                timeless beauty but make it accessible, lightweight, and installable in hours instead of months? 
                That 'aha!' moment in 2016 became the foundation of Polymarble Sheet India, revolutionizing how we 
                think about luxury surfaces.
              </p>
            </div>
          </div>

          {/* Right Panel - Key Milestones */}
          <div className="space-y-6 reveal-right">
            <div className="space-y-4">
              <div className="flex items-start gap-4 fade-in">
                <div className="flex-shrink-0 w-12 h-12 bg-metallic-gold/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-metallic-gold" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">First 100 Installations</h5>
                  <p className="text-gray-400 text-sm">2017 - Madurai homes embraced our vision</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 fade-in">
                <div className="flex-shrink-0 w-12 h-12 bg-metallic-gold/20 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-metallic-gold" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Chennai Launch</h5>
                  <p className="text-gray-400 text-sm">2019 - Expanded to Tamil Nadu's capital</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 fade-in">
                <div className="flex-shrink-0 w-12 h-12 bg-metallic-gold/20 rounded-full flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-metallic-gold" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">R&D Lab Opening</h5>
                  <p className="text-gray-400 text-sm">2021 - Advanced polymer research facility</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 stagger-group">
              <div className="text-center stagger-item magnetic">
                <div className="text-2xl font-bold text-metallic-gold text-shimmer counter" data-target="500">0</div>
                <div className="text-xs text-gray-400">Projects</div>
                <div className="progress-bar mt-2 scroll-progress" data-progress="85"></div>
              </div>
              <div className="text-center stagger-item magnetic">
                <div className="text-2xl font-bold text-metallic-gold text-shimmer counter" data-target="8">0</div>
                <div className="text-xs text-gray-400">Years</div>
                <div className="progress-bar mt-2 scroll-progress" data-progress="70"></div>
              </div>
              <div className="text-center stagger-item magnetic">
                <div className="text-2xl font-bold text-metallic-gold text-shimmer counter" data-target="12">0</div>
                <div className="text-xs text-gray-400">Cities</div>
                <div className="progress-bar mt-2 scroll-progress" data-progress="60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
