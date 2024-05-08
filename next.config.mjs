import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: '@import "./src/styles/index.scss"; \n',
  },
  env: {
    API_DELAY: process.env.API_DELAY,
  },
  redirects: async () => [
    {
      source: '/',
      destination: '/home',
      permanent: true,
    },
    {
      source: '/en',
      destination: '/home',
      permanent: true,
    },
    {
      source: '/en/',
      destination: '/home',
      permanent: true,
    },
  ],
};

export default withNextIntl(nextConfig);
