import { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { TwitterIcon } from "icons/Twitter";
import { InstagramIcon } from "icons/Instagram";

interface IPost {
  title: string;
  intro: string;
  image: string;
  category: string;
  date: Date;
}

const Post: React.FC<IPost> = ({ title, intro, image, category, date }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-[200px] w-[200px] bg-[red]">Image </div>
    </div>
  );
};

interface SectionWithThreePostsProps {
  title: string;
  posts: IPost[];
}

export const SectionWithThreePosts: React.FC<SectionWithThreePostsProps> = ({
  title,
  posts,
}) => {
  return (
    <div className="flex flex-col py-20 px-40">
      <h1 className="text-lg bold">{title}</h1>
      <div className="flex">
        {posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </div>
    </div>
  );
};
