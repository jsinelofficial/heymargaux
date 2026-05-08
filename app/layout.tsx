import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hey Margaux",
  description:
    "Official Hey Margaux hub for streams, community leaderboard and Stake giveaways.",
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hey Margaux",
  url: "https://heymargaux.xyz",
  description:
    "Official Hey Margaux hub for streams, monthly cash races, and Stake bonuses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}