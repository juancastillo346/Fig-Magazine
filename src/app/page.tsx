"use client";

import { useEffect, useRef, useState } from "react";
import FooterFeature from "@/components/FooterFeature";
import HeroMedia from "@/components/HeroMedia";
import IssueSpotlight from "@/components/IssueSpotlight";
import Navbar from "@/components/Navbar";
import { issueSpotlight, navLinks, tiles } from "@/data/home";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const timersRef = useRef<number[]>([]);

  const startLoader = () => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];

    setIsLoading(true);
    setIsFading(false);

    timersRef.current.push(
      window.setTimeout(() => setIsFading(true), 1200),
      window.setTimeout(() => setIsLoading(false), 1700)
    );
  };

  useEffect(() => {
    startLoader();
    return () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <main className="bg-black text-white">
      {isLoading && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full">
            <img
              src="/media/png_logo.png"
              alt="Logo"
              className="h-full w-full rounded-full object-cover animate-spin"
              style={{
                animationDuration: "1.2s",
                animationIterationCount: 1,
                animationTimingFunction: "linear",
                transformOrigin: "center",
              }}
            />
          </div>
        </div>
      )}
      <Navbar links={navLinks} onLogoClick={startLoader} />
      <HeroMedia
        titleTop="FIG"
        titleBottom="MAGAZINE"
        subtitle="Fig Magazine is the University of Columbia's art, culture, and lifestyle publication."
        subtitleEmphasis="Fig Magazine"
        videoSrc="/media/fig_hero2.mp4"
      />
      <div id="issues">
        <IssueSpotlight {...issueSpotlight} />
      </div>
      <FooterFeature tiles={tiles} />
    </main>
  );
}
