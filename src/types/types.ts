export type Category = {
  name: string;
  slug: string;
};

export type Author = {
  name: string;
  slug: string;
};

export type HeroImage = {
  altText: string;
  href: string;
};

export type Article = {
  headline: string;
  slug: string;
  description: string;
  publishDate: Date;
  tags: string[];
  category: Category;
  authors: Author[];
  heroImage: HeroImage;
  introParagraph?: string;
  content: any;
};

export type Assets = any;

export type Quotes = any;

export type Content = {
  articles: Article[];
  categories: Category[];
  authors: Author[];
  tags: string[];
};
