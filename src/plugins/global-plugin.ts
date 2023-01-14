import { LogOutReason } from '@/utils/constants'
import { App, ref } from 'vue'

export const globalPlugin = {
	install: async (app: App, options: any) => {
		app.config.globalProperties.$isUserLoggedIn = ref(false)
		app.config.globalProperties.$logoutReason = ref(LogOutReason.NONE)
	},
}
