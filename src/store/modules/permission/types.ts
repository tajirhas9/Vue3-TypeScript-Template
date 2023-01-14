import { ActionContext } from 'vuex'
import { IRootState } from '../root/types'
import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'
import { RouteRecordRaw } from 'vue-router'

export interface IModuleState {
	routes: RouteRecordRaw[]
	dynamicRoutes: RouteRecordRaw[]
}

export interface IModuleGetters {
	routes(state: IModuleState): RouteRecordRaw[]
	dynamicRoutes(state: IModuleState): RouteRecordRaw[]
}

export enum EModuleMutation {
	SET_ROUTES = 'SET_ROUTES',
	ADD_NEW_ROUTE = 'ADD_NEW_ROUTE',
	ADD_NESTED_ROUTE = 'ADD_NESTED_ROUTE',
}

export type TModuleMutations<S = IModuleState> = {
	[EModuleMutation.SET_ROUTES](state: S, routes: RouteRecordRaw[]): void
	[EModuleMutation.ADD_NEW_ROUTE](state: S, newRoute: RouteRecordRaw): void
	[EModuleMutation.ADD_NESTED_ROUTE](state: S, routeInfo: { parent: string; route: RouteRecordRaw }): void
}

export type AugmentedActionContext = {
	commit<K extends keyof TModuleMutations>(
		key: K,
		payload: Parameters<TModuleMutations[K]>[1]
	): ReturnType<TModuleMutations[K]>
} & Omit<ActionContext<IModuleState, IRootState>, 'commit'>

export enum EModuleAction {
	SetRoutes = 'SET_ROUTES',
	AddNewRoute = 'ADD_NEW_ROUTE',
	AddNestedRoute = 'ADD_NESTED_ROUTE',
}

export type TModuleActions = {
	// TODO: NEED TO UPDATE THE PAYLOAD
	// TODO: This action will be responsible for dynamic forms' list based on api request.
	[EModuleAction.SetRoutes]({ commit }: AugmentedActionContext, routes: RouteRecordRaw[]): void
	[EModuleAction.AddNewRoute]({ commit }: AugmentedActionContext, newRoute: RouteRecordRaw): void
	[EModuleAction.AddNestedRoute](
		{ commit }: AugmentedActionContext,
		routeInfo: { parent: string; route: RouteRecordRaw }
	): void
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
