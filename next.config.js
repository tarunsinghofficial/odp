/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env: {
    NEXT_ENDPOINT_APPWRITE: process.env.NEXT_ENDPOINT_APPWRITE,
    NEXT_PROJECT_APPWRITE: process.env.NEXT_PROJECT_APPWRITE,
  },
  images: {
    domains: ['cloud.appwrite.io', 'secure.gravatar.com', 'img.freepik.com', 'dev-onedevplaceblog.pantheonsite.io'],
  },
};
