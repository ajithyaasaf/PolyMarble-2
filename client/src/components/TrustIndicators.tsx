import { Award, Shield, Users, Clock, MapPin, Star, CheckCircle, Globe, TrendingUp, Calendar } from "lucide-react";

export default function TrustIndicators() {
  const certifications = [
    {
      icon: Shield,
      title: "ISI Certified",
      subtitle: "Quality Assured",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Award,
      title: "Fire Resistant",
      subtitle: "Class A Rating",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: Users,
      title: "2L+ Customers",
      subtitle: "Trusted Nationwide",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Clock,
      title: "15+ Year Warranty",
      subtitle: "Guaranteed Quality",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  const whyChooseFeatures = [
    {
      icon: TrendingUp,
      title: "9 Years of Excellence",
      subtitle: "Since 2017",
      iconColor: "text-emerald-600"
    },
    {
      icon: Calendar,
      title: "Same Day Installation",
      subtitle: "Available",
      iconColor: "text-blue-600"
    },
    {
      icon: CheckCircle,
      title: "₹40/sq.ft",
      subtitle: "Starting Price",
      iconColor: "text-metallic-gold"
    }
  ];

  const locations = [
    { city: "Madurai", state: "Tamil Nadu", projects: "5000+" },
    { city: "Chennai", state: "Tamil Nadu", projects: "3000+" },
    { city: "Kuala Lumpur", state: "Malaysia", projects: "500+" },
    { city: "New York", state: "USA", projects: "200+" }
  ];

  return (
    <section className="relative overflow-hidden py-20">
      <div className="container mx-auto px-6">
        {/* Certifications */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-metallic-gold mb-6">Certified Excellence & Quality Assurance</h2>
          <p className="text-xl text-cool-grey max-w-2xl mx-auto">Trusted certifications and industry standards compliance</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-metallic-gold/30 transition-all duration-500 group"
              >
                <div className={`w-16 h-16 ${cert.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${cert.iconColor}`} />
                </div>
                <h4 className="text-xl font-bold text-deep-charcoal mb-2 text-center">{cert.title}</h4>
                <p className="text-cool-grey text-center">{cert.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Why Choose Polymarbles */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-metallic-gold mb-6">Why Choose Polymarbles</h2>
          <p className="text-xl text-cool-grey max-w-2xl mx-auto">Experience excellence with our proven track record and premium services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {whyChooseFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-metallic-gold/20 to-yellow-400/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-deep-charcoal">{feature.title}</h4>
                    <p className="text-cool-grey text-sm">{feature.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Presence */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-metallic-gold mb-6">Global Presence</h2>
          <p className="text-xl text-cool-grey max-w-2xl mx-auto mb-12">Serving customers across multiple countries with local support</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-2xl hover:border-metallic-gold/30 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-metallic-gold/20 to-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-metallic-gold" />
              </div>
              <h5 className="text-xl font-bold text-deep-charcoal mb-2">{location.city}</h5>
              <p className="text-cool-grey mb-3">{location.state}</p>
              <div className="bg-gradient-to-r from-metallic-gold/10 to-yellow-400/10 rounded-lg p-3">
                <p className="text-metallic-gold font-bold text-lg">{location.projects}</p>
                <p className="text-cool-grey text-sm">Projects</p>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Satisfaction */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 inline-block shadow-lg border border-yellow-200">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" />
              ))}
            </div>
            <h3 className="text-3xl font-bold text-deep-charcoal mb-2">4.8/5 Average Rating</h3>
            <p className="text-cool-grey text-lg">(2,450+ Reviews)</p>
          </div>
        </div>
      </div>
    </section>
  );
}