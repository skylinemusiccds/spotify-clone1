/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    CLIENT_ID:"3f971f30eea74721b0489d7515565f15",
    CLIENT_SECRET:"4aa763a14a65402783efd3aae01ed3b7"
  },
  
  images: {
    domains: [
      "i.scdn.co",
      "seed-mix-image.spotifycdn.com",
      "charts-images.scdn.co",
      "daily-mix.scdn.co",
      "mosaic.scdn.co",
      "thisis-images.scdn.co",
      "seeded-session-images.scdn.co",
      "newjams-images.scdn.co",
    ],
  },
};

module.exports = nextConfig;
