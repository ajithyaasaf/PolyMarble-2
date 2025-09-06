import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
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

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
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

  const playClinkSound = () => {
    // Audio will be added later - for now just a console log
    console.log("Clink sound played");
  };

  const handleSampleRequest = () => {
    playClinkSound();
    setIsModalOpen(true);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Solid background while video loads */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-light-silver/50 to-metallic-gold/20"></div>
        )}

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <source src={heroBackgroundVideo} type="video/mp4" />
        </video>
        {/* Professional overlay - full height from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-left px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          {/* Subtle positioning for natural contrast */}
          <div className="inline-flex items-center px-4 py-2 bg-metallic-gold border border-metallic-gold rounded-full text-pure-white text-sm font-bold mb-6 reveal-fade">
            <div className="w-2 h-2 bg-pure-white rounded-full mr-2 animate-pulse"></div>
            Trusted by 2,00,000+ Customers Across 5 Countries
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 reveal-up text-white">
            Transform Spaces with <span className="text-metallic-gold">Premium Polymarble</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl reveal-fade font-medium">
            Get the luxury of marble at 80% less cost. Fire-resistant,
            water-proof, and maintenance-free for 15+ years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 stagger-group">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={handleSampleRequest}
                  className="inline-flex items-center px-8 py-4 rounded-full bg-metallic-gold text-pure-white font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 duration-300 stagger-item magnetic perspective-tilt ripple-effect"
                >
                  Get Free Sample & Quote
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-pure-white border-metallic-gold/20">
                <DialogHeader>
                  <DialogTitle className="text-metallic-gold">
                    Request Your Free Sample & Quote
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label
                      htmlFor="name"
                      className="text-right text-deep-charcoal"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="col-span-3 bg-pure-white border-light-silver text-deep-charcoal"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label
                      htmlFor="email"
                      className="text-right text-deep-charcoal"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="col-span-3 bg-pure-white border-light-silver text-deep-charcoal"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label
                      htmlFor="phone"
                      className="text-right text-deep-charcoal"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98421 06768"
                      className="col-span-3 bg-pure-white border-light-silver text-deep-charcoal"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label
                      htmlFor="project"
                      className="text-right text-deep-charcoal"
                    >
                      Project
                    </Label>
                    <Textarea
                      id="project"
                      placeholder="Tell us about your project..."
                      className="col-span-3 bg-pure-white border-light-silver text-deep-charcoal"
                      rows={3}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-metallic-gold text-pure-white hover:bg-yellow-400 font-bold"
                  >
                    Send Sample Request
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-pure-white text-pure-white font-bold text-lg hover:bg-pure-white hover:text-deep-charcoal transition-all duration-300 stagger-item magnetic morph-border"
            >
              Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float-animation">
        <div
          className="w-6 h-10 border-2 border-pure-white/50 rounded-full flex justify-center cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <div className="w-1 h-3 bg-pure-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
