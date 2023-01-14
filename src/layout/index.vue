<template>
	<div :class="classObj" class="app-wrapper">
		<div v-if="classObj.mobile && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
		<sidebar class="sidebar-container" />
		<div :class="{ hasTagsView: showTagsView }" class="main-container">
			<div :class="{ 'fixed-header': fixedHeader }">
				<navbar />
				<!-- <tags-view v-if="showTagsView" /> -->
			</div>
			<app-main />
			<!-- <right-panel v-if="showSettings">
				<settings />
			</right-panel> -->
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed, onBeforeMount, onBeforeUnmount, onMounted, watch } from 'vue'
	import { store } from '@/store'
	import { DeviceType } from '@/utils/constants'
	import useResize from './mixin/useResize'
	import Sidebar from './components/Sidebar/index.vue'
	import Navbar from './components/Navbar/index.vue'
	import AppMain from './components/AppMain.vue'
	import { AppModuleAction } from '@/store/modules/app/types'
	import { useRoute, useRouter } from 'vue-router'

	enum LogOutReason {
		INACTIVITY,
		SESSIONTIMEOUT,
		NONE,
	}
	const { isMobile, resizeHandler } = useResize()
	let route = useRoute()
	let router = useRouter()
	let fixedHeader = computed(() => {
		return store.getters.fixedHeader
	})
	let showTagsView = computed(() => {
		return store.getters.showTagsView
	})
	let showSettings = computed(() => {
		return store.getters.showSettings
	})
	let sidebar = computed(() => {
		return store.getters.sidebar
	})
	let classObj = computed(() => {
		return {
			hideSidebar: !store.getters.sidebar.opened,
			openSidebar: store.getters.sidebar.opened,
			withoutAnimation: store.getters.sidebar.withoutAnimation,
			mobile: store.getters.device === DeviceType.Mobile,
		}
	})

	function redirectToLogin() {
		router.push(`/login?redirect=${route.fullPath}`)
	}

	function handleClickOutside() {}

	onBeforeUnmount(() => {
		window.removeEventListener('resize', resizeHandler)
	})

	onBeforeMount(() => {
		window.removeEventListener('resize', resizeHandler)
	})

	onMounted(() => {
		if (isMobile()) {
			store.dispatch(AppModuleAction.ToggleDevice, DeviceType.Mobile)
			store.dispatch(AppModuleAction.CloseSideBar, true)
		}
	})

	watch(route, (to, from) => {
		if (store.getters.device === DeviceType.Mobile && sidebar.value.opened) {
			store.dispatch(AppModuleAction.CloseSideBar, false)
		}
	})
</script>

<style lang="scss">
	.unsupported {
		text-align: center;
		width: 100%;
		font-size: 2rem;
	}

	.unsupported-container {
		margin-top: auto;
	}
	.unsupported-subtitle {
		margin-top: 1rem;
		font-size: 1rem;
	}
	.app-wrapper {
		@include clearfix;
		position: relative;
		height: 100%;
		width: 100%;
	}

	.drawer-bg {
		background: #000;
		opacity: 0.3;
		width: 100%;
		top: 0;
		height: 100%;
		position: absolute;
		z-index: 999;
	}

	.main-container {
		min-height: 100%;
		transition: margin-left 0.28s;
		margin-left: $sideBarWidth;
		position: relative;
	}

	.sidebar-container {
		transition: width 0.28s;
		width: $sideBarWidth !important;
		height: 100%;
		position: fixed;
		font-size: 0px;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 1001;
		overflow: hidden;
	}

	.fixed-header {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 9;
		width: calc(100% - #{$sideBarWidth});
		transition: width 0.28s;
	}

	.hideSidebar {
		.main-container {
			margin-left: 54px;
		}

		.sidebar-container {
			width: 54px !important;
		}

		.fixed-header {
			width: calc(100% - 54px);
		}
	}

	/* for mobile response 适配移动端 */
	.mobile {
		.main-container {
			margin-left: 0px;
		}

		.sidebar-container {
			transition: transform 0.28s;
			width: $sideBarWidth !important;
		}

		&.openSidebar {
			position: fixed;
			top: 0;
		}

		&.hideSidebar {
			.sidebar-container {
				pointer-events: none;
				transition-duration: 0.3s;
				transform: translate3d(-$sideBarWidth, 0, 0);
			}
		}

		.fixed-header {
			width: 100%;
		}
	}

	.withoutAnimation {
		.main-container,
		.sidebar-container {
			transition: none;
		}
	}

	.banner-container {
		min-height: fit-content;
		max-height: 70px;
		background-color: azure;
	}
</style>
