import type { Image } from "types/global";
import type { Asset } from "contentful";

export function extractImageDataFromContentfulAsset(
  contentfulAsset: Asset
): Image {
  return {
    url: `https:${contentfulAsset.fields.file.url}`,
    description: contentfulAsset.fields.description,
    details: {
      height: contentfulAsset.fields.file.details.image?.height,
      width: contentfulAsset.fields.file.details.image?.width,
    },
  };
}
