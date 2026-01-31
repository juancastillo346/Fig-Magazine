import Image from "next/image";

type Tile = {
  id: string;
  image: string;
  hasPlay: boolean;
};

type FooterFeatureProps = {
  tiles: Tile[];
};

export default function FooterFeature({ tiles }: FooterFeatureProps) {
  return (
    <section id="contact" className="w-full bg-black py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16 md:px-8">
        <div>
          <div className="mt-6 grid grid-cols-[140px_1fr] items-center gap-8">
            <a
              href="https://www.instagram.com/fig._magazine/"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center justify-self-center rounded-full border border-white/40"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17" cy="7" r="1" />
              </svg>
            </a>

            <div className="grid grid-cols-3 gap-3">
            {tiles.map((tile) => (
              <div
                key={tile.id}
                className="group relative aspect-square overflow-hidden rounded-sm border border-white/5"
              >
                <Image
                  src={tile.image}
                  alt=""
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                {tile.hasPlay && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-black/40">
                      <svg
                        viewBox="0 0 24 24"
                        className="ml-0.5 h-4 w-4 text-white"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:justify-center">
          <h3 className="text-xl uppercase tracking-[0.2em] text-white md:text-2xl">
            LET&apos;S KEEP IN TOUCH!
          </h3>
          <p className="text-sm text-white/70">
            Sign up with your email address to receive news and updates.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email Address"
              className="h-11 w-full rounded-full bg-white/90 px-4 text-sm text-black outline-none placeholder:text-black/50 sm:max-w-xs"
            />
            <button
              type="button"
              className="h-11 rounded-full border border-white/60 px-6 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
