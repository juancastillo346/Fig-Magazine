"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import FooterFeature from "@/components/FooterFeature";
import { navLinks } from "@/data/nav";
import { tiles } from "@/data/home";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <div
        className={`relative z-50 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar links={navLinks} />
      </div>
      <section
        className={`mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-8 pt-20 text-center transition-opacity duration-1000 md:px-12 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="mt-4 text-[clamp(2.5rem,7vw,5rem)] font-black uppercase tracking-[0.15em]">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/70 md:text-base">
          Got questions?
        </p>

        <form className="mt-10 w-full max-w-3xl space-y-6 text-left">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/70">
                First Name (required)
              </label>
              <input
                type="text"
                className="h-12 w-full rounded-full border border-white/40 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/50"
                placeholder="First Name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/70">
                Last Name (required)
              </label>
              <input
                type="text"
                className="h-12 w-full rounded-full border border-white/40 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/50"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-white/70">
              Email (required)
            </label>
            <input
              type="email"
              className="h-12 w-full rounded-full border border-white/40 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/50"
              placeholder="Email"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-white/70">
              Phone
            </label>
            <input
              type="tel"
              className="h-12 w-full rounded-full border border-white/40 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/50"
              placeholder="Phone"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-white/70">
              Message (required)
            </label>
            <textarea
              rows={5}
              className="w-full rounded-3xl border border-white/40 bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-white/50"
              placeholder="Message"
            />
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="button"
              className="h-12 rounded-full border border-white/60 px-10 text-sm uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <FooterFeature tiles={tiles} />
    </main>
  );
}
