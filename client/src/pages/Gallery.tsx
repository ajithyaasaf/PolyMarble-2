import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoGallery from "@/components/VideoGallery";
import SEOHead from "@/components/SEOHead";
import highGlossImage from "@assets/generated_images/High-gloss_polymarble_product_showcase_f795ab21.png";

export default function Gallery() {
  return (
    <div className="relative min-h-screen bg-pure-white text-deep-charcoal overflow-hidden">
      <SEOHead 
        title="Customer Gallery - Real Polymarble Installations | Polymarble Sheets India"
        description="Browse our gallery of real customer installations featuring polymarble sheets in Achampathu and Maathur. See how our premium polymarble transforms spaces with beautiful, durable wall solutions."
      />

      <Header />
      
      <main className="relative pt-20">
        {/* Hero Banner Section */}
        <section 
          className="py-20 relative overflow-hidden"
          style={{
            backgroundImage: `url('${highGlossImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal/85 via-deep-charcoal/75 to-deep-charcoal/90"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 reveal-up text-pure-white drop-shadow-lg">
                Customer <span className="text-brand-teal text-shimmer">Gallery</span>
              </h1>
              <p className="text-xl text-warm-cream max-w-3xl mx-auto reveal-fade drop-shadow-md">
                Explore our collection of real polymarble installations from satisfied customers across different locations.
              </p>
            </div>
          </div>
        </section>
        
        <VideoGallery />
      </main>
      
      <Footer />
    </div>
  );
}
