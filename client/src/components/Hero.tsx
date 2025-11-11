import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Play, Star, Shield, Globe } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import heroBackgroundVideo from "@assets/1_1755841607772.mp4";
import RotatingText from "./RotatingText";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    { value: "15+", label: "Years Warranty", icon: Shield },
  ];

  return (
    /* *** THIS IS THE FIX ***
      - Reduced top padding from 'pt-32' to 'pt-28' (112px) to tighten the gap.
    */
    <section className="relative min-h-screen flex overflow-hidden bg-gradient-to-br from-warm-cream via-pure-white to-warm-cream pt-28">
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

      {/* Main Content Container 
          - Adjusted 'py-20' to 'pt-16 pb-20' for better balance
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Premium Badge with Animation */}
            <div className="inline-flex items-center group">
              <div className="flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-brand-teal/10 to-brand-peach/10 border border-brand-teal/20 rounded-full backdrop-blur-sm reveal-scale">
                <Sparkles className="w-4 h-4 text-brand-teal animate-pulse" />
                <span className="text-sm font-semibold text-deep-charcoal">
                  India's Most Trusted Interior Brand
                </span>
                <div className="flex -space-x-2">
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
            <div className="space-y-4">
              <h1 className="reveal-up">
                <span className="block text-6xl lg:text-7xl font-black text-deep-charcoal leading-none">
                  Transform
                </span>
                <span className="block text-6xl lg:text-8xl font-black leading-none mt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-brown to-brand-peach animate-gradient">
                    Spaces
                  </span>
                </span>
                <span className="block text-4xl lg:text-5xl font-light text-cool-grey mt-4">
                  with{" "}
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
            <div className="space-y-3 reveal-fade">
              <p className="text-xl text-deep-charcoal/80 font-medium leading-relaxed">
                Experience the luxury of Italian marble at{" "}
                <span className="text-brand-teal font-bold">80% less cost</span>
                .
              </p>
              <div className="flex flex-wrap gap-3">
                {["Fire Resistant", "Waterproof", "15+ Years Warranty"].map(
                  (feature, i) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 px-4 py-2 bg-pure-white border border-light-silver rounded-full stagger-item"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                      <span className="text-sm font-medium text-deep-charcoal">
                        {feature}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* CTA Buttons with Premium Design */}
            <div className="flex flex-wrap gap-4 items-center reveal-up">
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button className="group relative px-8 py-6 bg-gradient-to-r from-brand-teal to-brand-teal/90 text-pure-white rounded-2xl font-bold text-lg overflow-hidden hover-lift">
                    <span className="relative z-10 flex items-center gap-3">
                      Get Free Sample
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-brown to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-pure-white border-0 rounded-3xl p-0 overflow-hidden">
                  {/* Modal Header with Gradient */}
                  <div className="bg-gradient-to-br from-brand-teal to-brand-teal/80 p-6 text-pure-white">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-pure-white">
                        Your Premium Experience Awaits
                      </DialogTitle>
                      <p className="text-pure-white/80 text-sm mt-2">
                        Get exclusive samples and personalized quotes
                      </p>
                    </DialogHeader>
                  </div>

                  {/* Modal Form with Better Design */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-deep-charcoal font-medium"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="border-light-silver focus:border-brand-teal transition-colors rounded-xl h-12"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-deep-charcoal font-medium"
                        >
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="border-light-silver focus:border-brand-teal transition-colors rounded-xl h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-deep-charcoal font-medium"
                        >
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98421 06768"
                          className="border-light-silver focus:border-brand-teal transition-colors rounded-xl h-12"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="project"
                        className="text-deep-charcoal font-medium"
                      >
                        Project Details
                      </Label>
                      <Textarea
                        id="project"
                        placeholder="Tell us about your dream space..."
                        className="border-light-silver focus:border-brand-teal transition-colors rounded-xl min-h-[100px] resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-brand-teal to-brand-teal/90 text-pure-white hover:from-brand-teal/90 hover:to-brand-teal font-bold h-12 rounded-xl text-lg"
                    >
                      Send My Request
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <button
                onClick={() => scrollToSection("portfolio")}
                className="group px-8 py-6 bg-pure-white border-2 border-brand-teal/20 rounded-2xl font-bold text-brand-teal hover:bg-brand-teal hover:text-pure-white transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  View Portfolio
                </span>
              </button>
            </div>

            {/* Animated Metrics */}
            <div className="flex items-center gap-8 pt-4 reveal-fade">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 transition-all duration-500 ${
                      activeMetric === index
                        ? "scale-110 opacity-100"
                        : "scale-100 opacity-60"
                    }`}
                  >
                    <Icon className="w-8 h-8 text-brand-teal" />
                    <div>
                      <div className="text-2xl font-black text-deep-charcoal">
                        {metric.value}
                      </div>
                      <div className="text-xs text-cool-grey uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual Element - 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden reveal-scale">
              {/* Video Container with Premium Frame */}
              <div className="absolute inset-4 rounded-2xl overflow-hidden glassmorphism">
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
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand-peach/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-teal/20 rounded-full blur-2xl" />

              {/* Floating Badge */}
              <div className="absolute top-8 right-8 px-4 py-3 bg-pure-white/90 backdrop-blur-md rounded-2xl shadow-xl">
                <div className="text-3xl font-black text-brand-teal">80%</div>
                <div className="text-xs text-deep-charcoal">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="group flex flex-col items-center gap-2 text-cool-grey hover:text-brand-teal transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">
            Scroll to Explore
          </span>
          <div className="relative w-6 h-10 border-2 border-current rounded-full">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
