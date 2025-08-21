import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, Droplets, Clock, Zap, Leaf, Flame, Bug } from "lucide-react";

export default function Benefits() {
  useScrollReveal();

  const benefits = [
    {
      icon: Droplets,
      title: "Water & Stain Resistant",
      description: "Non-porous surface prevents water damage and staining",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      title: "Easy Maintenance",
      description: "Simple cleaning with no special treatments required",
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "Seamless Installation",
      description: "Large format sheets minimize joints for a continuous look",
      color: "text-yellow-400"
    },
    {
      icon: Shield,
      title: "Cost-Effective",
      description: "80% less expensive than natural marble with superior durability",
      color: "text-metallic-gold"
    },
    {
      icon: Leaf,
      title: "Lightweight & Strong",
      description: "40% lighter than natural stone, easier to handle and install",
      color: "text-emerald-400"
    },
    {
      icon: Bug,
      title: "Termite Proof",
      description: "Prevents termite entry and moisture build up",
      color: "text-orange-400"
    },
    {
      icon: Flame,
      title: "Fire Resistant",
      description: "Doesn't allow transit of heat for enhanced safety",
      color: "text-red-400"
    }
  ];

  return (
    <section className="py-20 bg-rich-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-metallic-gold/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold text-metallic-gold reveal-up mb-4">
            Why Choose <span className="text-white">Polymarble Sheets?</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto reveal-fade">
            Superior quality meets innovative technology - delivering all the beauty of natural marble 
            with none of the drawbacks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 stagger-group">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-dark-forest/50 backdrop-blur-sm rounded-2xl p-6 border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all duration-300 stagger-item reveal-up group hover:transform hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${benefit.color.split('-')[1]}-400/20 to-${benefit.color.split('-')[1]}-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-metallic-gold transition-colors duration-300">
                {benefit.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-metallic-gold/10 to-yellow-600/10 backdrop-blur-sm rounded-2xl p-8 border border-metallic-gold/20">
            <div className="text-center sm:text-left">
              <h4 className="text-2xl font-bold text-metallic-gold mb-2">
                Ready to Transform Your Space?
              </h4>
              <p className="text-gray-300">
                Experience the perfect blend of luxury, durability, and affordability.
              </p>
            </div>
            <button className="px-8 py-4 bg-metallic-gold text-rich-black font-bold rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}