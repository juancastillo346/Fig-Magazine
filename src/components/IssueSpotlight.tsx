import Image from "next/image";

type IssueSpotlightProps = {
  eyebrow: string;
  title: string;
  coverImage: string;
  buttonLabel: string;
  backgroundImage: string;
};

export default function IssueSpotlight({
  eyebrow,
  title,
  coverImage,
  buttonLabel,
  backgroundImage,
}: IssueSpotlightProps) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden py-16 md:min-h-[90vh] md:py-24">
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 text-center md:min-h-[90vh]">
        <p className="text-sm uppercase tracking-[0.3em] text-white/80">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(3rem,8vw,6rem)] leading-[0.9] text-white">
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
        <button
          type="button"
          className="mt-6 rounded-full border border-white/70 px-10 py-3 text-sm uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
        >
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}
