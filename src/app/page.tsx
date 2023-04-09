import { Hero } from "components/Hero";
import FeaturedPostsSection from "components/FeaturedPostsSection/FeaturedPostsSection";
import { SmallNotes } from "components/SmallNotes";
import { AboutUsSection } from "components/AboutUsSection";
import { Footer } from "components/Footer";
import { Suspense } from "react";
import { FeaturedPostsSectionSkeleton } from "components/FeaturedPostsSection/FeaturedPostsSectionSkeleton";

export const metadata = {
  title: "Home | The Scrapbookers",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <Suspense fallback={<FeaturedPostsSectionSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <FeaturedPostsSection />
      </Suspense>

      <SmallNotes />

      {/* <CategoriesSection /> */}

      <AboutUsSection />

      <Footer />
    </div>
  );
}
