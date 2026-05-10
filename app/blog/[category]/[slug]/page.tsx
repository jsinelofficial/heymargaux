import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllArticles, getArticleByCategoryAndSlug } from "../../../../lib/articles";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    category: article.categorySlug,
    slug: article.slug,
  }));
}

const CATEGORY_GRADIENTS: Record<string, string> = {
  guides:  "from-emerald-900/70 via-[#1a1408] to-[#1a1408]",
  bonuses: "from-yellow-900/70 via-[#1a1408] to-[#1a1408]",
  review:  "from-blue-900/70 via-[#1a1408] to-[#1a1408]",
  streams: "from-violet-900/70 via-[#1a1408] to-[#1a1408]",
};

const CATEGORY_ICONS: Record<string, string> = {
  guides:  "📖",
  bonuses: "🎁",
  review:  "🔍",
  streams: "🎮",
};

function getCategoryGradient(slug: string) {
  return CATEGORY_GRADIENTS[slug] ?? "from-[#3a2a10]/70 via-[#1a1408] to-[#1a1408]";
}

function getCategoryIcon(slug: string) {
  return CATEGORY_ICONS[slug] ?? "📄";
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const article = getArticleByCategoryAndSlug(category, slug);
  if (!article) notFound();

  const allArticles = getAllArticles();
  const otherArticles = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 4);

  const contentWithoutTitle = article.content.replace(/^#\s+.+\n?/, "");
  const html = await marked(contentWithoutTitle);

  const articleUrl = `https://heymargaux.xyz/blog/${article.categorySlug}/${article.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Person", name: "Hey Margaux", url: "https://heymargaux.xyz" },
    publisher: { "@type": "Organization", name: "Hey Margaux", url: "https://heymargaux.xyz" },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://heymargaux.xyz" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://heymargaux.xyz/blog" },
      { "@type": "ListItem", position: 3, name: article.category, item: `https://heymargaux.xyz/blog/${article.categorySlug}` },
      { "@type": "ListItem", position: 4, name: article.title, item: articleUrl },
    ],
  };

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#0b0908] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
          <a href="https://kick.com/heymargaux" target="_blank" rel="noreferrer"
            className="rounded-xl bg-[#d9a441] px-4 py-2 text-sm font-semibold text-[#120d07] transition hover:brightness-110">
            Watch on Kick
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-[#6f5a3a]">
          <Link href="/blog" className="hover:text-[#d9a441] transition">Blog</Link>
          <span>›</span>
          <Link href={`/blog/${article.categorySlug}`} className="hover:text-[#d9a441] transition">{article.category}</Link>
          <span>›</span>
          <span className="truncate text-[#8f7758]">{article.title}</span>
        </nav>

        {/* Title */}
        <h1 className="mt-5 text-3xl font-bold leading-tight text-[#f8f0e5] md:text-4xl">
          {article.title}
        </h1>

        {/* Meta row */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#8f7758]">
            <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-[#4f3918]">
              <Image src="/margaux-icon.png" alt="Hey Margaux" width={24} height={24} className="h-full w-full object-cover" />
            </div>
            <span>Hey Margaux</span>
            <span>·</span>
            <span>{formattedDate}</span>
          </div>

          {/* Share buttons */}
          <div className="flex items-center gap-2">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2f2418] bg-[#17110d] text-[#8f7758] transition hover:border-[#d9a441]/40 hover:text-[#f3d7a0]"
              aria-label="Share on Facebook"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2f2418] bg-[#17110d] text-[#8f7758] transition hover:border-[#d9a441]/40 hover:text-[#f3d7a0]"
              aria-label="Share on X"
            >
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Featured image */}
        <div className={`mt-8 flex h-56 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${getCategoryGradient(article.categorySlug)} md:h-72`}>
          <span className="text-8xl opacity-50">{getCategoryIcon(article.categorySlug)}</span>
        </div>

        {/* Article body */}
        <article
          className="
            mt-10 max-w-none
            [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#f8f0e5]
            [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[#f2e7d6]
            [&_h4]:mt-6 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-[#f2e7d6]
            [&_p]:mt-5 [&_p]:text-base [&_p]:leading-8 [&_p]:text-[#c9a87a]
            [&_strong]:font-semibold [&_strong]:text-[#fff6e8]
            [&_a]:font-medium [&_a]:text-[#d9a441] [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-[#f2c46b]
            [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6
            [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6
            [&_li]:text-base [&_li]:leading-7 [&_li]:text-[#c9a87a]
            [&_blockquote]:mt-8 [&_blockquote]:border-l-2 [&_blockquote]:border-[#d9a441] [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-[#e6c58d]
            [&_hr]:my-10 [&_hr]:border-[#2a1f14]
            [&_code]:rounded-md [&_code]:bg-[#1b1613] [&_code]:px-2 [&_code]:py-0.5 [&_code]:text-sm [&_code]:text-[#f2c46b]
          "
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Bottom category tag */}
        <div className="mt-10 flex items-center gap-3 border-t border-[#2a1f14] pt-6">
          <Link
            href={`/blog/${article.categorySlug}`}
            className="inline-flex rounded-full border border-[#4f3918] bg-[#1b140f] px-4 py-1.5 text-sm font-medium text-[#d9a441] transition hover:border-[#d9a441]/50"
          >
            {article.category}
          </Link>
        </div>

        {/* Other Popular Articles */}
        {otherArticles.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold text-[#f8f0e5]">Other Popular Articles</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {otherArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.categorySlug}/${a.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#2f2418] bg-[#15110d] transition hover:border-[#4a3520]"
                >
                  <div className={`flex h-28 items-center justify-center bg-gradient-to-br ${getCategoryGradient(a.categorySlug)}`}>
                    <span className="text-4xl opacity-50">{getCategoryIcon(a.categorySlug)}</span>
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium text-[#d9a441]">{a.category}</span>
                    <h3 className="mt-1.5 text-sm font-semibold leading-snug text-[#f2e7d6] transition group-hover:text-white line-clamp-2">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#6f5a3a]">
                      Published at <span className="font-medium text-[#8f7758]">{new Date(a.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="mt-16 rounded-[28px] border border-[#3a2a14] bg-[radial-gradient(circle_at_top,rgba(217,164,65,0.10),transparent_40%),#120f0c] p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c58b3a]">Ready to play?</p>
          <h2 className="mt-3 text-2xl font-bold text-[#fff5e3]">
            Use code <span className="text-[#d9a441]">heymargaux</span> on Stake
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#a88b61]">
            Sign up through the official Hey Margaux link for rakeback, community perks, and monthly cash races.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="https://stake.com/?c=heymargaux&offer=heymargaux" target="_blank" rel="noreferrer"
              className="rounded-xl bg-[#d9a441] px-6 py-3 text-sm font-semibold text-[#120d07] transition hover:brightness-110">
              Claim Bonus &amp; Play
            </a>
            <Link href="/blog"
              className="rounded-xl border border-[#5f4219] bg-[#17110d]/80 px-6 py-3 text-sm font-semibold text-[#f0d5a1] transition hover:border-[#8b6221] hover:bg-[#1d1610]">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
