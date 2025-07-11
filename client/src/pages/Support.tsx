import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickQuote from "@/components/QuickQuote";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Download, Users, Building, Scissors, Wrench, Droplets, Lock } from "lucide-react";

export default function Support() {
  useScrollReveal();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const diyVideos = [
    {
      id: 1,
      title: "How to Cut Polymarble Sheets",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Learn professional cutting techniques using basic tools",
      videoSrc: "https://videos.pexels.com/video-files/8068779/8068779-hd_1920_1080_30fps.mp4"
    },
    {
      id: 2,
      title: "Installing Polymarble: Step by Step",
      duration: "6:20",
      thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Complete installation guide from preparation to finishing",
      videoSrc: "https://videos.pexels.com/video-files/8419207/8419207-hd_1920_1080_30fps.mp4"
    },
    {
      id: 3,
      title: "Fixing Common Installation Issues",
      duration: "4:15",
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Troubleshoot and fix alignment, adhesion, and joint issues",
      videoSrc: "https://videos.pexels.com/video-files/8068779/8068779-hd_1920_1080_30fps.mp4"
    },
    {
      id: 4,
      title: "Cleaning and Maintenance",
      duration: "2:30",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Best practices for long-term care and maintenance",
      videoSrc: "https://videos.pexels.com/video-files/8419207/8419207-hd_1920_1080_30fps.mp4"
    },
    {
      id: 5,
      title: "Advanced Pattern Matching",
      duration: "5:10",
      thumbnail: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Create seamless large-area installations",
      videoSrc: "https://videos.pexels.com/video-files/8068779/8068779-hd_1920_1080_30fps.mp4"
    }
  ];

  const builderResources = [
    {
      title: "CAD/BIM Downloads",
      description: "3D models, specifications, and technical drawings",
      icon: <Building className="w-6 h-6" />,
      items: ["AutoCAD Blocks", "Revit Families", "SketchUp Models", "Technical Specs"]
    },
    {
      title: "Bulk Pricing Calculator",
      description: "Instant quotes for large projects (500+ sq.ft.)",
      icon: <Users className="w-6 h-6" />,
      items: ["Volume Discounts", "Project Timelines", "Delivery Schedules", "Payment Terms"]
    },
    {
      title: "Technical Support",
      description: "Direct access to our engineering team",
      icon: <Wrench className="w-6 h-6" />,
      items: ["Structural Analysis", "Load Calculations", "Installation Guidance", "Quality Assurance"]
    }
  ];

  const faqs = [
    {
      question: "What's the minimum order quantity for bulk pricing?",
      answer: "Bulk pricing starts at 500 sq.ft. Contact our builder portal for custom quotes."
    },
    {
      question: "Do you provide installation training for contractors?",
      answer: "Yes, we offer certified training programs in Chennai, Madurai, and Coimbatore."
    },
    {
      question: "What are the structural requirements for polymarble installation?",
      answer: "Our sheets require minimal structural support. Download detailed specs from the portal."
    },
    {
      question: "Can polymarble be used in exterior applications?",
      answer: "Yes, our weather-resistant series is specifically designed for exterior use in tropical climates."
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-rich-black text-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-rich-black to-dark-forest">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 reveal-up">
                Support & <span className="text-metallic-gold text-shimmer">Community</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto reveal-fade">
                Everything you need to succeed with polymarble installation. From DIY guides to professional resources.
              </p>
            </div>
          </div>
        </section>

        {/* DIY Hub */}
        <section className="py-20 bg-dark-forest">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 reveal-up">
                DIY <span className="text-metallic-gold text-shimmer">Hub</span>
              </h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto reveal-fade">
                Master polymarble installation with our comprehensive video tutorials.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {diyVideos.map((video, index) => (
                <Card key={video.id} className="bg-rich-black/50 backdrop-blur-sm border-metallic-gold/20 reveal-up group">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" className="bg-metallic-gold text-rich-black hover:bg-yellow-400">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Now
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 left-2">
                      {index < 2 && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-bold text-white mb-2 flex items-center">
                      {video.id === 1 && <Scissors className="w-4 h-4 mr-2 text-metallic-gold" />}
                      {video.id === 2 && <Wrench className="w-4 h-4 mr-2 text-metallic-gold" />}
                      {video.id === 3 && <Wrench className="w-4 h-4 mr-2 text-metallic-gold" />}
                      {video.id === 4 && <Droplets className="w-4 h-4 mr-2 text-metallic-gold" />}
                      {video.id === 5 && <Building className="w-4 h-4 mr-2 text-metallic-gold" />}
                      {video.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{video.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Architect & Builder Portal */}
        <section className="py-20 bg-rich-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 reveal-up">
                Architect & Builder <span className="text-metallic-gold text-shimmer">Portal</span>
              </h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto reveal-fade">
                Professional resources, bulk pricing, and technical support for industry professionals.
              </p>
            </div>

            <Tabs defaultValue="resources" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-dark-forest">
                <TabsTrigger value="resources" className="data-[state=active]:bg-metallic-gold data-[state=active]:text-rich-black">
                  Resources
                </TabsTrigger>
                <TabsTrigger value="login" className="data-[state=active]:bg-metallic-gold data-[state=active]:text-rich-black">
                  Portal Access
                </TabsTrigger>
                <TabsTrigger value="faqs" className="data-[state=active]:bg-metallic-gold data-[state=active]:text-rich-black">
                  Technical FAQs
                </TabsTrigger>
              </TabsList>

              <TabsContent value="resources" className="mt-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {builderResources.map((resource, index) => (
                    <Card key={index} className="bg-dark-forest/50 backdrop-blur-sm border-metallic-gold/20">
                      <CardHeader>
                        <div className="w-12 h-12 bg-metallic-gold/20 rounded-full flex items-center justify-center mb-4">
                          <div className="text-metallic-gold">{resource.icon}</div>
                        </div>
                        <CardTitle className="text-metallic-gold">{resource.title}</CardTitle>
                        <CardDescription className="text-gray-400">{resource.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {resource.items.map((item, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-center">
                              <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full mr-3"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full mt-4 bg-metallic-gold text-rich-black hover:bg-yellow-400">
                          <Download className="w-4 h-4 mr-2" />
                          Access Resources
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="login" className="mt-8">
                <div className="max-w-md mx-auto">
                  {!isLoggedIn ? (
                    <Card className="bg-dark-forest/50 backdrop-blur-sm border-metallic-gold/20">
                      <CardHeader>
                        <CardTitle className="text-metallic-gold flex items-center">
                          <Lock className="w-5 h-5 mr-2" />
                          Professional Access
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          Login to access bulk pricing, technical resources, and CAD downloads.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                          <div>
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@company.com"
                              value={loginForm.email}
                              onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                              className="bg-slate-800 border-slate-600 text-white mt-1"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="password" className="text-white">Password</Label>
                            <Input
                              id="password"
                              type="password"
                              placeholder="••••••••"
                              value={loginForm.password}
                              onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                              className="bg-slate-800 border-slate-600 text-white mt-1"
                              required
                            />
                          </div>
                          <Button type="submit" className="w-full bg-metallic-gold text-rich-black hover:bg-yellow-400">
                            Login to Portal
                          </Button>
                        </form>
                        <div className="mt-4 text-center">
                          <a href="#" className="text-metallic-gold text-sm hover:underline">
                            Request Professional Access
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="bg-dark-forest/50 backdrop-blur-sm border-metallic-gold/20">
                      <CardHeader>
                        <CardTitle className="text-green-400">Welcome to the Professional Portal</CardTitle>
                        <CardDescription className="text-gray-400">
                          Access to exclusive resources and bulk pricing is now available.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Button className="w-full bg-metallic-gold text-rich-black hover:bg-yellow-400">
                          <Download className="w-4 h-4 mr-2" />
                          Download CAD Files
                        </Button>
                        <Button className="w-full bg-metallic-gold text-rich-black hover:bg-yellow-400">
                          <Users className="w-4 h-4 mr-2" />
                          Get Bulk Pricing
                        </Button>
                        <Button variant="outline" className="w-full border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-rich-black">
                          <Building className="w-4 h-4 mr-2" />
                          Technical Support
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="faqs" className="mt-8">
                <div className="max-w-4xl mx-auto space-y-6">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="bg-dark-forest/50 backdrop-blur-sm border-metallic-gold/20">
                      <CardContent className="pt-6">
                        <h4 className="font-bold text-metallic-gold mb-3">{faq.question}</h4>
                        <p className="text-gray-300">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
      <QuickQuote />
    </div>
  );
}