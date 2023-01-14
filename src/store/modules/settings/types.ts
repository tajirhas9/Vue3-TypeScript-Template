import { ActionContext } from 'vuex'
import { DeviceType } from '@/utils/constants'
import { IRootState } from '../root/types'
import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'

export type TSetting = {
	key: string
	value: string | boolean
}

export interface IModuleState {
	settings: {
		theme: string
		fixedHeader: boolean
		showSettings: boolean
		showTagsView: boolean
		showSidebarLogo: boolean
		sidebarTextTheme: boolean
	}
}

export interface IModuleGetters {
	theme(state: IModuleState): string
	fixedHeader(state: IModuleState): boolean
	showSettings(state: IModuleState): boolean
	showTagsView(state: IModuleState): boolean
	showSidebarLogo(state: IModuleState): boolean
	sidebarTextTheme(state: IModuleState): boolean
}

export enum EModuleMutation {
	CHANGE_SETTING = 'CHANGE_SETTING',
}

export type TModuleMutations<S = IModuleState> = {
	[EModuleMutation.CHANGE_SETTING](state: S, payload: TSetting): void
}

export type AugmentedActionContext = {
	commit<K extends keyof TModuleMutations>(
		key: K,
		payload: Parameters<TModuleMutations[K]>[1]
	): ReturnType<TModuleMutations[K]>
} & Omit<ActionContext<IModuleState, IRootState>, 'commit'>

export enum EModuleAction {
	ChangeSetting = 'CHANGE_SETTING',
}

export type TModuleActions = {
	[EModuleAction.ChangeSetting]({ commit }: AugmentedActionContext, payload: TSetting): void
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

export { IModuleState as SettingsModuleState }
export { EModuleAction as SettingsModuleAction }
export { EModuleMutation as SettingsModuleMutation }
export { IModuleGetters as SettingsModuleGetters }
