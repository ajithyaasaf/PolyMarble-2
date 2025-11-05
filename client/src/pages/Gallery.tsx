import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoGallery from "@/components/VideoGallery";
import SEOHead from "@/components/SEOHead";

export default function Gallery() {
  return (
    <div className="relative min-h-screen bg-pure-white text-deep-charcoal overflow-hidden">
      <SEOHead 
        title="Customer Gallery - Real Polymarble Installations | Polymarble Sheets India"
        description="Browse our gallery of real customer installations featuring polymarble sheets in Achampathu and Maathur. See how our premium polymarble transforms spaces with beautiful, durable wall solutions."
      />
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-peach/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        </div>
      </div>

      <Header />
      
      <main className="relative z-10 pt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-8 reveal-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Customer <span className="text-brand-teal text-shimmer">Gallery</span>
            </h1>
            <p className="text-xl text-cool-grey max-w-3xl mx-auto">
              Explore our collection of real polymarble installations from satisfied customers across different locations.
            </p>
          </div>
        </div>
        
        <VideoGallery />
      </main>
      
      <Footer />
    </div>
  );
}
