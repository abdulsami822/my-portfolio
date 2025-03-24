export const blogConfig = {
  postsPerPage: 6,
  postsDirectory: "content/blog",
  defaultAuthor: "Abdul Sami",
  defaultOgImage: "/og-image.png",
  dateFormat: "MMMM dd, yyyy",
};

export type BlogFrontmatter = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  image?: string;
  author?: string;
};
