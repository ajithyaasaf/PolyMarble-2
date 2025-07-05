import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Twitter, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    <section id="contact" className="py-20 bg-rich-black relative overflow-hidden">
      {/* Elegant marble background texture */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Elegant marble background texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold mb-6 reveal-up">Start Your <span className="text-metallic-gold text-shimmer">Project</span></h3>
          <p className="text-xl text-gray-400 reveal-fade">
            Ready to transform your space? Let's discuss how our 3D marble innovations can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glassmorphism rounded-2xl p-8 reveal-left glow-animation">
            <form onSubmit={handleSubmit} className="space-y-6 stagger-group">
              <div className="grid md:grid-cols-2 gap-6 stagger-group">
                <div className="space-y-2 stagger-item">
                  <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2 stagger-item">
                  <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Smith"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2 stagger-item">
                <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300"
                />
              </div>

              <div className="space-y-2 stagger-item">
                <Label htmlFor="projectType" className="text-gray-300">Project Type</Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300">
                    <SelectValue placeholder="Select Project Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="hospitality">Hospitality</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 stagger-item">
                <Label htmlFor="message" className="text-gray-300">Project Details</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your vision..."
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-metallic-gold focus:ring-metallic-gold/50 resize-none transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-metallic-gold text-rich-black font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 duration-300 glow-animation stagger-item"
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
                  <div className="w-12 h-12 bg-deep-jade/30 rounded-lg flex items-center justify-center glow-animation">
                    <MapPin className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Global Headquarters</div>
                    <div className="text-gray-400">Milano, Italy</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 stagger-item">
                  <div className="w-12 h-12 bg-deep-jade/30 rounded-lg flex items-center justify-center glow-animation">
                    <Phone className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <div className="text-white font-medium">+39 02 1234 5678</div>
                    <div className="text-gray-400">Mon-Fri 9AM-6PM CET</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 stagger-item">
                  <div className="w-12 h-12 bg-deep-jade/30 rounded-lg flex items-center justify-center glow-animation">
                    <Mail className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <div className="text-white font-medium">hello@polymarbles3d.com</div>
                    <div className="text-gray-400">We'll respond within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h5 className="text-lg font-medium text-white mb-4">Follow Our Journey</h5>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-deep-jade/30 rounded-lg flex items-center justify-center hover:bg-deep-jade/50 transition-colors">
                  <Twitter className="w-6 h-6 text-metallic-gold" />
                </a>
                <a href="#" className="w-12 h-12 bg-deep-jade/30 rounded-lg flex items-center justify-center hover:bg-deep-jade/50 transition-colors">
                  <Instagram className="w-6 h-6 text-metallic-gold" />
                </a>
                <a href="#" className="w-12 h-12 bg-deep-jade/30 rounded-lg flex items-center justify-center hover:bg-deep-jade/50 transition-colors">
                  <Linkedin className="w-6 h-6 text-metallic-gold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
