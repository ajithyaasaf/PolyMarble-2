import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {/* Layered Parallax Background */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1 - Slowest moving marble veins */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 parallax-layer-1">
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 1920 1080" className="absolute inset-0">
              <defs>
                <pattern id="marble-vein-1" patternUnits="userSpaceOnUse" width="400" height="400">
                  <path d="M0,200 Q200,100 400,200 Q600,300 800,200" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.3"/>
                  <path d="M0,250 Q250,150 500,250 Q750,350 1000,250" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#marble-vein-1)"/>
            </svg>
          </div>
        </div>
        
        {/* Layer 2 - Medium speed marble veins */}
        <div className="absolute inset-0 parallax-layer-2">
          <div className="absolute inset-0 opacity-15">
            <svg width="100%" height="100%" viewBox="0 0 1920 1080" className="absolute inset-0">
              <defs>
                <pattern id="marble-vein-2" patternUnits="userSpaceOnUse" width="300" height="300">
                  <path d="M0,150 Q150,75 300,150 Q450,225 600,150" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.4"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#marble-vein-2)"/>
            </svg>
          </div>
        </div>
        
        {/* Layer 3 - Fastest moving marble veins */}
        <div className="absolute inset-0 parallax-layer-3">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 1920 1080" className="absolute inset-0">
              <defs>
                <pattern id="marble-vein-3" patternUnits="userSpaceOnUse" width="200" height="200">
                  <path d="M0,100 Q100,50 200,100 Q300,150 400,100" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#marble-vein-3)"/>
            </svg>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/40 via-transparent to-rich-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 reveal-up">
          Premium <span className="text-metallic-gold text-shimmer">Polymarble Sheets</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto reveal-fade">
          A Hub of Unique Interior and Exterior Products
        </p>
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto reveal-fade">
          9 Years of Excellence Since 2017 • Over 2 Lakh Satisfied Customers • 80% Less Expensive Than Natural Marble
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-group">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={handleSampleRequest}
                className="inline-flex items-center px-8 py-4 rounded-full bg-metallic-gold text-rich-black font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 duration-300 stagger-item magnetic perspective-tilt ripple-effect"
              >
                Get Free Sample & Quote
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-rich-black border-metallic-gold/20">
              <DialogHeader>
                <DialogTitle className="text-metallic-gold">Request Your Free Sample & Quote</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    className="col-span-3 bg-slate-800 border-slate-600 text-white"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="col-span-3 bg-slate-800 border-slate-600 text-white"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right text-white">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="col-span-3 bg-slate-800 border-slate-600 text-white"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="project" className="text-right text-white">
                    Project
                  </Label>
                  <Textarea
                    id="project"
                    placeholder="Tell us about your project..."
                    className="col-span-3 bg-slate-800 border-slate-600 text-white"
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  className="bg-metallic-gold text-rich-black hover:bg-yellow-400 font-bold"
                >
                  Send Sample Request
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-rich-black transition-all duration-300 stagger-item magnetic morph-border"
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