import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Gallery3D from "@/components/Gallery3D";
import Testimonials from "@/components/Testimonials";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuickQuote from "@/components/QuickQuote";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-rich-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Gallery3D />
        <FeaturedProjects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <QuickQuote />
    </div>
  );
}
