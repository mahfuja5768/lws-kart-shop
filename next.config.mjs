/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //todo-right the src
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com/random/360x265?skincare&1.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
