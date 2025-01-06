import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Event Management App",
  description: "Crafted by CVS CHARAN",
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
