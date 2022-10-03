export type Category = {
  name: string;
  slug: string;
};

export type Author = {
  name: string;
  slug: string;
};

export type Article = {
  headline: string;
  slug: string;
  description: string;
  tags: string[];
  category: Category;
  authors: Author[];
  heroImage: string;
  content: any;
};
