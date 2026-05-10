import type { NextConfig } from "next";
import { getAllArticles } from "./lib/articles";

const articles = getAllArticles();

const nextConfig: NextConfig = {
  async redirects() {
    const articleRedirects = articles.map((article) => ({
      source: `/articles/${article.slug}`,
      destination: `/blog/${article.categorySlug}/${article.slug}`,
      permanent: true,
    }));

    return [
      { source: "/articles", destination: "/blog", permanent: true },
      ...articleRedirects,
    ];
  },
};

export default nextConfig;
