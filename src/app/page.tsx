import { Hero } from "components/Hero";
import { ThreePostsSection } from "components/ThreePostsSection";
import { SmallNotes } from "components/SmallNotes";
import { CategoriesSection } from "components/CategoriesSection";
import { AboutUsSection } from "components/AboutUsSection";
import { AllBlogPosts } from "components/AllBlogPosts";
import { Footer } from "components/Footer";

const POSTS = [
  {
    title: "Similarities with the italian culture",
    intro:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet.",
    image: "https://picsum.photos/600/600",
    category: "Food",
    date: new Date("2023-02-12"),
  },
  {
    title: "The 'burning season' is real",
    intro:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet.",
    image: "https://picsum.photos/700/700",
    category: "Travel",
    date: new Date("2023-01-27"),
  },
  {
    title: "Basics of Thai language",
    intro:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet.",
    image: "https://picsum.photos/650/650",
    category: "Curiosity",
    date: new Date("2023-03-01"),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <ThreePostsSection title="Our recent thoughts" posts={POSTS} />

      <SmallNotes />

      <CategoriesSection />

      <AboutUsSection />

      <AllBlogPosts />

      <Footer />
    </div>
  );
}
