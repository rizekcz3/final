/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    domains: ['images.unsplash.com'], // Příklad: povolení externích obrázků
  },
};

module.exports = nextConfig;
