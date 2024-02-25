import Link from "next/link";
import Image from "next/image";

import { Copyright, Linkedin, Github, Mail } from "lucide-react";

// import Github from "@/public/github.svg";
// import Linkedin from "@/public/linkedin.svg";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="py-4 mt-auto bg-background-light border-t-2 border-gray-300">
      <div className="container flex flex-wrap items-center justify-between gap-5">
        <p className="flex items-center text-sm font-medium text-accent-light">
          <span className="flex items-center gap-1 mr-1">
            <Copyright size={20} /> {date}
          </span>
          Mohammed Atallah
        </p>

        {/* Social links */}
        <div className="flex items-center gap-2">
          <Link
            href={"https://www.linkedin.com/in/mo-atallah"}
            target="_blank"
            className={`flex justify-center items-center`}
          >
            {/* <Image src={Linkedin} fill alt="Linkedin Icon" /> */}
            <div className="bg-blue-600 text-white rounded-full p-2">
              <Linkedin size={20} />
            </div>
          </Link>

          <Link
            href={"https://www.github.com/MohammedAtallahhh"}
            target="_blank"
            className={`rounded-md flex justify-center items-center`}
          >
            {/* <Image src={Github} fill alt="Github Icon" /> */}
            <div className="bg-black text-white rounded-full p-2">
              <Github size={20} />
            </div>
          </Link>

          {/* Gmail */}
          <Link
            href="mailto:mohamedatallahh2017@gamil.com"
            className="flex items-center gap-2 group"
          >
            <div className="bg-red-600 text-white rounded-full p-2">
              <Mail size={20} />
            </div>
            <span className="text-red-600 text-sm transition-colors hidden md:inline">
              mohamedatallahh2017@gmail.com
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
