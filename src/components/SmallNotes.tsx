import { poppins } from "utils/fonts";
import { SectionWithTitle } from "./SectionWIthTitle/SectionWithTitle";

interface IPost {
  title: string;
  category: string;
}

const Post: React.FC<IPost> = ({ title, category }) => {
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

const POSTS = [
  {
    title: '"Definitely not jet lagged"',
    category: "Lifestyle",
  },
  {
    title: "What surprised us about Buddhism",
    category: "Religion",
  },
  {
    title: "10 local things we know about Thailand",
    category: "Culture",
  },
  {
    title: "Yes or no to social media?",
    category: "Lifestyle",
  },
];

export const SmallNotes: React.FC = () => {
  return (
    <SectionWithTitle title="Small Notes" greyBackground>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-12 gap-x-16">
        {POSTS.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </div>
    </SectionWithTitle>
  );
};
