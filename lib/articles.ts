import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export type Article = {
  title: string;
  description: string;
  date: string;
  slug: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  content: string;
};

export function toCategorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs
    .readdirSync(articlesDirectory)
    .filter((fileName) => fileName.endsWith(".md"));

  return fileNames.map((fileName) => {
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const category = (data.category as string) || "Articles";
    return {
      title: (data.title as string) || "",
      description: (data.description as string) || "",
      date: (data.date as string) || "",
      slug: (data.slug as string) || fileName.replace(/\.md$/, ""),
      category,
      categorySlug: toCategorySlug(category),
      excerpt: (data.excerpt as string) || "",
      content,
    };
  });
}

export function getArticleBySlug(slug: string): Article | undefined {
  const articles = getAllArticles();
  return articles.find((article) => article.slug === slug);
}

export function getArticleByCategoryAndSlug(categorySlug: string, slug: string): Article | undefined {
  const articles = getAllArticles();
  return articles.find(
    (article) => article.categorySlug === categorySlug && article.slug === slug
  );
}