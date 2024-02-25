import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Metadata } from "next";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const madeDillan = localFont({
  src: "../public/fonts/made-dillan.woff",
  variable: "--font-made-dillan",
});

const spaceText = localFont({
  src: "../public/fonts/space-text-medium.woff",
  variable: "--font-space-text",
});

export const revalidate = 600;

export const metadata: Metadata = {
  // openGraph: {
  //   siteName: "atallah.dev",
  // },
  icons: [
    {
      url: "/favicons/favicon.ico",
    },
    {
      url: "/favicons/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      url: "/favicons/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      url: "/favicons/favicon-192x192.png",
      sizes: "192x192",
    },
  ],
  // metadataBase: new URL("https://atallah.dev"),
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${madeDillan.variable} ${spaceText.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
