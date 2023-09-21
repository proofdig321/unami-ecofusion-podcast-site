/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['res.cloudinary.com','images.pexels.com','www.globalgoalscms.co.uk','www.globalgoals.org/resources/', "cdn.sanity.io", "images.unsplash.com", "w7.pngwing.com","photos.google.com"]
  }
}

module.exports = nextConfig