/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import { configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
const path = require('path')

const defaultConfig = {
	plugins: [
		vue(),
		vueI18n({
			compositionOnly: true,
		}),
	],
	resolve: {
		alias: {
			'@/': `${path.resolve(__dirname, 'src')}/`,
			inferno: 'inferno/dist/index.dev.esm.js',
			/*
			 * @reason: https://supportcenter.devexpress.com/ticket/details/t1054272/vue3-react-vite-rollup-devextreme-fails-in-production-because-some-modules-do-not-pass/
			 */
			'devextreme/ui': 'devextreme/esm/ui',
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
  @import "./src/styles/_variables.scss";
  @import "./src/styles/_mixins.scss";
`,
			},
		},
	},
}

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '')
	if (command === 'build') {
		return {
			// build specific config
			...defaultConfig,
			esbuild: {
				drop: ['console', 'debugger'],
			},
			define: {
				'process.env': process.env,
				'process.platform': process.platform,
				__APP_ENV__: env.APP_ENV,
			},
			bulid: {
				minify: 'terser', // <-- add
				terserOptions: {
					compress: {
						drop_console: true,
						drop_debugger: true,
					},
				},
			},
		}
	} else {
		// dev | test
		return {
			// dev specific config
			...defaultConfig,
			define: {
				'process.env': process.env,
				__APP_ENV__: env.APP_ENV,
			},
			test: {
				exclude: [...configDefaults.exclude, 'static'],
				globals: true,
			},
			server: {
				proxy: {
					'^/api/.*': {
						target: 'http://127.0.0.1:4093/api',
						changeOrigin: true,
						secure: false,
						ws: true,
						rewrite: (path) => path.replace(/^\/api/, ''),
					},
				},
				cors: true,
			},
		}
	}
})
