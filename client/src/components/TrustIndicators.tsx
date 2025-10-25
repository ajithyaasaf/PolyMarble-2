import { Award, Shield, Users, Clock, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustIndicators() {
  const certifications = [
    {
      icon: <Shield className="w-8 h-8 text-brand-teal" />,
      title: "ISI Certified",
      subtitle: "Quality Assured",
      delay: 0.1,
    },
    {
      icon: <Award className="w-8 h-8 text-brand-teal" />,
      title: "Fire Resistant",
      subtitle: "Class A Rating",
      delay: 0.2,
    },
    {
      icon: <Users className="w-8 h-8 text-brand-teal" />,
      title: "1500+ Customers",
      subtitle: "Trusted Nationwide",
      delay: 0.3,
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-teal" />,
      title: "15+ Year Warranty",
      subtitle: "Guaranteed Quality",
      delay: 0.4,
    },
  ];

  const features = [
    {
      title: "9 Years of Excellence",
      subtitle: "Since 2017",
      color: "from-brand-teal/10 via-brand-teal/10 to-transparent",
      delay: 0.5,
    },
    {
      title: "Same Day Installation",
      subtitle: "Available on all products",
      color: "from-brand-brown/10 via-brand-brown/10 to-transparent",
      delay: 0.6,
    },
    {
      title: "₹40/sq.ft Starting Price",
      subtitle: "The luxury of polymarble, affordable",
      color: "from-brand-peach/10 via-brand-peach/10 to-transparent",
      delay: 0.7,
    },
  ];

  const locations = [
    { city: "Madurai", state: "Tamil Nadu", projects: "800+", delay: 0.8 },
    { city: "Chennai", state: "Tamil Nadu", projects: "500+", delay: 0.9 },
    { city: "Kuala Lumpur", state: "Malaysia", projects: "100+", delay: 1.0 },
    { city: "New York", state: "USA", projects: "50+", delay: 1.1 },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pure-white via-light-silver/10 to-warm-cream/20 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Main Header with Star Rating */}
        <motion.div
          className="md:col-span-2 lg:col-span-4 text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInVariants}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-deep-charcoal tracking-tight mb-4">
            <span className="text-brand-teal">Certified</span> Excellence and
            Global Presence
          </h2>
          <p className="text-lg text-cool-grey max-w-2xl mx-auto">
            Our commitment to quality is validated by industry standards and a
            growing network of happy customers worldwide.
          </p>
          <div className="mt-8">
            <div className="inline-flex items-center rounded-full px-6 py-3 border border-brand-peach/30 bg-brand-peach/5">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-brand-peach fill-current"
                  />
                ))}
              </div>
              <span className="text-deep-charcoal font-bold">
                4.8/5 Average Rating
              </span>
              <span className="text-cool-grey text-sm ml-2">
                (2,450+ Reviews)
              </span>
            </div>
          </div>
        </motion.div>

        {/* Certifications - Grid */}
        <div className="md:col-span-1 lg:col-span-2 grid grid-cols-2 gap-6 p-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-pure-white/80 rounded-2xl shadow-lg border border-brand-teal/10 hover:border-brand-teal/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: cert.delay }}
              variants={fadeInVariants}
            >
              <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {cert.icon}
              </div>
              <h4 className="font-bold text-deep-charcoal mb-1">
                {cert.title}
              </h4>
              <p className="text-cool-grey text-sm">{cert.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Overlapping Features & Global Presence */}
        <div className="md:col-span-1 lg:col-span-2 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 p-4">
          {/* Overlapping Features Section */}
          <div className="relative z-10 grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl border-l-4 border-l-brand-teal bg-gradient-to-r ${feature.color} shadow-lg backdrop-blur-sm`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                variants={fadeInVariants}
              >
                <div className="font-bold text-deep-charcoal text-xl mb-1">
                  {feature.title}
                </div>
                <p className="text-cool-grey text-sm">{feature.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* Global Presence Section (Slightly behind and offset) */}
          <div className="relative -mt-16 z-0 grid grid-cols-2 md:grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-4 lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:mt-0 lg:p-4 lg:translate-y-1/2">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="bg-pure-white/90 rounded-xl p-4 border border-brand-teal/20 text-center shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: location.delay }}
                variants={fadeInVariants}
              >
                <MapPin className="w-6 h-6 text-brand-teal mx-auto mb-2" />
                <h5 className="font-bold text-deep-charcoal text-sm">
                  {location.city}
                </h5>
                <p className="text-cool-grey text-xs mb-1">{location.state}</p>
                <p className="text-brand-teal text-xs font-medium">
                  {location.projects} Projects
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
