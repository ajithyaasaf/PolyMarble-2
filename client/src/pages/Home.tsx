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
      <main>
        <Hero />
        <TrustIndicators />
        <About />
        <Benefits />
        <ProductShowcase />
        <Gallery3D />
        <FeaturedProjects />
        <Testimonials />
        <EnhancedContact />
      </main>
      <Footer />
      <QuickQuote />
    </div>
  );
}
