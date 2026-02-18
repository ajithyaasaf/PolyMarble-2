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
} from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
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

  // Keyboard navigation: close dropdown on Escape key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeDropdown) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [activeDropdown]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Keyboard navigation handler for menu items
  const handleMenuKeyDown = (e: React.KeyboardEvent, item: NavItem) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (item.submenu) {
        setActiveDropdown(activeDropdown === item.label ? null : item.label);
      }
    } else if (e.key === 'Escape') {
      setActiveDropdown(null);
    } else if (e.key === 'ArrowDown' && item.submenu) {
      e.preventDefault();
      setActiveDropdown(item.label);
      // Focus first submenu item after a short delay
      setTimeout(() => {
        const firstLink = document.querySelector(
          `[data-dropdown="${item.label}"] a`
        ) as HTMLElement;
        firstLink?.focus();
      }, 50);
    }
  };

  // Determine if the header should be transparent (only on home page when not scrolled)
  const isTransparent = location === "/" && !isScrolled;

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
    //   label: "Inspiration",
    //   href: "/inspiration",
    //   icon: Lightbulb,
    //   description: "Design ideas",
    // },
    // {
    //   label: "Case Studies",
    //   action: () => scrollToSection("projects"),
    //   description: "Success stories",
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "translate-y-[-100%]" : "translate-y-0"
          }`}
      >
        <div className="bg-brand-teal text-pure-white">
          <div className="container mx-auto px-3 sm:px-6">
            <div className="flex items-center justify-between w-full gap-2 sm:gap-4 h-10 text-xs">
              <a
                href="tel:+919842106768"
                className="flex items-center gap-1.5 hover:text-brand-peach transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-3 sm:h-3 flex-shrink-0" fill="currentColor" />
                <span className="font-medium text-[12px] sm:text-sm whitespace-nowrap leading-4">
                  +91 98421 06768
                </span>
              </a>
              <span className="hidden sm:flex items-center gap-1.5 font-medium text-[12px] sm:text-sm">
                <MapPin className="w-4 h-4 sm:w-3 sm:h-3 flex-shrink-0" />
                <span className="whitespace-nowrap leading-4">Madurai, India</span>
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="https://www.instagram.com/polymarblesheet_india?igsh=MXZoczNwcWxleWl6bw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-pure-white hover:text-brand-peach transition-colors"
                  aria-label="Instagram"
                  data-testid="link-header-social-instagram"
                >
                  <FaInstagram className="w-4 h-4 sm:w-4 sm:h-4" />
                </a>
                <a
                  href="https://www.facebook.com/polymarblesheets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-pure-white hover:text-brand-peach transition-colors"
                  aria-label="Facebook"
                  data-testid="link-header-social-facebook"
                >
                  <FaFacebook className="w-4 h-4 sm:w-4 sm:h-4" />
                </a>
                <a
                  href="https://youtube.com/@polymarblesheet3386?si=XSU8vu8ighly_sca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-pure-white hover:text-brand-peach transition-colors"
                  aria-label="Youtube"
                  data-testid="link-header-social-youtube"
                >
                  <FaYoutube className="w-4 h-4 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? "top-0" : "top-10 sm:top-9"
          } ${isTransparent
            ? "bg-transparent"
            : "bg-pure-white/95 backdrop-blur-xl shadow-lg"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3 relative">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Polymarble"
                  className={`h-11 sm:h-20 w-auto transition-all duration-300 group-hover:scale-105 ${isTransparent ? "brightness-0 invert drop-shadow-md" : ""
                    }`}
                  data-testid="img-logo"
                />
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
                        className={`group px-4 py-2 flex items-center gap-2 text-sm font-medium transition-all duration-300 rounded-lg ${!isTransparent
                          ? location === item.href
                            ? "text-brand-teal bg-brand-teal/10"
                            : "text-deep-charcoal hover:text-brand-teal hover:bg-warm-cream"
                          : location === item.href
                            ? "text-white bg-white/20 backdrop-blur-sm"
                            : "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                          }`}
                        onKeyDown={(e) => handleMenuKeyDown(e, item)}
                        onFocus={() => item.submenu && setActiveDropdown(item.label)}
                        aria-haspopup={item.submenu ? "true" : undefined}
                        aria-expanded={item.submenu ? activeDropdown === item.label : undefined}
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
                      </Link>
                    ) : (
                      <button
                        onClick={item.action}
                        onKeyDown={(e) => handleMenuKeyDown(e, item)}
                        className={`group px-4 py-2 flex items-center gap-2 text-sm font-medium transition-all duration-300 rounded-lg ${!isTransparent
                          ? "text-deep-charcoal hover:text-brand-teal hover:bg-warm-cream"
                          : "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                          }`}
                        aria-haspopup={item.submenu ? "true" : undefined}
                        aria-expanded={item.submenu ? activeDropdown === item.label : undefined}
                      >
                        {item.icon && (
                          <item.icon className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                        )}
                        <span>{item.label}</span>
                      </button>
                    )}

                    {/* Mega Menu Dropdown */}
                    {item.submenu && activeDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-2 w-[600px] bg-pure-white rounded-2xl shadow-2xl border border-light-silver/20 overflow-hidden reveal-fade"
                        data-dropdown={item.label}
                        role="menu"
                        aria-label={`${item.label} submenu`}
                      >
                        <div className="grid grid-cols-2 gap-6 p-6">
                          {item.submenu.map((section) => (
                            <div key={section.title}>
                              <h3 className="text-xs uppercase tracking-wider text-cool-grey font-bold mb-4">
                                {section.title}
                              </h3>
                              <ul className="space-y-2" role="none">
                                {section.items.map((subItem) => (
                                  <li key={subItem.label} role="none">
                                    <Link
                                      href={subItem.href}
                                      className="group flex items-start gap-3 p-2 rounded-lg hover:bg-warm-cream transition-colors"
                                      role="menuitem"
                                      onClick={() => setActiveDropdown(null)}
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
                            role="menuitem"
                            onClick={() => setActiveDropdown(null)}
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
                className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover-lift ${!isTransparent
                  ? "bg-brand-teal text-pure-white"
                  : "bg-white text-brand-teal hover:bg-brand-teal hover:text-white"
                  }`}
              >
                <Mail className="w-4 h-4" />
                Get Enquiry
              </Link>

              {/* Mobile Menu Button (fixed placement & alignment) */}
              <button
                className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${!isTransparent
                  ? "bg-warm-cream hover:bg-brand-teal/10 text-deep-charcoal"
                  : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md"
                  }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 bg-pure-white shadow-2xl transition-all duration-500 ${isMobileMenuOpen
            ? "top-[104px] sm:top-20 opacity-100 translate-y-0"
            : "top-[104px] sm:top-20 opacity-0 -translate-y-full pointer-events-none"
            }`}
          style={{ maxHeight: "calc(100vh - 104px)" }}
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
                      className={`flex items-center justify-between py-4 text-base font-medium transition-colors ${location === item.href
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
                Get Enquiry
              </Link>
              <div className="flex items-center justify-center gap-4 mt-4">
                <a
                  href="https://www.instagram.com/polymarblesheet_india?igsh=MXZoczNwcWxleWl6bw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cool-grey hover:text-brand-teal transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/polymarblesheets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cool-grey hover:text-brand-teal transition-colors"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@polymarblesheet3386?si=XSU8vu8ighly_sca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cool-grey hover:text-brand-teal transition-colors"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
