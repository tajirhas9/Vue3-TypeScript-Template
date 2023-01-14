interface ISettings {
	title: string // Overrides the default title
	showSettings: boolean // Controls settings panel display
	showTagsView: boolean // Controls tagsview display
	showSidebarLogo: boolean // Controls siderbar logo display
	fixedHeader: boolean // If true, will fix the header component
	errorLog: string[] // The env to enable the errorlog component, default 'production' only
	sidebarTextTheme: boolean // If true, will change active text color for sidebar based on theme
	devServerPort: number // Port number for webpack-dev-server
	mockServerPort: number // Port number for mock server
}

// You can customize below settings :)
const settings: ISettings = {
	title: 'Student Mail Monitoring System',
	showSettings: true,
	showTagsView: false,
	fixedHeader: false,
	showSidebarLogo: false,
	errorLog: ['development'],
	sidebarTextTheme: true,
	devServerPort: 9530,
	mockServerPort: 9531,
}

export default settings
