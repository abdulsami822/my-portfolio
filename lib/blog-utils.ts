import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { blogConfig } from "./blog.config";

export async function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), blogConfig.postsDirectory);
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace(".mdx", ""),
        frontmatter: data,
        content,
      };
    })
    .sort((a, b) => {
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    });

  return posts;
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(
    process.cwd(),
    blogConfig.postsDirectory,
    `${slug}.mdx`
  );

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
      content,
    };
  } catch (error) {
    return null;
  }
}
