import Image from "next/image";

type HeroMediaProps = {
  titleTop: string;
  titleBottom: string;
  subtitle: string;
  subtitleEmphasis?: string;
  videoSrc: string; // Kept for backward compatibility but not used
};

export default function HeroMedia({
  titleTop,
  titleBottom,
  subtitle,
  subtitleEmphasis,
}: HeroMediaProps) {
  const emphasis = subtitleEmphasis ?? "";
  const emphasisIndex = emphasis ? subtitle.indexOf(emphasis) : -1;
  const beforeEmphasis =
    emphasisIndex >= 0 ? subtitle.slice(0, emphasisIndex) : subtitle;
  const afterEmphasis =
    emphasisIndex >= 0
      ? subtitle.slice(emphasisIndex + emphasis.length)
      : "";

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden md:min-h-screen">
      <Image
        src="/media/background_home.JPG"
        alt="Background"
        fill
        className="object-cover "
        style={{ objectPosition: "60% 55%" }}
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-8 md:px-10">
        <div className="w-full max-w-5xl text-left font-[var(--font-serif)] text-white">
          <h1 className="text-[clamp(4rem,16vw,13rem)] font-bold leading-[0.85] tracking-tight">
            <span className="block">{titleTop}</span>
            <span className="block">{titleBottom}</span>
          </h1>
        </div>
        <p className="absolute bottom-16 left-8 max-w-none whitespace-nowrap text-xs font-medium tracking-wide text-white md:bottom-33 md:left-12 md:text-sm" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          {beforeEmphasis}
          {emphasis && emphasisIndex >= 0 ? (
            <span className="font-bold">{emphasis}</span>
          ) : null}
          {afterEmphasis}
        </p>
      </div>
    </section>
  );
}
