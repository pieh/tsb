import { Asset } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface CotentfulAuthor {
  fields: {
    name: string;
  };
}

export interface ContentfulPostFields {
  title: string;
  slug: string;
  keywords: string[];
  smallIntro: string;
  thumbnailImage: Asset;
  mainImage: Asset;
  category: string;
  richtext: Document;
  date: Date;
  nextPost: { fields: Omit<ContentfulPostFields, "nextPost"> };
  author: CotentfulAuthor;
}
