import { Product } from "./schema";
import woodyPanel1 from "@assets/image_1762857563144.png";
import interiorSheet1 from "@assets/image_1762857616148.png";
import interiorSheet2 from "@assets/image_1762857628819.png";
import interiorSheet3 from "@assets/image_1762857640465.png";
import puPanel1 from "@assets/image_1762858118936.png";
import puPanel2 from "@assets/image_1762858130551.png";
import exteriorSheet from "@assets/image_1762858166702.png";
import exteriorWoody from "@assets/image_1762858205538.png";

export const products: Product[] = [
  {
    id: "interior-woody-panel",
    name: "Interior Woody Panel",
    category: "Interior Panels",
    tagline: "Natural Wood Aesthetics with WPC Durability",
    description: "Premium WPC material panels that bring the warmth of natural wood to your interiors. These panels combine authentic wood grain textures with superior water resistance and durability.",
    images: [woodyPanel1],
    material: "WPC (Wood Plastic Composite)",
    height: "9.5 ft",
    width: "5 inch to 8 inch (varies by pattern)",
    finish: "Wood grain texture",
    features: [
      "100% Water Resistant",
      "Termite Proof",
      "Zero Maintenance",
      "Easy Installation",
      "Natural Wood Look",
      "UV Stable"
    ],
    useCases: [
      "Living Room Feature Walls",
      "Bedroom Accent Walls",
      "Restaurant Interiors",
      "Cafe Ambience",
      "Office Reception Areas"
    ],
    warranty: "15+ Years",
    isFeatured: true
  },
  {
    id: "interior-sheets",
    name: "Interior Sheets",
    category: "Interior Sheets",
    tagline: "Luxury Italian Marble at 80% Less Cost",
    description: "Experience authentic marble patterns with our premium interior sheets. These panels replicate the elegance of Italian marble with stunning veining and natural stone aesthetics.",
    images: [interiorSheet1, interiorSheet2, interiorSheet3],
    size: "8 ft x 4 ft",
    thickness: "3.2mm",
    finish: "High-gloss marble finish",
    features: [
      "Authentic Marble Patterns",
      "Fire Resistant",
      "Waterproof",
      "Lightweight",
      "Scratch Resistant",
      "Easy to Clean"
    ],
    useCases: [
      "Luxury Living Rooms",
      "Premium Bedrooms",
      "Hotel Lobbies",
      "Corporate Offices",
      "Showrooms"
    ],
    warranty: "15+ Years",
    isFeatured: true
  },
  {
    id: "pu-panel",
    name: "PU Stone Panel",
    category: "Premium Panels",
    tagline: "Real Stone-Like 3D Finish",
    description: "Innovative PU panels with authentic stone textures and dimensional depth. These panels provide a luxurious real stone appearance with the benefits of modern composite materials.",
    images: [puPanel1, puPanel2],
    size: "4 ft x 2 ft",
    finish: "3D textured stone finish",
    features: [
      "Real Stone Appearance",
      "3D Textured Surface",
      "Lightweight",
      "Impact Resistant",
      "Moisture Resistant",
      "Thermal Insulation"
    ],
    useCases: [
      "Feature Walls",
      "TV Unit Backgrounds",
      "Column Cladding",
      "Architectural Accents",
      "Commercial Interiors"
    ],
    warranty: "12+ Years",
    isFeatured: true
  },
  {
    id: "exterior-sheet",
    name: "Exterior Cladding Sheet",
    category: "Exterior Solutions",
    tagline: "Weather-Resistant Interlocking System",
    description: "Engineered for outdoor applications with advanced interlock technology. These sheets provide superior weather resistance and color stability for lasting exterior beauty.",
    images: [exteriorSheet],
    size: "6.5 ft x 1.25 ft",
    finish: "Weather-resistant finish",
    features: [
      "Fade-Proof Technology",
      "Interlock Installation",
      "UV Protected",
      "Rain Resistant",
      "Heat Resistant",
      "Low Maintenance"
    ],
    useCases: [
      "Building Facades",
      "Exterior Walls",
      "Balcony Cladding",
      "Boundary Walls",
      "Commercial Buildings"
    ],
    warranty: "15+ Years",
    isFeatured: false
  },
  {
    id: "exterior-woody-panel",
    name: "Exterior Woody Panel",
    category: "Exterior Solutions",
    tagline: "Outdoor-Grade WPC Excellence",
    description: "Specifically engineered for exterior applications with enhanced WPC material. Combines natural wood aesthetics with exceptional weather resistance for outdoor spaces.",
    images: [exteriorWoody],
    material: "WPC (Exterior Grade)",
    height: "9.5 ft",
    width: "7.6 inch",
    finish: "Natural wood texture",
    features: [
      "Exterior Grade WPC",
      "All-Weather Resistant",
      "Color Stability",
      "No Warping",
      "Termite & Rot Proof",
      "Eco-Friendly"
    ],
    useCases: [
      "Outdoor Decking",
      "Garden Walls",
      "Patio Cladding",
      "Pergolas",
      "Exterior Feature Walls"
    ],
    warranty: "15+ Years",
    isFeatured: false
  },
];

export const productCategories = [
  {
    id: "all",
    name: "All Products",
    count: products.length
  },
  {
    id: "interior-panels",
    name: "Interior Panels",
    count: products.filter(p => p.category === "Interior Panels").length
  },
  {
    id: "interior-sheets",
    name: "Interior Sheets",
    count: products.filter(p => p.category === "Interior Sheets").length
  },
  {
    id: "premium-panels",
    name: "Premium Panels",
    count: products.filter(p => p.category === "Premium Panels").length
  },
  {
    id: "exterior-solutions",
    name: "Exterior Solutions",
    count: products.filter(p => p.category === "Exterior Solutions").length
  },
];

export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === "all") return products;

  const categoryName = productCategories.find(c => c.id === categoryId)?.name;
  if (!categoryName) return [];

  return products.filter(p => p.category === categoryName);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.isFeatured);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
