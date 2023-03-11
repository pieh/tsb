import format from "date-fns/format";
import Image from "next/image";
import Link from "next/link";
import { poppins } from "utils/fonts";
import { Post } from "types/global";
import { RichText } from "./RichText";

interface GetPostResponse {
  post: Post;
  nextPost: Pick<Post, "title" | "slug" | "date" | "mainImage" | "smallIntro">;
}

async function getPost(slug: string): Promise<GetPostResponse> {
  const url = `${process.env.baseUrl}/post/api/${slug}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface BlogPostProps {
  slug: string;
}

// const TAGS = ['smallNote', 'nature', 'smallNoteHome', 'featured']
// const EXCLUDE_TAGS = ['smallNote', 'smallnoteHome', 'featured']

export default async function BlogPost({ slug }: BlogPostProps) {
  const { post, nextPost } = await getPost(slug);

  return (
    <div className="flex flex-col py-12">
      <div className="flex flex-col items-center">
        <div
          className={`py-2 px-4 flex items-center mt-4 bg-gray-100 text-gray-400 uppercase tracking-wider font-600 rounded-full ${poppins.className}`}
        >
          <span>{post.category}</span>
          <div className="border-r-2 h-2 mx-2 border-gray-400" />
          <span>{format(new Date(post.date), "MMMM dd, yyyy")}</span>
        </div>

        <h1 className="my-12 text-6xl font-semibold text-center text-black">
          {post.title}
        </h1>
      </div>

      <div className="relative mt-24 mb-24 w-full h-96">
        <Image
          sizes="100%"
          fill
          src={post.mainImage.url}
          alt="main picutre" // @TODO ee if we can use description to make it more accessible
          style={{ objectFit: "cover" }}
        />
      </div>

      <RichText richtext={post.richtext} />

      <p className="w-[720px] mx-auto border-t border-t-gray-200 mt-16 pt-16 text-2xl">
        {/* @TODO Add authors to posts */}
        <span className="text-gray-500">Written by</span> Beatrice Cox
      </p>

      {/* <div className='flex'>
        {[0,1,]}
        <div>

        </div>
      </div> */}

      {nextPost && (
        <div className="w-[1240px] mx-auto mt-24 flex flex-col">
          <Link
            href={`/post/${nextPost.slug}`}
            className="w-full h-[380px] relative"
          >
            <Image
              sizes="100%"
              fill
              src={nextPost.mainImage.url}
              alt="main picutre" // @TODO see if we can use description to make it more accessible
              style={{ objectFit: "cover" }}
            />
          </Link>

          <div
            className={`mt-8 mb-6 text-gray-400 uppercase tracking-wider font-600 rounded-full ${poppins.className}`}
          >
            <span>{format(new Date(nextPost.date), "MMMM dd, yyyy")}</span>
          </div>

          <Link href={`/post/${nextPost.slug}`}>
            <h1 className="text-5xl font-semibold text-black">{post.title}</h1>
          </Link>

          <span className="text-xl mt-8 text-gray-500 w-3/4">
            {nextPost.smallIntro}
          </span>
        </div>
      )}
    </div>
  );
}
