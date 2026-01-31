import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fig Magazine",
  description: "Fashion editorial inspired landing page.",
  icons: {
    icon: "/media/png_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/media/tt_tsars/TT%20Tsars%20A%20Trial%20Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/media/tt_tsars/TT%20Tsars%20A%20Trial%20Bold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/media/tt_tsars/TT%20Tsars%20A%20Trial%20Black.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
