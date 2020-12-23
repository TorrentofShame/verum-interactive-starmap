const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  images: {
    loader: "cloudinary",
    path: process.env.cloudinary_url,
    domains: ["res.cloudinary.com/"]
  },
  pwa: {
    dest: "public",
    runtimeCaching
  }
});
