"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterFeature from "@/components/FooterFeature";
import { navLinks } from "@/data/nav";
import { tiles } from "@/data/home";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (hasActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hasActive]);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
    
    // Prevent vertical scrolling - only allow horizontal swipes
    if (touchStartX.current !== null && touchStartY.current !== null) {
      const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
      const deltaY = Math.abs(e.touches[0].clientY - touchStartY.current);
      
      // If horizontal movement is greater than vertical, prevent default (scrolling)
      if (deltaX > deltaY) {
        e.preventDefault();
      }
    }
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current || !touchStartY.current || !touchEndY.current) {
      touchStartX.current = null;
      touchEndX.current = null;
      touchStartY.current = null;
      touchEndY.current = null;
      return;
    }

    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = Math.abs(touchStartY.current - touchEndY.current);
    const minSwipeDistance = 50;

    // Only process horizontal swipes (ignore if vertical movement is significant)
    if (Math.abs(distanceX) > distanceY && Math.abs(distanceX) > minSwipeDistance) {
      if (distanceX > minSwipeDistance) {
        // Swipe left - next image
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % imageCount
        );
      } else if (distanceX < -minSwipeDistance) {
        // Swipe right - previous image
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev - 1 + imageCount) % imageCount
        );
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
    touchStartY.current = null;
    touchEndY.current = null;
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative z-50">
        <Navbar links={navLinks} />
      </div>

      <section
        className={`mx-auto w-full max-w-none px-4 pb-20 pt-32 md:pt-24 transition-opacity duration-1000 sm:px-6 lg:px-8 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mt-4 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
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
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => {
            // Close if clicking outside the image
            if (e.target === e.currentTarget) {
              setActiveIndex(null);
            }
          }}
        >
          <button
            type="button"
            aria-label="Close gallery view"
            className="absolute right-6 top-6 z-50 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
            onClick={() => setActiveIndex(null)}
          >
            Close
          </button>

          <button
            type="button"
            aria-label="Previous image"
            className="hidden absolute left-4 top-1/2 -translate-y-1/2 z-50 text-4xl text-white/70 transition hover:text-white md:block"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(
                (prev) =>
                  (prev === null ? 0 : prev - 1 + imageCount) % imageCount
              );
            }}
          >
            ←
          </button>

          <div 
            className="relative mx-6 h-[72vh] w-[88vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
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
            className="hidden absolute right-4 top-1/2 -translate-y-1/2 z-50 text-4xl text-white/70 transition hover:text-white md:block"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(
                (prev) => (prev === null ? 0 : (prev + 1) % imageCount)
              );
            }}
          >
            →
          </button>
        </div>
      )}

      <FooterFeature tiles={tiles} />
    </main>
  );
}
