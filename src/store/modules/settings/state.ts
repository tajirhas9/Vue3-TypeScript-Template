import { DeviceType } from '@/utils/constants'
import { IModuleState } from './types'
import elementVariables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'

export const state: IModuleState = {
	settings: {
		theme: elementVariables ? elementVariables.theme : '#1890ff',
		fixedHeader: defaultSettings.fixedHeader,
		showSettings: defaultSettings.showSettings,
		showTagsView: defaultSettings.showTagsView,
		showSidebarLogo: defaultSettings.showSidebarLogo,
		sidebarTextTheme: defaultSettings.sidebarTextTheme,
	},
}
