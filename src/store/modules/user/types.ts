import { ActionContext } from 'vuex'
import { IRootState } from '../root/types'
import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'
import { Moment } from 'moment'

export interface IModuleState {
	token: string | null
	username: string | null
	lastLoginTime: Moment | null
}

export interface IModuleGetters {
	token(state: IModuleState): string | null
	username(state: IModuleState): string | null
	lastLoginTime(state: IModuleState): Moment | null
}

export enum EModuleMutation {
	SET_TOKEN = 'SET_TOKEN',
	SET_USERNAME = 'SET_USERNAME',
	SET_LAST_LOGIN = 'SET_LAST_LOGIN',
}

export type TModuleMutations<S = IModuleState> = {
	[EModuleMutation.SET_TOKEN](state: S, token: string | null): void
	[EModuleMutation.SET_USERNAME](state: S, username: string | null): void
	[EModuleMutation.SET_LAST_LOGIN](state: S, lastLogin: Moment | null): void
}

export type AugmentedActionContext = {
	commit<K extends keyof TModuleMutations>(
		key: K,
		payload: Parameters<TModuleMutations[K]>[1]
	): ReturnType<TModuleMutations[K]>
} & Omit<ActionContext<IModuleState, IRootState>, 'commit'>

export interface ILogin {
	username: string
	password: string
}

export enum EModuleAction {
	Login = 'LOGIN',
	Logout = 'LOGOUT',
	ResetToken = 'RESET_TOKEN',
}

export type TModuleActions = {
	[EModuleAction.Login]({ commit }: AugmentedActionContext, userInfo: ILogin): Promise<void>
	[EModuleAction.Logout]({ commit }: AugmentedActionContext): void
	[EModuleAction.ResetToken]({ commit }: AugmentedActionContext): void
}

export type IModule<S = IModuleState> = Omit<VuexStore<S>, 'commit' | 'getters' | 'dispatch'> & {
	commit<K extends keyof TModuleMutations, P extends Parameters<TModuleMutations[K]>[1]>(
		key: K,
		payload?: P,
		options?: CommitOptions
	): ReturnType<TModuleMutations[K]>
} & {
	getters: {
		[K in keyof IModuleGetters]: ReturnType<IModuleGetters[K]>
	} & {
		dispatch<K extends keyof TModuleActions>(
			key: K,
			payload?: Parameters<TModuleActions[K]>[1],
			options?: DispatchOptions
		): ReturnType<TModuleActions[K]>
	}
}

export type { IModuleState as UserModuleState }
export { EModuleAction as UserModuleAction }
export { EModuleMutation as UserModuleMutation }
export type { IModuleGetters as UserModuleGetters }
