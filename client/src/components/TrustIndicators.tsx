import { Award, Shield, Users, Clock, MapPin, Star } from "lucide-react";

export default function TrustIndicators() {
  const certifications = [
    {
      icon: <Shield className="w-8 h-8 text-metallic-gold" />,
      title: "ISI Certified",
      subtitle: "Quality Assured"
    },
    {
      icon: <Award className="w-8 h-8 text-metallic-gold" />,
      title: "Fire Resistant",
      subtitle: "Class A Rating"
    },
    {
      icon: <Users className="w-8 h-8 text-metallic-gold" />,
      title: "2L+ Customers",
      subtitle: "Trusted Nationwide"
    },
    {
      icon: <Clock className="w-8 h-8 text-metallic-gold" />,
      title: "15+ Year Warranty",
      subtitle: "Guaranteed Quality"
    }
  ];

  const locations = [
    { city: "Madurai", state: "Tamil Nadu", projects: "5000+" },
    { city: "Chennai", state: "Tamil Nadu", projects: "3000+" },
    { city: "Kuala Lumpur", state: "Malaysia", projects: "500+" },
    { city: "New York", state: "USA", projects: "200+" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-rich-black to-dark-forest">
      <div className="container mx-auto px-6">
        {/* Certifications */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-metallic-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-metallic-gold/20 transition-colors">
                {cert.icon}
              </div>
              <h4 className="font-bold text-white mb-1">{cert.title}</h4>
              <p className="text-gray-400 text-sm">{cert.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Global Presence */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-metallic-gold mb-4">Global Presence</h3>
          <p className="text-gray-400 mb-8">Serving customers across multiple countries with local support</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-rich-black/50 backdrop-blur-sm rounded-lg p-4 border border-metallic-gold/20 text-center hover:border-metallic-gold/40 transition-colors"
            >
              <MapPin className="w-5 h-5 text-metallic-gold mx-auto mb-2" />
              <h5 className="font-bold text-white text-sm">{location.city}</h5>
              <p className="text-gray-400 text-xs mb-1">{location.state}</p>
              <p className="text-metallic-gold text-xs font-medium">{location.projects} Projects</p>
            </div>
          ))}
        </div>

        {/* Customer Satisfaction */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full px-6 py-3 border border-yellow-500/30">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white font-medium">4.8/5 Average Rating</span>
            <span className="text-gray-400 text-sm ml-2">(2,450+ Reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
}