"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterFeature from "@/components/FooterFeature";
import { navLinks } from "@/data/nav";
import { tiles } from "@/data/home";
import { articles } from "@/data/articles";

export default function ArticlePage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;
  const [isVisible, setIsVisible] = useState(false);

  const article = articles.find((a) => a.id === slug);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!article) {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="relative z-50">
          <Navbar links={navLinks} />
        </div>
        <div className="flex min-h-screen items-center justify-center">
          <p>Article not found</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative z-50">
        <Navbar links={navLinks} />
      </div>

      <button
        onClick={() => router.back()}
        className="fixed left-6 top-1/2 z-40 -translate-y-1/2 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
      >
        <span className="text-xl">←</span>
        <span>Back</span>
      </button>

      <section
        className={`mx-auto w-full max-w-5xl px-4 pb-20 pt-24 transition-opacity duration-1000 sm:px-6 lg:px-8 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >

        <div className="mx-auto max-w-lg">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-white/10 bg-white/5">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase tracking-[0.1em]">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="mt-2 text-lg font-medium italic text-white md:text-xl" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              {article.subtitle}
            </p>
          )}
          <div className="mt-4 space-y-1 text-sm font-medium text-white/80" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            {article.writer && (
              <p>Writer: {article.writer}</p>
            )}
            {article.photographer && (
              <p>
                Photographer:{" "}
                {article.photographer === "Marina Lee" ? (
                  <a
                    href="https://marinaannlee.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline transition hover:text-white"
                  >
                    {article.photographer}
                  </a>
                ) : (
                  article.photographer
                )}
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 space-y-6 text-base font-medium leading-relaxed text-white/95 md:text-lg" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          {article.content ? (
            <>
              {article.content.split('\n\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index}>{paragraph.trim()}</p>
                )
              ))}
              {article.sources && article.sources.length > 0 && (
                <div className="mt-12 border-t border-white/20 pt-8">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-white/70">
                    Sources
                  </h3>
                  <ul className="space-y-2 text-sm text-white/60">
                    {article.sources.map((source, index) => (
                      <li key={index}>
                        <a
                          href={source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline transition hover:text-white/80"
                        >
                          {source}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <>
              <p>
                {article.description}
              </p>
              <p>
                This is where the article content would go. Replace this with your actual article text, images, and formatting.
              </p>
              <p>
                You can add more paragraphs, images, and other content elements here to match your article design.
              </p>
            </>
          )}
        </div>
      </section>

      <FooterFeature tiles={tiles} />
    </main>
  );
}
