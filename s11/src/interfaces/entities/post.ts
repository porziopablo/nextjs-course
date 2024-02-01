export interface Post {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  content: string;
  isFeatured?: boolean;
  image?: string;
}
