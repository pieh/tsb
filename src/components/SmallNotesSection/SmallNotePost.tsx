import { poppins } from "utils/fonts";
import type { Post as IPost } from "types/global";

export const SmallNotePost: React.FC<IPost> = ({ title, category }) => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="text-3xl mb-2 lg:mb-4">{title}</h3>
      <div
        className="flex items-center uppercase tracking-widest text-xs text-gray-400"
        style={poppins.style}
      >
        <span>{category}</span>
      </div>
    </div>
  );
};
