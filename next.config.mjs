/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'


const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  assetPrefix: isProd ? '/portfolio/' : '',
  basePath:   isProd ? '/portfolio'  : '',

  redirects: async () => {
    return [
      {
        source: '/profile',
        destination: '/',
        permanent: true,
      },
      {
        source: '/project/pusher-chameleon',
        destination: '/projects/pusher-chameleon',
        permanent: true,
      },
      {
        source: '/journal/pure-svg-progress-circles',
        destination: '/posts/pure-svg-progress-circles',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
