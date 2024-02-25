import Image from "next/image";
import React from "react";

import profile from "@/public/profile.png";

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
          <Image
            src={profile}
            className="rounded-2xl w-full border-2 border-imgborder bg-cover"
            width={1000}
            height={800}
            alt="Portrait of Mohammad Atallah"
            priority
          />
        </div>
      </header>
    </main>
  );
};

export default AboutPage;
