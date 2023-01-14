import { Store as VuexStore, ActionContext, CommitOptions, DispatchOptions } from 'vuex'
import { IModuleState as IAppState } from '../app/types'
import { IModuleState as IUserState } from '../user/types'
import { IModuleState as ISettingsState } from '../settings/types'
import { IModuleState as IPermissionState } from '../permission/types'
import { IModuleState as ITagsViewState } from '../tags-view/types'

export interface IRootState {
	storeVersion: string
	app: IAppState
	user: IUserState
	settings: ISettingsState
	permission: IPermissionState
	tagsView: ITagsViewState
}

export interface IRootGetters {
	storeVersion(state: IRootState): string
}

export enum ERootMutation {}

export type TRootMutations<S = IRootState> = {}

export type AugmentedActionContext = {
	commit<K extends keyof TRootMutations>(
		key: K,
		payload: Parameters<TRootMutations[K]>[1]
	): ReturnType<TRootMutations[K]>
} & Omit<ActionContext<IRootState, IRootState>, 'commit'>

export enum ERootAction {}

export type TRootActions = {}

export type IRootModule<S = IRootState> = Omit<VuexStore<S>, 'commit' | 'getters' | 'dispatch'> & {
	commit<K extends keyof TRootMutations, P extends Parameters<TRootMutations[K]>[1]>(
		key: K,
		payload?: P,
		options?: CommitOptions
	): ReturnType<TRootMutations[K]>
} & {
	getters: {
		[K in keyof IRootGetters]: ReturnType<IRootGetters[K]>
	} & {
		dispatch<K extends keyof TRootActions>(
			key: K,
			payload?: Parameters<TRootActions[K]>[1],
			options?: DispatchOptions
		): ReturnType<TRootActions[K]>
	}
}
