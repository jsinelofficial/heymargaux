import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hey Margaux",
  description:
    "Official Hey Margaux hub for streams, community access, bonuses, and creator-led promos.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Hey Margaux",
    description:
      "Watch the stream, join the community, and use the official links.",
    url: "https://heymargaux.xyz",
    siteName: "Hey Margaux",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hey Margaux",
    description:
      "Watch the stream, join the community, and use the official links.",
  },
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