// next.config.mjs

/** @type {import('next').NextConfig} */
export const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Allow https protocol
        hostname: 'res.cloudinary.com',
        pathname: '/**', // Allow all paths from this domain
      },
      {
        protocol: 'http', // Allow http protocol, though https is preferred
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
  },
};

export default nextConfig;
