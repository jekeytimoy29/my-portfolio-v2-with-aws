const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";

module.exports = {
  output: "export",
  basePath: repo ? `/${repo}` : "",
  assetPrefix: repo ? `/${repo}/` : "",
  images: { unoptimized: true },
};
