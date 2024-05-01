/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['gravatar.com'], // Add 'gravatar.com' to the list of allowed domains
  },
};

export default nextConfig;
