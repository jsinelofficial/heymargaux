import Image from "next/image";
import { getAllArticles } from "../../lib/articles";
import BlogClient from "./BlogClient";

const socials = [
  { label: "Kick", href: "https://kick.com/heymargaux" },
  { label: "Discord", href: "https://discord.gg/9bFFkbjRFa" },
  { label: "Facebook", href: "https://www.facebook.com/heymargaux" },
  { label: "Twitch", href: "https://www.twitch.tv/heymargaux" },
  { label: "Blog", href: "/blog" },
];

export default function BlogPage() {
  const articles = getAllArticles().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-[#0b0908] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#3a2a14] bg-[#0b0908]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <Image src="/margaux-icon.png" alt="Hey Margaux" width={32} height={32} className="h-8 w-8 object-contain" />
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#f3d7a0]">Hey Margaux</p>
              <p className="text-[11px] text-[#8e7650]">Play. Win. Repeat</p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#b69561] md:flex">
            <a href="/#benefits" className="transition hover:text-[#f3d7a0]">Benefits</a>
            <a href="/#vip-tiers" className="transition hover:text-[#f3d7a0]">VIP Tiers</a>
            <a href="/#promos" className="transition hover:text-[#f3d7a0]">Promos</a>
            <a href="/leaderboard" className="transition hover:text-[#f3d7a0]">Leaderboard</a>
            <a href="/blog" className="font-medium text-[#d9a441]">Blog</a>
          </nav>
          <a
            href="https://kick.com/heymargaux"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-[#d9a441] px-4 py-2 text-sm font-semibold text-[#120d07] transition hover:brightness-110"
          >
            Watch on Kick
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16">
        {/* Page title */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c58b3a]">Learn &amp; Play Smarter</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-[#f8f0e5] md:text-6xl">
            Hey Margaux <span className="text-[#d9a441]">Blog</span>
          </h1>
          <p className="mt-4 text-base leading-8 text-[#a88b61]">
            Guides, bonus breakdowns, and strategies to help you get more out of your Stake experience.
          </p>
        </div>

        {/* Category tabs + article grid (client-side filtering) */}
        <BlogClient articles={articles} />

        {/* CTA */}
        <div className="mt-20 rounded-[32px] border border-[#3a2a14] bg-[radial-gradient(circle_at_top,rgba(217,164,65,0.10),transparent_40%),#120f0c] px-8 py-12 text-center md:px-16">
          <p className="text-sm tracking-[0.3em] text-[#d9a441]">STAY CONNECTED</p>
          <h2 className="mt-5 text-3xl font-semibold text-[#fff5e3] md:text-4xl">
            Play with <span className="text-[#d9a441]">Hey Margaux</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#a88b61] md:text-base">
            Use my official link to access bonuses, follow my streams, and stay updated with promos and giveaways.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://stake.com/?c=heymargaux&offer=heymargaux"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[#d9a441] px-6 py-3 text-sm font-semibold text-[#120d07] transition hover:brightness-110"
            >
              Claim Bonus &amp; Play
            </a>
            <a
              href="https://kick.com/heymargaux"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-[#5f4219] bg-[#17110d]/80 px-6 py-3 text-sm font-semibold text-[#f0d5a1] transition hover:border-[#8b6221] hover:bg-[#1d1610]"
            >
              Watch Live
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#24190d] bg-[#0a0807]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full border border-[#7a5621] bg-gradient-to-br from-[#f2c46b] to-[#8d5b14]" />
              <span className="text-sm font-medium text-[#e6c58d]">Hey Margaux</span>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm text-[#8f7248]">
              {socials.map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="transition hover:text-[#f3d7a0]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-[#1f160c] pt-6 text-xs leading-6 text-[#725b3c]">
            <p>Disclaimer: This page is for promotional purposes only and may contain affiliate links. You must be of legal age in your jurisdiction to participate. Please gamble responsibly and only use services that are legal where you live.</p>
            <p className="mt-3">© {new Date().getFullYear()} Hey Margaux. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
