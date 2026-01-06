import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Zap, Shield, Droplets, Thermometer, Sparkles, Clock, ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@shared/productData";
import { Link } from "wouter";

export default function ProductShowcase() {
  useScrollReveal();

  const featuredProducts = getFeaturedProducts();
  const [activeProduct, setActiveProduct] = useState(0);

  if (featuredProducts.length === 0) {
    return null;
  }

  const coreFeatures = [
    { icon: <Droplets className="w-5 h-5" />, label: "Water Resistant" },
    { icon: <Zap className="w-5 h-5" />, label: "Fire Resistant" },
    { icon: <Shield className="w-5 h-5" />, label: "Termite Proof" },
    { icon: <Thermometer className="w-5 h-5" />, label: "Heat Resistant" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Stain Resistant" },
    { icon: <Clock className="w-5 h-5" />, label: "15+ Year Life" }
  ];

  const currentProduct = featuredProducts[activeProduct];

  return (
    <section className="relative overflow-hidden py-20" data-testid="section-product-showcase">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-brand-teal/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal-up">
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-brand-teal text-shimmer">Product Range</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium polymarble solutions designed for every space and style. Each engineered for superior performance.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal-fade">
          {featuredProducts.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              data-testid={`button-product-${product.id}`}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeProduct === index
                ? 'bg-brand-teal text-white transform scale-105'
                : 'bg-card text-foreground hover-elevate active-elevate-2 border'
                }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto reveal-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group order-2 lg:order-1" key={currentProduct.id}>
              <div className="aspect-[4/3] rounded-md overflow-hidden border">
                <img
                  src={currentProduct.images[0]}
                  alt={currentProduct.name}
                  data-testid={`img-product-${currentProduct.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {currentProduct.images.length > 1 && (
                <div className="absolute bottom-4 right-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    +{currentProduct.images.length - 1} more {currentProduct.images.length === 2 ? 'view' : 'views'}
                  </Badge>
                </div>
              )}
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center bg-brand-teal/10 rounded-full px-3 py-1 text-brand-teal text-sm font-medium mb-3">
                  {currentProduct.tagline}
                </div>
                <h4 className="text-3xl font-bold mb-3" data-testid={`text-product-name-${currentProduct.id}`}>
                  {currentProduct.name}
                </h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {currentProduct.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {coreFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="text-brand-teal">{feature.icon}</div>
                    <span className="hidden sm:inline">{feature.label}</span>
                  </div>
                ))}
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-md p-4 border">
                <h5 className="font-bold text-brand-teal mb-3">Specifications:</h5>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {currentProduct.material && (
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Material:</span>
                      <span className="font-medium text-right">{currentProduct.material}</span>
                    </div>
                  )}
                  {currentProduct.size && (
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Size:</span>
                      <span className="font-medium text-right">{currentProduct.size}</span>
                    </div>
                  )}
                  {currentProduct.thickness && (
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Thickness:</span>
                      <span className="font-medium text-right">{currentProduct.thickness}</span>
                    </div>
                  )}
                  {currentProduct.height && (
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Height:</span>
                      <span className="font-medium text-right">{currentProduct.height}</span>
                    </div>
                  )}
                  {currentProduct.width && (
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Width:</span>
                      <span className="font-medium text-right">{currentProduct.width}</span>
                    </div>
                  )}
                  {currentProduct.warranty && (
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Durability:</span>
                      <span className="font-medium text-right">{currentProduct.warranty}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h5 className="font-bold mb-3">Key Features:</h5>
                <div className="grid grid-cols-2 gap-2">
                  {currentProduct.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 bg-brand-teal rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-bold mb-3">Perfect For:</h5>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.useCases.map((useCase, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-brand-teal/10 text-brand-teal"
                    >
                      {useCase}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="flex-1">
                  <Button
                    className="w-full bg-brand-teal text-white"
                    data-testid="button-get-sample"
                  >
                    Get Enquiry
                  </Button>
                </Link>
                <Link href="/products" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-brand-teal text-brand-teal"
                    data-testid="button-view-all-products"
                  >
                    View All Products
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
