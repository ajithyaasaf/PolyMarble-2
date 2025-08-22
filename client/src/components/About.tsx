import { useScrollReveal, useScrollProgress } from "@/hooks/useScrollReveal";
import { Lightbulb, Award, Building, Microscope } from "lucide-react";
import manufacturingImage from "@assets/generated_images/Polymarble_manufacturing_facility_58dc2199.png";
import facilityOverview from "@assets/generated_images/Manufacturing_facility_overview_4794804a.png";

export default function About() {
  useScrollReveal();
  useScrollProgress();

  return (
    <section id="about" className="py-20 bg-warm-cream relative overflow-hidden">
      {/* Manufacturing facility showcase */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={facilityOverview}
          alt="Modern polymarble manufacturing facility"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold text-metallic-gold reveal-up mb-4">Our Story</h3>
          <p className="text-lg text-cool-grey max-w-2xl mx-auto reveal-fade">
            9 Years of Excellence Since 2017 - From Madurai to Global Markets
          </p>
        </div>

        {/* Manufacturing Excellence Banner */}
        <div className="mb-12">
          <div className="relative aspect-[5/2] rounded-2xl overflow-hidden border border-metallic-gold/20">
            <img
              src={manufacturingImage}
              alt="State-of-the-art polymarble manufacturing facility"
              className="w-full h-full object-cover blur-sm"
            />
            <div className="absolute inset-0 bg-deep-charcoal/85"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <h4 className="text-3xl font-bold text-metallic-gold mb-3 drop-shadow-lg">Advanced Manufacturing Excellence</h4>
                <p className="text-pure-white text-lg max-w-2xl mx-auto drop-shadow-md">State-of-the-art facility equipped with precision technology and quality control processes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Panel Horizontal Timeline */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Panel - Founder's "Aha!" Moment */}
          <div className="space-y-6 reveal-left">
            <div className="bg-pure-white/80 backdrop-blur-sm rounded-2xl p-8 border border-metallic-gold/20 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-metallic-gold/20 rounded-full">
                  <Lightbulb className="w-6 h-6 text-metallic-gold" />
                </div>
                <h4 className="text-xl font-bold text-metallic-gold">The Breakthrough Moment</h4>
              </div>
              <p className="text-cool-grey leading-relaxed">
                Polymarble sheet is a leading manufacturer of premium polymarble sheets, combining innovative 
                technology with timeless aesthetics. We specialize in creating durable, versatile surface solutions 
                that transform residential and commercial spaces with the elegance of natural marble at a fraction 
                of the cost and maintenance. Our philosophy: "We don't look for products for customers - we create products for them."
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
                  <h5 className="font-semibold text-deep-charcoal">Founded in Madurai</h5>
                  <p className="text-cool-grey text-sm">2017 - Started with a vision for accessible luxury</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 fade-in">
                <div className="flex-shrink-0 w-12 h-12 bg-metallic-gold/20 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-metallic-gold" />
                </div>
                <div>
                  <h5 className="font-semibold text-deep-charcoal">South India Expansion</h5>
                  <p className="text-cool-grey text-sm">2019 - Expanded across Tamil Nadu, Andaman & Goa</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 fade-in">
                <div className="flex-shrink-0 w-12 h-12 bg-metallic-gold/20 rounded-full flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-metallic-gold" />
                </div>
                <div>
                  <h5 className="font-semibold text-deep-charcoal">Global Expansion</h5>
                  <p className="text-cool-grey text-sm">2023 - Business operations in Malaysia and New York</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 stagger-group">
              <div className="text-center stagger-item magnetic">
                <div className="text-2xl font-bold text-metallic-gold text-shimmer counter" data-target="200000">0</div>
                <div className="text-xs text-cool-grey">Customers</div>
                <div className="progress-bar mt-2 scroll-progress" data-progress="85"></div>
              </div>
              <div className="text-center stagger-item magnetic">
                <div className="text-2xl font-bold text-metallic-gold text-shimmer counter" data-target="8">0</div>
                <div className="text-xs text-cool-grey">Years</div>
                <div className="progress-bar mt-2 scroll-progress" data-progress="70"></div>
              </div>
              <div className="text-center stagger-item magnetic">
                <div className="text-2xl font-bold text-metallic-gold text-shimmer counter" data-target="5">0</div>
                <div className="text-xs text-cool-grey">Countries</div>
                <div className="progress-bar mt-2 scroll-progress" data-progress="60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
