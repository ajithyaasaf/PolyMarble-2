import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Award,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  Building2,
  Sparkles,
  ArrowRight,
  Globe,
  Shield,
  Zap,
  Heart,
  Star,
  Clock,
  Palette,
  Layers,
  ChevronRight,
  Quote,
  MapPin,
  Calendar,
  Rocket,
  Diamond,
  Gauge,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  useScrollReveal();
  const [countersVisible, setCountersVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({
    end,
    duration = 2000,
    suffix = "",
  }: {
    end: number;
    duration?: number;
    suffix?: string;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersVisible) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [countersVisible, end, duration]);

    return (
      <>
        {count.toLocaleString('en-IN')}
        {suffix}
      </>
    );
  };

  const milestones = [
    {
      year: "2017",
      month: "March",
      title: "The Beginning",
      description:
        "Started with a vision to revolutionize interior design in Madurai",
      icon: Rocket,
      color: "from-brand-teal/20 to-brand-teal/5",
    },
    {
      year: "2019",
      month: "July",
      title: "Expansion Era",
      description: "Opened state-of-the-art showroom in Chennai",
      icon: Building2,
      color: "from-brand-peach/20 to-brand-peach/5",
    },
    {
      year: "2021",
      month: "December",
      title: "Major Milestone",
      description: "Crossed 2,00,000 happy customers nationwide",
      icon: Users,
      color: "from-brand-teal/20 to-brand-teal/5",
    },
    {
      year: "2024",
      month: "Present",
      title: "Industry Leader",
      description: "India's most trusted polymarble brand",
      icon: Award,
      color: "from-brand-peach/20 to-brand-peach/5",
    },
  ];

  const values = [
    {
      icon: Diamond,
      title: "Premium Quality",
      description: "European standards with Indian values",
      stat: "99.8%",
      statLabel: "Quality Rating",
    },
    {
      icon: Heart,
      title: "Customer Love",
      description: "Your dreams, our commitment",
      stat: "4.9/5",
      statLabel: "Customer Rating",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leading with cutting-edge technology",
      stat: "2L+",
      statLabel: "Successful Projects",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "10 years of unwavering reliability",
      stat: "15yr",
      statLabel: "Durability",
    },
  ];

  const achievements = [
    { icon: Globe, text: "Presence in 5 countries", highlight: "5 countries" },
    { icon: Shield, text: "Fire resistant and Water proof", highlight: "Water proof" },
    { icon: Award, text: "Premium Quality Assured", highlight: "Premium Quality" },
    { icon: Leaf, text: "100% Eco-Friendly", highlight: "Eco-Friendly" },
  ];

  const leadership = [
    {
      name: "Dr.A.S.Reyas",
      role: "Founder & CEO",
      quote: "We're not just creating products, we're crafting dreams",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Priya Sharma",
      role: "Head of Design",
      quote: "Every space tells a story, we help write it beautifully",
      image: "/api/placeholder/200/200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pure-white via-warm-cream/30 to-pure-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section - Premium Design */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-brand-peach/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 border border-brand-teal/5 rounded-full"
                  style={{
                    width: `${120 + i * 20}%`,
                    height: `${120 + i * 20}%`,
                    left: `${-10 - i * 10}%`,
                    top: `${-10 - i * 10}%`,
                    animation: `spin ${20 + i * 5}s linear infinite reverse`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-brand-teal/10 to-brand-peach/10 backdrop-blur-sm border border-brand-teal/20 rounded-full mb-6 reveal-scale">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span className="text-sm font-semibold text-deep-charcoal">
                  Est. 2017 • Trusted by Millions
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black mb-6 reveal-up">
                <span className="text-deep-charcoal">Crafting </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-peach animate-gradient">
                  Excellence
                </span>
                <span className="block text-4xl lg:text-5xl font-light text-cool-grey mt-4">
                  Since Day One
                </span>
              </h1>

              <p className="text-xl text-deep-charcoal/80 max-w-3xl mx-auto mb-8 leading-relaxed reveal-fade">
                From a small workshop in Madurai to India's most trusted
                interior brand, our journey has been fueled by passion,
                innovation, and an unwavering commitment to transforming spaces
                into masterpieces.
              </p>

              <div className="flex flex-wrap gap-4 justify-center reveal-up">
                <Link href="/gallery">
                  <Button className="px-8 py-6 bg-gradient-to-r from-brand-teal to-brand-teal/90 text-pure-white rounded-2xl font-bold text-lg hover-lift" data-testid="button-visit-gallery">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Visit Gallery
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Animated Counters */}
        <section ref={counterRef} className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    value: 200000,
                    suffix: "+",
                    label: "Happy Families",
                    icon: Users,
                    color: "text-brand-teal",
                  },
                  {
                    value: 10,
                    suffix: "+",
                    label: "Years of Trust",
                    icon: Calendar,
                    color: "text-brand-peach",
                  },
                  {
                    value: 5,
                    suffix: "",
                    label: "Countries",
                    icon: Globe,
                    color: "text-brand-teal",
                  },
                  {
                    value: 99,
                    suffix: "%",
                    label: "Satisfaction Rate",
                    icon: Heart,
                    color: "text-brand-peach",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center reveal-scale group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${index % 2 === 0
                        ? "from-brand-teal/10 to-brand-teal/5"
                        : "from-brand-peach/10 to-brand-peach/5"
                        } mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon className={`w-10 h-10 ${stat.color}`} />
                    </div>
                    <div className={`text-5xl font-black mb-2 ${stat.color}`}>
                      {countersVisible && (
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                        />
                      )}
                    </div>
                    <div className="text-sm font-medium text-cool-grey uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story Timeline - Interactive */}
        <section className="py-20 bg-gradient-to-br from-warm-cream/50 to-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-4 reveal-up">
                  Our <span className="text-brand-teal">Evolution</span>
                </h2>
                <p className="text-xl text-cool-grey reveal-fade">
                  Every milestone, a testament to our commitment
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line - Horizontal */}
                <div className="absolute left-0 right-0 top-16 h-0.5 bg-gradient-to-r from-brand-teal/20 via-brand-teal/40 to-brand-teal/20 hidden lg:block" />

                {/* Horizontal Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {milestones.map((milestone, index) => {
                    const Icon = milestone.icon;
                    return (
                      <div
                        key={index}
                        className="relative reveal-up"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        {/* Timeline Dot */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-full flex items-center justify-center shadow-lg z-10 hidden lg:flex">
                          <div className="w-6 h-6 bg-pure-white rounded-full animate-pulse" />
                        </div>

                        {/* Content Card */}
                        <div className="bg-pure-white rounded-2xl p-6 shadow-xl border border-light-silver/20 hover-lift mt-8 lg:mt-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center flex-shrink-0`}
                            >
                              <Icon className="w-6 h-6 text-brand-teal" />
                            </div>
                            <div>
                              <div className="text-2xl font-black text-deep-charcoal">
                                {milestone.year}
                              </div>
                              <div className="text-xs text-cool-grey uppercase tracking-wider">
                                {milestone.month}
                              </div>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-deep-charcoal mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-cool-grey text-sm">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Cards with Hover Effects */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-4 reveal-up">
                  Values That{" "}
                  <span className="text-brand-peach">Define Us</span>
                </h2>
                <p className="text-xl text-cool-grey reveal-fade">
                  The pillars of our success story
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-pure-white rounded-2xl p-8 border border-light-silver/20 hover:border-brand-teal/30 transition-all duration-500 reveal-up hover-lift"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Gradient Background on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-brand-teal/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-8 h-8 text-brand-teal" />
                        </div>

                        <h3 className="text-xl font-bold text-deep-charcoal mb-3">
                          {value.title}
                        </h3>
                        <p className="text-cool-grey mb-6">
                          {value.description}
                        </p>

                        <div className="pt-6 border-t border-light-silver/20">
                          <div className="text-3xl font-black text-brand-teal">
                            {value.stat}
                          </div>
                          <div className="text-xs text-cool-grey uppercase tracking-wider">
                            {value.statLabel}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Premium Leadership Quote Section */}
        <section className="py-24 relative overflow-hidden bg-deep-charcoal">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-peach/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-8 lg:p-16 backdrop-blur-md shadow-2xl reveal-up">
              <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-center">

                {/* Founder Image Column */}
                <div className="relative group mx-auto lg:mx-0 select-none">
                  {/* Glowing background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal to-brand-peach opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 pointer-events-none z-0"></div>

                  {/* Image Container */}
                  <div className="relative aspect-[3/4] w-64 lg:w-full max-w-[320px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-10 group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src="/assets/images/reyas.png"
                      alt="Reyas - Founder & CEO"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 md:-right-10 bg-brand-teal text-white p-4 md:p-5 rounded-2xl shadow-[0_20px_40px_rgba(22,120,92,0.4)] z-20 transform group-hover:-translate-y-2 transition-transform duration-500 border border-white/10 backdrop-blur-md">
                    <div className="font-bold text-2xl md:text-3xl">15+</div>
                    <div className="text-[10px] md:text-xs font-semibold uppercase tracking-widest opacity-90 mt-1">Years<br />Excellence</div>
                  </div>
                </div>

                {/* Quote Column */}
                <div className="relative z-10">
                  <Quote className="w-16 h-16 md:w-24 md:h-24 text-brand-teal/20 mb-8 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" />

                  <blockquote className="text-2xl md:text-4xl lg:text-[40px] font-light text-white leading-[1.3] mb-12 tracking-tight">
                    "We don't just sell products, we deliver promises. Every product of Polymarble sheet carries our commitment to quality, innovation, and the dreams of families building their perfect spaces."
                  </blockquote>

                  <div className="flex items-center gap-6">
                    <div className="h-px w-16 bg-gradient-to-r from-brand-peach to-transparent"></div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-white tracking-wide mb-1">Dr.A.S.Reyas</div>
                      <div className="text-brand-peach font-medium uppercase tracking-widest text-sm">Founder & CEO</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Why Different Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="reveal-left">
                  <h2 className="text-4xl lg:text-5xl font-black mb-6">
                    What Makes Us{" "}
                    <span className="text-brand-teal">Different?</span>
                  </h2>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-warm-cream transition-colors group"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-teal/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <achievement.icon className="w-6 h-6 text-brand-teal" />
                        </div>
                        <div>
                          <p className="text-lg text-deep-charcoal">
                            {achievement.text.split(achievement.highlight)[0]}
                            <span className="font-bold text-brand-teal">
                              {achievement.highlight}
                            </span>
                            {achievement.text.split(achievement.highlight)[1]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal-right">
                  <div className="relative">
                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-teal/10 to-brand-peach/10 p-8">
                      <div className="h-full rounded-2xl bg-pure-white shadow-2xl p-8 flex flex-col justify-center">
                        <Gauge className="w-24 h-24 text-brand-teal mx-auto mb-6" />
                        <h3 className="text-3xl font-black text-center mb-4">
                          Industry-Leading Standards
                        </h3>
                        <p className="text-center text-cool-grey mb-8">
                          Single alternative for all your exterior and interior product needs
                        </p>
                        <Link href="/products">
                          <Button className="w-full py-6 bg-gradient-to-r from-brand-teal to-brand-teal/90 text-pure-white rounded-xl font-bold text-lg">
                            Explore Products
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-peach/20 rounded-full blur-2xl animate-pulse" />
                    <div
                      className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-teal/20 rounded-full blur-2xl animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-warm-cream to-light-silver/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-brand-peach/20 rounded-full mb-6 reveal-scale">
                <Star className="w-4 h-4 text-brand-peach" />
                <span className="text-sm font-semibold text-deep-charcoal">
                  Join 2,00,000+ Happy Customers
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black mb-6 reveal-up">
                Ready to Transform Your Space?
              </h2>

              <p className="text-xl text-cool-grey mb-8 reveal-fade">
                Experience the Polymarble difference today
              </p>

              <div className="flex flex-wrap gap-4 justify-center reveal-up">
                <Link href="/contact">
                  <Button className="px-8 py-6 bg-gradient-to-r from-brand-teal to-brand-teal/90 text-pure-white rounded-2xl font-bold text-lg hover-lift group" data-testid="button-get-consultation">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="px-8 py-6 border-2 border-brand-teal/20 rounded-2xl font-bold text-lg"
                    data-testid="button-download-catalog"
                  >
                    Download Catalog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
