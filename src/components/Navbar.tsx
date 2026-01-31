"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="absolute left-0 top-0 z-30 w-full">
      <nav className="relative flex w-full items-start px-6 py-10 text-[11px] font-black uppercase tracking-[0.28em] text-white/85 md:px-12">
        <div className="flex flex-1 flex-wrap items-center gap-x-5 gap-y-2">
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

        <div className="absolute left-1/2 top-7 -translate-x-1/2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full">
            <button
              type="button"
              aria-label="Home"
              onClick={onLogoClick}
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
