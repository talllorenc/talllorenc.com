/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: { styledComponents: true },
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: "http://localhost:8080/uploads/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
