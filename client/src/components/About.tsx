import { useScrollReveal, useScrollProgress } from "@/hooks/useScrollReveal";

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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-metallic-gold reveal-left">Our Story</h3>
            <p className="text-lg text-gray-300 leading-relaxed reveal-fade">
              Polymarbles 3D was born from a passion for blending timeless natural beauty with futuristic technology. We transcend the limitations of traditional stonework, bringing unparalleled depth and dynamism to architectural surfaces.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed reveal-fade">
              Our journey is one of relentless innovation and meticulous craftsmanship. We collaborate with visionary architects and designers to create truly unique environments that push the boundaries of what's possible with marble.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 stagger-group">
              <div className="text-center stagger-item">
                <div className="text-3xl font-bold text-metallic-gold text-shimmer">150+</div>
                <div className="text-sm text-gray-400">Projects</div>
                <div className="progress-bar mt-2" data-progress="85"></div>
              </div>
              <div className="text-center stagger-item">
                <div className="text-3xl font-bold text-metallic-gold text-shimmer">8</div>
                <div className="text-sm text-gray-400">Years</div>
                <div className="progress-bar mt-2" data-progress="70"></div>
              </div>
              <div className="text-center stagger-item">
                <div className="text-3xl font-bold text-metallic-gold text-shimmer">25</div>
                <div className="text-sm text-gray-400">Countries</div>
                <div className="progress-bar mt-2" data-progress="60"></div>
              </div>
            </div>
          </div>

          <div className="relative reveal-right">
            <div className="relative rounded-2xl overflow-hidden glassmorphism p-4 float-slow glow-animation">
              <img
                src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Marble craftsman working on luxury sculpture"
                className="w-full h-96 object-cover rounded-xl parallax-medium"
              />
              <div className="absolute inset-4 bg-gradient-to-t from-rich-black/60 to-transparent rounded-xl"></div>
              <div className="absolute bottom-8 left-8 text-white reveal-fade">
                <div className="text-sm font-medium">Master Craftsman</div>
                <div className="text-xs text-gray-300">Precision & Artistry</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
