import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterFeature from "@/components/FooterFeature";
import { navLinks } from "@/data/nav";
import { tiles } from "@/data/home";

export default function IssuesPage() {
  return (
    <main className="bg-black text-white">
      <Navbar links={navLinks} />
      <section className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="/media/issues_placeholder_bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-8 pt-24 text-center md:px-12">
          <p className="text-xs uppercase tracking-[0.4em] text-white/80">
            Winter 2026
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase tracking-[0.15em]">
            Genesis
          </h1>

          <div className="mt-10 w-full max-w-3xl overflow-hidden rounded-md border border-white/10 bg-white/5">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/media/issues_placeholder.png"
                alt="Genesis issue preview"
                fill
                className="object-cover object-[50%_20%]"
              />
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm text-white/70 md:text-base">
            A short description of the Genesis issue goes here. Replace this
            text with your editorial summary and any callouts you want to
            highlight.
          </p>
        </div>
      </section>
      <FooterFeature tiles={tiles} />
    </main>
  );
}
