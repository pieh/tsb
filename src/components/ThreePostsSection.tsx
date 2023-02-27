import format from "date-fns/format";
import Image from "next/image";
import { SectionWithTitle } from "./SectionWithTitle";

interface IPost {
  title: string;
  intro: string;
  image: string;
  category: string;
  date: Date;
}

// Maybe leverage components to perform their own api call as they can all be separate

const Post: React.FC<IPost> = ({ title, intro, image, category, date }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full aspect-square relative">
        <Image
          fill
          src={image}
          alt="man doing something"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex items-center mt-4 text-gray-400 uppercase tracking-widest">
        <span>{category}</span>
        <div className="border-r-2 h-2 mx-2" />
        <span>{format(date, "MMMM dd, yyyy")}</span>
      </div>
      <h3 className="text-3xl mt-4 text-black">{title}</h3>
      <span className="text-xl mt-4 text-gray-500">{intro}</span>
    </div>
  );
};

interface ThreePostsSectionProps {
  title: string;
  posts: IPost[];
}

export const ThreePostsSection: React.FC<ThreePostsSectionProps> = ({
  title,
  posts,
}) => {
  return (
    <SectionWithTitle title={title}>
      <div className="flex gap-x-16">
        {posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </div>
    </SectionWithTitle>
  );
};
