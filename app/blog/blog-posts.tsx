"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { format } from "date-fns";
import { blogConfig } from "@/lib/blog.config";
import { BlogPost } from "@/lib/types/blog";

export default function BlogPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-background to-background/80">
      <section className="w-full py-16 relative overflow-hidden">
        {/* Background elements */}
        <div
          className="absolute top-0 right-0 w-full h-full bg-[hsl(var(--primary))]/2 blur-[180px] -z-10 opacity-30 animate-pulse"
          style={{ animationDuration: "40s" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-[hsl(var(--accent))]/2 blur-[180px] -z-10 opacity-20 animate-pulse"
          style={{ animationDuration: "50s", animationDelay: "2s" }}
        ></div>

        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90">
                Blog
              </span>
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </h1>

            <div className="grid gap-8 mt-12">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl bg-black/40 backdrop-blur-md border border-white/10"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors">
                      {post.frontmatter.title}
                    </h2>
                  </Link>
                  <div className="text-sm text-white/60 mb-4">
                    {format(
                      new Date(post.frontmatter.date),
                      blogConfig.dateFormat
                    )}
                  </div>
                  <p className="text-white/70 mb-4">
                    {post.frontmatter.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.frontmatter.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
