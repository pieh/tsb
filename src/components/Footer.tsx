import { poppins } from "utils/fonts";
import Image from "next/image";
import Link from "next/link";

import logoPic from "../../public/images/logo-black.png";
import { NewsletterForm } from "./NewsletterForm";

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col pt-24 pb-10 px-48 mt-16 bg-sky-300">
      <div className="flex justify-between mb-24">
        <p className="text-4xl">
          Subscribe to our newsletter, <br />
          and follow us around.
        </p>

        <NewsletterForm />
      </div>
      <Link className="relative h-20 w-56" href="/" target="_blank">
        <Image
          src={logoPic}
          alt="the scrapbooker logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </Link>
      {/* <div className="bg-gray-100 flex flex-col items-end w-2/3 p-24">
        <div>
          <h6
            className={`mb-16 uppercase font-semibold text-gray-600 text-sm tracking-widest ${poppins.className}`}
          >
            About us
          </h6>
          <p className="text-left text-3xl max-w-[650px]">
            We are Davide and Beatrice, a software engineer and a freelance
            designer. We have just started our journey around the world and
            wanted to find a way to keep our family and close friends up to date
            on our whereabouts by sharing a few of our stories.
          </p>
        </div>
      </div>

      <div className="w-1/4 h-full relative bg-[red]">
        <Image
          src={aboutUsPic}
          alt="us taking a selfie in the jungle"
          placeholder="blur"
          fill
          style={{ objectFit: "cover" }}
        />
      </div> */}
    </div>
  );
};
