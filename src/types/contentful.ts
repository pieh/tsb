import { Asset } from "contentful";

export interface ContentfulPostFields {
  title: string;
  slug: string;
  smallIntro: string;
  thumbnailImage: Asset;
  mainImage: Asset;
  category: string;
  date: Date;
}
