import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  Home,
  Package,
  Image as ImageIcon,
  Lightbulb,
  HeadphonesIcon,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { Link, useLocation } from "wouter";

interface NavItem {
  label: string;
  href?: string;
  action?: () => void;
  icon?: any;
  badge?: string;
  description?: string;
  featured?: boolean;
  submenu?: {
    title: string;
    items: Array<{
      label: string;
      href: string;
      description?: string;
      icon?: any;
    }>;
  }[];
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    setActiveDropdown(null);
  };

  const navigationItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      description: "Homepage",
    },
    {
      label: "About",
      href: "/about",
      icon: Home,
      description: "Our story and values",
    },
    {
      label: "Products",
      href: "/products",
      icon: Package,
      badge: "New",
      featured: true,
      submenu: [
        {
          title: "Categories",
          items: [
            {
              label: "Wall Panels",
              href: "/products/wall-panels",
              icon: Package,
            },
            {
              label: "Ceiling Solutions",
              href: "/products/ceiling",
              icon: Package,
            },
            { label: "Flooring", href: "/products/flooring", icon: Package },
            {
              label: "Exterior Cladding",
              href: "/products/exterior",
              icon: Package,
            },
          ],
        },
        {
          title: "Collections",
          items: [
            {
              label: "Premium Range",
              href: "/products/premium",
              description: "Luxury finishes",
            },
            {
              label: "Classic Series",
              href: "/products/classic",
              description: "Timeless designs",
            },
            {
              label: "Modern Line",
              href: "/products/modern",
              description: "Contemporary styles",
            },
          ],
        },
      ],
    },
    {
      label: "Gallery",
      href: "/gallery",
      icon: ImageIcon,
      description: "Stunning installations",
    },
    // {
    //   label: "Inspiration",
    //   href: "/inspiration",
    //   icon: Lightbulb,
    //   description: "Design ideas",
    // },
    // {
    //   label: "Case Studies",
    //   action: () => scrollToSection("projects"),
    //   description: "Success stories",
    // },
    {
      label: "Contact",
      href: "/contact",
      icon: HeadphonesIcon,
      description: "Get in touch",
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "translate-y-[-100%]" : "translate-y-0"
        }`}
      >
        <div className="bg-brand-teal text-pure-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between py-2 sm:py-2 text-xs min-h-[40px]">
              <div className="flex items-center gap-3 sm:gap-6">
                <a
                  href="tel:+919842106768"
                  className="flex items-center gap-1.5 sm:gap-2 hover:text-brand-peach transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-3 sm:h-3 flex-shrink-0" />
                  <span className="font-medium text-[11px] sm:text-xs whitespace-nowrap">+91 98421 06768</span>
                </a>
                <span className="hidden sm:flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  <span>Madurai, India</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <a
                  href="https://www.instagram.com/polymarblesheet_india?igsh=MXZoczNwcWxleWl6bw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pure-white hover:text-brand-peach transition-colors"
                  aria-label="Instagram"
                  data-testid="link-header-social-instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                </a>
                <a
                  href="https://www.facebook.com/polymarblesheets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pure-white hover:text-brand-peach transition-colors"
                  aria-label="Facebook"
                  data-testid="link-header-social-facebook"
                >
                  <Facebook className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                </a>
                <a
                  href="https://youtube.com/@polymarblesheet3386?si=XSU8vu8ighly_sca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pure-white hover:text-brand-peach transition-colors"
                  aria-label="Youtube"
                  data-testid="link-header-social-youtube"
                >
                  <Youtube className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "top-0 bg-pure-white/95 backdrop-blur-xl shadow-lg"
            : "top-[40px] sm:top-9 bg-pure-white/80 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20 py-2">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3 relative">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Polymarble"
                  className="h-11 sm:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
                  data-testid="img-logo"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-teal/20 to-brand-peach/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-1">
                {navigationItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() =>
                      item.submenu && setActiveDropdown(item.label)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`group px-4 py-2 flex items-center gap-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                          location === item.href
                            ? "text-brand-teal bg-brand-teal/10"
                            : "text-deep-charcoal hover:text-brand-teal hover:bg-warm-cream"
                        }`}
                      >
                        {item.icon && (
                          <item.icon className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                        )}
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="px-1.5 py-0.5 bg-gradient-to-r from-brand-peach to-brand-brown text-pure-white text-[10px] font-bold rounded-full">
                            {item.badge}
                          </span>
                        )}
                        {/* Chevron for submenu REMOVED as requested */}
                      </Link>
                    ) : (
                      <button
                        onClick={item.action}
                        className="group px-4 py-2 flex items-center gap-2 text-sm font-medium text-deep-charcoal hover:text-brand-teal hover:bg-warm-cream transition-all duration-300 rounded-lg"
                      >
                        {item.icon && (
                          <item.icon className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                        )}
                        <span>{item.label}</span>
                      </button>
                    )}

                    {/* Mega Menu Dropdown */}
                    {item.submenu && activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-[600px] bg-pure-white rounded-2xl shadow-2xl border border-light-silver/20 overflow-hidden reveal-fade">
                        <div className="grid grid-cols-2 gap-6 p-6">
                          {item.submenu.map((section) => (
                            <div key={section.title}>
                              <h3 className="text-xs uppercase tracking-wider text-cool-grey font-bold mb-4">
                                {section.title}
                              </h3>
                              <ul className="space-y-2">
                                {section.items.map((subItem) => (
                                  <li key={subItem.label}>
                                    <Link
                                      href={subItem.href}
                                      className="group flex items-start gap-3 p-2 rounded-lg hover:bg-warm-cream transition-colors"
                                    >
                                      {subItem.icon && (
                                        <subItem.icon className="w-4 h-4 text-brand-teal mt-0.5" />
                                      )}
                                      <div>
                                        <div className="text-sm font-medium text-deep-charcoal group-hover:text-brand-teal transition-colors">
                                          {subItem.label}
                                        </div>
                                        {subItem.description && (
                                          <div className="text-xs text-cool-grey">
                                            {subItem.description}
                                          </div>
                                        )}
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="bg-gradient-to-r from-brand-teal/5 to-brand-peach/5 p-4 border-t border-light-silver/20">
                          <Link
                            href="/products"
                            className="flex items-center justify-between group"
                          >
                            <span className="text-sm font-medium text-deep-charcoal">
                              View All Products
                            </span>
                            <ArrowRight className="w-4 h-4 text-brand-teal group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* CTA Button — routes to contact page */}
              <Link
                href="/contact"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-brand-teal text-pure-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover-lift"
              >
                <Mail className="w-4 h-4" />
                Get Quote
              </Link>

              {/* Mobile Menu Button (fixed placement & alignment) */}
              <button
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-warm-cream hover:bg-brand-teal/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-deep-charcoal" />
                ) : (
                  <Menu className="w-6 h-6 text-deep-charcoal" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 bg-pure-white shadow-2xl transition-all duration-500 ${
            isMobileMenuOpen
              ? "top-[96px] sm:top-20 opacity-100 translate-y-0"
              : "top-[96px] sm:top-20 opacity-0 -translate-y-full pointer-events-none"
          }`}
          style={{ maxHeight: "calc(100vh - 96px)" }}
        >
          <div className="overflow-y-auto">
            {/* Mobile Navigation */}
            <nav className="p-4">
              {navigationItems.map((item, index) => (
                <div
                  key={item.label}
                  className="border-b border-light-silver/10 last:border-0"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between py-4 text-base font-medium transition-colors ${
                        location === item.href
                          ? "text-brand-teal"
                          : "text-deep-charcoal"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon && (
                          <item.icon className="w-5 h-5 opacity-60" />
                        )}
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="px-2 py-0.5 bg-gradient-to-r from-brand-peach to-brand-brown text-pure-white text-xs font-bold rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-40" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        item.action?.();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-between py-4 text-base font-medium text-deep-charcoal"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon && (
                          <item.icon className="w-5 h-5 opacity-60" />
                        )}
                        <span>{item.label}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-40" />
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA — routes to contact page */}
            <div className="p-4 bg-gradient-to-br from-warm-cream to-light-silver/20">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-brand-teal to-brand-teal/90 text-pure-white rounded-xl font-bold text-base shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail className="w-5 h-5" />
                Get Quote
              </Link>
              <div className="flex items-center justify-center gap-4 mt-4">
                <a
                  href="#"
                  className="text-cool-grey hover:text-brand-teal transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-cool-grey hover:text-brand-teal transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-cool-grey hover:text-brand-teal transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Indicator */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 h-1 bg-transparent transition-all duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-full bg-gradient-to-r from-brand-teal to-brand-peach transition-all duration-300"
          style={{
            width: `${
              typeof window !== "undefined"
                ? Math.min(
                    (window.scrollY /
                      (document.documentElement.scrollHeight -
                        window.innerHeight)) *
                      100,
                    100,
                  )
                : 0
            }%`,
          }}
        />
      </div>
    </>
  );
}
