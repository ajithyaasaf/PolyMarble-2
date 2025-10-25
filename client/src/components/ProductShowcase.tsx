import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Shield, Droplets, Thermometer, Sparkles, Clock } from "lucide-react";

// Import generated product images
import highGlossImage from "@assets/generated_images/High-gloss_polymarble_sheets_b1da0e5d.png";
import woodyPanelImage from "@assets/generated_images/Woody_panel_polymarble_sheets_479b86f5.png";
import solidColorImage from "@assets/generated_images/Solid_color_polymarble_sheets_f47ccc7d.png";
import texturedImage from "@assets/generated_images/Textured_polymarble_surface_detail_e034d7bf.png";
import mirrorImage from "@assets/generated_images/Mirror_finish_polymarble_sheets_1e70ee77.png";

export default function ProductShowcase() {
  useScrollReveal();
  
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      id: "high-gloss",
      name: "High-Gloss Premium",
      tagline: "Timeless Elegance",
      description: "Authentic marble patterns with mirror-like finish that elevates any space to luxury status.",
      price: "₹45",
      originalPrice: "₹180",
      image: highGlossImage,
      features: ["Ultra-glossy finish", "Scratch resistant", "Easy maintenance", "Premium patterns"],
      specifications: {
        thickness: "10-15mm",
        size: "8×4 ft",
        weight: "12 kg/sheet",
        finish: "High-gloss",
        warranty: "15 years"
      },
      useCases: ["Living rooms", "Bedrooms", "Office reception", "Luxury interiors"]
    },
    {
      id: "woody-panels",
      name: "Woody Panels",
      tagline: "Natural Warmth",
      description: "Authentic wood textures with superior durability and complete water resistance.",
      price: "₹52",
      originalPrice: "₹210",
      image: woodyPanelImage,
      features: ["Natural wood grain", "Water resistant", "Termite proof", "UV stable"],
      specifications: {
        thickness: "12-15mm",
        size: "8×4 ft", 
        weight: "14 kg/sheet",
        finish: "Wood texture",
        warranty: "15 years"
      },
      useCases: ["Accent walls", "Restaurants", "Cafes", "Warm interiors"]
    },
    {
      id: "solid-color",
      name: "Solid Color Range",
      tagline: "Modern Minimalism", 
      description: "Clean, contemporary colors perfect for modern architectural applications.",
      price: "₹40",
      originalPrice: "₹160",
      image: solidColorImage,
      features: ["Pure colors", "Stain resistant", "Cost effective", "Versatile"],
      specifications: {
        thickness: "10-12mm",
        size: "8×4 ft",
        weight: "11 kg/sheet", 
        finish: "Matte/Satin",
        warranty: "12 years"
      },
      useCases: ["Modern homes", "Offices", "Schools", "Hospitals"]
    },
    {
      id: "textured-finishes",
      name: "Textured Finishes",
      tagline: "Dimensional Beauty",
      description: "Three-dimensional surfaces that add depth, character and tactile appeal.",
      price: "₹48",
      originalPrice: "₹190",
      image: texturedImage,
      features: ["3D texture", "Anti-slip", "Unique patterns", "Dimensional appeal"],
      specifications: {
        thickness: "12-15mm",
        size: "8×4 ft",
        weight: "13 kg/sheet",
        finish: "Textured",
        warranty: "15 years"
      },
      useCases: ["Feature walls", "Bathrooms", "Exteriors", "Commercial"]
    },
    {
      id: "mirror-sheets", 
      name: "Mirror Sheets",
      tagline: "Luxury Reflection",
      description: "Mirror-like finish for high-impact installations that command attention.",
      price: "₹55",
      originalPrice: "₹220",
      image: mirrorImage,
      features: ["Mirror finish", "High impact", "Luxury appeal", "Light enhancing"],
      specifications: {
        thickness: "10-12mm",
        size: "8×4 ft",
        weight: "12 kg/sheet",
        finish: "Mirror",
        warranty: "12 years"
      },
      useCases: ["Luxury hotels", "Showrooms", "Boutiques", "Premium spaces"]
    }
  ];

  const coreFeatures = [
    { icon: <Droplets className="w-5 h-5" />, label: "Water Resistant" },
    { icon: <Zap className="w-5 h-5" />, label: "Fire Resistant" },
    { icon: <Shield className="w-5 h-5" />, label: "Termite Proof" },
    { icon: <Thermometer className="w-5 h-5" />, label: "Heat Resistant" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Stain Resistant" },
    { icon: <Clock className="w-5 h-5" />, label: "15+ Year Life" }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-brand-teal/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold mb-6 reveal-up">
            Our <span className="text-brand-teal text-shimmer">Product Range</span>
          </h3>
          <p className="text-xl text-cool-grey max-w-3xl mx-auto reveal-fade">
            Five distinct categories designed for every space and style. Each engineered for superior performance.
          </p>
        </div>

        {/* Product Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeProduct === index
                  ? 'bg-brand-teal text-pure-white transform scale-105'
                  : 'bg-pure-white/50 text-deep-charcoal hover:bg-brand-teal/20 hover:text-brand-teal border border-brand-teal/20'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Active Product Showcase */}
        <div className="max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-500 ${
                activeProduct === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute pointer-events-none'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Product Image */}
                <div className="relative group">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-brand-teal/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Savings Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-teal to-brand-teal/90 text-pure-white px-4 py-2 rounded-full font-bold shadow-lg">
                    Save {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}%
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center bg-brand-teal/20 rounded-full px-3 py-1 text-brand-teal text-sm font-medium mb-3">
                      {product.tagline}
                    </div>
                    <h4 className="text-3xl font-bold text-deep-charcoal mb-3">{product.name}</h4>
                    <p className="text-cool-grey text-lg leading-relaxed">{product.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-brand-teal">{product.price}/sq.ft</div>
                    <div className="text-lg text-cool-grey line-through">{product.originalPrice}/sq.ft</div>
                  </div>

                  {/* Core Features */}
                  <div className="grid grid-cols-3 gap-3">
                    {coreFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-cool-grey">
                        <div className="text-brand-teal mr-2">{feature.icon}</div>
                        {feature.label}
                      </div>
                    ))}
                  </div>

                  {/* Product Features */}
                  <div>
                    <h5 className="font-bold text-deep-charcoal mb-3">Key Features:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-cool-grey text-sm">
                          <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="bg-pure-white/80 backdrop-blur-sm rounded-lg p-4 border border-brand-teal/20">
                    <h5 className="font-bold text-brand-teal mb-3">Specifications:</h5>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-cool-grey capitalize">{key}:</span>
                          <span className="text-deep-charcoal font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h5 className="font-bold text-deep-charcoal mb-3">Perfect For:</h5>
                    <div className="flex flex-wrap gap-2">
                      {product.useCases.map((useCase, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-brand-teal/20 text-brand-teal text-sm rounded-full"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-brand-teal text-pure-white hover:bg-brand-teal/90 font-bold">
                      Get Free Sample
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-pure-white font-bold"
                    >
                      Calculate Cost
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}