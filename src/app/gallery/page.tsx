"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterFeature from "@/components/FooterFeature";
import { navLinks } from "@/data/nav";
import { tiles } from "@/data/home";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const hasActive = activeIndex !== null;
  const imageCount = galleryImages.length;

  const activeImage = useMemo(() => {
    if (activeIndex === null) {
      return null;
    }
    return galleryImages[(activeIndex + imageCount) % imageCount];
  }, [activeIndex, imageCount]);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasActive) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        return;
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev - 1 + imageCount) % imageCount
        );
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % imageCount
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasActive, imageCount]);

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
        className={`mx-auto w-full max-w-none px-4 pb-20 pt-24 transition-opacity duration-1000 sm:px-6 lg:px-8 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {galleryImages.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              className="group relative aspect-square w-full overflow-hidden border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_-35px_rgba(255,255,255,0.5)]"
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </section>

      {hasActive && activeImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90">
          <button
            type="button"
            aria-label="Close gallery view"
            className="absolute right-6 top-6 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
            onClick={() => setActiveIndex(null)}
          >
            Close
          </button>

          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-white/70 transition hover:text-white"
            onClick={() =>
              setActiveIndex(
                (prev) =>
                  (prev === null ? 0 : prev - 1 + imageCount) % imageCount
              )
            }
          >
            ←
          </button>

          <div className="relative mx-6 h-[72vh] w-[88vw] max-w-5xl">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <button
            type="button"
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-white/70 transition hover:text-white"
            onClick={() =>
              setActiveIndex(
                (prev) => (prev === null ? 0 : (prev + 1) % imageCount)
              )
            }
          >
            →
          </button>
        </div>
      )}

      <FooterFeature tiles={tiles} />
    </main>
  );
}
