import { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { TwitterIcon } from "icons/Twitter";
import { InstagramIcon } from "icons/Instagram";

import homeHeroPic from "../../public/images/home-hero.jpg";
import logoPic from "../../public/images/logo-white.png";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center mb-28">
      <Link className="relative h-20 w-56" href="/" target="_blank">
        <Image
          src={logoPic}
          alt="the scrapbooker logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </Link>
    </div>
  );
};

interface CircularButtonLinkProps {
  href: string;
  className?: string;
}

const CircularLink: React.FC<PropsWithChildren<CircularButtonLinkProps>> = ({
  href,
  className = "",
  children,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`flex items-center justify-center rounded-full bg-white h-10 w-10 ${className}`}
    >
      {children}
    </Link>
  );
};

export const Hero = () => {
  return (
    <div className="w-full pb-40 relative bg-black text-white flex justify-center">
      <div className="flex flex-col w-7/12 z-10">
        <Navbar />
        <h1 className="text-[70px] leading-[5.5rem] font-bold w-3/4">
          Our {"'"}old school{"'"} way of keeping you up to date on our
          whereabouts
        </h1>
        <div className="flex mt-4">
          <CircularLink href="https://twitter.com/webflow" className="mr-3">
            <TwitterIcon className="text-black fill-black h-5" />
          </CircularLink>

          <CircularLink href="https://www.instagram.com/the_scrapbookers/?next=%2F&hl=en">
            <InstagramIcon className="text-black fill-black h-5" />
          </CircularLink>
        </div>
      </div>
      <Image
        src={homeHeroPic}
        alt="Picture of the author"
        placeholder="blur"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
