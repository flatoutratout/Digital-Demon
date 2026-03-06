import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Demon | Websites, EPOS Support & Brand Media",
  description:
    "Websites, EPOS support and brand media for businesses that want a stronger online presence.",
  openGraph: {
    title: "Digital Demon",
    description:
      "Websites, EPOS support and brand media for businesses.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
