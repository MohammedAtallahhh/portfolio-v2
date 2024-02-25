"use client";

import Image from "next/image";
import React from "react";

interface FadedImageProps {
  src: string;
  width: number;
  height: number;
}

const FadedImage: React.FC<FadedImageProps> = ({ src, width, height }) => {
  return (
    <>
      {src && (
        <Image
          src={src}
          className="rounded-2xl w-full border-2 border-imgborder bg-cover opacity-0 transition-opacity duration-200"
          width={width}
          height={height}
          alt="Portrait of Mohammad Atallah"
          priority
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      )}
    </>
  );
};

export default FadedImage;
