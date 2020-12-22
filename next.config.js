module.exports = {
  images: {
    loader: "cloudinary",
    path: process.env.cloudinary_url,
    domains: ["res.cloudinary.com/"]
  }
}
