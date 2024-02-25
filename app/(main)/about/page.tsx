import Image from "next/image";
import React from "react";

import profile from "@/public/profile.png";
import FadedImage from "@/components/ui/FadedImage";

const AboutPage = () => {
  return (
    <main className="">
      <header className="border-b-2 border-gray-300 pb-10 flex flex-col-reverse md:flex-row md:items-center justify-between">
        <div className="mt-8 md:mr-12 md:mt-0">
          <h1 className="font-heading text-4xl md:text-7xl mb-4">Hey</h1>
          <h2 className="font-subheading text-xl md:text-2xl">
            I am a skilled web developer living in Egypt
          </h2>
        </div>
        <div className="max-w-[350px] sm:min-w-[250px]">
          <FadedImage
            src={profile.src}
            width={profile.width}
            height={profile.height}
          />
        </div>
      </header>
    </main>
  );
};

export default AboutPage;
