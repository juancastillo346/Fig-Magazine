"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Tile = {
  id: string;
  image: string;
  hasPlay: boolean;
};

type FooterFeatureProps = {
  tiles: Tile[];
};

export default function FooterFeature({ tiles }: FooterFeatureProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`w-full bg-black py-16 transition-all duration-1000 md:py-24 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-20 md:px-8">
        <div>
          {/* Tiles grid */}
          <div className="mt-6 md:grid md:grid-cols-[0px_1fr] md:items-center md:gap-10">
            {/* Instagram icon - hidden on mobile, shown on desktop */}
            <a
              href="https://www.instagram.com/fig._magazine/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hidden h-14 w-14 items-center justify-center justify-self-start rounded-full border border-white/40 md:flex md:-ml-18"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17" cy="7" r="1" />
              </svg>
            </a>

            <div className="grid grid-cols-3 gap-6">
              {tiles.map((tile) => (
                <div
                  key={tile.id}
                  className="group relative aspect-square overflow-hidden rounded-sm border border-white/5"
                >
                  <Image
                    src={tile.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 33vw, 20vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  {tile.hasPlay && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-black/40">
                        <svg
                          viewBox="0 0 24 24"
                          className="ml-0.5 h-4 w-4 text-white"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:justify-center">
          <div className="flex items-center justify-between gap-4 md:block">
            <h3 className="text-2xl uppercase tracking-[0.2em] text-white md:text-3xl">
              LET&apos;S KEEP IN TOUCH!
            </h3>
            {/* Instagram icon - shown on mobile, hidden on desktop */}
            <a
              href="https://www.instagram.com/fig._magazine/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/40 md:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17" cy="7" r="1" />
              </svg>
            </a>
          </div>
          <p className="text-base text-white/70">
            Mailing list coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
