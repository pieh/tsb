import { poppins } from "utils/fonts";
import Image from "next/image";
import Link from "next/link";

import logoPic from "../../public/images/logo-black.png";
import { NewsletterForm } from "./NewsletterForm";

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col pt-24 pb-10 px-48 mt-16 bg-[#7EBDD5]">
      <div className="flex items-center justify-between mb-24">
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
          sizes="100vw"
          fill
          style={{ objectFit: "contain" }}
        />
      </Link>
    </div>
  );
};
