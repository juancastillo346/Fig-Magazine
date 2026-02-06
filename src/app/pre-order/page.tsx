"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import FooterFeature from "@/components/FooterFeature";
import { navLinks } from "@/data/nav";
import { tiles } from "@/data/home";

export default function PreOrderPage() {
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
        <div className="relative h-[calc(100vh-200px)] w-full overflow-hidden rounded-md border border-white/10 bg-white/5 md:h-[calc(100vh-150px)]">
          <iframe
            src="https://form.typeform.com/to/NDdoEMNV"
            className="h-full w-full border-0"
            title="Pre-Order Form"
            allow="microphone; camera"
          />
        </div>
      </section>
      <FooterFeature tiles={tiles} />
    </main>
  );
}
