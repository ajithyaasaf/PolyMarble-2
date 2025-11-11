import { useState, useMemo } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickQuote from "@/components/QuickQuote";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Download,
  Info,
  ArrowRight,
  Package,
  Ruler,
  Award,
  Shield,
  Filter,
} from "lucide-react";
import {
  products,
  productCategories,
  getProductsByCategory,
} from "@shared/productData";
import { Product } from "@shared/schema";

export default function Products() {
  useScrollReveal();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  const [query, setQuery] = useState("");

  const displayProducts = useMemo(() => {
    const base = getProductsByCategory(selectedCategory);
    if (!query.trim()) return base;
    const q = query.toLowerCase();
    return base.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tagline?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.features?.some((f) => f.toLowerCase().includes(q))
    );
  }, [selectedCategory, query]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setShowDetailsDialog(true);
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      <main className="pt-20 scroll-smooth">
        {/* Hero / Stat Cards */}
        <section className="py-20 bg-gradient-to-br from-brand-teal/5 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-gradient-to-br from-brand-teal/20 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 reveal-up">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="text-brand-teal text-shimmer">Product Catalog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our comprehensive range of premium polymarble solutions. From interior elegance to exterior durability, we have the perfect solution for your project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 reveal-fade">
              <Card className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <Package className="w-8 h-8 text-brand-teal mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-1">{products.length}+</h3>
                  <p className="text-sm text-muted-foreground">Product Varieties</p>
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <Ruler className="w-8 h-8 text-brand-teal mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-1">Custom</h3>
                  <p className="text-sm text-muted-foreground">Sizes Available</p>
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-brand-teal mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-1">15+</h3>
                  <p className="text-sm text-muted-foreground">Years Warranty</p>
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <Shield className="w-8 h-8 text-brand-teal mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-1">100%</h3>
                  <p className="text-sm text-muted-foreground">Quality Assured</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Filter Bar (replaces Tabs) */}
        <section className="py-6 border-y bg-background/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between reveal-up">
              {/* Category chips */}
              <div className="flex flex-wrap gap-2 items-center">
                <div className="inline-flex items-center gap-2 text-muted-foreground">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm">Filter by category:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {productCategories.map((category) => {
                    const active = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setSelectedCategory(category.id)}
                        aria-pressed={active}
                        className={[
                          "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition",
                          active
                            ? "bg-brand-teal text-white border-brand-teal"
                            : "bg-card text-foreground border-border hover:bg-muted/60",
                        ].join(" ")}
                      >
                        {category.name}
                        <Badge
                          variant={active ? "secondary" : "outline"}
                          className={active ? "bg-white/20 text-white" : "text-muted-foreground"}
                        >
                          {category.count}
                        </Badge>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Search + Reset */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="search"
                  placeholder="Search by name, feature, description..."
                  className="w-full sm:w-80 rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button
                  variant="outline"
                  className="border-brand-teal text-brand-teal"
                  onClick={() => {
                    setSelectedCategory("all");
                    setQuery("");
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>

            {/* Result count */}
            <div className="mt-3 text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">{displayProducts.length}</span> result{displayProducts.length === 1 ? "" : "s"}
              {selectedCategory !== "all" && (
                <>
                  {" "}in <span className="font-medium text-foreground">
                    {productCategories.find((c) => c.id === selectedCategory)?.name}
                  </span>
                </>
              )}
              {query && <> for “{query}”</>}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-fade">
              {displayProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden hover-elevate active-elevate-2 cursor-pointer"
                  onClick={() => handleProductClick(product)}
                  data-testid={`card-product-${product.id}`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3
                          className="font-bold text-xl"
                          data-testid={`text-product-name-${product.id}`}
                        >
                          {product.name}
                        </h3>
                        {product.isFeatured && (
                          <Badge className="bg-brand-teal text-white flex-shrink-0">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-brand-teal font-medium mb-2">
                        {product.tagline}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm">
                      {product.material && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Material:</span>
                          <span className="font-medium">{product.material}</span>
                        </div>
                      )}
                      {product.size && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Size:</span>
                          <span className="font-medium">{product.size}</span>
                        </div>
                      )}
                      {product.warranty && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Warranty:</span>
                          <span className="font-medium">{product.warranty}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {product.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.features.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <Button
                      className="w-full bg-brand-teal text-white"
                      data-testid={`button-view-details-${product.id}`}
                    >
                      View Details
                      <Info className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty state */}
            {displayProducts.length === 0 && (
              <div className="text-center text-muted-foreground mt-16">
                No products found. Try adjusting your filters.
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-brand-teal/5 to-transparent">
          <div className="container mx-auto px-6 text-center reveal-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Our experts are ready to help you select the perfect polymarble solution for your project. Get free samples and professional consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-teal text-white" data-testid="button-contact-expert">
                Contact Our Experts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-teal text-brand-teal"
                data-testid="button-download-catalog"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Catalog
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Product Details Dialog */}
      <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
        <DialogContent
          className="max-w-4xl max-h-[90vh] overflow-y-auto"
          data-testid="dialog-product-details"
        >
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedProduct.name}</DialogTitle>
                <DialogDescription className="text-lg">
                  {selectedProduct.tagline}
                </DialogDescription>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {selectedProduct.images.map((image: string, idx: number) => (
                    <div key={idx} className="aspect-[4/3] rounded-md overflow-hidden border">
                      <img
                        src={image}
                        alt={`${selectedProduct.name} - View ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Description</h3>
                    <p className="text-muted-foreground">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-md p-4">
                    <h3 className="font-bold text-lg mb-3 text-brand-teal">Specifications</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category:</span>
                        <span className="font-medium">{selectedProduct.category}</span>
                      </div>
                      {selectedProduct.material && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Material:</span>
                          <span className="font-medium">{selectedProduct.material}</span>
                        </div>
                      )}
                      {selectedProduct.size && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Size:</span>
                          <span className="font-medium">{selectedProduct.size}</span>
                        </div>
                      )}
                      {selectedProduct.thickness && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Thickness:</span>
                          <span className="font-medium">{selectedProduct.thickness}</span>
                        </div>
                      )}
                      {selectedProduct.height && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Height:</span>
                          <span className="font-medium">{selectedProduct.height}</span>
                        </div>
                      )}
                      {selectedProduct.width && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Width:</span>
                          <span className="font-medium">{selectedProduct.width}</span>
                        </div>
                      )}
                      {selectedProduct.finish && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Finish:</span>
                          <span className="font-medium">{selectedProduct.finish}</span>
                        </div>
                      )}
                      {selectedProduct.warranty && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Warranty:</span>
                          <span className="font-medium">{selectedProduct.warranty}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Key Features</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProduct.features.map((feature: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-brand-teal rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Perfect For</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.useCases.map((useCase: string, idx: number) => (
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

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      className="flex-1 bg-brand-teal text-white"
                      data-testid="button-dialog-get-quote"
                    >
                      Get Quote
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-brand-teal text-brand-teal"
                      data-testid="button-dialog-request-sample"
                    >
                      Request Sample
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <QuickQuote />
    </div>
  );
}
