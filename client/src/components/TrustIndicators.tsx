import {
  Award,
  Shield,
  Users,
  Clock,
  MapPin,
  Star,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function TrustIndicators() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    const elements = sectionRef.current?.querySelectorAll(
      ".reveal-up, .reveal-left, .reveal-right, .reveal-scale",
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: "2L+",
      label: "Happy Customers",
      icon: <Users className="w-5 h-5" />,
    },
    {
      value: "15+",
      label: "Years Warranty",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      value: "4.8/5",
      label: "Customer Rating",
      icon: <Star className="w-5 h-5" />,
    },
    {
      value: "₹40",
      label: "Per sq.ft Starting",
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  const certifications = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "ISI Certified",
      description:
        "Meeting highest quality standards with official ISI certification",
      delay: "stagger-delay-1",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Fire Resistant Class A",
      description: "Superior fire safety rating for complete peace of mind",
      delay: "stagger-delay-2",
    },
  ];

  // This is the correct data for the right-hand column
  const globalPresence = [
    { city: "Madurai", projects: 800, featured: true },
    { city: "Chennai", projects: 500, featured: true },
    { city: "Kuala Lumpur", projects: 100, featured: false },
    { city: "New York", projects: 50, featured: false },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-spacing relative bg-gradient-to-b from-warm-cream/30 to-pure-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal rounded-full blur-3xl liquid-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-brown rounded-full blur-3xl float-animation" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 reveal-up">
          <div className="inline-flex items-center gap-2 bg-brand-teal/10 px-4 py-2 rounded-full mb-6 glass-effect">
            <CheckCircle2 className="w-5 h-5 text-brand-teal" />
            <span className="text-sm font-medium text-brand-teal">
              Trusted Since 2017
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-display text-deep-charcoal mb-6">
            Why Choose <span className="text-shimmer">Polymarbles?</span>
          </h2>
          <p className="text-xl text-cool-grey max-w-3xl mx-auto font-body">
            Join thousands of satisfied customers who trust our certified
            excellence and global expertise
          </p>
        </div>

        {/* Stats Bar with Premium Glass Effect */}
        <div className="bg-pure-white/80 backdrop-blur-md rounded-3xl p-8 mb-16 shadow-2xl reveal-scale border border-light-silver/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center stagger-delay-${index + 1}`}
              >
                <div className="flex items-center justify-center gap-2 mb-2 group">
                  <div className="text-brand-teal group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-deep-charcoal counter">
                    {stat.value}
                  </div>
                </div>
                <p className="text-cool-grey text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Certifications Column */}
          <div className="lg:col-span-2 reveal-left">
            <h3 className="text-2xl font-display text-deep-charcoal mb-6">
              Industry-Leading Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`group relative bg-pure-white rounded-2xl p-8 shadow-lg hover-lift border border-transparent hover:border-brand-teal/20 ${cert.delay}`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-teal/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="text-brand-teal mb-4 group-hover:animate-pulse">
                    {cert.icon}
                  </div>
                  <h4 className="text-xl font-bold text-deep-charcoal mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-cool-grey">{cert.description}</p>
                </div>
              ))}
            </div>

            {/* Additional Features with Gradient Border */}
            <div className="mt-8 bg-gradient-to-r from-brand-peach/10 to-brand-teal/10 rounded-2xl p-6 glass-effect reveal-up stagger-delay-3">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-lg font-bold text-deep-charcoal mb-1">
                    Same Day Installation Available
                  </h4>
                  <p className="text-cool-grey">
                    Quick and professional service
                  </p>
                </div>
                <div className="flex items-center gap-2 pulse-glow">
                  <Clock className="w-5 h-5 text-brand-teal" />
                  <span className="text-sm font-medium text-deep-charcoal">
                    9 Years of Excellence
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Trust Banner (Moved here) */}
            <motion.div
              className="mt-8 text-center reveal-up"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="inline-flex items-center gap-6 flex-wrap justify-center">
                <div className="flex items-center gap-2 text-cool-grey">
                  <Shield className="w-5 h-5 text-brand-teal" />
                  <span className="text-sm">100% Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-cool-grey">
                  <Clock className="w-5 h-5 text-brand-teal" />
                  <span className="text-sm">Lifetime Support</span>
                </div>
                <div className="flex items-center gap-2 text-cool-grey">
                  <Award className="w-5 h-5 text-brand-teal" />
                  <span className="text-sm">Industry Leading Standards</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* *** THIS IS THE FIX ***
             This is the correct "Global Presence" column.
             The "review form" box has been removed and replaced with this.
          */}
          <div className="bg-gradient-to-br from-brand-teal to-brand-teal/90 rounded-3xl p-8 text-pure-white reveal-right glass-effect glow-effect">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-6 h-6 float-animation" />
              <h3 className="text-2xl font-display">Global Presence</h3>
            </div>

            <div className="space-y-4 mb-8 stagger-group">
              {globalPresence.map((location, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-xl stagger-item ${
                    location.featured
                      ? "bg-pure-white/20 backdrop-blur-sm glass-effect"
                      : "bg-pure-white/10"
                  } hover:bg-pure-white/25 transition-all cursor-pointer click-feedback`}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div>
                    <h4 className="font-bold text-lg">{location.city}</h4>
                    <p className="text-pure-white/80 text-sm">
                      {location.projects}+ Projects
                    </p>
                  </div>
                  {location.featured && (
                    <Star className="w-5 h-5 text-brand-peach fill-current glow-animation" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Customer Reviews Summary with Enhanced Design */}
            <div className="bg-pure-white/20 backdrop-blur-sm rounded-xl p-6 text-center glass-effect">
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-brand-peach fill-current float-animation"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <p className="text-lg font-bold mb-1">2,450+ Verified Reviews</p>
              <p className="text-pure-white/80 text-sm">
                Trusted by customers worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
