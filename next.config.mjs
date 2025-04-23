/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://www.reuzel.com/**")],
  },
};

export default nextConfig;
