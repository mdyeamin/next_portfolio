/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fdac5-2.fna.fbcdn.net',
      },
    ],
  },
};

export default nextConfig;
