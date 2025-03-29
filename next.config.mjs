import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
};

if(process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}


export default nextConfig;
