import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Target, TrendingUp, CheckCircle, Building2 } from "lucide-react";

export default function About() {
  useScrollReveal();

  const milestones = [
    { year: "2017", title: "Company Founded", description: "Started our journey in Madurai" },
    { year: "2019", title: "Expanded Operations", description: "Opened Chennai office" },
    { year: "2021", title: "200K+ Customers", description: "Reached major milestone" },
    { year: "2025", title: "Industry Leader", description: "India's most trusted brand" }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quality First",
      description: "Premium materials and craftsmanship in every product"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Focused",
      description: "Your satisfaction drives everything we do"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly improving and advancing our technology"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "9 years of proven excellence and reliability"
    }
  ];

  const achievements = [
    "200K+ happy customers across 5 countries",
    "15+ years product warranty",
    "Fire resistant and waterproof certified",
    "ISO certified manufacturing facility",
    "Award-winning design team",
    "24/7 customer support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-teal/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 reveal-up">
                About <span className="text-brand-teal">Polymarble Sheet</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed reveal-fade">
                Since 2017, we've been transforming spaces across India with premium polymarble solutions. 
                Our commitment to quality, innovation, and customer satisfaction has made us the most trusted interior brand in the country.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="reveal-left">
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Founded in 2017 in Madurai, Polymarble Sheet started with a simple vision: 
                      make luxury affordable for everyone. We saw how expensive and impractical 
                      natural marble was, and we knew there had to be a better solution.
                    </p>
                    <p>
                      Through years of research and development, we perfected our polymarble 
                      technology - delivering the stunning look of Italian marble at 80% less cost, 
                      with superior durability and easier installation.
                    </p>
                    <p>
                      Today, we serve over 200,000 happy customers across India and beyond, with 
                      showrooms in Madurai and Chennai. Our products grace homes, offices, hotels, 
                      and commercial spaces throughout the country.
                    </p>
                  </div>
                </div>
                <div className="reveal-right">
                  <div className="bg-card rounded-md p-8 border">
                    <Building2 className="w-16 h-16 text-brand-teal mb-6" />
                    <h3 className="text-2xl font-bold mb-4">9 Years of Excellence</h3>
                    <div className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 reveal-up">Our Journey</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="text-center reveal-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                    <h3 className="font-bold mb-2">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 reveal-up">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="text-center p-6 rounded-md bg-card border hover-elevate transition-all duration-300 reveal-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-teal">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-br from-brand-teal/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 reveal-up">Why Choose Us</h2>
              <p className="text-xl text-muted-foreground mb-12 reveal-fade">
                We're not just selling products - we're transforming the way India experiences luxury interiors.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-card p-6 rounded-md border reveal-up">
                  <div className="text-4xl font-bold text-brand-teal mb-2">80%</div>
                  <div className="text-lg font-semibold mb-2">Cost Savings</div>
                  <p className="text-muted-foreground">
                    Get the luxury look of Italian marble without breaking the bank
                  </p>
                </div>
                <div className="bg-card p-6 rounded-md border reveal-up" style={{ animationDelay: "0.1s" }}>
                  <div className="text-4xl font-bold text-brand-teal mb-2">15+</div>
                  <div className="text-lg font-semibold mb-2">Years Warranty</div>
                  <p className="text-muted-foreground">
                    Peace of mind with industry-leading product warranty
                  </p>
                </div>
                <div className="bg-card p-6 rounded-md border reveal-up" style={{ animationDelay: "0.2s" }}>
                  <div className="text-4xl font-bold text-brand-teal mb-2">200K+</div>
                  <div className="text-lg font-semibold mb-2">Happy Customers</div>
                  <p className="text-muted-foreground">
                    Join thousands of satisfied customers across India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
