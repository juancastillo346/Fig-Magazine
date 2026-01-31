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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
