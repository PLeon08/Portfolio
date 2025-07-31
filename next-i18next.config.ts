// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
  },
  // Permite que las traducciones se recarguen en desarrollo sin reiniciar el servidor
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};