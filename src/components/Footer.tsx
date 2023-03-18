import Image from "next/image";
import Link from "next/link";

import logoPic from "../../public/images/logo-black.png";
import { NewsletterForm } from "./NewsletterForm";

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center xl:items-start pt-16 lg:pt-24 pb-10 xl:px-48 mt-10 lg:mt-16 bg-[#7EBDD5]">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-24 px-12 xl:px-0 w-full">
        <p className="text-center lg:text-left text-4xl">
          Subscribe to our newsletter, <br />
          and follow us around.
        </p>

        <NewsletterForm />
      </div>
      <Link className="relative h-20 w-56" href="/" target="_blank">
        <Image
          src={logoPic}
          alt="the scrapbooker logo"
          sizes="100%"
          fill
          style={{ objectFit: "contain" }}
        />
      </Link>
    </div>
  );
};
