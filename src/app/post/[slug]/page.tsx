import { Navbar } from "components/Navbar";
import BlogPost from "components/BlogPost/BlogPost";
import { Suspense } from "react";
import { BlogPostSkeleton } from "components/BlogPost/BlogPostSkeleton";
import { Footer } from "components/Footer";

interface PostpageProps {
  params: {
    slug: string;
  };
}

export default function Post({ params: { slug } }: PostpageProps) {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<BlogPostSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <BlogPost slug={slug} />
      </Suspense>

      <Footer />
    </div>
  );
}
