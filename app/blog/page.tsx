import { getAllPosts } from "@/lib/blog-utils";
import BlogPosts from "./blog-posts";
import { BlogPost } from "@/lib/types/blog";

export const metadata = {
  title: "Blog | Abdul Sami - Frontend Developer",
  description:
    "Technical articles about frontend development, React, and web performance.",
};

export default async function BlogPage() {
  const posts = (await getAllPosts()) as BlogPost[];
  return <BlogPosts posts={posts} />;
}
