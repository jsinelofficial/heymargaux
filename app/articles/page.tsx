import Link from "next/link";
import { getAllArticles } from "../../lib/articles";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen bg-[#0b0908] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c58b3a]">
            Learn & Play Smarter
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#f8f0e5] md:text-6xl">
            Latest <span className="text-[#d9a441]">Articles</span>
          </h1>

          <p className="mt-6 text-base leading-8 text-[#a88b61]">
            Guides, bonus breakdowns, and strategies to help you get more out of
            your Stake experience.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col rounded-[28px] border border-[#2f2418] bg-[linear-gradient(180deg,#171311_0%,#14110f_100%)] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition hover:border-[#4a3520] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
            >
              {/* CATEGORY + DATE */}
              <div className="flex items-center justify-between">
                <span className="inline-flex rounded-full border border-[#4f3918] bg-[#1b140f] px-3 py-1 text-xs font-medium text-[#d9a441]">
                  {article.category}
                </span>

                <span className="text-xs text-[#8f7758]">
                  {article.date}
                </span>
              </div>

              {/* TITLE */}
              <h2 className="mt-6 text-[1.9rem] font-semibold leading-tight text-[#f2e7d6] transition group-hover:text-white">
                {article.title}
              </h2>

              {/* EXCERPT */}
              <p className="mt-4 text-[16px] leading-8 text-[#b79b70]">
                {article.excerpt}
              </p>

              {/* FOOTER */}
              <div className="mt-auto pt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-[#d9a441] transition group-hover:text-[#f2c46b]">
                  Read Article →
                </span>

                <span className="text-xs text-[#6f5a3a]">
                  {article.slug}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-20 rounded-[32px] border border-[#3a2a14] bg-[radial-gradient(circle_at_top,rgba(217,164,65,0.10),transparent_40%),#120f0c] px-8 py-12 text-center md:px-16">
          <p className="text-sm tracking-[0.3em] text-[#d9a441]">
            STAY CONNECTED
          </p>

          <h2 className="mt-5 text-3xl font-semibold text-[#fff5e3] md:text-4xl">
            Play with <span className="text-[#d9a441]">Hey Margaux</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#a88b61] md:text-base">
            Use my official link to access bonuses, follow my streams, and stay
            updated with promos and giveaways.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://stake.com/?c=byemargaux"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[#d9a441] px-6 py-3 text-sm font-semibold text-[#120d07] transition hover:brightness-110"
            >
              Claim Bonus & Play
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
      </div>
    </div>
  );
}