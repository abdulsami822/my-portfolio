export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    summary: string;
    tags: string[];
    image?: string;
    author?: string;
  };
  content: string;
}
