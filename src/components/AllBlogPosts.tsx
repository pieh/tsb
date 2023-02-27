import { SectionWithTitle } from "./SectionWithTitle";

export const AllBlogPosts: React.FC = () => {
  return (
    <SectionWithTitle title="All Blog Posts">
      <div className="flex gap-16 bg-gray-400 items-center justify-center w-full h-2=">
        <span className="uppercase">No posts yet</span>
      </div>
    </SectionWithTitle>
  );
};
