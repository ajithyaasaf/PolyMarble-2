import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickQuote from "@/components/QuickQuote";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building2,
  FileUp,
  MessageSquare,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export default function Contact() {
  useScrollReveal();

  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    subject: "",
    projectType: "",
    budget: "",
    message: "",
    file: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState<string | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Please enter your phone";
    if (!form.message.trim())
      e.message = "Please tell us a bit about your project";
    return e;
    // Optional: you could enforce subject/projectType/budget if needed
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setSuccess(null);
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setSubmitting(true);

      // Example: POST to your API route (adjust as needed)
      // const body = new FormData();
      // Object.entries(form).forEach(([k, val]) => {
      //   if (k === "file" && val) body.append(k, val as File);
      //   else if (typeof val === "string") body.append(k, val);
      // });
      // await fetch("/api/contact", { method: "POST", body });

      // Demo success feedback:
      setSuccess(
        "Thanks! We’ve received your request and will get back shortly.",
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        city: "",
        subject: "",
        projectType: "",
        budget: "",
        message: "",
        file: null,
      });
    } catch (err) {
      setSuccess("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-pure-white text-deep-charcoal">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-brand-teal/10 via-warm-cream/30 to-brand-peach/10" />
          <div className="container mx-auto px-6 py-20 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="reveal-up">
                <h1 className="text-4xl md:text-5xl font-extrabold text-deep-charcoal">
                  Let’s talk about your{" "}
                  <span className="text-brand-teal">project</span>
                </h1>
                <p className="mt-4 text-cool-grey text-lg max-w-2xl">
                  Get a tailored quote or expert guidance for your polymarble
                  installation. We typically respond within{" "}
                  <span className="font-semibold text-deep-charcoal">
                    1 business hour
                  </span>
                  .
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+919842106768"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-teal text-pure-white font-medium hover:shadow-lg transition-all hover-lift"
                  >
                    <Phone className="w-4 h-4" />
                    Call +91 98421 06768
                  </a>
                  <a
                    href="mailto:hello@polymarbles.in"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-warm-cream text-deep-charcoal font-medium hover:bg-brand-teal/10 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                </div>
              </div>

              {/* Quick Info Card */}
              <Card className="bg-pure-white/80 backdrop-blur-sm border-light-silver/60 reveal-fade">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Reach us through any of the channels below.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-warm-cream flex items-center justify-center">
                      <Phone className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+919842106768"
                        className="text-brand-teal hover:underline"
                      >
                        +91 98421 06768
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-warm-cream flex items-center justify-center">
                      <Mail className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:hello@polymarbles.in"
                        className="text-brand-teal hover:underline"
                      >
                        hello@polymarbles.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-warm-cream flex items-center justify-center">
                      <Clock className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-cool-grey">
                        Mon–Sat: 9:30 AM – 7:00 PM
                      </p>
                      <p className="text-cool-grey">Sun: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-warm-cream flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <p className="font-semibold">Address (HQ)</p>
                      <p className="text-cool-grey">
                        Polymarbles Pvt. Ltd.
                        <br />
                        Chennai, India
                      </p>
                      <a
                        href="https://maps.google.com/?q=Chennai%20India"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-brand-teal hover:underline mt-1"
                      >
                        Get Directions <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="text-cool-grey hover:text-brand-teal"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="text-cool-grey hover:text-brand-teal"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      aria-label="YouTube"
                      className="text-cool-grey hover:text-brand-teal"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form + Sidebar */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <Card className="lg:col-span-2 border-light-silver/60">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Share your requirements and we’ll craft a tailored quote.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Jane Doe"
                          value={form.name}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, name: e.target.value }))
                          }
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, email: e.target.value }))
                          }
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          placeholder="+91 98XXXXXXXX"
                          value={form.phone}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, phone: e.target.value }))
                          }
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          id="company"
                          placeholder="Your company"
                          value={form.company}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, company: e.target.value }))
                          }
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          placeholder="Chennai"
                          value={form.city}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, city: e.target.value }))
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="Quotation / Site visit / Partnership"
                          value={form.subject}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, subject: e.target.value }))
                          }
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="md:col-span-1">
                        <Label htmlFor="projectType">Project Type</Label>
                        <select
                          id="projectType"
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={form.projectType}
                          onChange={(e) =>
                            setForm((f) => ({
                              ...f,
                              projectType: e.target.value,
                            }))
                          }
                        >
                          <option value="">Select</option>
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Hospitality">Hospitality</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="md:col-span-1">
                        <Label htmlFor="budget">Approx. Budget</Label>
                        <select
                          id="budget"
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={form.budget}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, budget: e.target.value }))
                          }
                        >
                          <option value="">Select</option>
                          <option value="<2L">{`< ₹2 Lakhs`}</option>
                          <option value="2-5L">₹2–5 Lakhs</option>
                          <option value="5-10L">₹5–10 Lakhs</option>
                          <option value="10L+">{`> ₹10 Lakhs`}</option>
                        </select>
                      </div>
                      <div className="md:col-span-1">
                        <Label htmlFor="file">Attachment (Optional)</Label>
                        <div className="flex items-center gap-3">
                          <label
                            htmlFor="file"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-light-silver/60 cursor-pointer hover:bg-warm-cream transition"
                          >
                            <FileUp className="w-4 h-4" />
                            <span>Upload</span>
                          </label>
                          <input
                            id="file"
                            type="file"
                            className="hidden"
                            onChange={(e) =>
                              setForm((f) => ({
                                ...f,
                                file: e.target.files?.[0] ?? null,
                              }))
                            }
                          />
                          <span className="text-xs text-cool-grey truncate max-w-[180px]">
                            {form.file
                              ? form.file.name
                              : "PDF/JPG/PNG up to 10MB"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your space, dimensions, timeline, and any design preferences…"
                        rows={6}
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-xs text-cool-grey">
                        By submitting, you agree to our{" "}
                        <a
                          href="/privacy"
                          className="text-brand-teal underline"
                        >
                          Privacy Policy
                        </a>
                        .
                      </p>
                      <Button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center gap-2 bg-brand-teal text-pure-white hover:shadow-lg"
                      >
                        <Send className="w-4 h-4" />
                        {submitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>

                    {success && (
                      <div className="mt-4 text-sm text-brand-teal">
                        {success}
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>

              {/* Sidebar: Why contact us */}
              <div className="space-y-6">
                <Card className="border-light-silver/60">
                  <CardHeader>
                    <CardTitle>Why choose Polymarbles?</CardTitle>
                    <CardDescription>
                      Fast quotes. Expert guidance. Proven installations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-2">
                        <span className="mt-1">
                          <MessageSquare className="w-4 h-4 text-brand-teal" />
                        </span>
                        <span>
                          <span className="font-medium">
                            Consultative approach
                          </span>{" "}
                          for the right material selection and finish.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1">
                          <Building2 className="w-4 h-4 text-brand-teal" />
                        </span>
                        <span>
                          <span className="font-medium">
                            Residential & Commercial
                          </span>{" "}
                          expertise across South India.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1">
                          <Clock className="w-4 h-4 text-brand-teal" />
                        </span>
                        <span>
                          <span className="font-medium">Quick turnaround</span>{" "}
                          on quotes and deliveries.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-light-silver/60">
                  <CardHeader>
                    <CardTitle>Need an instant quote?</CardTitle>
                    <CardDescription>
                      Prefer something lighter? Use our quick quote widget.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="#quick-quote"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-warm-cream hover:bg-brand-teal/10 transition"
                    >
                      Go to Quick Quote <ArrowRight className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-10 bg-warm-cream/40">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-light-silver/60">
                <CardHeader>
                  <CardTitle>Chennai (Head Office)</CardTitle>
                  <CardDescription>Primary support & dispatch</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-brand-teal" />
                    <p>Chennai, Tamil Nadu, India</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 mt-0.5 text-brand-teal" />
                    <a
                      href="tel:+919842106768"
                      className="text-brand-teal hover:underline"
                    >
                      +91 98421 06768
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="w-4 h-4 mt-0.5 text-brand-teal" />
                    <a
                      href="mailto:hello@polymarbles.in"
                      className="text-brand-teal hover:underline"
                    >
                      hello@polymarbles.in
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-light-silver/60">
                <CardHeader>
                  <CardTitle>Warehouse & Logistics</CardTitle>
                  <CardDescription>
                    Order processing & large consignments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-brand-teal" />
                    <p>Greater Chennai Region, Tamil Nadu, India</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 mt-0.5 text-brand-teal" />
                    <p>Mon–Sat: 9:30 AM – 7:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <Card className="overflow-hidden border-light-silver/60">
              <div className="aspect-video w-full">
                <iframe
                  title="Polymarbles Location"
                  src="https://www.google.com/maps?q=Chennai%20India&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </Card>
          </div>
        </section>

        {/* FAQs (lightweight) */}
        <section className="py-10 bg-light-silver/20">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">FAQs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-light-silver/60">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">
                    How soon will I get a quote?
                  </h4>
                  <p className="text-cool-grey">
                    Most quotes go out within 1 business hour during working
                    time.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-light-silver/60">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">
                    Do you offer site visits?
                  </h4>
                  <p className="text-cool-grey">
                    Yes—available in and around Chennai, and on request for
                    other cities.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-light-silver/60">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">
                    Do you install as well?
                  </h4>
                  <p className="text-cool-grey">
                    We work with vetted installation partners for turnkey
                    delivery.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-light-silver/60">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">
                    Can I get free samples?
                  </h4>
                  <p className="text-cool-grey">
                    Absolutely. Tell us your preferred finishes and we’ll
                    arrange samples.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Quote Anchor */}
        <div id="quick-quote" className="scroll-mt-24" />
        <QuickQuote />
      </main>

      <Footer />
    </div>
  );
}
