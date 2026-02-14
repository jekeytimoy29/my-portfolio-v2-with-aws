const isProd = process.env.NODE_ENV === 'production';
const repo = 'my-portfolio-v2-with-aws';

module.exports = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: {
    unoptimized: true,
  },
};
