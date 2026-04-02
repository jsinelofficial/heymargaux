"use client";

import { useState } from "react";

export default function HomePage() {
  const affiliateLink = "https://stake.com/?c=byemargaux";
  const bonusCode = "byemargaux";
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 1400);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  const handleClaim = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 1400);
      setTimeout(() => {
        window.open(affiliateLink, "_blank", "noopener,noreferrer");
      }, 180);
    } catch (error) {
      console.error("Failed to copy code:", error);
      window.open(affiliateLink, "_blank", "noopener,noreferrer");
    }
  };

  const benefits = [
    {
      title: "Exclusive Bonuses",
      text: "Use my official links to unlock bonus offers, special promos, and community-only perks.",
      icon: "✦",
    },
    {
      title: "Instant Giveaways",
      text: "Stay close to the action through Discord giveaways, refill drops, and stream updates.",
      icon: "⚡",
    },
    {
      title: "VIP Community",
      text: "Join an active player community with direct access to Hey Margaux content and perks.",
      icon: "◆",
    },
    {
      title: "Creator Perks",
      text: "Watch real gameplay, follow the streams, and play through trusted official links only.",
      icon: "☻",
    },
    {
      title: "Priority Access",
      text: "Be first to hear about new promos, featured drops, and fresh stream content.",
      icon: "⬒",
    },
    {
      title: "Fast Payout Focus",
      text: "Keep your setup simple with one clean page for links, content, and community access.",
      icon: "◌",
    },
  ];

  const promos = [
    {
      tag: "New Players",
      tagColor: "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
      title: "Welcome Rakeback Boost",
      text: "Get an instant rakeback boost during your first 7 days. All wagers count.",
      code: "byemargaux",
    },
    {
      tag: "Weekly",
      tagColor: "border-blue-500/25 bg-blue-500/10 text-blue-400",
      title: "Weekly Reload Bonus",
      text: "Reload every week and receive bonus credits automatically.",
      code: "byemargaux",
    },
    {
      tag: "VIP",
      tagColor: "border-fuchsia-500/25 bg-fuchsia-500/10 text-fuchsia-400",
      title: "VIP Fast-Track",
      text: "Use the code to speed up VIP progress and unlock tier rewards sooner.",
      code: "byemargaux",
    },
    {
      tag: "Hot",
      tagColor: "border-red-500/25 bg-red-500/10 text-red-400",
      title: "Crypto Deposit Bonus",
      text: "Deposit with major crypto and unlock a bonus on your first deposit.",
      code: "byemargaux",
    },
  ];

  const games = [
    {
      title: "Slots",
      desc: "Fast-paced and easy to jump into during live streams.",
      icon: "777",
    },
    {
      title: "Roulette",
      desc: "Classic live casino energy with high stream appeal.",
      icon: "◉",
    },
    {
      title: "Poker & Cards",
      desc: "A clean choice for players who like strategy and variety.",
      icon: "♠",
    },
    {
      title: "Dice",
      desc: "Quick rounds and simple gameplay for active sessions.",
      icon: "⚀",
    },
    {
      title: "Sports Betting",
      desc: "Perfect for hype moments, watch parties, and real-time action.",
      icon: "🏆",
    },
    {
      title: "Crypto Games",
      desc: "A modern experience for players who already live on-chain.",
      icon: "₿",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Watch the Stream",
      text: "Start with my Kick stream and follow the latest gameplay, promos, and live action.",
    },
    {
      number: "2",
      title: "Join the Discord",
      text: "Get closer to the community through giveaways, refills, and direct updates.",
    },
    {
      number: "3",
      title: "Play Through My Links",
      text: "Use the official Hey Margaux links so everything stays simple, trusted, and easy to follow.",
    },
  ];

  const socials = [
    { label: "Kick", href: "https://kick.com/heymargaux" },
    { label: "Discord", href: "https://discord.gg/9bFFkbjRFa" },
    { label: "Facebook", href: "https://www.facebook.com/heymargaux" },
    { label: "Twitch", href: "https://www.twitch.tv/heymargaux" },
  ];

  return (
    <div className="min-h-screen bg-[#0b0908] text-white">
      <header className="sticky top-0 z-50 border-b border-[#3a2a14] bg-[#0b0908]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <img
  src="/logo.png"
  alt="Hey Margaux"
  className="h-8 w-8 object-contain"
/>
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#f3d7a0]">
                Hey Margaux
              </p>
              <p className="text-[11px] text-[#8e7650]">Play. Win. Repeat</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#b69561] md:flex">
            <a href="#benefits" className="transition hover:text-[#f3d7a0]">
              Benefits
            </a>
            <a href="#promos" className="transition hover:text-[#f3d7a0]">
              Promos
            </a>
            <a href="#games" className="transition hover:text-[#f3d7a0]">
              Games
            </a>
            <a href="#how-it-works" className="transition hover:text-[#f3d7a0]">
              How It Works
            </a>
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

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,164,65,0.22),transparent_38%),linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.88))]" />
          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-[10%] top-[12%] h-32 w-32 rounded-full bg-[#d9a441]/15 blur-3xl" />
            <div className="absolute right-[15%] top-[18%] h-40 w-40 rounded-full bg-[#d9a441]/10 blur-3xl" />
            <div className="absolute bottom-[12%] left-[30%] h-48 w-48 rounded-full bg-[#8d5b14]/15 blur-3xl" />
          </div>

          <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32">
            <div className="mb-4 inline-flex items-center rounded-full border border-[#5b3d16] bg-[#1a130d]/80 px-4 py-1 text-xs tracking-wide text-[#c9a56a]">
              Creator-led Stake funnel
            </div>

            <p className="text-xs uppercase tracking-[0.35em] text-[#8f7248]">
              Hey Margaux official hub
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-[#fff6e8] md:text-7xl">
              Play on Stake with <span className="text-[#d9a441]">Hey Margaux</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#b79b70] md:text-base">
              Watch my streams, grab bonus codes, and play through my official
              links to unlock exclusive perks, giveaways, and community rewards.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleClaim(bonusCode)}
                className="rounded-xl bg-[#d9a441] px-6 py-3 text-sm font-semibold text-[#120d07] transition hover:brightness-110 active:scale-[0.98]"
              >
                Claim Bonus &amp; Play
              </button>

              <a
                href="https://kick.com/heymargaux"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#5f4219] bg-[#17110d]/80 px-6 py-3 text-sm font-semibold text-[#f0d5a1] transition hover:border-[#8b6221] hover:bg-[#1d1610]"
              >
                Watch Live
              </a>

              <a
                href="https://discord.gg/9bFFkbjRFa"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#5f4219] bg-[#17110d]/80 px-6 py-3 text-sm font-semibold text-[#f0d5a1] transition hover:border-[#8b6221] hover:bg-[#1d1610]"
              >
                Join Discord
              </a>
            </div>

            <p className="mt-4 text-xs text-[#7f6540]">
              Use code <span className="font-semibold text-[#d9a441]">{bonusCode}</span> • 18+ only • Play responsibly
            </p>

            <div className="mt-12 grid w-full max-w-3xl grid-cols-3 gap-4 border-t border-[#2b1d0c] pt-6 text-center">
              <div>
                <p className="text-2xl font-semibold text-[#d9a441]">$60B+</p>
                <p className="mt-1 text-xs text-[#876b45]">Wagered vibe</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#d9a441]">1.1M</p>
                <p className="mt-1 text-xs text-[#876b45]">Active players</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#d9a441]">24/7</p>
                <p className="mt-1 text-xs text-[#876b45]">Streaming energy</p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8d6a33]">
              Why join through me
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#fff5e3]">
              Exclusive Benefits
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#a88b61]">
              Sign up through my official links and stay plugged into giveaways,
              community updates, and stream-first perks.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#2d2113] bg-[#15110d] p-6 shadow-[0_0_0_1px_rgba(217,164,65,0.02)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#4e3816] bg-[#1d1610] text-[#d9a441]">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#f8e9cc]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#9d825b]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="promos" className="bg-[#100d0b] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c58b3a]">
                Always Fresh
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#f8f0e5] md:text-6xl">
                Current <span className="text-[#d9a441]">Promos</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#a88b61]">
                Exclusive bonus codes and active offers — updated regularly.
                Copy your code and claim before they expire.
              </p>
            </div>

            <div className="mt-16 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
              {promos.map((promo) => {
                const isCopied = copiedCode === promo.code;

                return (
                  <div
                    key={promo.title}
                    className="flex min-h-[560px] flex-col rounded-[28px] border border-[#2f2418] bg-[linear-gradient(180deg,#171311_0%,#14110f_100%)] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
                  >
                    <div className="h-[44px]">
                      <div
                        className={`inline-flex w-fit items-center rounded-full border px-4 py-2 text-sm font-semibold ${promo.tagColor}`}
                      >
                        ✦ {promo.tag}
                      </div>
                    </div>

                    <div className="mt-8 h-[96px]">
                      <h3 className="text-[1.55rem] font-semibold leading-tight text-[#f2e7d6]">
                        {promo.title}
                      </h3>
                    </div>

                    <div className="mt-6 h-[112px]">
                      <p className="text-[15px] leading-8 text-[#a58a64]">
                        {promo.text}
                      </p>
                    </div>

                    <div className="mt-auto pt-8">
                      <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[#8f7758]">
                        Bonus Code
                      </p>

                      <div className="mt-4 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleCopy(promo.code)}
                          className="group min-w-0 h-14 flex-1 rounded-2xl border border-[#2f2418] bg-[#1b1613] px-5 transition hover:border-[#4b3922] hover:bg-[#211a16]"
                          aria-label={`Copy bonus code ${promo.code}`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="truncate text-[14px] font-semibold tracking-[0.14em] text-[#d9a441]">
                              {promo.code}
                            </span>
                            <span className="shrink-0 text-sm text-[#7f6a50] transition group-hover:text-[#a88b61]">
                              {isCopied ? "Copied" : "⧉"}
                            </span>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleClaim(promo.code)}
                          className="h-14 w-[96px] shrink-0 rounded-2xl bg-[#d1a043] px-4 text-base font-semibold text-[#120d07] transition hover:brightness-105 active:scale-[0.98]"
                        >
                          {isCopied ? "Copied" : "Claim"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="games" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8d6a33]">
              What I stream too
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#fff5e3]">
              Featured Games
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#a88b61]">
              Keep this section simple. It supports the page, but your stream
              and community should stay the real focus.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {games.map((game) => (
              <div
                key={game.title}
                className="rounded-2xl border border-[#2d2113] bg-[radial-gradient(circle_at_top,rgba(217,164,65,0.12),transparent_35%),#12100d] p-6"
              >
                <div className="flex h-24 items-center justify-center rounded-2xl bg-[linear-gradient(to_bottom_right,rgba(13,26,64,0.8),rgba(8,10,18,0.95))] text-4xl text-[#d9a441]">
                  {game.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#f9e8ca]">
                  {game.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#9d825b]">
                  {game.desc}
                </p>
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-[#d9a441] hover:text-[#f2c46b]"
                >
                  Play Now →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="bg-[#100d0b] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8d6a33]">
                Get it and go
              </p>
              <h2 className="mt-3 text-4xl font-semibold text-[#fff5e3]">
                How It Works
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#a88b61]">
                Keep the journey simple so new visitors know exactly what to do.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#4f3918] bg-[#1b140f] text-lg font-semibold text-[#d9a441]">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#f8e7c7]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#9d825b]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-[32px] border border-[#2f2214] bg-[radial-gradient(circle_at_top,rgba(217,164,65,0.12),transparent_30%),#120f0c] px-8 py-14 text-center md:px-16">
            <p className="text-sm tracking-[0.3em] text-[#d9a441]">★★★★★</p>
            <h2 className="mt-5 text-4xl font-semibold text-[#fff5e3] md:text-5xl">
              Ready to join <span className="text-[#d9a441]">Hey Margaux</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#a88b61] md:text-base">
              Watch live, join the Discord, and start playing through my
              official links for giveaways, bonuses, and community perks.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleClaim(bonusCode)}
                className="rounded-xl bg-[#d9a441] px-6 py-3 text-sm font-semibold text-[#120d07] transition hover:brightness-110 active:scale-[0.98]"
              >
                Claim Bonus &amp; Play
              </button>
              <a
                href="https://kick.com/heymargaux"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#5f4219] bg-[#17110d]/80 px-6 py-3 text-sm font-semibold text-[#f0d5a1] transition hover:border-[#8b6221] hover:bg-[#1d1610]"
              >
                Watch Live
              </a>
              <a
                href="https://discord.gg/9bFFkbjRFa"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#5f4219] bg-[#17110d]/80 px-6 py-3 text-sm font-semibold text-[#f0d5a1] transition hover:border-[#8b6221] hover:bg-[#1d1610]"
              >
                Join Discord
              </a>
            </div>

            <p className="mt-4 text-xs text-[#7f6540]">
              Use code <span className="font-semibold text-[#d9a441]">{bonusCode}</span> • 18+ only • Play responsibly
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#24190d] bg-[#0a0807]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full border border-[#7a5621] bg-gradient-to-br from-[#f2c46b] to-[#8d5b14]" />
              <span className="text-sm font-medium text-[#e6c58d]">
                Hey Margaux
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm text-[#8f7248]">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#f3d7a0]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-[#1f160c] pt-6 text-xs leading-6 text-[#725b3c]">
            <p>
              Disclaimer: This page is for promotional purposes only and may
              contain affiliate links. You must be of legal age in your
              jurisdiction to participate. Please gamble responsibly and only
              use services that are legal where you live.
            </p>
            <p className="mt-3">
              © {new Date().getFullYear()} Hey Margaux. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}