// import { Pronunciation } from "@/components/Pronunciation";
import Link from "next/link";

export default function Home() {
  return (
    <header className="border-b-2 border-gray-300 py-10">
      <h1 className="font-heading text-4xl md:text-7xl mb-4">
        I am Mohammad Atallah
      </h1>

      {/* <Pronunciation /> */}

      <h2 className="font-subheading text-xl md:text-2xl max-w-[50ch]">
        I am a fullstack developer who love to build clean, responsive, and
        accessible websites.{" "}
        <Link
          className="text-primary font-semibold no-underline hover:underline"
          href="/about"
        >
          Learn more →
        </Link>
      </h2>
    </header>
  );
}
