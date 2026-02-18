import { Award, Shield, Users, Clock, Star, CheckCircle2, Truck, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import testimonialVideo from "@assets/customer_testimonial_1762845564449.mp4";

export default function TrustIndicators() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    const elements = sectionRef.current?.querySelectorAll(
      ".reveal-up, .reveal-left, .reveal-right, .reveal-scale",
    );
    elements?.forEach((el: Element) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: "2,00,000+",
      label: "Happy Customers",
      icon: <Users className="w-5 h-5" />,
    },
    {
      value: "15+",
      label: "Years Durability",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      value: "4.8/5",
      label: "Customer Rating",
      icon: <Star className="w-5 h-5" />,
    },
  ];

  const certifications = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "2 Lakh+ Installations",
      description:
        "Trusted by over 2,00,000 satisfied customers across South India",
      delay: "stagger-delay-1",
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Express Delivery",
      description: "Fast shipping and installation support across South India",
      delay: "stagger-delay-2",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-spacing relative bg-gradient-to-b from-warm-cream/30 to-pure-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal rounded-full blur-3xl liquid-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-brown rounded-full blur-3xl float-animation" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Stats Bar */}
        <div className="bg-pure-white/80 backdrop-blur-md rounded-3xl p-8 mb-24 shadow-2xl reveal-scale border border-light-silver/50 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center stagger-delay-${index + 1}`}
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-center justify-center gap-3 mb-2 group">
                  <div className="text-brand-teal group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div
                    className="text-4xl md:text-5xl font-bold text-deep-charcoal"
                    data-testid={`stat-value-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {stat.value}
                  </div>
                </div>
                <p className="text-cool-grey text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Reference Design Implementation - Layered Floating Layout */}
        <div className="relative py-8 md:py-12 lg:py-20 mb-12">
          {/* Dark Background Section - Hidden on mobile, visible on lg+ */}
          <div className="hidden lg:block absolute top-0 right-0 w-[85%] h-full bg-[#1a1a1a] rounded-l-[3rem] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
            {/* Background Texture/Image Fallback */}
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
              alt="Luxury Interior Background"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>

          {/* Mobile Background - Simpler dark background for mobile */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-deep-charcoal to-[#1a1a1a] rounded-3xl" />

          <div className="relative z-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 md:px-0">
            {/* Floating Video Card on Left */}
            <div className="relative reveal-right">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl lg:shadow-[30px_30px_60px_rgba(0,0,0,0.5)] border-2 lg:border-4 border-white/10 aspect-[9/16] w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto lg:mx-0">
                <video
                  controls
                  className="w-full h-full object-cover"
                  data-testid="video-testimonial"
                  src={testimonialVideo}
                >
                  Your browser does not support the video tag.
                </video>

              </div>

              {/* Decorative Elements behind video - smaller on mobile */}
              <div className="absolute -bottom-6 md:-bottom-10 -left-6 md:-left-10 w-1/2 md:w-2/3 h-1/2 md:h-2/3 bg-brand-teal/20 -z-10 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* Content on Right (Inside the Dark Section) */}
            <div className="px-4 md:px-6 lg:pl-12 text-white reveal-left">
              <div className="w-12 md:w-16 h-1 bg-brand-teal mb-6 md:mb-8" />

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase tracking-wider md:tracking-widest mb-4 leading-tight">
                Industry <br />
                <span className="font-light text-gray-300">Standards</span>
              </h2>

              <div className="w-16 md:w-24 h-px bg-white/20 mb-6 md:mb-8" />

              <p className="text-gray-300 md:text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-lg text-sm md:text-base">
                We follow strict quality controls and safety standards. Our polymarble sheets are engineered for durability, safety, and timeless elegance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-brand-teal mb-2">
                      {cert.icon}
                    </div>
                    <h4 className="text-base md:text-lg font-bold uppercase tracking-wider">{cert.title}</h4>
                    <p className="text-xs text-gray-300 md:text-gray-400 leading-relaxed">{cert.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-6 md:pt-8 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 md:w-5 h-4 md:h-5 text-brand-teal" />
                  <span className="text-xs md:text-sm font-medium tracking-wide">100% QUALITY</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 md:w-5 h-4 md:h-5 text-brand-teal" />
                  <span className="text-xs md:text-sm font-medium tracking-wide">HEAT RESISTANCE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
