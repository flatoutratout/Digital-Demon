export default function Home() {
  const services = [
    {
      title: "Web Design",
      description:
        "Clean, modern websites built to look sharp, load fast, and convert visitors into enquiries.",
    },
    {
      title: "SEO",
      description:
        "On-page SEO foundations to help your business get found by the right people.",
    },
    {
      title: "Branding",
      description:
        "Strong visuals, messaging, and layout choices that make your business look credible.",
    },
    {
      title: "Maintenance",
      description:
        "Ongoing updates, tweaks, and support so your site stays current and working properly.",
    },
  ];

  const process = [
    "Discovery call to understand your business and goals",
    "Planning the structure, content, and design direction",
    "Build and refine the website around your brand",
    "Launch, test, and support after going live",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Digital Demon
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Websites that look sharp and work hard for your business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              From brochure sites to lead-generation pages, Digital Demon helps
              businesses build a stronger online presence with clean design,
              clear messaging, and fast performance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:opacity-90"
              >
                View Services
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white transition hover:bg-slate-900"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Why choose us
            </p>
            <ul className="mt-5 space-y-4 text-slate-200">
              <li>Fast, modern builds</li>
              <li>Clear business-focused messaging</li>
              <li>Mobile-friendly layouts</li>
              <li>Simple, clean user experience</li>
              <li>Built to generate enquiries</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            What Digital Demon can do for you
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Practical digital services focused on helping your business look
            better online and win more work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A straightforward way of working
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              No fluff. Just a clean process that gets your site planned,
              designed, built, and live.
            </p>
          </div>

          <div className="space-y-4">
            {process.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 font-semibold text-white">
                  {index + 1}
                </div>
                <p className="pt-1 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-slate-950 px-8 py-12 text-white md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Ready to upgrade your online presence?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Whether you need a fresh website, a redesign, or a cleaner digital
            presence, Digital Demon can help bring it together.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:hello@digitaldemon.co.uk"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:opacity-90"
            >
              hello@digitaldemon.co.uk
            </a>
            <a
              href="tel:+440000000000"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white transition hover:bg-slate-900"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
