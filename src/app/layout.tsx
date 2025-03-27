import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ConsentProvider } from "@/context/ConsentContext";
import Header from "@/components/Header";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "DashcruiseDev - Web Design & Development Agency",
  description:
    "We build fast, beautiful websites for startups, businesses and individuals looking for a custom design and SEO",
  keywords: ["web agency", "frontend development", "custom website"],
  authors: [{ name: "DashcruiseDev", url: "https://dashcruisedev.com" }],
  creator: "DashcruiseDev",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "DashcruiseDev - Web Design & Development",
    description:
      "Modern websites crafted with performance and user experience in mind",
  },
};

const lg_screen_width = "lg:w-[75vw]";
const default_screen_width = "w[85vw]";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={` antialiased`}>
        <Header
          lg_screen_width={lg_screen_width}
          default_screen_width={default_screen_width}
        />
        <ConsentProvider>{children}</ConsentProvider>
      </body>
    </html>
  );
}
