import { login } from '@/api/users'
import {
	removeLastLoginTime,
	removeToken,
	removeUsername,
	setLastLoginTime,
	setToken,
	setUsername,
} from '@/utils/cookies'
import moment from 'moment'
import { ActionTree } from 'vuex'
import { IRootState } from '../root/types'
import { IModuleState, TModuleActions, EModuleAction, EModuleMutation } from './types'

export const actions: ActionTree<IModuleState, IRootState> & TModuleActions = {
	async [EModuleAction.Login]({ commit }, userInfo) {
		try {
			const data: any = await login(userInfo)

			setToken(data.data.accessToken || '')
			setUsername(userInfo.username)
			let loginTime = moment()
			setLastLoginTime(loginTime)

			commit(EModuleMutation.SET_TOKEN, data.data.accessToken)
			commit(EModuleMutation.SET_USERNAME, userInfo.username)
			commit(EModuleMutation.SET_LAST_LOGIN, loginTime)
		} catch (e) {
			console.error(e)
			destroyUserCookie()

			commit(EModuleMutation.SET_USERNAME, null)
			commit(EModuleMutation.SET_TOKEN, null)
			commit(EModuleMutation.SET_LAST_LOGIN, null)
		}
	},
	[EModuleAction.Logout]({ commit }) {
		destroyUserCookie()
		commit(EModuleMutation.SET_TOKEN, null)
		commit(EModuleMutation.SET_USERNAME, null)
		commit(EModuleMutation.SET_LAST_LOGIN, null)
	},
	[EModuleAction.ResetToken]({ commit }) {
		destroyUserCookie()
		commit(EModuleMutation.SET_TOKEN, null)
	},
}

function destroyUserCookie() {
	removeToken()
	removeUsername()
	removeLastLoginTime()
}
