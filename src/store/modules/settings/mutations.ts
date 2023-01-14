import types, { MutationTree } from 'vuex'
import { setLanguage, setSidebarStatus, setSize } from '@/utils/cookies'
import { IModuleState, TModuleMutations, EModuleMutation, TSetting } from './types'
import { state as defaultState } from './state'

export const mutations: MutationTree<IModuleState> & TModuleMutations = {
	[EModuleMutation.CHANGE_SETTING](state, payload: TSetting) {
		if (Object.prototype.hasOwnProperty.call(defaultState.settings, payload.key)) {
			;(state.settings as any)[payload.key] = payload.value
		}
	},
}
