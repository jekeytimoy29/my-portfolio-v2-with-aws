/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // REQUIRED for GitHub Pages
  basePath: "/my-repo-name",
  assetPrefix: "/my-repo-name/",
  images: {
    unoptimized: true, // required for static export
  },
};

module.exports = nextConfig;
