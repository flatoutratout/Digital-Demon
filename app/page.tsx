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
              <div className="text-[1.65rem] font-black uppercase tracking-[0.06em] leading-none text-white sm:text-[1.85rem]">
                Digital Demon
              </div>
              <div className="mt-3 text-sm text-slate-400">
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
              Websites, EPOS help, and brand media for businesses that just want things sorted properly and presented professionally.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-[0_10px_40px_rgba(125,211,252,0.25)]"
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
                <Icon className="rounded-lg bg-slate-950 p-2 text-white" size={32} />

                <h3 className="mt-4 text-xl font-black">{service.title}</h3>
                <p className="mt-2 text-slate-600">{service.description}</p>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <BadgeCheck size={14} className="mt-0.5 text-blue-600" /> {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">

          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase text-blue-600">
              Let’s build something strong
            </p>
            <h2 className="mt-2 text-4xl font-black">
              Need a website, support, or media pack?
            </h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Send a quick enquiry and I’ll come back with the best option.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm backdrop-blur"
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

              <button className="flex justify-center gap-2 rounded-xl bg-slate-950 py-3 font-semibold text-white shadow-sm">
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
