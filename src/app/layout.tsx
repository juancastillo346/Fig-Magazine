import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fig Magazine",
  description: "Fashion editorial inspired landing page.",
  icons: {
    icon: [{ url: "/media/png_logo.png?v=2", type: "image/png" }],
    apple: [{ url: "/media/png_logo.png?v=2", type: "image/png" }],
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
          rel="icon"
          href="/media/png_logo.png?v=2"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/media/png_logo.png?v=2"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="shortcut icon"
          href="/media/png_logo.png?v=2"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/media/png_logo.png?v=2" />
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
