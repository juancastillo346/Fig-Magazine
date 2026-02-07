"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterFeature from "@/components/FooterFeature";
import { navLinks } from "@/data/nav";
import { tiles } from "@/data/home";

export default function IssuesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="bg-black text-white">
      <div className="relative z-50">
        <Navbar links={navLinks} />
      </div>
      <section className="relative min-h-screen w-full overflow-hidden pb-20">
        <Image
          src="/media/issues_placeholder_bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div
          className={`relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-8 pt-40 md:pt-32 text-center transition-opacity duration-1000 md:px-12 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="hidden text-sm font-bold uppercase tracking-[0.3em] text-white/90 md:block">
            Celebrate our Launch
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase tracking-[0.15em]">
            First Edition
          </h1>

          <div className="mt-10 w-full max-w-6xl overflow-hidden rounded-md border border-white/10 bg-white/5">
            <div className="relative aspect-[4/3] w-full">
              <iframe
                src="https://e.issuu.com/embed.html?d=fig_magazine_preview&u=figmagazine"
                title="Fig Magazine Preview"
                className="h-full w-full border-0"
                allowFullScreen
                scrolling="no"
              />
            </div>
          </div>

          <p className="mt-6 max-w-4xl text-base italic font-medium text-white md:text-lg leading-[1.9] md:leading-[2.1]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            "I saw my life branching out before me like the green fig tree in the story. From the tip of every branch, like a fat purple fig, a wonderful future beckoned and winked. One fig was a husband and a happy home and children, and another fig was a famous poet and another fig was a brilliant professor, and another fig was Ee Gee, the amazing editor, and another fig was Europe and Africa and South America, and another fig was Constantin and Socrates and Attila and a pack of other lovers with queer names and offbeat professions, and another fig was an Olympic lady crew champion, and beyond and above these figs were many more figs I couldn't quite make out. I saw myself sitting in the crotch of this fig tree, starving to death, just because I couldn't make up my mind which of the figs I would choose. I wanted each and every one of them, but choosing one meant losing all the rest, and, as I sat there, unable to decide, the figs began to wrinkle and go black, and, one by one, they plopped to the ground at my feet."
          </p>
          <p className="mt-4 max-w-4xl text-sm font-medium text-white md:text-base" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            — The Bell Jar, Sylvia Plath
          </p>
        </div>
      </section>
      <FooterFeature tiles={tiles} />
    </main>
  );
}
