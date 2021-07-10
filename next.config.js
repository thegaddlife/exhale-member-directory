// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'www.gravatar.com',
      'i.ibb.co',
      'picsum.photos',
      'i.pravatar.cc',
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/directory',
        permanent: false,
      },
    ]
  },
}
