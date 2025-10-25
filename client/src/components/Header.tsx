import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-pure-white/95 shadow-lg" : ""
      }`}
    >
      <div className="glassmorphism">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" data-testid="link-home-logo">
              <img 
                src="/logo.png" 
                alt="Polymarble Sheet Logo" 
                className="h-12 w-auto group-hover:drop-shadow-[0_0_8px_rgba(243,171,141,0.5)] transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {location === "/" ? (
                <>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-sm font-medium hover:text-brand-peach transition-colors"
                    data-testid="button-about"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("gallery")}
                    className="text-sm font-medium hover:text-brand-brown transition-colors"
                    data-testid="button-gallery"
                  >
                    Gallery
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-sm font-medium hover:text-brand-teal transition-colors"
                    data-testid="button-projects"
                  >
                    Case Studies
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-sm font-medium hover:text-brand-peach transition-colors"
                    data-testid="button-contact"
                  >
                    Contact
                  </button>
                </>
              ) : (
                <>
                  <Link href="/" className="text-sm font-medium hover:text-brand-peach transition-colors" data-testid="link-home">
                    Home
                  </Link>
                  <Link href="/#about" className="text-sm font-medium hover:text-brand-brown transition-colors" data-testid="link-about">
                    About
                  </Link>
                  <Link href="/#contact" className="text-sm font-medium hover:text-brand-peach transition-colors" data-testid="link-contact">
                    Contact
                  </Link>
                </>
              )}
              <Link href="/products" className={`text-sm font-medium transition-colors ${location === '/products' ? 'text-brand-brown' : 'hover:text-brand-brown'}`} data-testid="link-products">
                Products
              </Link>
              <Link href="/inspiration" className={`text-sm font-medium transition-colors ${location === '/inspiration' ? 'text-brand-peach' : 'hover:text-brand-peach'}`} data-testid="link-inspiration">
                Inspiration
              </Link>
              <Link href="/support" className={`text-sm font-medium transition-colors ${location === '/support' ? 'text-brand-teal' : 'hover:text-brand-teal'}`} data-testid="link-support">
                Support
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-light-silver/30 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-light-silver/30">
              <nav className="flex flex-col space-y-4">
                {location === "/" ? (
                  <>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="text-sm font-medium hover:text-brand-teal transition-colors text-left"
                      data-testid="button-mobile-about"
                    >
                      About
                    </button>
                    <button
                      onClick={() => scrollToSection("gallery")}
                      className="text-sm font-medium hover:text-brand-teal transition-colors text-left"
                      data-testid="button-mobile-gallery"
                    >
                      Gallery
                    </button>
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="text-sm font-medium hover:text-brand-teal transition-colors text-left"
                      data-testid="button-mobile-projects"
                    >
                      Case Studies
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-sm font-medium hover:text-brand-teal transition-colors text-left"
                      data-testid="button-mobile-contact"
                    >
                      Contact
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/" className="text-sm font-medium hover:text-brand-teal transition-colors text-left" onClick={() => setIsMobileMenuOpen(false)} data-testid="link-mobile-home">
                      Home
                    </Link>
                    <Link href="/#about" className="text-sm font-medium hover:text-brand-teal transition-colors text-left" onClick={() => setIsMobileMenuOpen(false)} data-testid="link-mobile-about">
                      About
                    </Link>
                    <Link href="/#contact" className="text-sm font-medium hover:text-brand-teal transition-colors text-left" onClick={() => setIsMobileMenuOpen(false)} data-testid="link-mobile-contact">
                      Contact
                    </Link>
                  </>
                )}
                <Link href="/products" className={`text-sm font-medium transition-colors text-left ${location === '/products' ? 'text-brand-teal' : 'hover:text-brand-teal'}`} onClick={() => setIsMobileMenuOpen(false)} data-testid="link-mobile-products">
                  Products
                </Link>
                <Link href="/inspiration" className={`text-sm font-medium transition-colors text-left ${location === '/inspiration' ? 'text-brand-teal' : 'hover:text-brand-teal'}`} onClick={() => setIsMobileMenuOpen(false)} data-testid="link-mobile-inspiration">
                  Inspiration
                </Link>
                <Link href="/support" className={`text-sm font-medium transition-colors text-left ${location === '/support' ? 'text-brand-teal' : 'hover:text-brand-teal'}`} onClick={() => setIsMobileMenuOpen(false)} data-testid="link-mobile-support">
                  Support
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
