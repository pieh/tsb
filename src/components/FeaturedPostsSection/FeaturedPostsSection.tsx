import type { Post as IPost } from "types/global";
import { SectionWithTitle } from "../SectionWIthTitle/SectionWithTitle";
import { Post } from "./Post";

async function getFeaturedPosts(): Promise<{ posts: IPost[] }> {
  const url = `${process.env.baseUrl}/post/api?tag=featured`;
  const res = await fetch(url, { next: { revalidate: 86400 } });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function FeaturedPostsSection() {
  const { posts } = await getFeaturedPosts();

  return (
    <SectionWithTitle title="Our recent thoughts">
      <div className="flex flex-col lg:flex-row gap-y-16 lg:gap-x-16">
        {posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </div>
    </SectionWithTitle>
  );
}
