import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ConsentProvider } from "@/context/ConsentContext";

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConsentProvider>{children}</ConsentProvider>
      </body>
    </html>
  );
}
