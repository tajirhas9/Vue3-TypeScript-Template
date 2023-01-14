<template>
	<div v-if="!item.meta || !item.meta.hidden">
		<sidebar-item-link
			v-if="!alwaysShowRootMenu && theOnlyOneChild && !nestedView && !theOnlyOneChild.children && theOnlyOneChild.meta"
			:to="resolvePath(theOnlyOneChild.path)"
		>
			<el-menu-item :disabled="disabled">
				<el-icon>
					<svg-icon v-if="theOnlyOneChild.meta.icon" :icon="theOnlyOneChild.meta.icon" />
				</el-icon>
				<template #title>{{
					theOnlyOneChild.meta.title ? $t('route.' + theOnlyOneChild.meta.title) : theOnlyOneChild.meta.title
				}}</template>
			</el-menu-item>
		</sidebar-item-link>
		<el-sub-menu v-else :index="resolvePath(item.path)">
			<template #title>
				<el-icon>
					<svg-icon v-if="theOnlyOneChild && item.meta.icon" :icon="item.meta.icon" />
				</el-icon>
				<span v-if="item.meta && item.meta.title">&nbsp;{{ $t('route.' + item.meta.title) }}</span>
			</template>
			<sidebar-item
				v-for="child in item.children"
				:key="child.path"
				:item="child"
				:is-collapse="isCollapse"
				:is-first-level="false"
				:base-path="resolvePath(child.path)"
			/>
		</el-sub-menu>
	</div>
</template>

<script lang="ts">
	import path from 'path'
	import { isExternal } from '@/utils/validate'
	import SidebarItemLink from './SidebarItemLink.vue'
	import { defineComponent } from '@vue/runtime-core'
	import SvgIcon from '@/components/SvgIcon/index.vue'
	import { Location, Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
	import { store } from '@/store'
	export default defineComponent({
		name: 'SidebarItem',
		components: {
			SidebarItemLink,
			SvgIcon,
			Location,
			Document,
			IconMenu,
			Setting,
		},
		props: {
			item: {
				type: Object,
				required: true,
			},
			basePath: {
				type: String,
				default: '',
			},
			isCollapse: {
				type: Boolean,
				default: false,
			},
			isFirstLevel: {
				type: Boolean,
				default: true,
			},
		},
		computed: {
			alwaysShowRootMenu() {
				return this.item.meta && this.item.meta.alwaysShow
			},
			nestedView() {
				try {
					return this.item.meta.nestedView
				} catch (e) {
					return false
				}
			},
			showingChildNumber() {
				if (this.item.children) {
					const showingChildren = this.item.children.filter((_item: any) => {
						if (_item.meta && _item.meta.hidden) {
							return false
						} else {
							return true
						}
					})
					return showingChildren.length
				}
				return 0
			},
			theOnlyOneChild() {
				if (this.showingChildNumber > 1) {
					return null
				}
				if (this.item.children) {
					for (const child of this.item.children) {
						if (!child.meta || !child.meta.hidden) {
							return child
						}
					}
				}
				// If there is no children, return itself with path removed,
				// because this.basePath already conatins item's path information
				return { ...this.item, path: '' }
			},
			disabled() {
				return false
			},
		},
		methods: {
			resolvePath(routePath: string) {
				if (isExternal(routePath)) {
					return routePath
				}
				if (isExternal(this.basePath)) {
					return this.basePath
				}
				return path.resolve(this.basePath, routePath)
			},
		},
	})
</script>

<style lang="scss">
	.el-submenu.is-active > .el-submenu__title {
		color: $subMenuActiveText !important;
	}

	#menu-item * {
		vertical-align: middle;
	}

	.full-mode {
		.nest-menu .el-submenu > .el-submenu__title,
		.el-submenu .el-menu-item {
			min-width: $sideBarWidth !important;
			background-color: $subMenuBg !important;

			&:hover {
				background-color: $subMenuHover !important;
			}
		}
	}

	.simple-mode {
		&.first-level {
			.submenu-title-noDropdown {
				padding: 0 !important;
				position: relative;

				.el-tooltip {
					padding: 0 !important;
				}
			}

			.el-submenu {
				overflow: hidden;

				& > .el-submenu__title {
					padding: 0px !important;

					.el-submenu__icon-arrow {
						display: none;
					}

					& > span {
						visibility: hidden;
					}
				}
			}
		}
	}
</style>

<style lang="scss" scoped>
	// .simple-mode {
	//   .svg-icon {
	// margin-left: 20px;
	//   }
	// }
</style>
