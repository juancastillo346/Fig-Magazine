"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  links: NavLink[];
  onLogoClick?: () => void;
};

export default function Navbar({ links, onLogoClick }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = () => {
    if (pathname === "/") {
      // If already on home page, trigger animation
      onLogoClick?.();
    } else {
      // Navigate to home page (which will trigger animation automatically)
      router.push("/");
    }
  };

  return (
    <header className="absolute left-0 top-0 z-30 w-full">
      <nav className="relative flex flex-col w-full items-center px-6 py-6 text-[11px] font-black uppercase tracking-[0.28em] text-white/85 md:flex-row md:items-start md:px-12 md:py-10">
        {/* Mobile: Logo at top */}
        <div className="mb-4 md:hidden">
          <div className="flex h-12 w-12 items-center justify-center rounded-full">
            <button
              type="button"
              aria-label="Home"
              onClick={handleLogoClick}
              className="flex h-full w-full cursor-pointer items-center justify-center"
            >
              <img
                src="/media/png_logo.png"
                alt="Logo"
                className="h-full w-full rounded-full object-cover scale-150"
              />
            </button>
          </div>
        </div>

        {/* Navigation links */}
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-start">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition ${
                  isActive
                    ? "border-b border-[#F6E7A6] text-[#F6E7A6]"
                    : "border-b border-transparent hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop: Logo centered */}
        <div className="hidden md:absolute md:left-1/2 md:top-7 md:-translate-x-1/2 md:block">
          <div className="flex h-12 w-12 items-center justify-center rounded-full">
            <button
              type="button"
              aria-label="Home"
              onClick={handleLogoClick}
              className="flex h-full w-full cursor-pointer items-center justify-center"
            >
              <img
                src="/media/png_logo.png"
                alt="Logo"
                className="h-full w-full rounded-full object-cover scale-150"
              />
            </button>
          </div>
        </div>

      </nav>
    </header>
  );
}
