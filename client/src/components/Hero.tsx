import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import heroBackgroundImage from "@assets/generated_images/Retail_showroom_interior_b1fbf187.png";

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
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackgroundImage}
          alt="Premium polymarble showroom where customers experience the quality"
          className="w-full h-full object-cover object-right"
        />
        {/* Strong overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-rich-black/95 via-rich-black/75 to-rich-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/20 via-transparent to-rich-black/80"></div>
        {/* Additional text backdrop */}
        <div className="absolute inset-0 bg-rich-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-left px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
        <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6 reveal-fade">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          Trusted by 2,00,000+ Customers Across 5 Countries
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 reveal-up">
          Transform Spaces with <span className="text-metallic-gold text-shimmer">Premium Polymarble</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl reveal-fade">
          Get the luxury of marble at 80% less cost. Fire-resistant, water-proof, and maintenance-free for 15+ years.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mb-8 text-sm">
          <div className="flex items-center bg-rich-black/60 backdrop-blur-sm rounded-lg py-3 px-4 border border-metallic-gold/30 reveal-up">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300"><strong className="text-white">9 Years</strong> of Excellence Since 2017</span>
          </div>
          <div className="flex items-center bg-rich-black/60 backdrop-blur-sm rounded-lg py-3 px-4 border border-metallic-gold/30 reveal-up">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300"><strong className="text-white">Same Day</strong> Installation Available</span>
          </div>
          <div className="flex items-center bg-rich-black/60 backdrop-blur-sm rounded-lg py-3 px-4 border border-metallic-gold/30 reveal-up">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300"><strong className="text-white">₹40/sq.ft</strong> Starting Price</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 stagger-group">
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
                    placeholder="+91 98421 06768"
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