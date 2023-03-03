import Image from "next/image";
import overlayImage from "../../../public/images/overlay-image.png";

export const Images = () => {
  return (
    <div className="absolute xl:-top-24 left-1/2 xl:left-10 transform -translate-x-1/2 xl:-translate-x-0">
      <div className="relative h-[900px] w-[900px] xl:h-[650px] xl:w-[700px]">
        <Image
          src={overlayImage}
          alt="collage of 2 images, one is davide, the other is the tip of a floating boat"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
