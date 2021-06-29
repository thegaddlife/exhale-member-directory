// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'secure.gravatar.com', 'i.ibb.co', 'picsum.photos'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/members',
        permanent: false,
      },
    ]
  },
}
