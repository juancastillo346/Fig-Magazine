"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterFeature from "@/components/FooterFeature";
import { navLinks } from "@/data/nav";
import { tiles } from "@/data/home";

export default function VideosPage() {
  const [isVisible, setIsVisible] = useState(false);
  const team = [
    {
      name: "Name",
      role: "Role",
      image: "/media/logo2.png",
      instagram: "https://www.instagram.com/",
    },
    {
      name: "Name",
      role: "Role",
      image: "/media/logo2.png",
      instagram: "https://www.instagram.com/",
    },
    {
      name: "Name",
      role: "Role",
      image: "/media/logo2.png",
      instagram: "https://www.instagram.com/",
    },
    {
      name: "Name",
      role: "Role",
      image: "/media/logo2.png",
      instagram: "https://www.instagram.com/",
    },
    {
      name: "Name",
      role: "Role",
      image: "/media/logo2.png",
      instagram: "https://www.instagram.com/",
    },
    {
      name: "Name",
      role: "Role",
      image: "/media/logo2.png",
      instagram: "https://www.instagram.com/",
    },
    {
      name: "Name",
      role: "Role",
      image: "/media/logo2.png",
      instagram: "https://www.instagram.com/",
    },
    {
      name: "Name",
      role: "Role",
      image: "/media/logo2.png",
      instagram: "https://www.instagram.com/",
    },
  ];

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="bg-black text-white">
      <div className="relative z-50">
        <Navbar links={navLinks} />
      </div>
      <section className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="/media/issues_placeholder_bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div
          className={`relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-8 pt-32 text-center transition-opacity duration-1000 md:px-12 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/80">
            Featured Video
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase tracking-[0.15em]">
            Visuals
          </h1>

          <div className="mt-10 w-full max-w-3xl overflow-hidden rounded-md border border-white/10 bg-white/5">
            <div className="relative aspect-[16/9] w-full">
              <video
                className="h-full w-full object-cover"
                controls
                playsInline
                poster="/media/issues_placeholder.png"
              >
                <source src="/media/fig_hero2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm text-white/70 md:text-base">
            Replace this with a short description of the featured video.
          </p>
        </div>
      </section>
      <section
        className={`flex min-h-screen w-full flex-col px-20 py-20 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase tracking-[0.15em]">
          Team behind Visuals
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person, index) => (
            <a
              key={`${person.name}-${index}`}
              href={person.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-md border border-white/10 bg-white/5">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/70">
                {person.name}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                {person.role}
              </div>
            </a>
          ))}
        </div>
      </section>
      <FooterFeature tiles={tiles} />
    </main>
  );
}
