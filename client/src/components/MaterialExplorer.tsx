import { useState } from "react";
import { Lightbulb, Sun, Moon, Sparkles, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import highGlossImage from "@assets/generated_images/High-gloss_polymarble_sheets_b1da0e5d.png";
import woodyPanelImage from "@assets/generated_images/Woody_panel_polymarble_sheets_479b86f5.png";
import solidColorImage from "@assets/generated_images/Solid_color_polymarble_sheets_f47ccc7d.png";
import texturedImage from "@assets/generated_images/Textured_polymarble_surface_detail_e034d7bf.png";
import mirrorImage from "@assets/generated_images/Mirror_finish_polymarble_sheets_1e70ee77.png";

export default function MaterialExplorer() {
  const [selectedMaterial, setSelectedMaterial] = useState(0);
  const [lightingMode, setLightingMode] = useState("natural");
  const [rotationAngle, setRotationAngle] = useState(0);

  const materials = [
    { name: "High-Gloss Premium", image: highGlossImage },
    { name: "Woody Panels", image: woodyPanelImage },
    { name: "Solid Color", image: solidColorImage },
    { name: "Textured", image: texturedImage },
    { name: "Mirror Sheets", image: mirrorImage },
  ];

  const lightingPresets = [
    { id: "natural", name: "Natural Light", icon: <Sun className="w-4 h-4" />, filter: "brightness(1.1) contrast(1.05)" },
    { id: "warm", name: "Warm Glow", icon: <Lightbulb className="w-4 h-4" />, filter: "brightness(1.2) sepia(0.15) saturate(1.1)" },
    { id: "cool", name: "Cool Light", icon: <Moon className="w-4 h-4" />, filter: "brightness(0.95) hue-rotate(200deg) saturate(1.2)" },
    { id: "ambient", name: "Ambient", icon: <Sparkles className="w-4 h-4" />, filter: "brightness(1.15) saturate(1.3) contrast(1.1)" },
  ];

  const rotate = () => {
    setRotationAngle((prev) => (prev + 15) % 360);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-pure-white to-light-silver/30"></div>
      
      {/* Floating Decorative Shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-brand-peach/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-4xl lg:text-5xl font-bold mb-4 reveal-up">
            Interactive <span className="text-brand-teal text-shimmer">Material Explorer</span>
          </h3>
          <p className="text-xl text-cool-grey max-w-3xl mx-auto reveal-fade">
            Experience our polymarble sheets under different lighting conditions. Rotate and explore the textures.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Material Display */}
            <div className="relative">
              <div className="relative aspect-square bg-gradient-to-br from-light-silver/20 to-warm-cream/30 rounded-3xl overflow-hidden border-4 border-brand-teal/20 shadow-2xl">
                {/* Material Image with Lighting Effects */}
                <div 
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    transform: `perspective(1200px) rotateY(${rotationAngle}deg) rotateX(${rotationAngle / 4}deg)`,
                    filter: lightingPresets.find(p => p.id === lightingMode)?.filter,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img
                    src={materials[selectedMaterial].image}
                    alt={materials[selectedMaterial].name}
                    className="w-full h-full object-cover"
                    data-testid={`img-material-${selectedMaterial}`}
                  />
                  
                  {/* Overlay Effects Based on Lighting */}
                  <div 
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{
                      background: lightingMode === 'warm' 
                        ? 'radial-gradient(circle at 30% 30%, rgba(255, 200, 100, 0.2), transparent 70%)' 
                        : lightingMode === 'cool' 
                        ? 'radial-gradient(circle at 70% 30%, rgba(100, 150, 255, 0.2), transparent 70%)'
                        : lightingMode === 'ambient'
                        ? 'radial-gradient(circle at 50% 50%, rgba(22, 120, 92, 0.15), transparent 70%)'
                        : 'transparent'
                    }}
                  />
                </div>

                {/* Rotate Button */}
                <button
                  onClick={rotate}
                  className="absolute bottom-6 right-6 p-4 bg-pure-white/90 backdrop-blur-sm text-brand-teal rounded-full hover:bg-brand-teal hover:text-pure-white transition-all duration-300 shadow-lg group"
                  data-testid="button-rotate-material"
                >
                  <RotateCw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                </button>
              </div>
            </div>

            {/* Controls Panel */}
            <div className="space-y-8">
              {/* Material Selection */}
              <div>
                <h4 className="text-2xl font-bold text-deep-charcoal mb-4">Select Material</h4>
                <div className="grid grid-cols-2 gap-3">
                  {materials.map((material, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMaterial(index)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedMaterial === index
                          ? 'border-brand-teal bg-brand-teal/10 shadow-lg scale-105'
                          : 'border-light-silver bg-pure-white hover:border-brand-teal/50'
                      }`}
                      data-testid={`button-select-material-${index}`}
                    >
                      <div className="aspect-square rounded-lg overflow-hidden mb-2">
                        <img
                          src={material.image}
                          alt={material.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className={`text-sm font-medium ${
                        selectedMaterial === index ? 'text-brand-teal' : 'text-cool-grey'
                      }`}>
                        {material.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Lighting Presets */}
              <div>
                <h4 className="text-2xl font-bold text-deep-charcoal mb-4">Lighting Conditions</h4>
                <div className="grid grid-cols-2 gap-3">
                  {lightingPresets.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => setLightingMode(preset.id)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                        lightingMode === preset.id
                          ? 'border-brand-teal bg-brand-teal text-pure-white shadow-lg'
                          : 'border-light-silver bg-pure-white text-deep-charcoal hover:border-brand-teal/50'
                      }`}
                      data-testid={`button-lighting-${preset.id}`}
                    >
                      {preset.icon}
                      <span className="font-medium">{preset.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Info Card */}
              <div className="p-6 bg-gradient-to-br from-brand-teal/10 to-brand-teal/5 rounded-xl border border-brand-teal/20">
                <h5 className="font-bold text-brand-teal mb-2">Pro Tip</h5>
                <p className="text-cool-grey text-sm leading-relaxed">
                  Click the rotate button to see how light reflects off the surface from different angles. 
                  Experiment with different lighting presets to match your space's ambiance.
                </p>
              </div>

              {/* CTA */}
              <Button 
                className="w-full bg-brand-teal text-pure-white hover:bg-brand-teal/90 font-bold py-6 text-lg"
                data-testid="button-get-sample"
              >
                Get Free Sample of This Finish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
