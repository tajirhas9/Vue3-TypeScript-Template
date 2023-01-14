import { computed, defineComponent, ref } from 'vue'
import { Store, store } from '@/store'
import AppModule from '@/store/modules/app/app-module'
import { DeviceType } from '@/utils/constants'
import { AppModuleAction } from '@/store/modules/app/types'

const WIDTH = 992 // refer to Bootstrap's responsive design

export default function () {
	const device: DeviceType = ref(store.getters.device)
	const sidebar: { opened: boolean; withoutAnimation: boolean } = ref(store.getters.sidebar)

	const isMobile = () => {
		const rect = document.body.getBoundingClientRect()
		return rect.width - 1 < WIDTH
	}

	const resizeHandler = () => {
		if (!document.hidden) {
			const checkIsMobile = isMobile()
			store.dispatch(AppModuleAction.ToggleDevice, checkIsMobile ? DeviceType.Mobile : DeviceType.Desktop)
			if (checkIsMobile) {
				store.dispatch(AppModuleAction.CloseSideBar, true)
			}
		}
	}

	return {
		device,
		sidebar,
		isMobile,
		resizeHandler,
	}
}
