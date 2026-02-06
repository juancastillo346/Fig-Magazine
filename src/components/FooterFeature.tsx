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
      className={`w-full bg-black py-12 transition-all duration-1000 md:py-5 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto flex w-full max-w-5xl justify-center px-4 md:px-4">
        <div className="w-full">
          <div className="mt-6 grid w-full grid-cols-1 justify-items-center gap-6">
            {/*
            <a
              href="https://www.instagram.com/fig._magazine/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40"
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
            */}
            <div className="grid w-full max-w-md grid-cols-3 gap-6 sm:max-w-lg md:max-w-xl">
              {tiles.map((tile) => (
                <div
                  key={tile.id}
                  className="group relative aspect-square overflow-hidden rounded-sm border border-white/5"
                >
                  <Image
                    src={tile.image}
                    alt=""
                    fill
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

        {/*
        <div className="flex flex-col gap-5 md:justify-center">
          <h3 className="text-2xl uppercase tracking-[0.2em] text-white md:text-3xl">
            LET&apos;S KEEP IN TOUCH!
          </h3>
          <p className="text-base text-white/70">
            Sign up with your email address to receive news.
          </p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Email Address"
              className="h-12 w-full rounded-full bg-white/90 px-5 text-base text-black outline-none placeholder:text-black/50 sm:max-w-sm"
            />
            <button
              type="button"
              className="h-12 rounded-full border border-white/60 px-8 text-sm uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
            >
              SIGN UP
            </button>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
