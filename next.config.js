module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  generateBuildId: () => 'build',
  env: {
    API_URL: process.env.API_URL,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_CLOUD_PRESET: process.env.CLOUDINARY_CLOUD_PRESET,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};
