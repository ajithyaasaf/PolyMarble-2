import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickQuote from "@/components/QuickQuote";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star, Truck, Timer, Users } from "lucide-react";

export default function LightweightStoneWallingChennai() {
  useScrollReveal();

  const advantages = [
    "75% lighter than natural stone",
    "No structural reinforcement needed",
    "Faster installation process",
    "Weather-resistant for Chennai climate",
    "Cost-effective alternative"
  ];

  const projects = [
    {
      name: "IT Park Complex",
      location: "OMR, Chennai",
      area: "15,000 sq.ft",
      completion: "2024"
    },
    {
      name: "Residential Tower",
      location: "Velachery, Chennai", 
      area: "8,500 sq.ft",
      completion: "2024"
    },
    {
      name: "Shopping Mall",
      location: "Anna Nagar, Chennai",
      area: "12,000 sq.ft", 
      completion: "2023"
    }
  ];

  return (
    <div className="relative min-h-screen bg-warm-cream text-deep-charcoal">
      <Header />
      
      <main className="pt-20 scroll-smooth">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-rich-black to-dark-forest">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 reveal-up">
                Lightweight Stone Walling in <span className="text-metallic-gold text-shimmer">Chennai</span>
              </h1>
              <p className="text-xl text-cool-grey mb-8 reveal-fade max-w-3xl mx-auto">
                Revolutionary polymarble stone walling solution for Chennai's commercial and residential projects. 
                Get premium stone aesthetics with 75% less weight and faster installation times.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button className="bg-metallic-gold text-pure-white hover:bg-yellow-400 font-bold text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Chennai Office
                </Button>
                <Button variant="outline" className="border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-pure-white font-bold text-lg px-8 py-4">
                  Request Site Visit
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-cool-grey">
                <MapPin className="w-4 h-4" />
                <span>Serving Greater Chennai • Express delivery to OMR, ECR & GST Road</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Advantages */}
        <div className="section-spacing bg-light-silver/30">
          <section className="relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 reveal-up">
                Engineering Solutions for <span className="text-metallic-gold">Chennai's Challenges</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="reveal-left">
                  <h3 className="text-2xl font-bold text-metallic-gold mb-6">Structural Benefits</h3>
                  <div className="space-y-4">
                    <div className="bg-warm-cream/50 rounded-lg p-4 border border-metallic-gold/20 shadow-lg">
                      <h4 className="font-bold text-deep-charcoal mb-2">Load Reduction</h4>
                      <p className="text-cool-grey text-sm">
                        Reduce dead load by up to 75% compared to natural stone, eliminating need for additional structural support.
                      </p>
                    </div>
                    <div className="bg-warm-cream/50 rounded-lg p-4 border border-metallic-gold/20 shadow-lg">
                      <h4 className="font-bold text-deep-charcoal mb-2">Seismic Performance</h4>
                      <p className="text-cool-grey text-sm">
                        Flexible polymer construction provides better earthquake resistance than brittle natural stone.
                      </p>
                    </div>
                    <div className="bg-warm-cream/50 rounded-lg p-4 border border-metallic-gold/20 shadow-lg">
                      <h4 className="font-bold text-deep-charcoal mb-2">Thermal Efficiency</h4>
                      <p className="text-cool-grey text-sm">
                        Superior insulation properties help reduce Chennai's heat gain and air conditioning costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="reveal-right">
                  <h3 className="text-2xl font-bold text-metallic-gold mb-6">Installation Advantages</h3>
                  <ul className="space-y-4">
                    {advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-metallic-gold rounded-full mr-3 mt-2"></div>
                        <span className="text-cool-grey">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 bg-metallic-gold/10 rounded-lg p-6 border border-metallic-gold/20 shadow-lg">
                    <h4 className="font-bold text-metallic-gold mb-3">Chennai Climate Tested</h4>
                    <p className="text-cool-grey text-sm">
                      Our polymarble walling has been extensively tested in Chennai's coastal climate, 
                      including monsoon conditions, salt air exposure, and temperature variations. 
                      Performance guaranteed for 15+ years.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recent Projects */}
              <div className="bg-warm-cream/30 rounded-lg p-8 border border-metallic-gold/20 shadow-lg">
                <h3 className="text-2xl font-bold text-metallic-gold text-center mb-8">Recent Chennai Projects</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-metallic-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-metallic-gold" />
                      </div>
                      <h4 className="font-bold text-deep-charcoal mb-2">{project.name}</h4>
                      <p className="text-cool-grey text-sm mb-1">{project.location}</p>
                      <p className="text-metallic-gold text-sm font-medium">{project.area} • {project.completion}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </section>
        </div>

        {/* Commercial Focus */}
        <div className="section-spacing bg-warm-cream">
          <section className="relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 reveal-up">
                Ideal for <span className="text-metallic-gold">Commercial Applications</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-light-silver/30/50 rounded-lg p-6 border border-metallic-gold/20 shadow-lg">
                  <Truck className="w-10 h-10 text-metallic-gold mb-4" />
                  <h3 className="text-xl font-bold text-deep-charcoal mb-3">Fast Track Construction</h3>
                  <p className="text-cool-grey mb-4">
                    Perfect for Chennai's fast-paced commercial construction. Reduce installation time by 60% 
                    compared to traditional stone cladding methods.
                  </p>
                  <ul className="text-sm text-cool-grey space-y-1">
                    <li>• No heavy machinery required</li>
                    <li>• Minimal site disruption</li>
                    <li>• Weather-independent installation</li>
                  </ul>
                </div>

                <div className="bg-light-silver/30/50 rounded-lg p-6 border border-metallic-gold/20 shadow-lg">
                  <Timer className="w-10 h-10 text-metallic-gold mb-4" />
                  <h3 className="text-xl font-bold text-deep-charcoal mb-3">Cost-Effective Solution</h3>
                  <p className="text-cool-grey mb-4">
                    Significant cost savings on structural engineering, foundation work, and installation labor. 
                    Total project cost reduction of 30-40%.
                  </p>
                  <ul className="text-sm text-cool-grey space-y-1">
                    <li>• Lower structural requirements</li>
                    <li>• Reduced labor costs</li>
                    <li>• Faster project completion</li>
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-metallic-gold/20 to-metallic-gold/10 rounded-lg p-8 text-center border border-metallic-gold/30">
                <h3 className="text-2xl font-bold text-metallic-gold mb-4">Chennai Engineering Consultation</h3>
                <p className="text-cool-grey mb-6 text-lg">
                  Our Chennai-based engineering team provides free structural assessments and custom solutions 
                  for your lightweight stone walling project. Get expert guidance from design to completion.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
                  <div className="bg-warm-cream/30 rounded-lg p-4">
                    <div className="font-bold text-metallic-gold">Free Assessment</div>
                    <div className="text-cool-grey">Site visit & structural analysis</div>
                  </div>
                  <div className="bg-warm-cream/30 rounded-lg p-4">
                    <div className="font-bold text-metallic-gold">Custom Design</div>
                    <div className="text-cool-grey">Tailored to your specifications</div>
                  </div>
                  <div className="bg-warm-cream/30 rounded-lg p-4">
                    <div className="font-bold text-metallic-gold">Local Support</div>
                    <div className="text-cool-grey">Chennai warehouse & delivery</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-metallic-gold text-pure-white hover:bg-yellow-400 font-bold">
                    Schedule Engineering Consultation
                  </Button>
                  <Button variant="outline" className="border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-pure-white">
                    Download Technical Specifications
                  </Button>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-cool-grey text-sm">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Chennai Office: +91 98421 06768 • Email: polymarblesheet@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          </section>
        </div>
      </main>

      <Footer />
      <QuickQuote />
    </div>
  );
}