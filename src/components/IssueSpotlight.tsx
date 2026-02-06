"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type IssueSpotlightProps = {
  eyebrow: string;
  title: string;
  coverImage: string;
  buttonLabel: string;
  buttonHref: string;
  backgroundImage: string;
};

export default function IssueSpotlight({
  eyebrow,
  title,
  coverImage,
  buttonLabel,
  buttonHref,
  backgroundImage,
}: IssueSpotlightProps) {
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
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-[80vh] w-full overflow-hidden py-16 transition-all duration-1000 md:min-h-[90vh] md:py-24 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 text-center md:min-h-[90vh]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/90">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase tracking-[0.15em] text-white">
          {title}
        </h2>
        <div className="mt-8">
          <Image
            src={coverImage}
            alt={`${title} cover`}
            width={280}
            height={380}
            className="h-auto w-[210px] shadow-2xl md:w-[260px]"
          />
        </div>
        <Link
          href={buttonHref}
          className="mt-6 rounded-full border border-white/70 bg-black px-10 py-3 text-sm uppercase tracking-[0.3em] text-white transition hover:bg-black/80"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
