module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};
