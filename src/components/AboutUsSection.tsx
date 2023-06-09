import { poppins } from "utils/fonts";
import Image from "next/image";

import aboutUsPic from "../../public/images/about-us.jpg";
import Link from "next/link";

export const AboutUsSection: React.FC = () => {
  return (
    <div className="lg:h-[450px] xl:h-[500px] flex flex-col-reverse lg:flex-row gap-8 my-16 w-full xl:w-11/12">
      <div className="bg-gray-100 flex flex-col justify-center items-end w-full lg:w-7/12 xl:w-2/3 py-16 xl:py12 px-6 lg:p-12 xl:p-24">
        <div>
          <h6
            style={poppins.style}
            className="mb-4 xl:mb-12 uppercase font-semibold text-gray-400 text-sm tracking-widest"
          >
            About us
          </h6>
          <p className="text-left text-3xl lg:max-w-[650px] mb-4 xl:mb-12 ">
            We are Davide and Beatrice, a software engineer and a freelance
            designer. We have just started our journey around the world and
            wanted to find a way to keep our family and close friends up to date
            on our whereabouts by sharing a few of our stories.
          </p>
          <Link
            className="h-16 w-56 flex justify-center items-center bg-black text-white"
            href="/post/a-lil-introduction"
            style={poppins.style}
          >
            <span>Why we did this</span>
          </Link>
        </div>
      </div>

      <div className="mx-6 lg:mx-0 lg:w-5/12 xl:w-1/4 h-[500px] lg:h-full relative">
        <Image
          src={aboutUsPic}
          alt="us taking a selfie in the jungle"
          placeholder="blur"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
