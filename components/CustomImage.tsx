import Image from "next/image";
import React from "react";

interface Props {
  imgUrl: string;
  className: string;
}

const CustomImage = ({ imgUrl, className }: Props) => {
  return (
      <div className={`${className} relative`}>
        <Image
        src={imgUrl}
        alt={imgUrl}
        fill
        className="rounded-full object-cover"
        />
      </div>
  );
};

export default CustomImage;
