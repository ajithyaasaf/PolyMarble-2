import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Star, Shield, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBackgroundVideo from "@assets/1_1755841607772.mp4";
import RotatingText from "./RotatingText";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }

    // Rotate through metrics
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const metrics = [
    { value: "200K+", label: "Happy Customers", icon: Star },
    { value: "5", label: "Countries Served", icon: Globe },
    { value: "15+", label: "Years Durability", icon: Shield },
  ];

  return (
    <section className="relative min-h-screen flex overflow-hidden bg-gradient-to-br from-warm-cream via-pure-white to-warm-cream pt-20 sm:pt-28">
      {/* Architectural Grid Pattern Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-brand-teal"
              style={{
                top: `${i * 5}%`,
                left: 0,
                right: 0,
                transform: `rotate(${i % 2 === 0 ? 0.5 : -0.5}deg)`,
              }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute w-px bg-brand-brown"
              style={{
                left: `${i * 5}%`,
                top: 0,
                bottom: 0,
                transform: `rotate(${i % 2 === 0 ? 0.5 : -0.5}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl float-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-peach/10 rounded-full blur-3xl float-animation" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-brown/5 rounded-full blur-2xl float-fast" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-8">
            {/* Premium Badge with Animation */}
            <div className="inline-flex items-center group">
              <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-brand-teal/10 to-brand-peach/10 border border-brand-teal/20 rounded-full backdrop-blur-sm reveal-scale">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-teal animate-pulse flex-shrink-0" />
                <span className="text-sm sm:text-base font-bold text-deep-charcoal">
                  India's Most Trusted Interior Brand
                </span>
                <div className="hidden sm:flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-brand-teal opacity-60"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Main Headline with Creative Typography */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="reveal-up">
                <span className="block text-4xl sm:text-6xl lg:text-7xl font-black text-deep-charcoal leading-none">
                  Transform
                </span>
                <span className="block text-4xl sm:text-6xl lg:text-7xl font-black leading-none mt-1 sm:mt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-brown to-brand-peach animate-gradient">
                    Spaces
                  </span>
                </span>
                <span className="block text-2xl sm:text-4xl lg:text-5xl font-light text-cool-grey mt-6 sm:mt-8">
                  with{" "}
                </span>
                <span className="block text-2xl sm:text-4xl lg:text-5xl font-black text-brand-teal mt-3 sm:mt-4">
                  <RotatingText
                    texts={[
                      "Premium Polymarble",
                      "Luxury Finishes",
                      "Timeless Beauty",
                      "Modern Innovation",
                    ]}
                    mainClassName="inline-block font-black text-brand-teal"
                    staggerFrom="random"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    staggerDuration={0.03}
                    elementLevelClassName="inline-block"
                    rotationInterval={3000}
                  />
                </span>
              </h1>
            </div>

            {/* Value Proposition */}
            <div className="space-y-2 sm:space-y-3 reveal-fade">
              <p className="text-lg sm:text-2xl text-deep-charcoal/80 font-medium leading-relaxed">
                Experience the luxury of Italian marble at{" "}
                <span className="text-brand-teal font-extrabold text-xl sm:text-3xl">80% less cost</span>
                .
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Fire Resistant", "Waterproof"].map(
                  (feature, i) => (
                    <div
                      key={feature}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-pure-white border border-light-silver rounded-full stagger-item"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                      <span className="text-sm sm:text-base font-medium text-deep-charcoal whitespace-nowrap">
                        {feature}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* CTA Buttons with Premium Design */}
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center reveal-up">
              <Link href="/contact">
                <Button className="group relative px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-brand-teal to-brand-teal/90 text-pure-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg overflow-hidden hover-lift min-h-[3.5rem] sm:min-h-[4rem]">
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                    Get Enquiry
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-brown to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </Link>

              <Link
                href="/products"
                className="group px-6 sm:px-8 py-4 sm:py-6 bg-pure-white border-2 border-brand-teal/20 rounded-xl sm:rounded-2xl font-bold text-brand-teal hover:bg-brand-teal hover:text-pure-white transition-all duration-300 inline-flex items-center text-base sm:text-lg min-h-[3.5rem] sm:min-h-[4rem]"
              >
                <span className="flex items-center gap-2 sm:gap-3">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Portfolio
                </span>
              </Link>
            </div>

            {/* Animated Metrics */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-3 sm:pt-4 reveal-fade">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-2 sm:gap-3 transition-all duration-500 ${activeMetric === index
                      ? "scale-110 opacity-100"
                      : "scale-100 opacity-60"
                      }`}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-teal flex-shrink-0" />
                    <div>
                      <div className="text-lg sm:text-2xl font-black text-deep-charcoal">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-cool-grey uppercase tracking-wider whitespace-nowrap">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual Element - 5 columns */}
          <div className="lg:col-span-5 relative mt-6 sm:mt-0">
            <div className="relative aspect-[4/5] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden reveal-scale">
              {/* Video Container with Premium Frame */}
              <div className="absolute inset-2 sm:inset-4 rounded-xl sm:rounded-2xl overflow-hidden glassmorphism">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onLoadedData={handleVideoLoad}
                  className="w-full h-full object-cover"
                >
                  <source src={heroBackgroundVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/20 via-transparent to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-brand-peach/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-brand-teal/20 rounded-full blur-2xl" />

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 px-3 py-2 sm:px-4 sm:py-3 bg-pure-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl">
                <div className="text-2xl sm:text-3xl font-black text-brand-teal">80%</div>
                <div className="text-[10px] sm:text-xs text-deep-charcoal">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
