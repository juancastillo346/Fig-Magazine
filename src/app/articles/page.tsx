"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      <div className="relative z-50">
        <Navbar links={navLinks} />
      </div>

      <section
        className={`mx-auto w-full max-w-7xl px-4 pb-20 pt-24 transition-opacity duration-1000 sm:px-6 lg:px-8 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-white/10 bg-white/5 transition group-hover:border-white/30">
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h2 className="mt-4 text-lg font-bold tracking-[0.08em] text-white transition group-hover:text-white/90">
                {article.title}
              </h2>
              {article.subtitle && (
                <p className="mt-1 text-sm font-medium italic text-white/95" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  {article.subtitle}
                </p>
              )}
              <div className="mt-2 space-y-1 text-sm font-medium text-white/80" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                {article.writer && (
                  <p>Writer: {article.writer}</p>
                )}
                {article.photographer && (
                  <p>
                    Photographer:{" "}
                    {article.photographer === "Marina Lee" ? (
                      <span
                        className="cursor-pointer underline transition hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open("https://marinaannlee.com", "_blank", "noopener,noreferrer");
                        }}
                      >
                        {article.photographer}
                      </span>
                    ) : (
                      article.photographer
                    )}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FooterFeature tiles={tiles} />
    </main>
  );
}
