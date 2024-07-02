import path from 'path';

export const nextI18NextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ar'], // Add your supported languages here
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
  },
  localePath: path.resolve('./public/locales'), // Path to your translation files
};

export default nextI18NextConfig;
