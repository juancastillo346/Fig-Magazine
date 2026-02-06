"use client";

import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "@/components/Navbar";
import FooterFeature from "@/components/FooterFeature";
import { navLinks } from "@/data/nav";
import { tiles } from "@/data/home";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [state, handleSubmit] = useForm("xojnarle");
  const hasErrors = state.errors != null;

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

        <form
          className="mt-10 w-full max-w-3xl space-y-6 text-left"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/70">
                First Name (required)
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="h-12 w-full rounded-full border border-white/40 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/50"
                placeholder="First Name"
              />
              <ValidationError
                prefix="First Name"
                field="firstName"
                errors={state.errors}
                className="text-xs text-red-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/70">
                Last Name (required)
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="h-12 w-full rounded-full border border-white/40 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/50"
                placeholder="Last Name"
              />
              <ValidationError
                prefix="Last Name"
                field="lastName"
                errors={state.errors}
                className="text-xs text-red-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-white/70">
              Email (required)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="h-12 w-full rounded-full border border-white/40 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/50"
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-xs text-red-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-white/70">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="h-12 w-full rounded-full border border-white/40 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/50"
              placeholder="Phone"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
              className="text-xs text-red-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-white/70">
              Message (required)
            </label>
            <textarea
              rows={5}
              id="message"
              name="message"
              required
              className="w-full rounded-3xl border border-white/40 bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-white/50"
              placeholder="Message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-xs text-red-300"
            />
          </div>

          <div className="flex flex-col items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={state.submitting}
              className="h-12 rounded-full border border-white/60 px-10 text-sm uppercase tracking-[0.3em] text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state.submitting ? "Sending..." : "Submit"}
            </button>
            {state.succeeded && (
              <p className="text-sm text-white/70">
                Thanks! Your message has been sent.
              </p>
            )}
            {hasErrors && !state.succeeded && (
              <p className="text-sm text-red-300">
                Submission failed. Make sure the Formspree form is activated.
              </p>
            )}
          </div>
        </form>
      </section>
      <FooterFeature tiles={tiles} />
    </main>
  );
}
