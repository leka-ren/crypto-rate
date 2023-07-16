/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
    URL_CRYPTO_RANK: process.env.URL_CRYPTO_RANK,
  },
};

module.exports = nextConfig;
