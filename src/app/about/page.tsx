"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { navLinks } from "@/data/nav";

export default function AboutPage() {
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
      <section className="mx-auto flex min-h-screen max-w-8xl flex-col gap-16 px-6 pt-15 md:px-12 lg:flex-row lg:items-center">
        <div
          className={`flex-1 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="whitespace-nowrap text-[clamp(3rem,8vw,6rem)] font-black uppercase tracking-[0.15em]">
            About Fig
          </h1>
          <div className="mt-6 space-y-4 text-sm text-white/70 md:text-base">
            <p>
              Fig Magazine is a student-led fashion, culture, and lifestyle
              publication. Replace this with your real about copy.
            </p>
            <p>
              Share your mission, the voices you amplify, and what makes this
              issue cycle unique. Keep it concise and editorial.
            </p>
            <p>
              Add any highlights, team info, or brief history here to match the
              tone of your brand.

              Fig Magazine is a student-led fashion, culture, and lifestyle
              publication. Replace this with your real about copy.
              Fig Magazine is a student-led fashion, culture, and lifestyle
              publication. Replace this with your real about copy.Fig Magazine is a student-led fashion, culture, and lifestyle
              publication. Replace this with your real about copy.
              Fig Magazine is a student-led fashion, culture, and lifestyle
              publication. Replace this with your real about copy.
              Fig Magazine is a student-led fashion, culture, and lifestyle
              publication. Replace this with your real about copy.
            </p>
          </div>
        </div>

        <div
          className={`flex-1 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/media/logo.png"
              alt="About Fig logo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      {/*
      <section className="mx-auto flex min-h-screen max-w-8xl flex-col px-6 py-20 md:px-12">
        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase tracking-[0.15em]">
          Meet The Team
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={`team-${index}`} className="flex flex-col gap-3">
              <div className="aspect-square w-full max-w-[240px] rounded-md bg-white/10" />
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/70">
                Name, Role
              </div>
            </div>
          ))}
        </div>
      </section>
      */}
    </main>
  );
}
