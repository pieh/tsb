import Image from "next/image";
import logoPic from "../../../public/images/logo-black.png";
import { NewsletterForm } from "./NewsletterForm";
import { Images } from "./Images";

export const WebsiteUnderConstruction = () => {
  return (
    <div className="h-screen w-screen bg-orange-100">
      <div className="w-full xl:w-3/4 xl:mx-auto flex flex-col lg:flex-row lg:items-center">
        <div className="w-3/4 mx-auto xl:w-1/2 flex flex-col">
          <div className="relative h-48 w-7/12 mb-8 ml-4">
            <Image
              src={logoPic}
              alt="the scrapbooker logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="py-10 px-16 bg-[#7EBDD5] rounded-3xl">
            <h2 className="text-4xl font-semibold mb-4">
              Subscribe to our newsletter, <br />
              and follow us around.
            </h2>

            <p className="text-xl mb-8 leading-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              ad vitae dolorum vel. Commodi aliquam quam nihil assumenda nostrum
              architecto culpa iure libero error ad vel laboriosam, dolores
              repellendus nisi.
            </p>

            <NewsletterForm />
          </div>
        </div>

        <div className="w-1/2 h-[300px] w-screen relative bg-orange-100">
          <Images />
        </div>
      </div>
    </div>
  );
};
