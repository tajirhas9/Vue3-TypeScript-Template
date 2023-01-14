<template>
	<div v-if="isNotLogin">
		<sidebar-logo v-if="showLogo" :collapse="isCollapse" />
		<el-scrollbar>
			<el-menu
				:default-active="activeMenu"
				class="el-menu-custom"
				:collapse="isCollapse"
				background-color="#304156"
				text-color="#bfcbd9"
				:active-text-color="menuActiveTextColor"
				:collapse-transition="false"
				mode="vertical"
				@open="handleOpen"
				@close="handleClose"
			>
				<sidebar-item
					v-for="route in routes"
					:key="route.path"
					:item="route"
					:base-path="route.path"
					:is-collapse="isCollapse"
				/>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script lang="ts">
	import SidebarItem from './SidebarItem.vue'
	import SidebarLogo from './SidebarLogo.vue'
	import { defineComponent } from '@vue/runtime-core'
	import { store } from '@/store'
	import { Location, Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
	import { ERoutes } from '@/router'

	export default defineComponent({
		name: 'Sidebar',
		components: {
			SidebarItem,
			SidebarLogo,
			Location,
			Document,
			IconMenu,
			Setting,
		},
		computed: {
			sidebar() {
				return store.getters.sidebar
			},
			routes() {
				return store.getters.routes
			},
			showLogo() {
				return store.getters.showSidebarLogo
			},
			menuActiveTextColor() {
				if (store.getters.sidebarTextTheme) {
					return store.getters.theme
				} else {
					return '#409EFF'
				}
			},
			activeMenu() {
				const route = this.$route
				const { meta, path } = route
				if (meta?.activeMenu) {
					return meta?.activeMenu
				}
				return path
			},
			isCollapse() {
				return !store.getters.sidebar.opened
			},
			isNotLogin() {
				return this.$route.name !== ERoutes.Login
			},
		},
		methods: {
			handleOpen(key: string, keyPath: string[]) {
				// console.log('handleOpen', key, keyPath)
			},
			handleClose(key: string, keyPath: string[]) {
				// console.log('handleClose', key, keyPath)
			},
		},
	})
</script>

<style lang="scss">
	.el-menu-custom:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
	.sidebar-container {
		// reset element-ui css
		.horizontal-collapse-transition {
			transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
		}

		.scrollbar-wrapper {
			overflow-x: hidden !important;
		}

		.el-scrollbar__view {
			height: 100%;
		}

		.el-scrollbar__bar {
			&.is-vertical {
				right: 0px;
			}

			&.is-horizontal {
				display: none;
			}
		}
	}
</style>

<style lang="scss" scoped>
	.sidebar-container {
		// reset element-ui css
		.horizontal-collapse-transition {
			transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
		}
		.scrollbar-wrapper {
			overflow-x: hidden !important;
		}
		.el-scrollbar__view {
			height: 100%;
		}
		.el-scrollbar__bar {
			&.is-vertical {
				right: 0px;
			}
			&.is-horizontal {
				display: none;
			}
		}
	}
</style>

<style lang="scss" scoped>
	.el-scrollbar {
		height: 100%;
	}
	.has-logo {
		.el-scrollbar {
			height: calc(100% - 50px);
		}
	}
	.el-menu {
		border: none;
		height: 100%;
		width: 100% !important;
	}
</style>
