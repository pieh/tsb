import { NewsletterForm } from "./NewsletterForm";

export const WebsiteUnderConstruction = () => {
  return (
    <div className="h-screen w-screen bg-[red] flex items-center p-24 gap-12">
      <div className="w-2/3">
        <p className="text-xl mb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore ad
          vitae dolorum vel. Commodi aliquam quam nihil assumenda nostrum
          architecto culpa iure libero error ad vel laboriosam, dolores
          repellendus nisi.
        </p>

        <NewsletterForm />
      </div>

      <div className="w-1/3">Pics</div>
    </div>
  );
};
