import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, Droplets, Clock, Zap, Leaf, Flame, Bug } from "lucide-react";
import waterResistanceDemo from "@assets/generated_images/Water_resistance_demonstration_c8332fac.png";
import fireResistanceDemo from "@assets/generated_images/Fire_resistance_testing_demonstration_d6e65ec5.png";

export default function Benefits() {
  useScrollReveal();

  const benefits = [
    {
      icon: Droplets,
      title: "Water & Stain Resistant",
      description: "Non-porous surface prevents water damage and staining",
      color: "text-brand-teal",
    },
    {
      icon: Clock,
      title: "Easy Maintenance",
      description: "Simple cleaning with no special treatments required",
      color: "text-brand-teal",
    },
    {
      icon: Zap,
      title: "Seamless Installation",
      description: "Large format sheets minimize joints for a continuous look",
      color: "text-brand-peach",
    },
    {
      icon: Shield,
      title: "Cost-Effective",
      description:
        "80% less expensive than natural marble with superior durability",
      color: "text-brand-teal",
    },
    {
      icon: Leaf,
      title: "Lightweight & Strong",
      description:
        "40% lighter than natural stone, easier to handle and install",
      color: "text-brand-brown",
    },
    {
      icon: Bug,
      title: "Termite Proof",
      description: "Prevents termite entry and moisture build up",
      color: "text-brand-brown",
    },
    {
      icon: Flame,
      title: "Fire Resistant",
      description: "Doesn't allow transit of heat for enhanced safety",
      color: "text-brand-brown",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-brand-teal/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold text-brand-brown reveal-up mb-4">
            Why Choose{" "}
            <span className="text-brand-peach">Polymarble Sheets?</span>
          </h3>
          <p className="text-xl text-cool-grey max-w-3xl mx-auto reveal-fade">
            Superior quality meets innovative technology - delivering all the
            beauty of natural marble with none of the drawbacks.
          </p>
        </div>

        {/* Demo Images Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-teal/20 group">
            <img
              src={waterResistanceDemo}
              alt="Water resistance testing demonstration"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="text-xl font-bold text-pure-white mb-2">
                Water & Stain Resistance
              </h4>
              <p className="text-warm-cream text-sm">
                Professional testing demonstrates superior water resistance
                properties
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-teal/20 group">
            <img
              src={fireResistanceDemo}
              alt="Fire resistance testing demonstration"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="text-xl font-bold text-pure-white mb-2">
                Fire Resistance Testing
              </h4>
              <p className="text-warm-cream text-sm">
                Class A fire rating ensures maximum safety for your spaces
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 stagger-group">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-pure-white backdrop-blur-sm rounded-2xl p-6 border-2 ${
                benefit.color === 'text-brand-peach' ? 'border-brand-peach/30 hover:border-brand-peach/60' :
                benefit.color === 'text-brand-brown' ? 'border-brand-brown/30 hover:border-brand-brown/60' :
                'border-brand-teal/30 hover:border-brand-teal/60'
              } transition-all duration-300 stagger-item reveal-up group hover:transform hover:scale-105 shadow-lg`}
            >
              <div
                className={`w-12 h-12 rounded-full ${
                  benefit.color === 'text-brand-peach' ? 'bg-brand-peach/10' :
                  benefit.color === 'text-brand-brown' ? 'bg-brand-brown/10' :
                  'bg-brand-teal/10'
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>
              <h4 className="text-xl font-bold text-deep-charcoal mb-3 group-hover:text-brand-brown transition-colors duration-300">
                {benefit.title}
              </h4>
              <p className="text-cool-grey leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-brand-peach/10 via-brand-brown/5 to-brand-peach/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-brand-brown/30">
            <div className="text-center sm:text-left">
              <h4 className="text-2xl font-bold text-brand-brown mb-2">
                Ready to Transform Your Space?
              </h4>
              <p className="text-cool-grey">
                Experience the perfect blend of luxury, durability, and
                affordability.
              </p>
            </div>
            <button className="px-8 py-4 bg-brand-brown text-pure-white font-bold rounded-full hover:bg-brand-peach hover:scale-105 transition-all duration-300 whitespace-nowrap" data-testid="button-get-quote">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
