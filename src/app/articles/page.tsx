"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import FooterFeature from "@/components/FooterFeature";
import { navLinks } from "@/data/nav";
import { tiles } from "@/data/home";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
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
        className={`mx-auto w-full max-w-5xl px-4 pb-20 pt-24 transition-opacity duration-1000 sm:px-6 lg:px-8 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="grid gap-6">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            >
              <div className="flex items-center justify-between gap-6">
                <div>
                  <h2 className="text-lg font-semibold tracking-[0.08em]">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-white/70">
                    {article.description}
                  </p>
                </div>
                <span className="text-2xl text-white/60 transition group-hover:text-white">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <FooterFeature tiles={tiles} />
    </main>
  );
}
