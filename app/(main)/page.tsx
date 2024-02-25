import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <h1 className="font-heading text-4xl md:text-7xl mb-4">
          I'm Mohammad Atallah
        </h1>
        {/* <Pronunciation /> */}

        <h2 className="font-subheading text-xl md:text-2xl max-w-[50ch]">
          A developer and designer. My story starts with a $2 computer from a
          flea market.{" "}
          <Link
            className="text-primary font-semibold no-underline hover:underline"
            href="/about"
          >
            Learn more →
          </Link>
        </h2>
      </header>
    </div>
  );
}
