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
  excerpt: string;
  content: string;
};

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

    return {
      title: (data.title as string) || "",
      description: (data.description as string) || "",
      date: (data.date as string) || "",
      slug: (data.slug as string) || fileName.replace(/\.md$/, ""),
      category: (data.category as string) || "Articles",
      excerpt: (data.excerpt as string) || "",
      content,
    };
  });
}

export function getArticleBySlug(slug: string): Article | undefined {
  const articles = getAllArticles();
  return articles.find((article) => article.slug === slug);
}