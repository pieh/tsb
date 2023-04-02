import { PropsWithChildren } from "react";
import Image from "next/image";
import { Block, Inline } from "@contentful/rich-text-types";

export const Bold: React.FC<PropsWithChildren> = ({ children }) => (
  <span className="rich-text-copy font-bold">{children}</span>
);

export const Text: React.FC<PropsWithChildren> = ({ children }) => (
  <p className="rich-text-copy mb-6">{children}</p>
);

export const OrderedList: React.FC<PropsWithChildren> = ({ children }) => (
  <ol className="rich-text-copy list-decimal !pl-6">{children}</ol>
);

export const ListItem: React.FC<PropsWithChildren> = ({ children }) => (
  <li className="">{children}</li>
);

interface HyperlinkProps {
  href: string;
}

export const Hyperlink: React.FC<PropsWithChildren<HyperlinkProps>> = ({
  href,
  children,
}) => {
  return (
    <a className="text-sky-600 hover:underline" href={href} target="_blank">
      {children}
    </a>
  );
};

interface HeadingProps {
  size: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading: React.FC<PropsWithChildren<HeadingProps>> = ({
  children,
  size,
}) => {
  switch (size) {
    case 1:
      return <h1 className="rich-text-heading text-5xl">{children}</h1>;
    case 2:
      return <h2 className="rich-text-heading text-4xl">{children}</h2>;
    case 3:
      return <h3 className="rich-text-heading text-3xl">{children}</h3>;
    case 4:
      return <h4 className="rich-text-heading text-2xl">{children}</h4>;
    case 5:
      return <h5 className="rich-text-heading text-xl">{children}</h5>;
    case 4:
    default:
      return <h6 className="rich-text-heading text-lg">{children}</h6>;
  }
};

export const Asset: React.FC<{ block: Block | Inline }> = ({ block }) => {
  const file = block.data.target.fields.file;
  const url = `https:${file.url}`;

  if (file.contentType.startsWith("video/")) {
    return (
      <div className="mx-auto my-8 lg:my-16 loading-background w-full lg:w-[840px] aspect-video">
        <video controls>
          <source src={url} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
    );
  }

  return (
    <Image
      className="mx-auto my-8 lg:my-16 loading-background"
      src={url}
      alt={file.description || "image from the post"} // @TODO Check for descriptions
      height={file.details.image.height}
      width={file.details.image.width}
    />
  );
};
