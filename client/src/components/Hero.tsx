import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import heroBackgroundImage from "@assets/generated_images/Luxury_polymarble_hero_background_2c2a8ab1.png";

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
          alt="Luxury polymarble interior installation"
          className="w-full h-full object-cover object-right"
        />
        {/* Brand color overlay system for superior text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-rich-black/95 via-dark-forest/80 to-deep-jade/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/50 via-transparent to-rich-black/90"></div>
        {/* Text area specific backdrop using brand colors */}
        <div className="absolute top-0 left-0 right-1/2 bottom-0 bg-gradient-to-r from-rich-black/85 to-dark-forest/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-left px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
        <div className="inline-flex items-center px-4 py-2 bg-deep-jade/40 backdrop-blur-sm border border-deep-jade/60 rounded-full text-metallic-gold text-sm font-semibold mb-6 reveal-fade shadow-lg">
          <div className="w-2 h-2 bg-metallic-gold rounded-full mr-2 animate-pulse shadow-sm"></div>
          Trusted by 2,00,000+ Customers Across 5 Countries
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 reveal-up text-white drop-shadow-2xl" 
            style={{
              textShadow: `0 4px 12px hsl(150, 20%, 4%), 0 2px 6px hsl(150, 18%, 11%), 0 8px 20px hsl(164, 33%, 22%)`
            }}>
          Transform Spaces with <span className="text-metallic-gold text-shimmer drop-shadow-lg" 
            style={{
              textShadow: `0 3px 8px hsl(150, 20%, 4%), 0 1px 4px hsl(150, 18%, 11%), 0 6px 12px hsl(164, 33%, 22%)`
            }}>Premium Polymarble</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-grey mb-6 max-w-2xl reveal-fade font-medium" 
           style={{
             color: 'hsl(0, 0%, 85%)',
             textShadow: '0 2px 6px hsl(150, 20%, 4%), 0 1px 3px hsl(150, 18%, 11%)'
           }}>
          Get the luxury of marble at 80% less cost. Fire-resistant, water-proof, and maintenance-free for 15+ years.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mb-8 text-sm">
          <div className="flex items-center bg-dark-forest/90 backdrop-blur-md rounded-lg py-3 px-4 border border-deep-jade/50 reveal-up shadow-xl">
            <svg className="w-5 h-5 text-metallic-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-slate-grey font-medium" style={{color: 'hsl(0, 0%, 75%)'}}><strong className="text-white font-bold">9 Years</strong> of Excellence Since 2017</span>
          </div>
          <div className="flex items-center bg-dark-forest/90 backdrop-blur-md rounded-lg py-3 px-4 border border-deep-jade/50 reveal-up shadow-xl">
            <svg className="w-5 h-5 text-metallic-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-slate-grey font-medium" style={{color: 'hsl(0, 0%, 75%)'}}><strong className="text-white font-bold">Same Day</strong> Installation Available</span>
          </div>
          <div className="flex items-center bg-dark-forest/90 backdrop-blur-md rounded-lg py-3 px-4 border border-deep-jade/50 reveal-up shadow-xl">
            <svg className="w-5 h-5 text-metallic-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-slate-grey font-medium" style={{color: 'hsl(0, 0%, 75%)'}}><strong className="text-white font-bold">₹40/sq.ft</strong> Starting Price</span>
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