import { ActionContext } from 'vuex'
import { DeviceType } from '@/utils/constants'
import { IRootState } from '../root/types'
import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'

export interface IModuleState {
	device: DeviceType
	sidebar: {
		opened: boolean
		withoutAnimation: boolean
	}
	language: string
	size: string
}

export interface IModuleGetters {
	device(state: IModuleState): DeviceType
	sidebar(state: IModuleState): { opened: boolean; withoutAnimation: boolean }
	language(state: IModuleState): string
	size(state: IModuleState): string
}

export enum EModuleMutation {
	TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR',
	CLOSE_SIDEBAR = 'CLOSE_SIDEBAR',
	TOGGLE_DEVICE = 'TOGGLE_DEVICE',
	SET_LANGUAGE = 'SET_LANGUAGE',
	SET_SIZE = 'SET_SIZE',
}

export type TModuleMutations<S = IModuleState> = {
	[EModuleMutation.TOGGLE_SIDEBAR](state: S, withoutAnimation: boolean): void
	[EModuleMutation.CLOSE_SIDEBAR](state: S, withoutAnimation: boolean): void
	[EModuleMutation.TOGGLE_DEVICE](state: S, device: DeviceType): void
	[EModuleMutation.SET_LANGUAGE](state: S, language: string): void
	[EModuleMutation.SET_SIZE](state: S, size: string): void
}

export type AugmentedActionContext = {
	commit<K extends keyof TModuleMutations>(
		key: K,
		payload: Parameters<TModuleMutations[K]>[1]
	): ReturnType<TModuleMutations[K]>
} & Omit<ActionContext<IModuleState, IRootState>, 'commit'>

export enum EModuleAction {
	ToggleSideBar = 'TOGGLE_SIDEBAR',
	CloseSideBar = 'CLOSE_SIDEBAR',
	ToggleDevice = 'TOGGLE_DEVICE',
	SetLanguage = 'SET_LANGUAGE',
	SetSize = 'SET_SIZE',
}

export type TModuleActions = {
	[EModuleAction.ToggleSideBar]({ commit }: AugmentedActionContext, withoutAnimation: boolean): void
	[EModuleAction.CloseSideBar]({ commit }: AugmentedActionContext, withoutAnimation: boolean): void
	[EModuleAction.ToggleDevice]({ commit }: AugmentedActionContext, device: DeviceType): void
	[EModuleAction.SetLanguage]({ commit }: AugmentedActionContext, language: string): void
	[EModuleAction.SetSize]({ commit }: AugmentedActionContext, size: string): void
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

export { IModuleState as AppModuleState }
export { EModuleAction as AppModuleAction }
export { EModuleMutation as AppModuleMutation }
export { IModuleGetters as AppModuleGetters }
