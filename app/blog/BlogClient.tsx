"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Article } from "../../lib/articles";

const CATEGORY_COLORS: Record<string, string> = {
  guides:  "from-emerald-900/80 to-[#0e0b09]",
  bonuses: "from-yellow-900/80 to-[#0e0b09]",
  review:  "from-blue-900/80 to-[#0e0b09]",
  streams: "from-violet-900/80 to-[#0e0b09]",
};

const CATEGORY_ICONS: Record<string, string> = {
  guides:  "📖",
  bonuses: "🎁",
  review:  "🔍",
  streams: "🎮",
};

function getCategoryGradient(categorySlug: string) {
  return CATEGORY_COLORS[categorySlug] ?? "from-[#3a2a10]/80 to-[#0e0b09]";
}

function getCategoryIcon(categorySlug: string) {
  return CATEGORY_ICONS[categorySlug] ?? "📄";
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogClient({ articles }: { articles: Article[] }) {
  const allCategories = useMemo(
    () => ["All", ...Array.from(new Set(articles.map((a) => a.category))).sort()],
    [articles]
  );

  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? articles
        : articles.filter((a) => a.category === activeCategory),
    [activeCategory, articles]
  );

  return (
    <>
      {/* Category tabs */}
      <div className="mt-10 flex flex-wrap gap-2">
        {allCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              activeCategory === cat
                ? "bg-[#d9a441] text-[#120d07]"
                : "border border-[#2f2418] bg-[#15110d] text-[#b69561] hover:border-[#d9a441]/40 hover:text-[#f3d7a0]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.categorySlug}/${article.slug}`}
            className="group flex flex-col overflow-hidden rounded-[24px] border border-[#2f2418] bg-[#15110d] shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition hover:border-[#4a3520] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Card image area */}
            <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${getCategoryGradient(article.categorySlug)}`}>
              <span className="text-6xl opacity-60">{getCategoryIcon(article.categorySlug)}</span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#15110d] to-transparent" />
            </div>

            {/* Card body */}
            <div className="flex flex-1 flex-col p-6">
              <span className="inline-flex w-fit rounded-full border border-[#4f3918] bg-[#1b140f] px-3 py-1 text-xs font-medium text-[#d9a441]">
                {article.category}
              </span>

              <h2 className="mt-4 text-lg font-semibold leading-snug text-[#f2e7d6] transition group-hover:text-white">
                {article.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#a88b61] line-clamp-2">
                {article.excerpt}
              </p>

              <div className="mt-auto flex items-center justify-between pt-5">
                <div>
                  <p className="text-xs text-[#6f5a3a]">Published at</p>
                  <p className="text-xs font-semibold text-[#a88b61]">{formatDate(article.date)}</p>
                </div>
                <span className="text-sm font-medium text-[#d9a441] transition group-hover:text-[#f2c46b]">
                  Read →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-sm text-[#6f5a3a]">No articles in this category yet.</p>
      )}
    </>
  );
}
