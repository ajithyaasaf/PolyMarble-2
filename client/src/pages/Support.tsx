import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  CheckCircle,
  XCircle,
} from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  subject: string;
  projectType: string;
  budget: string;
  message: string;
  file: File | null;
};

const initialForm: FormState = {
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
};

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Contact() {
  useScrollReveal();

  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    if (success) {
      setToastOpen(true);
      const t = setTimeout(() => setToastOpen(false), 3500);
      return () => clearTimeout(t);
    }
  }, [success]);

  const validate = (): Record<string, string> => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Please enter your phone";
    if (!form.message.trim()) e.message = "Please tell us about your project";
    return e;
  };

  const handleSubmit = async (ev?: React.FormEvent) => {
    if (ev) ev.preventDefault();
    setSuccess(null);
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setSubmitting(true);

      // <-- Replace with your API call. Example below is commented.
      // const body = new FormData();
      // Object.entries(form).forEach(([k, val]) => {
      //   if (k === "file" && val) body.append(k, val);
      //   else body.append(k, (val as any) ?? "");
      // });
      // await fetch("/api/contact", { method: "POST", body });

      // Demo success
      setSuccess("Thanks! We’ve received your request and will get back shortly.");
      setForm(initialForm);
    } catch (err) {
      setSuccess("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Small inline validation helpers for real-time ticks
  const isValidEmail = (s: string) => /^\S+@\S+\.\S+$/.test(s);
  const showValidTick = (field: keyof FormState) => {
    if (field === "email") return form.email && isValidEmail(form.email);
    return !!(form[field] && (form[field] as string).toString().trim());
  };

  // Simple accessible accordion for FAQs
  const FAQS: { q: string; a: string }[] = [
    {
      q: "How soon will I get a quote?",
      a: "Most quotes go out within 1 business hour during working times. Complex projects may take slightly longer.",
    },
    {
      q: "Do you offer site visits?",
      a: "Yes—available in and around Chennai. For other cities we arrange visits on request.",
    },
    {
      q: "Do you install as well?",
      a: "We partner with vetted installation teams for turnkey delivery.",
    },
    {
      q: "Can I get free samples?",
      a: "Yes — tell us your preferred finishes and we’ll arrange samples.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-pure-white text-deep-charcoal">
      <Header />

      {/* Floating success toast */}
      {toastOpen && success && (
        <div className="fixed right-5 top-6 z-50">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            className="rounded-xl px-4 py-3 shadow-xl bg-gradient-to-r from-brand-teal to-brand-peach text-pure-white"
            role="status"
            aria-live="polite"
          >
            {success}
          </motion.div>
        </div>
      )}

      <main className="pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-brand-teal/8 via-warm-cream/20 to-brand-peach/6" />
          <div className="container mx-auto px-6 py-24 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                {...fadeUp}
                className="reveal-up max-w-2xl"
                initial="initial"
                animate="animate"
              >
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Let’s talk about your{" "}
                  <span className="text-brand-teal">project</span>
                </h1>
                <p className="mt-4 text-cool-grey text-lg">
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
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-teal text-pure-white font-medium hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                    aria-label="Call +91 98421 06768"
                  >
                    <Phone className="w-4 h-4" />
                    Call +91 98421 06768
                  </a>
                  <a
                    href="#form"
                    onClick={() => {
                      const el = document.getElementById("form");
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-warm-cream text-deep-charcoal font-medium hover:bg-brand-teal/10 transition-all"
                    aria-label="Open contact form"
                  >
                    <Send className="w-4 h-4" />
                    Send a Message
                  </a>
                </div>

                {/* Trust strip (compact) */}
                <div className="mt-8 flex items-center gap-6 text-sm text-cool-grey">
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal" />
                    <strong>300+</strong> projects completed
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-brand-teal" />
                    Pan-South India deliveries
                  </span>
                </div>
              </motion.div>

              {/* Floating Contact Info Card */}
              <motion.div
                {...fadeUp}
                className="reveal-fade"
                initial="initial"
                animate="animate"
              >
                <Card className="bg-white/80 backdrop-blur-xl border border-white/30 shadow-stronger rounded-2xl">
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
                        <p className="text-xs text-cool-grey mt-1">
                          Available Mon–Sat 9:30–19:00
                        </p>
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
                        <MapPin className="w-5 h-5 text-brand-teal" />
                      </div>
                      <div>
                        <p className="font-semibold">Address (HQ)</p>
                        <p className="text-cool-grey">Chennai, Tamil Nadu, India</p>
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* FORM + SIDEBAR */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* FORM */}
              <Card
                id="form"
                className="lg:col-span-2 border-light-silver/60"
                asChild={false}
              >
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Share your requirements and we’ll craft a tailored quote.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Personal Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Jane Doe"
                          value={form.name}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, name: e.target.value }))
                          }
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "err-name" : undefined}
                          className={`pr-10 ${errors.name ? "border-red-500" : ""}`}
                        />
                        {showValidTick("name") && !errors.name && (
                          <CheckCircle className="absolute right-3 top-9 w-5 h-5 text-brand-teal" />
                        )}
                        {errors.name && (
                          <p id="err-name" className="mt-1 text-xs text-red-600">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="relative">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, email: e.target.value }))
                          }
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "err-email" : undefined}
                          className={`pr-10 ${errors.email ? "border-red-500" : ""}`}
                        />
                        {showValidTick("email") && !errors.email ? (
                          <CheckCircle className="absolute right-3 top-9 w-5 h-5 text-brand-teal" />
                        ) : form.email && !isValidEmail(form.email) ? (
                          <XCircle className="absolute right-3 top-9 w-5 h-5 text-red-500" />
                        ) : null}
                        {errors.email && (
                          <p id="err-email" className="mt-1 text-xs text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          placeholder="+91 98XXXXXXXX"
                          value={form.phone}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, phone: e.target.value }))
                          }
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "err-phone" : undefined}
                          className={`pr-10 ${errors.phone ? "border-red-500" : ""}`}
                        />
                        {showValidTick("phone") && !errors.phone && (
                          <CheckCircle className="absolute right-3 top-9 w-5 h-5 text-brand-teal" />
                        )}
                        {errors.phone && (
                          <p id="err-phone" className="mt-1 text-xs text-red-600">
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
                            setForm((f) => ({ ...f, projectType: e.target.value }))
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
                            {form.file ? form.file.name : "PDF/JPG/PNG up to 10MB"}
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
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "err-message" : undefined}
                      />
                      {errors.message && (
                        <p id="err-message" className="mt-1 text-xs text-red-600">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* subtle reassurance */}
                    <div className="flex items-start gap-3 p-4 bg-warm-cream/40 rounded-xl text-sm">
                      <MessageSquare className="w-5 h-5 text-brand-teal mt-1" />
                      <p>
                        We’ll review details and follow up with a clear next step —
                        either a quote, site-visit proposal or materials sample.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-xs text-cool-grey">
                        By submitting, you agree to our{" "}
                        <a href="/privacy" className="text-brand-teal underline">
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
                  </form>
                </CardContent>
              </Card>

              {/* SIDEBAR */}
              <div className="space-y-6 lg:sticky lg:top-24">
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
                          <span className="font-medium">Consultative approach</span>{" "}
                          for the right material selection and finish.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1">
                          <Building2 className="w-4 h-4 text-brand-teal" />
                        </span>
                        <span>
                          <span className="font-medium">Residential & Commercial</span>{" "}
                          expertise across South India.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1">
                          <Clock className="w-4 h-4 text-brand-teal" />
                        </span>
                        <span>
                          <span className="font-medium">Quick turnaround</span> on
                          quotes and deliveries.
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

        {/* TRUSTED BY / Logos */}
        <section className="py-8 bg-gradient-to-r from-brand-teal/6 via-white to-brand-peach/6">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-cool-grey uppercase tracking-wide mb-4">
              Trusted by
            </p>
            <div className="flex flex-wrap justify-center gap-10 items-center">
              {/* Replace with real logos */}
              <div className="h-10 w-28 flex items-center justify-center opacity-80">
                <img src="/placeholders/logo-1.svg" alt="Client 1" className="h-8 object-contain" />
              </div>
              <div className="h-10 w-28 flex items-center justify-center opacity-80">
                <img src="/placeholders/logo-2.svg" alt="Client 2" className="h-8 object-contain" />
              </div>
              <div className="h-10 w-28 flex items-center justify-center opacity-80">
                <img src="/placeholders/logo-3.svg" alt="Client 3" className="h-8 object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Offices (map cards) */}
        <section className="py-10 bg-warm-cream/40">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-light-silver/60 hover:shadow-lg transition-transform transform hover:-translate-y-1">
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
                    <a href="tel:+919842106768" className="text-brand-teal hover:underline">
                      +91 98421 06768
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="w-4 h-4 mt-0.5 text-brand-teal" />
                    <a href="mailto:hello@polymarbles.in" className="text-brand-teal hover:underline">
                      hello@polymarbles.in
                    </a>
                  </div>
                </CardContent>
                <div className="h-44 border-t border-light-silver/40 overflow-hidden">
                  <iframe
                    title="Chennai map"
                    src="https://www.google.com/maps?q=Chennai%20India&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </Card>

              <Card className="border-light-silver/60 hover:shadow-lg transition-transform transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>Warehouse & Logistics</CardTitle>
                  <CardDescription>Order processing & large consignments</CardDescription>
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
                <div className="h-44 border-t border-light-silver/40 overflow-hidden">
                  {/* small map or image */}
                  <iframe
                    title="Warehouse map"
                    src="https://www.google.com/maps?q=Chennai%20India&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* MAP (full) */}
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

        {/* FAQ accordion */}
        <section className="py-10 bg-light-silver/20">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">FAQs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {FAQS.map((f, i) => (
                <Card key={i} className="border-light-silver/60">
                  <CardContent className="pt-6">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      className="w-full text-left flex items-center justify-between gap-4"
                    >
                      <h4 className="font-semibold mb-2">{f.q}</h4>
                      <span className="text-brand-teal">{openFaq === i ? "−" : "+"}</span>
                    </button>
                    {openFaq === i && <p className="text-cool-grey mt-3">{f.a}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div id="quick-quote" className="scroll-mt-24" />
        <QuickQuote />

        {/* Closing CTA */}
        <section className="py-16 text-center bg-brand-teal text-white rounded-t-3xl mt-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Let’s start something timeless.</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Whether it’s a signature commercial fit-out or a cozy residential finish — we’ll help
              you build it beautifully.
            </p>
            <a
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-teal font-semibold hover:shadow-lg transition"
              href="#form"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
