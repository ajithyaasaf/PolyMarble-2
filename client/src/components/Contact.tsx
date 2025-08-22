import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Twitter, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroBackground from "@assets/generated_images/Hero_background_premium_interior_4cbb0855.png";

export default function Contact() {
  useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll respond within 24 hours.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      projectType: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-warm-cream relative overflow-hidden">
      {/* Elegant marble background texture */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={heroBackground}
          alt="Premium polymarble interior showcase"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold mb-6 reveal-up">Start Your <span className="text-metallic-gold text-shimmer">Project</span></h3>
          <p className="text-xl text-cool-grey reveal-fade">
            Ready to transform your space? Let's discuss how our premium polymarble sheets can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glassmorphism rounded-2xl p-8 reveal-left">
            <form onSubmit={handleSubmit} className="space-y-6 stagger-group">
              <div className="grid md:grid-cols-2 gap-6 stagger-group">
                <div className="space-y-2 stagger-item">
                  <Label htmlFor="firstName" className="text-cool-grey">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    className="bg-pure-white border-light-silver text-deep-charcoal placeholder:text-cool-grey focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2 stagger-item">
                  <Label htmlFor="lastName" className="text-cool-grey">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Smith"
                    className="bg-pure-white border-light-silver text-deep-charcoal placeholder:text-cool-grey focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2 stagger-item">
                <Label htmlFor="email" className="text-cool-grey">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@example.com"
                  className="bg-pure-white border-light-silver text-deep-charcoal placeholder:text-cool-grey focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300"
                />
              </div>

              <div className="space-y-2 stagger-item">
                <Label htmlFor="projectType" className="text-cool-grey">Project Type</Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                  <SelectTrigger className="bg-pure-white border-light-silver text-deep-charcoal focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300">
                    <SelectValue placeholder="Select Project Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential (Kitchen/Bathroom)</SelectItem>
                    <SelectItem value="commercial">Commercial Office</SelectItem>
                    <SelectItem value="hospitality">Restaurant/Hotel</SelectItem>
                    <SelectItem value="retail">Retail Store</SelectItem>
                    <SelectItem value="dealership">Dealership Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 stagger-item">
                <Label htmlFor="message" className="text-cool-grey">Project Details</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your vision..."
                  rows={4}
                  className="bg-pure-white border-light-silver text-deep-charcoal placeholder:text-cool-grey focus:border-metallic-gold focus:ring-metallic-gold/50 resize-none transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-metallic-gold text-pure-white font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 duration-300 stagger-item"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 reveal-right">
            <div>
              <h4 className="text-2xl font-bold text-metallic-gold mb-6 text-shimmer">Get in Touch</h4>
              <div className="space-y-4 stagger-group">
                <div className="flex items-center gap-4 stagger-item">
                  <div className="w-12 h-12 bg-metallic-gold/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <div className="text-deep-charcoal font-medium">Corporate Office</div>
                    <div className="text-cool-grey">No:46, Sivagangai Main Road, Melamadai, Gomathipuram, Madurai - 625020</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 stagger-item">
                  <div className="w-12 h-12 bg-metallic-gold/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <div className="text-deep-charcoal font-medium">+91 98421 06768</div>
                    <div className="text-cool-grey">WhatsApp: +91 98421 26565</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 stagger-item">
                  <div className="w-12 h-12 bg-metallic-gold/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <div className="text-deep-charcoal font-medium">polymarblesheet@gmail.com</div>
                    <div className="text-cool-grey">Chennai Office: Dr. Kannan Tower, Arcot Road, Porur - 116</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-light-silver/30">
              <h5 className="text-lg font-medium text-deep-charcoal mb-4">Follow Our Journey</h5>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@polymarblesheet3386" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-metallic-gold/20 rounded-lg flex items-center justify-center hover:bg-metallic-gold/30 transition-colors">
                  <svg className="w-6 h-6 text-metallic-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/polymarblesheet_india" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-metallic-gold/20 rounded-lg flex items-center justify-center hover:bg-metallic-gold/30 transition-colors">
                  <svg className="w-6 h-6 text-metallic-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/share/19aJmaJ7Nc/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-metallic-gold/20 rounded-lg flex items-center justify-center hover:bg-metallic-gold/30 transition-colors">
                  <svg className="w-6 h-6 text-metallic-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
