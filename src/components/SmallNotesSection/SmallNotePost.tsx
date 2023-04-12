import Link from "next/link";
import { poppins } from "utils/fonts";
import type { Post as IPost } from "types/global";

export const SmallNotePost: React.FC<IPost> = ({ title, category, slug }) => {
  return (
    <div className="flex flex-col w-full">
      <Link href={`/post/${slug}`}>
        <h3 className="text-3xl mb-2 lg:mb-4">{title}</h3>
      </Link>
      <div
        className="flex items-center uppercase tracking-widest text-xs text-gray-400"
        style={poppins.style}
      >
        <span>{category}</span>
      </div>
    </div>
  );
};
