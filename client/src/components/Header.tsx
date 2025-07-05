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
        isScrolled ? "bg-rich-black/90" : ""
      }`}
    >
      <div className="glassmorphism">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-metallic-gold to-yellow-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-rich-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.64 9 11 5.16-1.36 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <h1 className="text-xl font-bold tracking-wider">POLYMARBLE SHEET INDIA</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {location === "/" ? (
                <>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-sm font-medium hover:text-metallic-gold transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("gallery")}
                    className="text-sm font-medium hover:text-metallic-gold transition-colors"
                  >
                    Gallery
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-sm font-medium hover:text-metallic-gold transition-colors"
                  >
                    Case Studies
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-sm font-medium hover:text-metallic-gold transition-colors"
                  >
                    Contact
                  </button>
                </>
              ) : (
                <>
                  <Link href="/" className="text-sm font-medium hover:text-metallic-gold transition-colors">
                    Home
                  </Link>
                  <Link href="/#about" className="text-sm font-medium hover:text-metallic-gold transition-colors">
                    About
                  </Link>
                  <Link href="/#contact" className="text-sm font-medium hover:text-metallic-gold transition-colors">
                    Contact
                  </Link>
                </>
              )}
              <Link href="/products" className={`text-sm font-medium transition-colors ${location === '/products' ? 'text-metallic-gold' : 'hover:text-metallic-gold'}`}>
                Products
              </Link>
              <Link href="/inspiration" className={`text-sm font-medium transition-colors ${location === '/inspiration' ? 'text-metallic-gold' : 'hover:text-metallic-gold'}`}>
                Inspiration
              </Link>
              <Link href="/support" className={`text-sm font-medium transition-colors ${location === '/support' ? 'text-metallic-gold' : 'hover:text-metallic-gold'}`}>
                Support
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10">
              <nav className="flex flex-col space-y-4">
                {location === "/" ? (
                  <>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="text-sm font-medium hover:text-metallic-gold transition-colors text-left"
                    >
                      About
                    </button>
                    <button
                      onClick={() => scrollToSection("gallery")}
                      className="text-sm font-medium hover:text-metallic-gold transition-colors text-left"
                    >
                      Gallery
                    </button>
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="text-sm font-medium hover:text-metallic-gold transition-colors text-left"
                    >
                      Case Studies
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-sm font-medium hover:text-metallic-gold transition-colors text-left"
                    >
                      Contact
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/" className="text-sm font-medium hover:text-metallic-gold transition-colors text-left" onClick={() => setIsMobileMenuOpen(false)}>
                      Home
                    </Link>
                    <Link href="/#about" className="text-sm font-medium hover:text-metallic-gold transition-colors text-left" onClick={() => setIsMobileMenuOpen(false)}>
                      About
                    </Link>
                    <Link href="/#contact" className="text-sm font-medium hover:text-metallic-gold transition-colors text-left" onClick={() => setIsMobileMenuOpen(false)}>
                      Contact
                    </Link>
                  </>
                )}
                <Link href="/products" className={`text-sm font-medium transition-colors text-left ${location === '/products' ? 'text-metallic-gold' : 'hover:text-metallic-gold'}`} onClick={() => setIsMobileMenuOpen(false)}>
                  Products
                </Link>
                <Link href="/inspiration" className={`text-sm font-medium transition-colors text-left ${location === '/inspiration' ? 'text-metallic-gold' : 'hover:text-metallic-gold'}`} onClick={() => setIsMobileMenuOpen(false)}>
                  Inspiration
                </Link>
                <Link href="/support" className={`text-sm font-medium transition-colors text-left ${location === '/support' ? 'text-metallic-gold' : 'hover:text-metallic-gold'}`} onClick={() => setIsMobileMenuOpen(false)}>
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
