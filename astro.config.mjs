// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://docs.astro.build
// `output: 'server'` enables on-demand API routes (now playing, requests, contact).
// Run with `npm run dev` for local development, or `npm run build` + `npm run preview` to serve.
export default defineConfig({
	output: 'server',
	adapter: node({ mode: 'standalone' }),
});
