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
import { Link } from "wouter";
import { Play, ArrowRight } from "lucide-react";

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

        <div className="bg-warm-cream">
          <Gallery3D />
        </div>

        {/* Customer Gallery Preview CTA */}
        <div className="py-24 bg-gradient-to-br from-pure-white via-warm-cream to-pure-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-pure-white to-light-silver/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-peach/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <Link 
                  href="/gallery"
                  className="inline-flex items-center justify-center w-20 h-20 bg-brand-teal/10 rounded-full mb-6 cursor-pointer hover:bg-brand-teal/20 transition-all duration-300 hover:scale-110 group"
                  data-testid="icon-navigate-gallery"
                >
                  <Play className="w-10 h-10 text-brand-teal group-hover:scale-110 transition-transform" fill="currentColor" />
                </Link>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  See Real <span className="text-brand-teal text-shimmer">Customer Installations</span>
                </h2>
                <p className="text-xl text-cool-grey mb-8">
                  Browse our gallery of 18+ real customer installations from Achampathu and Maathur. Watch videos of polymarble transforming homes and spaces.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-pure-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-teal/20">
                  <div className="text-3xl font-bold text-brand-teal mb-2">18+</div>
                  <div className="text-cool-grey">Installation Videos</div>
                </div>
                <div className="bg-pure-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-teal/20">
                  <div className="text-3xl font-bold text-brand-teal mb-2">2</div>
                  <div className="text-cool-grey">Locations</div>
                </div>
                <div className="bg-pure-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-teal/20">
                  <div className="text-3xl font-bold text-brand-teal mb-2">100%</div>
                  <div className="text-cool-grey">Real Projects</div>
                </div>
              </div>

              <Link 
                href="/gallery"
                className="inline-flex items-center gap-3 bg-brand-teal text-pure-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-teal/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                data-testid="button-view-gallery"
              >
                <Play className="w-5 h-5" fill="currentColor" />
                View Customer Gallery
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
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
