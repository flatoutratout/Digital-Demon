"use client";

import { motion } from "framer-motion";
import { useCallback, useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    contact: "",
    message: "",
  });

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Digital Demon Enquiry${formData.business ? ` - ${formData.business}` : ""}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name || "-"}\n` +
        `Business: ${formData.business || "-"}\n` +
        `Email or phone: ${formData.contact || "-"}\n\n` +
        `What they need:\n${formData.message || "-"}`
    );

    window.location.href = `mailto:cryptocarscomputers@gmail.com?subject=${subject}&body=${body}`;
  };

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
      subtitle:
        "A sharp starter site for businesses that need a proper online presence quickly.",
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
      subtitle:
        "The best all-round option for businesses that want to look stronger and convert more enquiries.",
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
      subtitle:
        "For bigger ambitions, more custom features, and a more tailored build.",
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
    {
      situation: "My business has no website",
      solution: "Starter website",
    },
    {
      situation: "My website looks outdated",
      solution: "Website rebuild",
    },
    {
      situation: "My till or EPOS is a nightmare",
      solution: "EPOS support",
    },
    {
      situation: "My social media looks amateur",
      solution: "Brand media pack",
    },
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
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute left-[8%] top-24 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[10%] top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="inline-block">
                <div className="text-[1.65rem] font-black uppercase tracking-[0.06em] leading-none text-white sm:text-[1.85rem]">
                  Digital Demon
                </div>
                <div className="relative mt-2 h-[4px] w-full">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-90 blur-[2px]" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
                </div>
              </div>
              <div className="mt-3 text-sm text-slate-400">
                Websites • EPOS Support • Brand Media
              </div>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="rounded-xl bg-white px-4 py-2 font-semibold text-slate-900 shadow-sm transition hover:scale-[1.02]"
            >
              Start Project
            </button>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-28 pt-12 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-200 backdrop-blur">
              <BadgeCheck className="h-4 w-4" />
              Premium digital work for businesses that want to stand out
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Clean enough to feel premium.
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Bold enough to actually wow.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Websites, EPOS help, and brand media for businesses that just want
              things sorted properly and presented professionally.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("pricing")}
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-[0_10px_40px_rgba(125,211,252,0.25)] transition hover:scale-[1.02]"
              >
                Get a Quick Quote <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="rounded-xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Explore Services
              </button>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-300">
              Most projects start from a simple conversation. Built for local
              businesses across the UK.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[
                "Websites from £399",
                "Fast turnaround",
                "Built for real businesses",
                "No agency nonsense",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur"
                >
                  ✓ {item}
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Modern clean design", icon: Sparkles },
                { label: "Fast turnaround", icon: Zap },
                { label: "Simple communication", icon: ShieldCheck },
                { label: "Business-first thinking", icon: Wrench },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-slate-200 backdrop-blur"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-950 shadow-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                    {item.label}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.5)] backdrop-blur">
              <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-500">Signature Offer</p>
                      <h3 className="text-2xl font-black">
                        Business Launch Pack
                      </h3>
                    </div>
                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                      Popular
                    </span>
                  </div>

                  <p className="mt-4 text-slate-600">
                    A strong all-round package for businesses that want a premium
                    digital presence without agency bloat.
                  </p>

                  <ul className="mt-6 space-y-3 text-sm">
                    {[
                      "5 page website",
                      "Mobile optimisation",
                      "Enquiry-focused layout",
                      "3 branded promo graphics",
                      "Basic SEO setup",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium text-slate-700"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-white">
                          <BadgeCheck className="h-4 w-4" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-6 text-white shadow-[0_20px_50px_rgba(14,165,233,0.3)]">
                    <p className="text-sm text-white/80">Launch price</p>
                    <p className="mt-2 text-4xl font-black">£399</p>
                    <p className="mt-3 text-sm leading-6 text-white/85">
                      Ideal for small businesses that need a clean, credible
                      website without jumping straight into a bigger custom
                      build.
                    </p>
                    <button
                      type="button"
                      onClick={() => scrollToSection("pricing")}
                      className="mt-4 flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-slate-900 transition hover:scale-[1.02]"
                    >
                      Starter Package <ArrowRight size={14} />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                      <Zap className="mb-3 h-5 w-5 text-cyan-300" />
                      <p className="text-xl font-black text-white">
                        Fast impact
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Design that instantly feels premium and trustworthy.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                      <ShieldCheck className="mb-3 h-5 w-5 text-cyan-300" />
                      <p className="text-xl font-black text-white">Built right</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Clean structure, stronger messaging, and real
                        credibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-blue-600">
            Services
          </p>
          <h2 className="mt-2 text-4xl font-black">
            Everything needed to get businesses online and looking sharp.
          </h2>
          <p className="mt-4 text-slate-600">
            Whether somebody needs a better website, practical business tech
            help, or more polished marketing assets, Digital Demon gives them
            one place to sort it properly.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                {...fadeUp}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="rounded-lg bg-slate-950 p-2 text-white" size={32} />
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {service.price}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black">{service.title}</h3>
                <p className="mt-2 text-slate-600">{service.description}</p>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <BadgeCheck size={14} className="mt-0.5 text-blue-600" />{" "}
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-blue-600">
              Who I help
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Built for real businesses, not just pretty mockups.
            </h2>
            <p className="mt-3 text-slate-600">
              A strong fit for businesses that need a sharper online presence,
              practical support, and cleaner branding without dealing with
              bloated agencies.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <motion.div
                key={industry}
                {...fadeUp}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-semibold text-slate-800 shadow-sm"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK GUIDE */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-blue-600">
              Quick guide
            </p>
            <h2 className="mt-2 text-4xl font-black text-slate-950">
              Not sure what you need? Start here.
            </h2>
            <p className="mt-4 text-slate-600">
              A simple way for referrals and new visitors to work out the best
              fit without any guesswork.
            </p>
          </motion.div>

          <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-100 px-6 py-4 text-sm font-bold uppercase tracking-wide text-slate-600">
              <div>Situation</div>
              <div>Best fit</div>
            </div>
            {quickGuide.map((item) => (
              <div
                key={item.situation}
                className="grid grid-cols-2 border-b border-slate-200 px-6 py-5 text-sm last:border-b-0 md:text-base"
              >
                <div className="pr-4 font-medium text-slate-800">
                  {item.situation}
                </div>
                <div className="font-semibold text-blue-700">
                  {item.solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-blue-600">
              Pricing
            </p>
            <h2 className="mt-2 text-4xl font-black">
              Clear packages. No fluff. No mystery pricing.
            </h2>
            <p className="mt-4 text-slate-600">
              Strong starting points for businesses that want a proper online
              presence without getting dragged into overpriced agency nonsense.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                {...fadeUp}
                className={`rounded-3xl border p-7 ${
                  pkg.featured
                    ? "border-blue-200 bg-blue-50 shadow-[0_20px_60px_rgba(59,130,246,0.12)]"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-black">{pkg.name}</h3>
                  {pkg.featured && (
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
                      Best Value
                    </span>
                  )}
                </div>
                <p className="mt-4 text-4xl font-black">{pkg.price}</p>
                <p className="mt-3 text-slate-600">{pkg.subtitle}</p>
                <div className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white">
                        <BadgeCheck className="h-4 w-4" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT PLANS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-blue-600">
            Ongoing support
          </p>
          <h2 className="mt-2 text-4xl font-black">
            The long-term value is in keeping things running smoothly.
          </h2>
          <p className="mt-4 text-slate-600">
            Ideal for businesses that want ongoing help instead of starting from
            scratch every time something needs updating.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {supportPlans.map((plan) => (
            <motion.div
              key={plan.name}
              {...fadeUp}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black">{plan.name}</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                  {plan.price}
                </span>
              </div>
              <p className="mt-4 text-slate-600">{plan.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-blue-600">
            How it works
          </p>
          <h2 className="mt-2 text-4xl font-black">
            Simple process. Clear communication. Proper result.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {process.map((step, index) => (
            <motion.div
              key={step.title}
              {...fadeUp}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white">
                {index + 1}
              </div>
              <h3 className="text-2xl font-black">{step.title}</h3>
              <p className="mt-3 text-slate-600">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY DIGITAL DEMON */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase text-blue-300">
              Why Digital Demon
            </p>
            <h2 className="mt-2 text-4xl font-black">
              Businesses do not need more confusion. They need someone who can
              just sort it.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Digital Demon is built around one simple idea: make businesses
              look better, feel more credible, and remove the stress from the
              digital side of things.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <motion.div
                key={reason}
                {...fadeUp}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-medium text-slate-100 backdrop-blur"
              >
                {reason}
              </motion.div>
            ))}
          </div>
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
              Send a quick enquiry and I’ll come back with the best option for
              your business, your goals, and your budget.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm backdrop-blur"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Send className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-slate-950">Project Enquiry</div>
                <div className="text-sm text-slate-500">
                  Tell me what you need and I’ll sort the rest.
                </div>
              </div>
            </div>

            <form onSubmit={handleEnquirySubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                  placeholder="Name"
                />
                <input
                  name="business"
                  value={formData.business}
                  onChange={handleInputChange}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                  placeholder="Business"
                />
              </div>
              <input
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                placeholder="Email or phone"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                rows={4}
                placeholder="Tell me what you need"
              />
              <button
                type="submit"
                className="flex justify-center gap-2 rounded-xl bg-slate-950 py-3 font-semibold text-white shadow-sm transition hover:scale-[1.01]"
              >
                Send Enquiry <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            {...fadeUp}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                  Ready when you are
                </p>
                <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                  If your business needs to look better online, let’s sort it
                  properly.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  Whether you need a website, support with business tech, or
                  sharper branded media, Digital Demon can help you get it done
                  cleanly, quickly, and professionally.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="space-y-3 text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-4 w-4 text-cyan-300" />
                    Clear pricing and practical advice
                  </div>
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-4 w-4 text-cyan-300" />
                    Built for real businesses and real customers
                  </div>
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-4 w-4 text-cyan-300" />
                    One place for websites, tech support, and branding
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 shadow-sm transition hover:scale-[1.02]"
                >
                  Start Your Project <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500">
        Digital Demon — Websites, EPOS support & brand media
      </footer>
    </div>
  );
}
