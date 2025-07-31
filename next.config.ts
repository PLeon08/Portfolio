import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'], // Define tus idiomas soportados (inglés y español, por ejemplo)
    defaultLocale: 'es', // El idioma por defecto
  },
  images: {
    domains: ['img.icons8.com'],
  },
};

export default nextConfig;
