export const metadata = {
  title: "Digital Demon",
  description: "Websites, EPOS support and brand media",
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
