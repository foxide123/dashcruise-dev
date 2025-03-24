import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "We build fast, beautiful websites for startups, businesses and individuals looking for a custom design and SEO",
  keywords: ["web agency", "frontend development", "custom website"],
  authors: [{name: "DashcruiseDev", url: "https://dashcruisedev.com"}],
  creator: "DashcruiseDev",
  openGraph: {
    title: "DashcruiseDev - Web Design & Development",
    description: "Modern websites crafted with performance and user experience in mind"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConsentProvider>{children}</ConsentProvider>
      </body>
    </html>
  );
}
