"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Entry {
  stake_username: string;
  wager_usd: number;
}

const PRIZES: Record<number, string> = {
  1: "$500",
  2: "$300",
  3: "$100",
};

function getPrize(rank: number) {
  return PRIZES[rank] ?? "$50";
}

function maskUsername(username: string) {
  if (username.length <= 3) return username;
  return username.slice(0, 2) + "***" + username.slice(-1);
}

function currentMonthLabel() {
  return new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

const TIERS = [
  { rank: "1st", prize: "$500", color: "text-yellow-400", border: "border-yellow-500/30", bg: "bg-yellow-500/10" },
  { rank: "2nd", prize: "$300", color: "text-slate-300", border: "border-slate-500/30", bg: "bg-slate-500/10" },
  { rank: "3rd", prize: "$100", color: "text-amber-600", border: "border-amber-700/30", bg: "bg-amber-700/10" },
  { rank: "4th–10th", prize: "$50 each", color: "text-[#d9a441]", border: "border-[#3a2a14]", bg: "bg-[#1a130d]" },
];

const socials = [
  { label: "Kick", href: "https://kick.com/heymargaux" },
  { label: "Discord", href: "https://discord.gg/9bFFkbjRFa" },
  { label: "Facebook", href: "https://www.facebook.com/heymargaux" },
  { label: "Twitch", href: "https://www.twitch.tv/heymargaux" },
];

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null);

  async function fetchEntries() {
    const res = await fetch("/api/leaderboard");
    if (res.ok) setEntries(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    fetchEntries();
  }, []);

  async function handleJoin(e: React.FormEvent) {
    e.preventDefault();
    if (!username.trim()) return;
    setSubmitting(true);
    setMessage(null);

    const res = await fetch("/api/leaderboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stake_username: username.trim() }),
    });

    const data = await res.json();
    setMessage({ text: data.message ?? data.error, ok: res.status !== 500 });
    setSubmitting(false);

    if (res.status === 201) {
      setUsername("");
      fetchEntries();
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://heymargaux.xyz" },
      { "@type": "ListItem", position: 2, name: "Leaderboard", item: "https://heymargaux.xyz/leaderboard" },
    ],
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Hey Margaux Monthly Wager Race — ${currentMonthLabel()}`,
    description:
      "Monthly wagering competition on Stake.com. Top 10 players share $1,250 in prizes. Register with your Stake username using code heymargaux.",
    url: "https://heymargaux.xyz/leaderboard",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    organizer: {
      "@type": "Person",
      name: "Hey Margaux",
      url: "https://heymargaux.xyz",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free to enter — sign up on Stake with code heymargaux",
      url: "https://heymargaux.xyz/leaderboard",
    },
  };

  return (
    <div className="min-h-screen bg-[#0b0908] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#3a2a14] bg-[#0b0908]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Hey Margaux" width={32} height={32} className="h-8 w-8 object-contain" />
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#f3d7a0]">Hey Margaux</p>
              <p className="text-[11px] text-[#8e7650]">Play. Win. Repeat</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#b69561] md:flex">
            <a href="/#benefits" className="transition hover:text-[#f3d7a0]">Benefits</a>
            <a href="/#promos" className="transition hover:text-[#f3d7a0]">Promos</a>
            <a href="/#games" className="transition hover:text-[#f3d7a0]">Games</a>
            <a href="/leaderboard" className="text-[#d9a441]">Leaderboard</a>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,164,65,0.18),transparent_40%)]" />
          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-[#5b3d16] bg-[#1a130d]/80 px-4 py-1 text-xs tracking-wide text-[#c9a56a]">
              Monthly Wager Race
            </div>
            <h1 className="text-5xl font-semibold leading-tight text-[#fff6e8] md:text-6xl">
              {currentMonthLabel()} <span className="text-[#d9a441]">Race</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#b79b70]">
              Wager on Stake using code <span className="font-semibold text-[#d9a441]">heymargaux</span> and climb the board. Top 10 players split <span className="font-semibold text-white">$1,250</span> in prizes every month.
            </p>

            {/* Prize tier cards */}
            <div className="mt-10 grid w-full max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
              {TIERS.map((t) => (
                <div key={t.rank} className={`rounded-2xl border ${t.border} ${t.bg} p-4 text-center`}>
                  <p className={`text-lg font-bold ${t.color}`}>{t.prize}</p>
                  <p className="mt-1 text-xs text-[#8e7650]">{t.rank} Place</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Form */}
        <section className="bg-[#100d0b] py-16">
          <div className="mx-auto max-w-lg px-6">
            <h2 className="text-center text-2xl font-semibold text-[#fff5e3]">Join This Month&apos;s Race</h2>
            <p className="mt-2 text-center text-sm text-[#a88b61]">
              Enter your Stake username to register. Make sure you&apos;ve signed up through the <span className="text-[#d9a441]">heymargaux</span> affiliate link.
            </p>

            <form onSubmit={handleJoin} className="mt-6 flex gap-3">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your Stake username"
                className="h-12 flex-1 rounded-xl border border-[#2f2418] bg-[#1b1613] px-4 text-sm text-[#f3d7a0] placeholder-[#5a4530] outline-none focus:border-[#d9a441]/50"
                maxLength={32}
              />
              <button
                type="submit"
                disabled={submitting || !username.trim()}
                className="h-12 rounded-xl bg-[#d9a441] px-5 text-sm font-semibold text-[#120d07] transition hover:brightness-110 disabled:opacity-50"
              >
                {submitting ? "Joining…" : "Join"}
              </button>
            </form>

            {message && (
              <p className={`mt-3 text-center text-sm ${message.ok ? "text-emerald-400" : "text-red-400"}`}>
                {message.text}
              </p>
            )}
          </div>
        </section>

        {/* Standings */}
        <section className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-center text-2xl font-semibold text-[#fff5e3]">
            Current Standings
          </h2>
          <p className="mt-1 text-center text-sm text-[#8e7650]">{currentMonthLabel()} · Top 10</p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#2d2113]">
            {/* Table header */}
            <div className="grid grid-cols-4 border-b border-[#2d2113] bg-[#15110d] px-6 py-3 text-xs uppercase tracking-[0.15em] text-[#7a6340]">
              <span>Rank</span>
              <span className="col-span-2">Player</span>
              <span className="text-right">Prize</span>
            </div>

            {loading ? (
              <div className="py-16 text-center text-sm text-[#8e7650]">Loading standings…</div>
            ) : entries.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-[#8e7650]">No entries yet — be the first to join!</p>
              </div>
            ) : (
              entries.map((entry, i) => {
                const rank = i + 1;
                const isTop3 = rank <= 3;
                return (
                  <div
                    key={entry.stake_username}
                    className={`grid grid-cols-4 items-center border-b border-[#1e180f] px-6 py-4 last:border-0 ${isTop3 ? "bg-[#18140e]" : "bg-[#110e0b]"}`}
                  >
                    <span className={`text-lg font-bold ${rank === 1 ? "text-yellow-400" : rank === 2 ? "text-slate-300" : rank === 3 ? "text-amber-600" : "text-[#8e7650]"}`}>
                      #{rank}
                    </span>
                    <span className="col-span-2 font-medium text-[#f3d7a0]">
                      {maskUsername(entry.stake_username)}
                    </span>
                    <span className="text-right font-semibold text-[#d9a441]">
                      {getPrize(rank)}
                    </span>
                  </div>
                );
              })
            )}
          </div>

          <p className="mt-4 text-center text-xs text-[#5a4530]">
            Wager amounts verified manually. Rankings update throughout the month.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-[#100d0b] py-16">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl font-semibold text-[#fff5e3]">
              Not on Stake yet?
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#a88b61]">
              Sign up through the official Hey Margaux link, use code <span className="font-semibold text-[#d9a441]">heymargaux</span>, and join the race today.
            </p>
            <a
              href="https://stake.com/?c=heymargaux&offer=heymargaux"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-xl bg-[#d9a441] px-7 py-3 text-sm font-semibold text-[#120d07] transition hover:brightness-110"
            >
              Create Account &amp; Join
            </a>
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
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="transition hover:text-[#f3d7a0]">
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
