import Image from "next/image";
import logoPic from "../../../public/images/logo.gif";
import { NewsletterForm } from "./NewsletterForm";
import { Images } from "./Images";

export const WebsiteUnderConstruction = () => {
  return (
    <div className="h-screen w-screen bg-orange-100">
      <div className="w-full xl:h-full xl:w-10/12 xl:mx-auto flex flex-col lg:flex-row lg:items-center">
        <div className="mt-24 xl:mt-0 w-3/4 xl:flex-1 mx-auto xl:mx-0 flex flex-col">
          <div className="relative h-48 w-full xl:w-10/12 mb-8 xl:-ml-6">
            <Image
              src={logoPic}
              alt="the scrapbooker logo"
              fill
              sizes="100vw"
              unoptimized
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="mt-8 xl:mt-0 py-20 xl:py-12 px-16 bg-[#7EBDD5] rounded-3xl">
            <h2 className="text-6xl xl:text-4xl font-semibold mb-4">
              Subscribe to our newsletter, <br />
              and follow us around.
            </h2>

            <p className="text-4xl leading-10 xl:text-xl xl:leading-6 mb-16 xl:mb-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              ad vitae dolorum vel. Commodi aliquam quam nihil assumenda nostrum
              architecto culpa iure libero error ad vel laboriosam, dolores
              repellendus nisi.
            </p>

            <NewsletterForm />
          </div>
        </div>

        <div className="xl:flex-1 h-[300px] w-screen relative bg-orange-100 mt-18">
          <Images />
        </div>
      </div>
    </div>
  );
};
