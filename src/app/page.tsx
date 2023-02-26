import { Hero } from "components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <h1 className="text-3xl font-bold underline">
        The Scrapbookers Blog is officially live
      </h1>
    </div>
  );
}
