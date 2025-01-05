import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qzohcyvjvdvxzbblmbtx.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(nextConfig);
