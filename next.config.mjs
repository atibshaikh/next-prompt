/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ["mongoose"], // Keep only necessary options
      serverActions: true, // Optional if using server actions
    },
    images: {
      domains: ["lh3.googleusercontent.com"], // Google profile images
    },
    webpack(config) {
      config.experiments.topLevelAwait = true; // Avoid unnecessary spread
      return config;
    },
  };
  
  export default nextConfig;
  