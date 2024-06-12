/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SPRING_PRIVATE_DNS_URL: process.env.SPRING_PRIVATE_DNS_URL,
  },
};

export default nextConfig;
