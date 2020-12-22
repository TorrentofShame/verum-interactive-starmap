module.exports = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/verum-interactive-starmap" : "",
  images: {
    loader: "cloudinary",
    path: process.env.cloudinary_url,
    domains: ["res.cloudinary.com/"]
  }
}
