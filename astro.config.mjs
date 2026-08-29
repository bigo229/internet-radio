
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // Must be 'server' or 'hybrid'
  adapter: cloudflare(),
});

