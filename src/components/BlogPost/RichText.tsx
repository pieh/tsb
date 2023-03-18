import { PropsWithChildren } from "react";
import Image from "next/image";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  MARKS,
  Document,
  Block,
  Inline,
} from "@contentful/rich-text-types";

const Bold: React.FC<PropsWithChildren> = ({ children }) => (
  <span className="rich-text-copy font-bold">{children}</span>
);

const Text: React.FC<PropsWithChildren> = ({ children }) => (
  <p className="rich-text-copy">{children}</p>
);

const Asset: React.FC<{ block: Block | Inline }> = ({ block }) => {
  const file = block.data.target.fields.file;
  const imageUrl = `https:${file.url}`;

  return (
    <Image
      className="mx-auto my-8 lg:my-16 loading-background"
      src={imageUrl}
      alt={file.description || "image from the post"} // @TODO Check for descriptions
      height={file.details.image.height}
      width={file.details.image.width}
    />
  );
};

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children: any) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (block) => <Asset block={block} />,
  },
};

export const RichText: React.FC<{ richtext: Document }> = ({ richtext }) => {
  return (
    <div className="flex flex-col gap-y-16 text-2xl">
      {documentToReactComponents(richtext, options)}
    </div>
  );
};
