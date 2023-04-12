import { Hero } from "components/Hero";
import FeaturedPostsSection, {
  FeaturedPostsSectionSkeleton,
} from "components/FeaturedPostsSection/FeaturedPostsSection";
import SmallNotesSection, {
  SmallNotesSectionSkeleton,
} from "components/SmallNotesSection/SmallNotesSection";
import { AboutUsSection } from "components/AboutUsSection";
import { Footer } from "components/Footer";
import { Suspense } from "react";

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

      <Suspense fallback={<SmallNotesSectionSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <SmallNotesSection />
      </Suspense>

      {/* <CategoriesSection /> */}

      <AboutUsSection />

      <Footer />
    </div>
  );
}
