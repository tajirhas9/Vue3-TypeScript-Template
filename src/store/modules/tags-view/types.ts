import { ActionContext } from 'vuex'
import { IRootState } from '../root/types'
import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'
import { RouteLocationNormalized } from 'vue-router'

export interface ITagView extends Partial<RouteLocationNormalized> {
	title?: string
}

export interface IModuleState {
	visitedViews: ITagView[]
	cachedViews: (string | undefined)[]
}

export interface IModuleGetters {
	visitedViews(state: IModuleState): ITagView[]
	cachedViews(state: IModuleState): (string | undefined)[]
}

export enum EModuleMutation {
	ADD_VISITED_VIEW = 'ADD_VISITED_VIEW',
	ADD_CACHED_VIEW = 'ADD_CACHED_VIEW',
	DEL_VISITED_VIEW = 'DEL_VISITED_VIEW',
	DEL_CACHED_VIEW = 'DEL_CACHED_VIEW',
	DEL_OTHERS_VISITED_VIEWS = 'DEL_OTHERS_VISITED_VIEWS',
	DEL_OTHERS_CACHED_VIEWS = 'DEL_OTHERS_CACHED_VIEWS',
	DEL_ALL_VISITED_VIEWS = 'DEL_ALL_VISITED_VIEWS',
	DEL_ALL_CACHED_VIEWS = 'DEL_ALL_CACHED_VIEWS',
	UPDATE_VISITED_VIEW = 'UPDATE_VISITED_VIEW',
}

export type TModuleMutations<S = IModuleState> = {
	[EModuleMutation.ADD_VISITED_VIEW](state: S, view: ITagView): void
	[EModuleMutation.ADD_CACHED_VIEW](state: S, view: ITagView): void
	[EModuleMutation.DEL_VISITED_VIEW](state: S, view: ITagView): void
	[EModuleMutation.DEL_CACHED_VIEW](state: S, view: ITagView): void
	[EModuleMutation.DEL_OTHERS_VISITED_VIEWS](state: S, view: ITagView): void
	[EModuleMutation.DEL_OTHERS_CACHED_VIEWS](state: S, view: ITagView): void
	[EModuleMutation.DEL_ALL_VISITED_VIEWS](state: S): void
	[EModuleMutation.DEL_ALL_CACHED_VIEWS](state: S): void
	[EModuleMutation.UPDATE_VISITED_VIEW](state: S, view: ITagView): void
}

export type AugmentedActionContext = {
	commit<K extends keyof TModuleMutations>(
		key: K,
		payload?: Parameters<TModuleMutations[K]>[1]
	): ReturnType<TModuleMutations[K]>
} & Omit<ActionContext<IModuleState, IRootState>, 'commit'>

export enum EModuleAction {
	addView = 'ADD_VIEW',
	addVisitedView = 'ADD_VISITED_VIEW',
	delView = 'DEL_VIEW',
	delCachedView = 'DEL_CACHED_VIEW',
	delOthersViews = 'DEL_OTHERS_VIEWS',
	delAllViews = 'DEL_VIEWS',
	delAllCachedViews = 'DEL_ALL_CACHED_VIEWS',
	updateVisitedView = 'UPDATE_VISITED_VIEW',
}

export type TModuleActions = {
	[EModuleAction.addView]({ commit }: AugmentedActionContext, view: ITagView): Promise<void>
	[EModuleAction.addVisitedView]({ commit }: AugmentedActionContext, view: ITagView): Promise<void>
	[EModuleAction.delView]({ commit }: AugmentedActionContext, view: ITagView): Promise<void>
	[EModuleAction.delCachedView]({ commit }: AugmentedActionContext, view: ITagView): Promise<void>
	[EModuleAction.delOthersViews]({ commit }: AugmentedActionContext, view: ITagView): Promise<void>
	[EModuleAction.delAllViews]({ commit }: AugmentedActionContext): Promise<void>
	[EModuleAction.delAllCachedViews]({ commit }: AugmentedActionContext): Promise<void>
	[EModuleAction.updateVisitedView]({ commit }: AugmentedActionContext, view: ITagView): Promise<void>
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

export type { IModuleState as PermissionModuleState }
export { EModuleAction as PermissionModuleAction }
export { EModuleMutation as PermissionModuleMutation }
export type { IModuleGetters as PermissionModuleGetters }
