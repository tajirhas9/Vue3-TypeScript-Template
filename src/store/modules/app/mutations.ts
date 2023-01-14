import types, { MutationTree } from 'vuex'
import { setLanguage, setSidebarStatus, setSize } from '@/utils/cookies'
import { IModuleState, TModuleMutations, EModuleMutation } from './types'

export const mutations: MutationTree<IModuleState> & TModuleMutations = {
	[EModuleMutation.TOGGLE_SIDEBAR](state, withoutAnimation) {
		state.sidebar.opened = !state.sidebar.opened
		state.sidebar.withoutAnimation = withoutAnimation
		if (state.sidebar.opened) {
			setSidebarStatus('opened')
		} else {
			setSidebarStatus('closed')
		}
	},
	[EModuleMutation.CLOSE_SIDEBAR](state, withoutAnimation) {
		state.sidebar.opened = false
		state.sidebar.withoutAnimation = withoutAnimation
		setSidebarStatus('closed')
	},
	[EModuleMutation.TOGGLE_DEVICE](state, device) {
		state.device = device
	},
	[EModuleMutation.SET_LANGUAGE](state, language) {
		state.language = language
		setLanguage(language)
	},
	[EModuleMutation.SET_SIZE](state, size) {
		state.size = size
		setSize(size)
	},
}
