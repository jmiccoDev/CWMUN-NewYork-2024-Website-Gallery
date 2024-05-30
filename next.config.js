/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/my-account/**",
      },
    ],
  },
};
