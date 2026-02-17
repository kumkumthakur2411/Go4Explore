/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
    {
        protocol: 'https',
        hostname: 'go4explore.com',
      },
      {
        protocol: 'https',
        hostname: 'd2qa7a8q0vuocm.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
