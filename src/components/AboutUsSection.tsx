import { poppins } from "utils/fonts";
import Image from "next/image";

import aboutUsPic from "../../public/images/about-us.jpg";

export const AboutUsSection: React.FC = () => {
  return (
    <div className="h-[500px] flex gap-8 my-16 w-5/6">
      <div className="bg-gray-100 flex flex-col items-end w-2/3 p-24">
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
      </div>
    </div>
  );
};
