import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import ProductShowcase from "@/components/ProductShowcase";
import MaterialExplorer from "@/components/MaterialExplorer";
import Gallery3D from "@/components/Gallery3D";
import StyleConsultant from "@/components/StyleConsultant";
import Testimonials from "@/components/Testimonials";
import FeaturedProjects from "@/components/FeaturedProjects";
import EnhancedContact from "@/components/EnhancedContact";
import Footer from "@/components/Footer";
import QuickQuote from "@/components/QuickQuote";
import SEOHead from "@/components/SEOHead";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-pure-white text-deep-charcoal overflow-hidden">
      <SEOHead />
      
      {/* Global Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-peach/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-light-silver/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
        </div>
      </div>

      <Header />
      <main className="scroll-smooth relative z-10">
        <Hero />
        
        {/* Content Sections with Proper Spacing and Enhanced Backgrounds */}
        <div className="section-spacing bg-pure-white relative">
          <TrustIndicators />
        </div>
        
        <div className="section-spacing bg-gradient-to-br from-warm-cream via-pure-white to-warm-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-10 w-40 h-40 bg-brand-teal/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-60 h-60 bg-brand-peach/10 rounded-full blur-2xl"></div>
          </div>
          <About />
        </div>
        
        <div className="section-spacing bg-pure-white relative">
          <Benefits />
        </div>
        
        <div className="section-spacing bg-gradient-to-b from-pure-white via-warm-cream to-light-silver/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl"></div>
          </div>
          <ProductShowcase />
        </div>

        {/* New: Material Explorer */}
        <div className="section-spacing bg-gradient-to-br from-light-silver/10 via-pure-white to-warm-cream relative">
          <MaterialExplorer />
        </div>
        
        <div className="section-spacing bg-warm-cream">
          <Gallery3D />
        </div>

        {/* New: Style Consultant */}
        <div className="section-spacing bg-gradient-to-br from-pure-white via-warm-cream to-pure-white relative">
          <StyleConsultant />
        </div>
        
        <div className="section-spacing bg-pure-white relative">
          <FeaturedProjects />
        </div>
        
        <div className="section-spacing bg-gradient-to-b from-pure-white to-light-silver/20 relative">
          <Testimonials />
        </div>
        
        <div className="section-spacing bg-gradient-to-br from-warm-cream via-light-silver/30 to-warm-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-brand-peach/10 rounded-full blur-3xl"></div>
          </div>
          <EnhancedContact />
        </div>
      </main>
      <Footer />
      <QuickQuote />
    </div>
  );
}
