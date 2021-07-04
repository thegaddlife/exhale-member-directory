// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'www.gravatar.com', 'i.ibb.co', 'picsum.photos'],
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
