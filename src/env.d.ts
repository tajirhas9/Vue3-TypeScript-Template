/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly APP_TITLE: string
	readonly API_URL: string
	readonly NODE_ENV: string
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component
}

declare module 'element-ui/lib/locale/lang/*' {
	export const elementLocale: any
}

declare module 'file-saver' {
	export const FileSaver: any
}
