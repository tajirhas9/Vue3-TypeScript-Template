<template>
	<el-breadcrumb class="app-breadcrumb" separator="/" v-if="breadcrumb.length > 0">
		<transition-group name="breadcrumb">
			<el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
				<span v-if="item.redirect === 'noredirect' || index === breadcrumbs.length - 1" class="no-redirect">{{
					$t('route.' + item.meta.title)
				}}</span>
				<a v-else @click.prevent="handleLink(item)">{{ $t('route.' + item.meta.title) }}</a>
			</el-breadcrumb-item>
		</transition-group>
	</el-breadcrumb>
</template>

<script lang="ts">
	import { defineComponent, ref, watch } from 'vue'
	import { RouteRecord, RouteLocationNormalized as Route, RouteLocationMatched } from 'vue-router'

	export default defineComponent({
		name: 'Breadcrumb',

		setup() {
			const breadcrumb = ref<RouteLocationMatched[]>([])
			const breadcrumbs = ref<RouteLocationMatched[]>([])

			return {
				breadcrumb,
				breadcrumbs,
			}
		},
		methods: {
			getBreadcrumb() {
				let matched = this.$route.matched.filter((item) => item.meta && item.meta.title)
				const first = matched[0]
				if (!this.isDashboard(first)) {
					matched = [
						{
							path: '/home',
							meta: { title: 'home' },
						} as unknown as RouteRecord,
					].concat(matched)
				}
				this.breadcrumbs = matched.filter((item) => {
					return item.meta && item.meta.title && item.meta.breadcrumb !== false
				})
			},
			isDashboard(route: RouteRecord) {
				const name = route && route.name
				if (!name) {
					return false
				}
				return name.toString().trim().toLocaleLowerCase() === 'Home'.toLocaleLowerCase()
			},
			handleLink(item: any) {
				const { redirect, path } = item
				if (redirect) {
					this.$router.push(redirect).catch((err) => {
						console.warn(err)
					})
					return
				}
				this.$router.push(path).catch((err) => {
					console.warn(err)
				})
			},
		},

		watch: {
			$route(to, from) {
				// if you go to the redirect page, do not update the breadcrumbs
				if (this.$route.path.startsWith('/redirect/')) {
					return
				}
				this.getBreadcrumb()
			},
		},

		created() {
			this.getBreadcrumb()
		},
	})
</script>

<style lang="scss" scoped>
	.el-breadcrumb__inner,
	.el-breadcrumb__inner a {
		font-weight: 400 !important;
	}

	.app-breadcrumb.el-breadcrumb {
		display: inline-block;
		font-size: 14px;
		line-height: 50px;
		margin-left: 8px;

		.no-redirect {
			color: #97a8be;
			cursor: text;
		}
	}
</style>
