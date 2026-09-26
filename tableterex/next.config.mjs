/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? '/tabletrex' : '',
  assetPrefix: isGithubActions ? '/tabletrex/' : '',
};

export default nextConfig;
