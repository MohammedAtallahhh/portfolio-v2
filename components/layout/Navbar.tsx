import Link from "next/link";

import { Star } from "../icons/Star";
import { NavLink } from "./NavLink";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between space-y-5 md:space-y-0 items-center mt-4 md:mt-8 md:mb-24">
      <Link href="/">
        <div className="flex flex-row items-center space-x-2">
          <p className="font-subheading font-medium text-primary text-xl">
            Mohammad@tallah
          </p>
        </div>
      </Link>

      <ul className="flex flex-wrap flex-row justify-center space-x-2">
        <NavLink href="/" name="Home" />
        <NavLink href="/about" name="About" />
        <NavLink href="/projects" name="Projects" />
        {/* <NavLink href="/blog" name="Blog" /> */}
      </ul>
    </nav>
  );
};

export default Navbar;
