"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Globe,
  MonitorSmartphone,
  Palette,
  Wrench,
  Sparkles,
  ShieldCheck,
  Zap,
  Send,
} from "lucide-react";

export default function DigitalServicesAgencySite() {
  const services = [
    {
      title: "Website Design & Builds",
      price: "From £399",
      icon: Globe,
      description:
        "Fresh, modern websites for local businesses that want to look credible, load fast, and turn visitors into real enquiries.",
      bullets: [
        "Clean brochure sites",
        "Landing pages that convert",
        "Mobile-first layouts",
        "Launch-ready setup",
      ],
    },
    {
      title: "EPOS & Business Tech Support",
      price: "From £50/hr",
      icon: MonitorSmartphone,
      description:
        "Practical support for shops and service businesses dealing with tills, stock systems, printers, product setup, and day-to-day tech issues.",
      bullets: [
        "EPOS troubleshooting",
        "Product & barcode setup",
        "Printer and terminal issues",
        "Ongoing support options",
      ],
    },
    {
      title: "Brand Media Packs",
      price: "From £149",
      icon: Palette,
      description:
        "Sharp-looking visuals for social media, in-store promotions, ads, and launches so your business looks polished everywhere customers find you.",
      bullets: [
        "Promo graphics",
        "Ad creatives",
        "Social media assets",
        "Brand polish",
      ],
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "£399",
      subtitle: "A sharp starter site for businesses that need a proper online presence quickly.",
      features: [
        "1-3 page website",
        "Mobile responsive design",
        "Contact form setup",
        "Basic SEO foundations",
        "Launch support",
      ],
    },
    {
      name: "Business",
      price: "£799",
      subtitle: "The best all-round option for businesses that want to look stronger and convert more enquiries.",
      features: [
        "Up to 8 pages",
        "Custom section layouts",
        "Sales-focused structure",
        "Performance optimisation",
        "Google-ready setup",
      ],
      featured: true,
    },
    {
      name: "Premium",
      price: "£1499+",
      subtitle: "For bigger ambitions, more custom features, and a more tailored build.",
      features: [
        "Custom functionality",
        "Bookings or ecommerce",
        "Advanced integrations",
        "Scalable structure",
        "Priority support",
      ],
    },
  ];

  const process = [
    {
      title: "Tell me what you need",
      text: "A quick chat about your business, what is not working, and what you want the end result to do.",
    },
    {
      title: "I map out the best option",
      text: "You get a practical recommendation based on budget, goals, and what will actually move the needle.",
    },
    {
      title: "Build, refine, launch",
      text: "Your website, support setup, or media pack gets built properly, cleaned up, and made ready to use.",
    },
  ];

  const reasons = [
    "Premium look without bloated agency nonsense",
    "Great fit for local businesses and independents",
    "Practical help, not confusing tech waffle",
    "Flexible one-off jobs or ongoing support",
  ];

  const industries = [
    "Trades",
    "Retail",
    "Vape Shops",
    "Salons",
    "Barbers",
    "Hospitality",
    "Local Services",
    "Independent Brands",
  ];

  const quickGuide = [
    { situation: "My business has no website", solution: "Starter website" },
    { situation: "My website looks outdated", solution: "Website rebuild" },
    { situation: "My till or EPOS is a nightmare", solution: "EPOS support" },
    { situation: "My social media looks amateur", solution: "Brand media pack" },
  ];

  const supportPlans = [
    {
      name: "Website Care",
      price: "£29/mo",
      text: "Hosting guidance, small updates, and ongoing website upkeep.",
    },
    {
      name: "EPOS Support",
      price: "£39/mo",
      text: "Help with product updates, troubleshooting, and day-to-day tech issues.",
    },
    {
      name: "Priority Support",
      price: "£59/mo",
      text: "Faster help for businesses that want a more hands-on ongoing option.",
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">

        <div className="relative mx-auto max-w-7xl px-6 py-10">
          <div className="flex items-center justify-between gap-4">

            <div>
              <div className="text-2xl font-black uppercase tracking-wide">
                Digital Demon
              </div>
              <div className="mt-2 text-sm text-slate-400">
                Websites • EPOS Support • Brand Media
              </div>
            </div>

            <a
              href="#contact"
              className="rounded-xl bg-white px-4 py-2 font-semibold text-slate-900 shadow-sm"
            >
              Start Project
            </a>

          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-28 pt-12 lg:grid-cols-2">

          <motion.div {...fadeUp}>

            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Clean enough to feel premium.
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Bold enough to actually wow.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Websites, EPOS help, and brand media for businesses that just want things sorted properly.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900"
              >
                Get a Quick Quote <ArrowRight size={16} />
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white/20 px-6 py-3 font-medium text-white"
              >
                Explore Services
              </a>

            </div>

          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                {...fadeUp}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <Icon size={32} />
                <h3 className="mt-4 text-xl font-black">{service.title}</h3>
                <p className="mt-2 text-slate-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">

          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-black">
              Need a website, support, or media pack?
            </h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Send a quick enquiry and I'll come back with the best option.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm"
          >

            <form
              action="mailto:hello@digitaldemon.co.uk"
              method="post"
              encType="text/plain"
              className="grid gap-4"
            >

              <input
                name="name"
                className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                placeholder="Name"
              />

              <input
                name="contact"
                className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                placeholder="Email or phone"
              />

              <textarea
                name="message"
                className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                rows={4}
                placeholder="Tell me what you need"
              />

              <button className="flex justify-center gap-2 rounded-xl bg-slate-950 py-3 font-semibold text-white">
                Send Enquiry <ArrowRight size={16} />
              </button>

            </form>

          </motion.div>

        </div>

      </section>

      <footer className="py-10 text-center text-sm text-slate-500">
        Digital Demon — Websites, EPOS support & brand media
      </footer>

    </div>
  );
}
