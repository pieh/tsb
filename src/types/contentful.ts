import { Asset } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface ContentfulPostFields {
  title: string;
  slug: string;
  smallIntro: string;
  thumbnailImage: Asset;
  mainImage: Asset;
  category: string;
  richtext: Document;
  date: Date;
  nextPost: { fields: Omit<ContentfulPostFields, "nextPost"> };
}
