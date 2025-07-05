import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import MarbleViewer from "./MarbleViewer";

export default function Gallery3D() {
  useScrollReveal();

  const [selectedTexture, setSelectedTexture] = useState<string | null>(null);

  const marbleTypes = [
    {
      id: "calacatta",
      name: "Calacatta Luxe",
      description: "Premium white marble with dramatic gold veining",
      tags: ["Interior", "Luxury"],
      color: 0xf5f5f5,
    },
    {
      id: "jade",
      name: "Jade Serpentine",
      description: "Deep green marble with flowing natural patterns",
      tags: ["Exterior", "Natural"],
      color: 0x4a7c59,
    },
    {
      id: "noir",
      name: "Noir Grandeur",
      description: "Dramatic black marble with silver highlights",
      tags: ["Modern", "Bold"],
      color: 0x2c2c2c,
    },
  ];

  const textures = [
    {
      id: "calacatta",
      src: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Calacatta marble texture detail",
    },
    {
      id: "verde",
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Verde marble texture with gold veining",
    },
    {
      id: "noir",
      src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Black marble with white veining texture",
    },
    {
      id: "carrara",
      src: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Classic Carrara marble texture",
    },
    {
      id: "onyx",
      src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Onyx marble with translucent veining",
    },
    {
      id: "travertine",
      src: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Travertine marble with natural texture",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-rich-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold mb-6 reveal-up">Interactive <span className="text-metallic-gold text-shimmer">3D Gallery</span></h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto reveal-fade">
            Explore our marble collections in stunning 3D. Click and drag to rotate, zoom to examine textures.
          </p>
        </div>

        {/* Marble Viewers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 stagger-group">
          {marbleTypes.map((marble, index) => (
            <div key={marble.id} className="glassmorphism rounded-2xl p-6 reveal-flip float-slow stagger-item perspective-tilt morph-border">
              <div className="mb-6 reveal-bounce velocity-scale">
                <MarbleViewer
                  color={marble.color}
                  selectedTexture={selectedTexture}
                  marbleType={marble.id}
                />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-metallic-gold mb-2 text-shimmer type-effect">{marble.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{marble.description}</p>
                <div className="flex justify-center gap-2 stagger-group">
                  {marble.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-deep-jade/30 text-deep-jade border border-deep-jade/50 rounded-full text-xs stagger-item hover:bg-deep-jade/50 transition-all duration-300 magnetic"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Texture Library */}
        <div className="reveal-up">
          <h4 className="text-2xl font-bold text-center mb-8 text-shimmer">Texture Library</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 stagger-group">
            {textures.map((texture) => (
              <div
                key={texture.id}
                className={`aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 reveal-scale stagger-item ${
                  selectedTexture === texture.id ? "ring-2 ring-metallic-gold" : ""
                }`}
                onClick={() => setSelectedTexture(texture.id)}
              >
                <img
                  src={texture.src}
                  alt={texture.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
