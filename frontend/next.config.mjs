// next.config.js
import dotenv from 'dotenv';
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_EMAIL_SERVICE_URL: process.env.NEXT_PUBLIC_EMAIL_SERVICE_URL,
    NEXT_PUBLIC_EMAIL_SERVICE_API_KEY: process.env.NEXT_PUBLIC_EMAIL_SERVICE_API_KEY,
  },
};

export default nextConfig;
