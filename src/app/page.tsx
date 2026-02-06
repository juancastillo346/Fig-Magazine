"use client";

import { useEffect, useRef, useState } from "react";
import FooterFeature from "@/components/FooterFeature";
import HeroMedia from "@/components/HeroMedia";
import IssueSpotlight from "@/components/IssueSpotlight";
import Navbar from "@/components/Navbar";
import { issueSpotlight, tiles } from "@/data/home";
import { navLinks } from "@/data/nav";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [issueKey, setIssueKey] = useState(0);
  const timersRef = useRef<number[]>([]);

  const startLoader = () => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];

    setIsLoading(true);
    setIsFading(false);
    setIssueKey((prev) => prev + 1);

    timersRef.current.push(
      window.setTimeout(() => setIsFading(true), 1600),
      window.setTimeout(() => setIsLoading(false), 2500)
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
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white animate-spin"
            style={{
              animationDuration: "1.2s",
              animationIterationCount: 1,
              animationTimingFunction: "linear",
              transformOrigin: "center center",
            }}
          >
            <span className="text-2xl font-black leading-none text-black">
              F
            </span>
          </div>
        </div>
      )}
      <Navbar links={navLinks} onLogoClick={startLoader} />
      <HeroMedia
        titleTop="FIG"
        titleBottom="MAGAZINE"
        subtitle="Fig Magazine is Columbia's student-run publication for art, culture, and lifestyle."
        subtitleEmphasis="Fig Magazine"
        videoSrc=""
      />
      <div id="issues">
        <IssueSpotlight key={issueKey} {...issueSpotlight} />
      </div>
      <FooterFeature tiles={tiles} />
    </main>
  );
}
