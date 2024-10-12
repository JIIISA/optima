/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "optimas3-images.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**", // Dette matcher alle filer i rodmappen
      },
    ],
  },
};

export default nextConfig;