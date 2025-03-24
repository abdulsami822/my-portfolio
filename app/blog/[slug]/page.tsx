import { getPostBySlug, getAllPosts } from "@/lib/blog-utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { blogConfig } from "@/lib/blog.config";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.frontmatter.title} | Blog`,
    description: post.frontmatter.summary,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author || blogConfig.defaultAuthor],
      images: [post.frontmatter.image || blogConfig.defaultOgImage],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Remove the title from MDX content to avoid duplication
  const contentWithoutTitle = post.content.replace(/^#\s+.*$/m, "");

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-background to-background/80">
      <section className="w-full py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-all group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <article className="space-y-8">
              <header className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm  p-8">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90">
                    {post.frontmatter.title}
                  </span>
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-white/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.frontmatter.date} className="text-sm">
                      {format(
                        new Date(post.frontmatter.date),
                        blogConfig.dateFormat
                      )}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <div className="flex flex-wrap gap-2">
                      {post.frontmatter.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20 transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </header>

              <div
                className="prose prose-invert prose-lg max-w-none bg-black/20 backdrop-blur-sm  rounded-xl p-8 shadow-xl 
                prose-headings:text-white/90 
                prose-p:text-white/70 
                prose-strong:text-white/90
                prose-code:text-white/90
                prose-code:bg-white/10 
                prose-code:px-1.5 
                prose-code:py-0.5 
                prose-code:rounded-md
                prose-a:text-[hsl(var(--primary))] 
                hover:prose-a:text-[hsl(var(--primary))]/80 
                prose-a:transition-colors
                prose-pre:bg-black/40
                prose-pre:border
                prose-pre:border-white/10
                prose-img:rounded-xl
                prose-img:shadow-xl"
              >
                <MDXRemote source={contentWithoutTitle} />
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
