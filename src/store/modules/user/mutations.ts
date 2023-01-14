import types, { MutationTree } from 'vuex'
import { setToken } from '@/utils/cookies'
import { IModuleState, TModuleMutations, EModuleMutation } from './types'

export const mutations: MutationTree<IModuleState> & TModuleMutations = {
	[EModuleMutation.SET_TOKEN](state, token) {
		state.token = token
	},
	[EModuleMutation.SET_USERNAME](state, username) {
		state.username = username
	},
	[EModuleMutation.SET_LAST_LOGIN](state, lastLogin) {
		state.lastLoginTime = lastLogin
	},
}
