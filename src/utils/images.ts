import type { Image } from "types/global";
import type { Asset } from "contentful";

export function extractImageDataFromContentfulAsset(
  contentfulAsset: Asset
): Image {
  return {
    url: `https:${contentfulAsset.fields.file.url}`,
  };
}
