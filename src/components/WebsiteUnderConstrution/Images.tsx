import Image from "next/image";
import overlayImage from "../../../public/images/overlay-image.png";

export const Images = () => {
  return (
    <div className="absolute xl:-top-20 left-1/2 transform -translate-x-1/2">
      <div className="relative h-[600px] w-[600px] xl:h-[800px] xl:w-[800px]">
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
