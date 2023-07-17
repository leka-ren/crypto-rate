/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    output: "export",
    reactStrictMode: false,
    env: {
      API_KEY: process.env.API_KEY,
      URL_CRYPTO_RANK: process.env.URL_CRYPTO_RANK,
    },
  },
};

module.exports = nextConfig;
