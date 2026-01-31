import Navbar from "@/components/Navbar";
import { navLinks } from "@/data/nav";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar links={navLinks} />
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-center px-8 pt-24 md:px-12">
        <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black uppercase tracking-[0.15em]">
          About Us
        </h1>
        <p className="mt-4 max-w-xl text-sm text-white/70">
          Placeholder for the About Us page content.
        </p>
      </section>
    </main>
  );
}
