/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  reactStrictMode: true,
}
module.exports = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};
export default config
