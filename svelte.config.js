import adapter from 'sveltekit-adapter-deno';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import { join } from "path";
const mdExtensions = ['.md', '.svx', '.mdsv'];

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__filename, __dirname)

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({}), mdsvex({
		extensions: mdExtensions,
		layout: join(__dirname, './src/lib/md/layout.svelte')
	})],
	extensions: ['.svelte', ...mdExtensions],

	kit: {
		adapter: adapter()
	}
};

export default config;
