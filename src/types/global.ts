import { Document } from "@contentful/rich-text-types";

export interface Author {
  name: string;
}

export interface Image {
  url: string;
  description: string;
}

export interface Post {
  title: string;
  slug: string;
  smallIntro: string;
  thumbnailImage?: Image;
  mainImage: Image;
  category: string;
  richtext: Document;
  date: Date;
  author: Author;
}
