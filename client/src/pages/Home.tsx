import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import ProductShowcase from "@/components/ProductShowcase";
import Gallery3D from "@/components/Gallery3D";
import Testimonials from "@/components/Testimonials";
import FeaturedProjects from "@/components/FeaturedProjects";
import EnhancedContact from "@/components/EnhancedContact";
import Footer from "@/components/Footer";
import QuickQuote from "@/components/QuickQuote";
import SEOHead from "@/components/SEOHead";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-pure-white text-deep-charcoal">
      <SEOHead />
      <Header />
      <main className="scroll-smooth">
        <Hero />
        
        {/* Content Sections with Proper Spacing */}
        <div className="section-spacing bg-pure-white">
          <TrustIndicators />
        </div>
        
        <div className="section-spacing bg-warm-cream">
          <About />
        </div>
        
        <div className="section-spacing bg-pure-white">
          <Benefits />
        </div>
        
        <div className="section-spacing bg-gradient-to-b from-pure-white to-warm-cream">
          <ProductShowcase />
        </div>
        
        <div className="section-spacing bg-warm-cream">
          <Gallery3D />
        </div>
        
        <div className="section-spacing bg-pure-white">
          <FeaturedProjects />
        </div>
        
        <div className="section-spacing bg-gradient-to-b from-pure-white to-light-silver/20">
          <Testimonials />
        </div>
        
        <div className="section-spacing bg-gradient-to-br from-warm-cream via-light-silver/30 to-warm-cream">
          <EnhancedContact />
        </div>
      </main>
      <Footer />
      <QuickQuote />
    </div>
  );
}
