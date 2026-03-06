import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Demon | Websites, EPOS Support & Brand Media",
  description: "Websites, EPOS support and brand media for businesses that want things sorted properly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
