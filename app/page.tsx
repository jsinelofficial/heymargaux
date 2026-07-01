"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HomePage() {
  const affiliateLink = "https://stake.com/?c=heymargaux&offer=heymargaux";
  const bonusCode = "heymargaux";
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [liveStatus, setLiveStatus] = useState<{
    isLive: boolean;
    title: string | null;
    viewers: number | null;
  }>({ isLive: false, title: null, viewers: null });

  useEffect(() => {
    async function checkLive() {
      try {
        const res = await fetch("/api/live-status");
        if (res.ok) setLiveStatus(await res.json());
      } catch {
        // silently fail — section just stays hidden
      }
    }
    checkLive();
    const interval = setInterval(checkLive, 60_000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 1400);
    } catch {
      // clipboard unavailable
    }
  };

  const handleClaim = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 1400);
    } catch {
      // clipboard unavailable
    }
    setTimeout(() => {
      window.open(affiliateLink, "_blank", "noopener,noreferrer");
    }, 180);
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
      title: "Monthly Cash Race",
      text: "Compete in the monthly wager leaderboard and win real cash prizes every month.",
      icon: "🏆",
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

  const vipTiers = [
    { name: "Bronze",       bonus: "$10",    icon: "🥉", color: "text-amber-700",   border: "border-amber-700/30",   bg: "bg-amber-700/10"   },
    { name: "Silver",       bonus: "$50",    icon: "🥈", color: "text-slate-300",   border: "border-slate-400/30",   bg: "bg-slate-400/10"   },
    { name: "Gold",         bonus: "$100",   icon: "🥇", color: "text-yellow-400",  border: "border-yellow-500/30",  bg: "bg-yellow-500/10"  },
    { name: "Platinum I",   bonus: "$200",   icon: "💎", color: "text-cyan-400",    border: "border-cyan-500/30",    bg: "bg-cyan-500/10"    },
    { name: "Platinum II",  bonus: "$400",   icon: "💎", color: "text-violet-400",  border: "border-violet-500/30",  bg: "bg-violet-500/10"  },
    { name: "Platinum III", bonus: "$800",   icon: "💎", color: "text-fuchsia-400", border: "border-fuchsia-500/30", bg: "bg-fuchsia-500/10" },
    { name: "Platinum IV",  bonus: "$1,600", icon: "💎", color: "text-rose-400",    border: "border-rose-500/30",    bg: "bg-rose-500/10"    },
    { name: "Platinum V",   bonus: "$3,200", icon: "💎", color: "text-orange-400",  border: "border-orange-500/30",  bg: "bg-orange-500/10"  },
    { name: "Platinum VI",  bonus: "$6,400", icon: "💎", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
    { name: "Diamond",      bonus: "$15,000",icon: "👑", color: "text-[#d9a441]",   border: "border-[#d9a441]/30",   bg: "bg-[#d9a441]/10"   },
  ];

  const promos = [
    {
      tag: "New Players",
      tagColor: "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
      title: "Instant Rakeback",
      text: "Every wager you place earns rakeback automatically. Sign up through my link and start earning back a percentage of every bet from day one — no minimum required.",
      code: bonusCode,
    },
    {
      tag: "Weekly",
      tagColor: "border-blue-500/25 bg-blue-500/10 text-blue-400",
      title: "Weekly Reload Bonus",
      text: "Stake rewards active players with weekly reload bonuses based on wager volume. The more consistently you play, the better your weekly boost.",
      code: bonusCode,
    },
    {
      tag: "VIP",
      tagColor: "border-fuchsia-500/25 bg-fuchsia-500/10 text-fuchsia-400",
      title: "VIP Tier Rewards",
      text: "Stake's VIP program unlocks as you wager more. Each tier — Bronze through Diamond — comes with a one-time tier bonus, priority support, and exclusive perks only available to VIP members.",
      code: bonusCode,
    },
    {
      tag: "Hot",
      tagColor: "border-red-500/25 bg-red-500/10 text-red-400",
      title: "Crypto Deposit Bonus",
      text: "Stake is built for crypto. Deposit with BTC, ETH, LTC, and more for fast transactions, low fees, and a first-deposit bonus when you register through my official link.",
      code: bonusCode,
    },
  ];

  const games = [
    { title: "Slots", desc: "Fast-paced and easy to jump into during live streams.", icon: "777" },
    { title: "Roulette", desc: "Classic live casino energy with high stream appeal.", icon: "◉" },
    { title: "Poker & Cards", desc: "A clean choice for players who like strategy and variety.", icon: "♠" },
    { title: "Dice", desc: "Quick rounds and simple gameplay for active sessions.", icon: "⚀" },
    { title: "Sports Betting", desc: "Perfect for hype moments, watch parties, and real-time action.", icon: "🏆" },
    { title: "Crypto Games", desc: "A modern experience for players who already live on-chain.", icon: "₿" },
  ];

  const steps = [
    {
      number: "1",
      title: "Create a Stake Account",
      text: "Sign up on Stake.com using the Hey Margaux affiliate link to unlock exclusive perks from day one.",
      cta: { label: "Sign Up Now", href: affiliateLink },
    },
    {
      number: "2",
      title: "Enter Code heymargaux",
      text: "Use bonus code heymargaux when registering. This activates your rakeback, welcome bonus, and links you to the community.",
      cta: null,
    },
    {
      number: "3",
      title: "Join the Monthly Race",
      text: "Head to the leaderboard, register your Stake username, and start wagering. Top 10 players win real cash every month.",
      cta: { label: "View Leaderboard", href: "/leaderboard" },
    },
    {
      number: "4",
      title: "Claim Your Prizes",
      text: "Rankings update throughout the month. At month end, winners are contacted and prizes are paid out directly.",
      cta: null,
    },
  ];

  const socials = [
    { label: "Kick", href: "https://kick.com/heymargaux" },
    { label: "Discord", href: "https://discord.gg/D2xJzsWsz5" },
    { label: "Facebook", href: "https://www.facebook.com/heymargaux" },
    { label: "Twitch", href: "https://www.twitch.tv/heymargaux" },
    { label: "Blog", href: "/blog" },
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Margaux",
    alternateName: "Hey Margaux",
    url: "https://heymargaux.xyz",
    jobTitle: "Content Creator & Streamer",
    description:
      "Full-time Stake streamer running monthly cash races and exclusive bonuses for her community.",
    sameAs: [
      "https://kick.com/heymargaux",
      "https://discord.gg/heymargaux",
      "https://www.facebook.com/heymargaux",
      "https://www.twitch.tv/heymargaux",
    ],
  };

  return (
    <div className="min-h-screen bg-[#0b0908] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
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
            <a href="#benefits" className="transition hover:text-[#f3d7a0]">Benefits</a>
            <a href="#vip-tiers" className="transition hover:text-[#f3d7a0]">VIP Tiers</a>
            <a href="#promos" className="transition hover:text-[#f3d7a0]">Promos</a>
            <a href="#games" className="transition hover:text-[#f3d7a0]">Games</a>
            <a href="#how-it-works" className="transition hover:text-[#f3d7a0]">How It Works</a>
            <a href="/leaderboard" className="font-medium text-[#d9a441] transition hover:text-[#f2c46b]">Leaderboard</a>
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
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,164,65,0.22),transparent_38%),linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.88))]" />
          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-[10%] top-[12%] h-32 w-32 rounded-full bg-[#d9a441]/15 blur-3xl" />
            <div className="absolute right-[15%] top-[18%] h-40 w-40 rounded-full bg-[#d9a441]/10 blur-3xl" />
            <div className="absolute bottom-[12%] left-[30%] h-48 w-48 rounded-full bg-[#8d5b14]/15 blur-3xl" />
          </div>

          <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32">
            <div className="mb-4 inline-flex items-center rounded-full border border-[#5b3d16] bg-[#1a130d]/80 px-4 py-1 text-xs tracking-wide text-[#c9a56a]">
              Official Hey Margaux Hub
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-[#fff6e8] md:text-7xl">
              3.5% Lifetime Rakeback<br />
              <span className="text-[#d9a441]">+ Monthly Cash Races</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#b79b70] md:text-base">
              Sign up on Stake with code <span className="font-semibold text-[#d9a441]">heymargaux</span>, join the community, and compete for <span className="font-semibold text-white">$1,250</span> in prizes every month.
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
                href="/leaderboard"
                className="rounded-xl border border-[#5f4219] bg-[#17110d]/80 px-6 py-3 text-sm font-semibold text-[#f0d5a1] transition hover:border-[#8b6221] hover:bg-[#1d1610]"
              >
                View Leaderboard
              </a>
            </div>

            <p className="mt-4 text-xs text-[#7f6540]">
              Use code <span className="font-semibold text-[#d9a441]">{bonusCode}</span> • 18+ only • Play responsibly
            </p>

            <div className="mt-12 grid w-full max-w-3xl grid-cols-3 gap-4 border-t border-[#2b1d0c] pt-6 text-center">
              <div>
                <p className="text-2xl font-semibold text-[#d9a441]">$1,250</p>
                <p className="mt-1 text-xs text-[#876b45]">Monthly prize pool</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#d9a441]">Top 10</p>
                <p className="mt-1 text-xs text-[#876b45]">Winners every month</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#d9a441]">24/7</p>
                <p className="mt-1 text-xs text-[#876b45]">Streaming energy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Stream */}
        {liveStatus.isLive && (
          <section className="border-y border-red-900/40 bg-[#0e0b09]">
            <div className="mx-auto max-w-7xl px-6 py-12">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                    LIVE NOW
                  </span>
                  {liveStatus.viewers !== null && (
                    <span className="text-sm text-[#8e7650]">
                      {liveStatus.viewers.toLocaleString()} viewers
                    </span>
                  )}
                </div>
                {liveStatus.title && (
                  <p className="text-sm font-medium text-[#f3d7a0]">{liveStatus.title}</p>
                )}
                <a
                  href="https://kick.com/heymargaux"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-[#d9a441] px-4 py-2 text-sm font-semibold text-[#120d07] transition hover:brightness-110"
                >
                  Watch on Kick ↗
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#2d2113] bg-black" style={{ aspectRatio: "16/9" }}>
                <iframe
                  src="https://player.kick.com/heymargaux?autoplay=true&muted=false"
                  className="h-full w-full"
                  allowFullScreen
                  allow="autoplay; fullscreen"
                  title="Hey Margaux Live Stream"
                />
              </div>
            </div>
          </section>
        )}

        {/* Profile */}
        <section className="border-y border-[#1f180f] bg-[#0e0b09]">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-16 md:flex-row md:items-start">
            {/* Avatar — replace /logo.png with a real photo when available */}
            <div className="shrink-0">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-[#d9a441]/40 shadow-[0_0_32px_rgba(217,164,65,0.15)]">
                <Image src="/margaux-icon.png" alt="Margaux" fill className="object-cover" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.25em] text-[#8d6a33]">Your host</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#fff5e3]">Hey, I&apos;m Margaux</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#a88b61]">
                Part-time Stake streamer and content creator. I stream every other day, run monthly cash races for my community, and make sure every player who signs up through my links gets the best possible start.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-[#2f2418] bg-[#17110d] px-3 py-1.5 text-xs font-medium text-[#c9a56a] transition hover:border-[#d9a441]/40 hover:text-[#f3d7a0]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8d6a33]">Why join through me</p>
            <h2 className="mt-3 text-4xl font-semibold text-[#fff5e3]">Exclusive Benefits</h2>
            <p className="mt-4 text-sm leading-7 text-[#a88b61]">
              Sign up using my code and stay plugged into giveaways, community updates, and stream-first perks.
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
                <h3 className="mt-5 text-lg font-semibold text-[#f8e9cc]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#9d825b]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VIP Tiers */}
        <section id="vip-tiers" className="bg-[#100d0b] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8d6a33]">Stake VIP Program</p>
              <h2 className="mt-3 text-4xl font-semibold text-[#fff5e3]">VIP Tier Rewards</h2>
              <p className="mt-4 text-sm leading-7 text-[#a88b61]">
                Every time you reach a new VIP tier on Stake using code{" "}
                <span className="font-semibold text-[#d9a441]">heymargaux</span>, you unlock a bonus reward — on top of everything Stake already gives you.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {vipTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`flex items-center gap-5 rounded-2xl border ${tier.border} ${tier.bg} p-5`}
                >
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${tier.border} bg-[#0e0b09] text-2xl`}>
                    {tier.icon}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-semibold uppercase tracking-wide ${tier.color}`}>{tier.name}</p>
                    <p className="mt-0.5 text-2xl font-bold text-[#f3d7a0]">{tier.bonus}</p>
                    <p className="mt-0.5 text-xs text-[#7a6340]">One-time tier bonus</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-[#5a4530]">
              Bonuses are paid out manually upon reaching each tier. Must be signed up through the{" "}
              <span className="text-[#d9a441]">heymargaux</span> affiliate link to qualify.
            </p>
          </div>
        </section>

        {/* Promos */}
        <section id="promos" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c58b3a]">Always Fresh</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#f8f0e5] md:text-6xl">
                Current <span className="text-[#d9a441]">Promos</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#a88b61]">
                Exclusive bonus codes and active offers — updated regularly.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {promos.map((promo) => {
                const isCopied = copiedCode === promo.code;
                return (
                  <div
                    key={promo.title}
                    className="flex flex-col rounded-[28px] bg-[radial-gradient(ellipse_at_top_right,#4a3010_0%,#1e1408_55%,#12100d_100%)] p-7 shadow-[0_8px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(217,164,65,0.1)]"
                  >
                    {/* Platform header */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1a9e3f] text-xl shadow-[0_2px_8px_rgba(26,158,63,0.4)]">
                        🚩
                      </div>
                      <div>
                        <p className="text-2xl font-black uppercase tracking-wider text-white">Stake</p>
                        <div className={`mt-0.5 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${promo.tagColor}`}>
                          {promo.tag}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-[15px] leading-7 text-[#c9a87a]">
                      <span className="font-semibold text-white">{promo.title}.</span>{" "}{promo.text}
                    </p>

                    {/* Code row */}
                    <div className="mt-6 flex items-center overflow-hidden rounded-2xl border border-[#3a2a10]/60 bg-[#0e0b08]/70">
                      <span className="shrink-0 border-r border-[#3a2a10]/60 px-4 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#7a6340]">
                        Use Code
                      </span>
                      <span className="flex-1 px-4 text-lg font-black uppercase tracking-widest text-[#f0c050]">
                        {promo.code}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(promo.code)}
                        aria-label={`Copy bonus code ${promo.code}`}
                        className="shrink-0 px-4 py-4 text-[#7a6340] transition hover:text-[#d9a441]"
                      >
                        {isCopied ? (
                          <span className="text-xs font-semibold text-emerald-400">✓</span>
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* CTA */}
                    <button
                      type="button"
                      onClick={() => handleClaim(promo.code)}
                      className="mt-4 w-full rounded-2xl bg-[#d9a441] py-4 text-sm font-black uppercase tracking-widest text-[#120d07] transition hover:brightness-110 active:scale-[0.98]"
                    >
                      {isCopied ? "Code Copied — Opening Stake…" : "Sign Up on Stake →"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Games */}
        <section id="games" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8d6a33]">What I stream</p>
            <h2 className="mt-3 text-4xl font-semibold text-[#fff5e3]">Featured Games</h2>
            <p className="mt-4 text-sm leading-7 text-[#a88b61]">
              From live casino classics to crypto-native games — join the stream and follow along.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <div
                key={game.title}
                className="flex flex-col rounded-[28px] bg-[radial-gradient(ellipse_at_top_right,#4a3010_0%,#1e1408_55%,#12100d_100%)] p-7 shadow-[0_8px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(217,164,65,0.1)]"
              >
                {/* Game header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0e0b08]/70 text-3xl border border-[#3a2a10]/60">
                    {game.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-wider text-white">{game.title}</h3>
                </div>

                {/* Description */}
                <p className="mt-4 text-[15px] leading-7 text-[#c9a87a]">{game.desc}</p>

                {/* CTA */}
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block w-full rounded-2xl bg-[#d9a441] py-4 text-center text-sm font-black uppercase tracking-widest text-[#120d07] transition hover:brightness-110 active:scale-[0.98]"
                >
                  Play Now →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-[#100d0b] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8d6a33]">Four easy steps</p>
              <h2 className="mt-3 text-4xl font-semibold text-[#fff5e3]">How to Claim &amp; Compete</h2>
              <p className="mt-4 text-sm leading-7 text-[#a88b61]">
                From sign-up to claiming your monthly prize — here&apos;s exactly what to do.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#4f3918] bg-[#1b140f] text-lg font-semibold text-[#d9a441]">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#f8e7c7]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#9d825b]">{step.text}</p>
                  {step.cta && (
                    <a
                      href={step.cta.href}
                      target={step.cta.href.startsWith("http") ? "_blank" : undefined}
                      rel={step.cta.href.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-4 text-sm font-medium text-[#d9a441] hover:text-[#f2c46b]"
                    >
                      {step.cta.label} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-[32px] border border-[#2f2214] bg-[radial-gradient(circle_at_top,rgba(217,164,65,0.12),transparent_30%),#120f0c] px-8 py-14 text-center md:px-16">
            <p className="text-sm tracking-[0.3em] text-[#d9a441]">★★★★★</p>
            <h2 className="mt-5 text-4xl font-semibold text-[#fff5e3] md:text-5xl">
              Ready to join <span className="text-[#d9a441]">Hey Margaux</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#a88b61] md:text-base">
              Watch live, join the Discord, and start playing through my official links for giveaways, bonuses, and monthly cash races.
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
                href="/leaderboard"
                className="rounded-xl border border-[#5f4219] bg-[#17110d]/80 px-6 py-3 text-sm font-semibold text-[#f0d5a1] transition hover:border-[#8b6221] hover:bg-[#1d1610]"
              >
                View Leaderboard
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
            <p>
              Disclaimer: This page is for promotional purposes only and may contain affiliate links. You must be of legal age in your jurisdiction to participate. Please gamble responsibly and only use services that are legal where you live.
            </p>
            <p className="mt-3">© {new Date().getFullYear()} Hey Margaux. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
