"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Send } from "lucide-react";

export default function Page() {

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-black">Digital Demon</h1>
          <p className="mt-4 text-slate-300">
            Websites • EPOS Support • Brand Media
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">

        <motion.div {...fadeUp}>
          <p className="text-sm font-semibold uppercase text-blue-600">Let’s build something strong</p>
          <h2 className="mt-2 text-4xl font-black">
            Need a website, support, or media pack?
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl">
            Send a quick enquiry and I'll reply with the best option for your business.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-50">

          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <Send className="h-5 w-5" />
            </div>
            <div>
              <div className="font-bold text-slate-950">Project Enquiry</div>
              <div className="text-sm text-slate-500">Messages will be emailed directly to you.</div>
            </div>
          </div>

          <!-- REPLACE EMAIL BELOW -->
          <form action="https://formsubmit.co/cryptocarscomputers@gmail.com" method="POST" className="grid gap-4">

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" className="rounded-xl border border-slate-200 bg-white px-4 py-3" placeholder="Name" required />
              <input name="business" className="rounded-xl border border-slate-200 bg-white px-4 py-3" placeholder="Business" />
            </div>

            <input name="contact" className="rounded-xl border border-slate-200 bg-white px-4 py-3" placeholder="Email or phone" required />

            <textarea name="message" className="rounded-xl border border-slate-200 bg-white px-4 py-3" rows={4} placeholder="Tell me what you need"></textarea>

            <button className="flex justify-center gap-2 rounded-xl bg-slate-950 py-3 font-semibold text-white shadow-sm">
              Send Enquiry <ArrowRight size={16} />
            </button>

          </form>

        </motion.div>

      </section>

      <footer className="py-10 text-center text-sm text-slate-500">
        Digital Demon — Websites, EPOS support & brand media
      </footer>

    </div>
  );
}
