import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickQuote from "@/components/QuickQuote";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star, Clock, Shield, Award } from "lucide-react";
import bathroomInstallationImage from "@assets/generated_images/Bathroom_polymarble_installation_example_951063c2.png";
import highGlossImage from "@assets/generated_images/High-gloss_polymarble_product_showcase_f795ab21.png";
import solidColorImage from "@assets/generated_images/Solid_color_polymarble_sheets_f47ccc7d.png";
import texturedImage from "@assets/generated_images/Textured_polymarble_variety_showcase_6af6050d.png";

export default function MarbleWallSheetMadurai() {
  useScrollReveal();

  const benefits = [
    "50% lighter than natural marble",
    "Install in hours, not days",
    "Fire-resistant & moisture-proof", 
    "Maintenance-free for 10+ years",
    "Starting at ₹45/sq.ft only"
  ];

  const localTestimonials = [
    {
      name: "Rajesh Kumar",
      location: "Anna Nagar, Madurai",
      rating: 5,
      text: "Transformed our home completely. The Calacatta pattern looks exactly like real marble!"
    },
    {
      name: "Priya Selvam", 
      location: "Samayanallur, Madurai",
      rating: 5,
      text: "Installation was so quick and clean. No dust, no mess. Highly recommend!"
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
                Marble Wall Sheet in <span className="text-metallic-gold text-shimmer">Madurai</span>
              </h1>
              <p className="text-xl text-cool-grey mb-8 reveal-fade max-w-3xl mx-auto">
                Premium polymarble wall sheets for Madurai homes and businesses. Get the luxury look of marble 
                without the weight, cost, or installation hassles. Local installation & support available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button className="bg-metallic-gold text-pure-white hover:bg-yellow-400 font-bold text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91 98421 06768
                </Button>
                <Button variant="outline" className="border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-pure-white font-bold text-lg px-8 py-4">
                  Get Free Sample
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-cool-grey">
                <MapPin className="w-4 h-4" />
                <span>Serving all areas of Madurai • Same-day quotes • Free estimates</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Polymarble */}
        <div className="section-spacing bg-light-silver/30">
          <section className="relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 reveal-up">
                Why Madurai Chooses <span className="text-metallic-gold">Polymarble Sheets</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="reveal-left">
                  <img
                    src={bathroomInstallationImage}
                    alt="Polymarble installation in Madurai home"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="reveal-right">
                  <h3 className="text-2xl font-bold text-metallic-gold mb-4">Perfect for Madurai's Climate</h3>
                  <p className="text-cool-grey mb-6">
                    Our polymarble sheets are specifically designed for Tamil Nadu's tropical climate. 
                    Unlike natural marble that can crack in extreme heat and humidity, our polymer-based 
                    sheets maintain their beauty and integrity through monsoons and summer heat.
                  </p>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-cool-grey">
                        <div className="w-2 h-2 bg-metallic-gold rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Local Testimonials */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {localTestimonials.map((testimonial, index) => (
                  <div key={index} className="bg-warm-cream/50 backdrop-blur-sm rounded-lg p-6 border border-metallic-gold/20 shadow-lg">
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-cool-grey mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-medium text-deep-charcoal">{testimonial.name}</div>
                      <div className="text-cool-grey text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Local Service Promise */}
              <div className="bg-metallic-gold/10 rounded-lg p-8 text-center border border-metallic-gold/20 shadow-lg">
                <h3 className="text-2xl font-bold text-metallic-gold mb-4">Madurai Local Service Promise</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <Clock className="w-8 h-8 text-metallic-gold mx-auto mb-2" />
                    <div className="font-medium">Same Day Quote</div>
                    <div className="text-cool-grey text-sm">Visit within 24 hours</div>
                  </div>
                  <div>
                    <Shield className="w-8 h-8 text-metallic-gold mx-auto mb-2" />
                    <div className="font-medium">5 Year Warranty</div>
                    <div className="text-cool-grey text-sm">Full replacement guarantee</div>
                  </div>
                  <div>
                    <Award className="w-8 h-8 text-metallic-gold mx-auto mb-2" />
                    <div className="font-medium">Local Installation</div>
                    <div className="text-cool-grey text-sm">Madurai-based certified team</div>
                  </div>
                </div>
                <p className="text-cool-grey mb-6">
                  We're proud to serve Madurai with over 500 successful installations across Anna Nagar, 
                  Samayanallur, Vilangudi, Palanganatham, and surrounding areas. Our local warehouse 
                  ensures fast delivery and our Tamil-speaking team provides complete support.
                </p>
                <Button className="bg-metallic-gold text-pure-white hover:bg-yellow-400 font-bold">
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </div>
          </section>
        </div>

        {/* Product Showcase */}
        <div className="section-spacing bg-warm-cream">
          <section className="relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 reveal-up">
                Popular Patterns in <span className="text-metallic-gold">Madurai</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-light-silver/30/50 rounded-lg overflow-hidden">
                  <img
                    src={highGlossImage}
                    alt="Calacatta Gold pattern"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-metallic-gold mb-2">Calacatta Gold</h4>
                    <p className="text-cool-grey text-sm">₹45/sq.ft • Most popular choice</p>
                  </div>
                </div>
                <div className="bg-light-silver/30/50 rounded-lg overflow-hidden">
                  <img
                    src={solidColorImage}
                    alt="Noir Elegance pattern"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-metallic-gold mb-2">Noir Elegance</h4>
                    <p className="text-cool-grey text-sm">₹52/sq.ft • Premium choice</p>
                  </div>
                </div>
                <div className="bg-light-silver/30/50 rounded-lg overflow-hidden">
                  <img
                    src={texturedImage}
                    alt="Verde Luxe pattern"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-metallic-gold mb-2">Verde Luxe</h4>
                    <p className="text-cool-grey text-sm">₹48/sq.ft • Natural appeal</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-metallic-gold/20 to-metallic-gold/10 rounded-lg p-8 border border-metallic-gold/30">
                <h3 className="text-2xl font-bold text-metallic-gold mb-4">Special Offer for Madurai</h3>
                <p className="text-cool-grey mb-6 text-lg">
                  Book your consultation this month and get <strong>free installation</strong> for orders above 500 sq.ft. 
                  Plus, enjoy our special pricing for Madurai residents.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-metallic-gold text-pure-white hover:bg-yellow-400 font-bold">
                    Call Now: +91 98421 06768
                  </Button>
                  <Button variant="outline" className="border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-pure-white">
                    WhatsApp Quote
                  </Button>
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