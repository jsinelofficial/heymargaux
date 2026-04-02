import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllArticles, getArticleBySlug } from "../../../lib/articles";

export function generateStaticParams() {
  const articles = getAllArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const html = await marked(article.content);

  return (
    <div className="min-h-screen bg-[#0b0908] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#d9a441] transition hover:text-[#f2c46b]"
        >
          ← Back to Articles
        </Link>

        <div className="mt-8 rounded-[32px] border border-[#2f2418] bg-[linear-gradient(180deg,#171311_0%,#14110f_100%)] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)] md:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full border border-[#4f3918] bg-[#1b140f] px-3 py-1 text-xs font-medium text-[#d9a441]">
              {article.category}
            </span>
            <span className="text-sm text-[#8f7758]">{article.date}</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#f8f0e5] md:text-5xl">
            {article.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#b79b70]">
            {article.description}
          </p>

          <div className="mt-10 h-px w-full bg-[#2a1f14]" />

          <article
            className="
              article-content
              mt-10
              max-w-none
              text-[#d0b894]
              [&_h1]:mt-12 [&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:leading-tight [&_h1]:text-[#f8f0e5]
              [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:text-[#f2e7d6]
              [&_h3]:mt-10 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:leading-tight [&_h3]:text-[#f2e7d6]
              [&_p]:mt-5 [&_p]:text-[17px] [&_p]:leading-9 [&_p]:text-[#d0b894]
              [&_strong]:font-semibold [&_strong]:text-[#fff6e8]
              [&_a]:font-medium [&_a]:text-[#d9a441] [&_a]:underline [&_a]:underline-offset-4
              [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6
              [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-6
              [&_li]:text-[17px] [&_li]:leading-8 [&_li]:text-[#d0b894]
              [&_blockquote]:mt-8 [&_blockquote]:border-l-2 [&_blockquote]:border-[#d9a441] [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-[#e6c58d]
              [&_hr]:my-10 [&_hr]:border-[#2a1f14]
              [&_code]:rounded-md [&_code]:bg-[#1b1613] [&_code]:px-2 [&_code]:py-1 [&_code]:text-[15px] [&_code]:text-[#f2c46b]
            "
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="mt-14 rounded-[28px] border border-[#3a2a14] bg-[radial-gradient(circle_at_top,rgba(217,164,65,0.10),transparent_40%),#120f0c] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c58b3a]">
              Ready to play?
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#fff5e3] md:text-3xl">
              Use code <span className="text-[#d9a441]">byemargaux</span> and play through my official link
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a88b61]">
              Join through the official Hey Margaux flow for bonus access, community perks, and promo updates.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://stake.com/?c=byemargaux"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[#d9a441] px-5 py-3 text-sm font-semibold text-[#120d07] transition hover:brightness-110"
              >
                Claim Bonus & Play
              </a>
              <a
                href="https://www.heymargaux.xyz/"
                className="rounded-xl border border-[#5f4219] bg-[#17110d]/80 px-5 py-3 text-sm font-semibold text-[#f0d5a1] transition hover:border-[#8b6221] hover:bg-[#1d1610]"
              >
                Back to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}