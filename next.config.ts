const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors
  },
  experimental: {
    forceSwcTransforms: true, // Use SWC for performance boost
  },
};

export default nextConfig;
