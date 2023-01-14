<template>
	<section class="app-main">
		<transition name="fade-transform" mode="out-in">
			<keep-alive :include="cachedViews">
				<router-view :key="key" />
			</keep-alive>
		</transition>
	</section>
</template>

<script setup lang="ts">
	import { computed, KeepAlive } from '@vue/runtime-core'
	import { useRoute, RouterView } from 'vue-router'
	import { useStore } from 'vuex'

	let store = useStore()
	let route = useRoute()
	let cachedViews = computed(() => store.getters.cachedViews)
	let key = computed(() => route.path)
</script>

<style lang="scss" scoped>
	.app-main {
		/* 50= navbar  50  */
		min-height: calc(100vh - 50px);
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.fixed-header + .app-main {
		padding-top: 50px;
		height: 100vh;
		overflow: auto;
	}

	.hasTagsView {
		.app-main {
			/* 84 = navbar + tags-view = 50 + 34 */
			min-height: calc(100vh - 84px);
		}

		.fixed-header + .app-main {
			padding-top: 84px;
		}
	}
</style>
