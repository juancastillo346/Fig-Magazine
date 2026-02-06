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
      <div className="relative z-50">
        <Navbar links={navLinks} />
      </div>
      <section className="mx-auto flex min-h-screen max-w-8xl flex-col gap-16 px-4 pb-20 pt-40 md:px-12 md:pb-0 md:pt-15 lg:flex-row lg:items-center">
        <div
          className={`flex-1 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="whitespace-nowrap text-center text-[clamp(3rem,8vw,6rem)] font-black uppercase tracking-[0.15em] md:text-left">
            About Fig
          </h1>
          <div className="mt-6 space-y-4 text-sm font-medium text-white/95 md:text-base leading-relaxed" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            <p>
              In The Bell Jar, Sylvia Plath imagines life as a fig tree, its branches heavy with fruit—each fig a beautiful, distinct possible future.
            </p>
            <p>
              FIG Magazine is a student-founded Columbia University publication inspired by this image, exploring culture through clothing, a medium that carries our interior lives out into the world. At FIG, each spread is its own fruit, glowing with a world and waiting to be shared.
            </p>
            <p>
              We explore the diverse cultures of our campus, our city, and the world beyond, using fashion as a shared language that bridges cultural silos. For us, every story, culture, and identity is a fig: ready to be chosen.
            </p>
            <p className="mt-6 font-semibold text-white">
              So, take a bite.
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
