<template>
	<div class="navbar" v-if="isNotLogin">
		<hamburger
			id="hamburger-container"
			:is-active="sidebar.opened"
			class="hamburger-container"
			@toggle-click="toggleSideBar"
		/>
		<!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->
		<div class="right-menu">
			<template v-if="!isMobileDevice()">
				<!-- <header-search class="right-menu-item" />
        <error-log class="errLog-container right-menu-item hover-effect" />-->
				<screen-full class="right-menu-item hover-effect" />
				<!-- <el-tooltip
          :content="$t('navbar.size')"
          effect="dark"
          placement="bottom"
        >
          <size-select class="right-menu-item hover-effect" />
        </el-tooltip> -->
				<lang-select class="right-menu-item hover-effect" :color="'#5a5e66'" />
			</template>
			<el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
				<div class="avatar-wrapper">
					<!-- <svg-icon :icon="'language'" /> -->
					<fa icon="fa-user" />
				</div>
				<template #dropdown>
					<el-dropdown-menu>
						<router-link to="/" v-if="isProfilePage()">
							<el-dropdown-item>
								{{ $t('navbar.home') }}
							</el-dropdown-item>
						</router-link>
						<router-link to="/profile/" v-else>
							<el-dropdown-item>
								{{ $t('navbar.profile') }}
							</el-dropdown-item>
						</router-link>
						<el-dropdown-item @click="logout" data-testid="logout-button">
							<span style="display: block">
								{{ $t('navbar.logOut') }}
							</span>
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<script lang="ts">
	import { store, Store } from '@/store'
	import { defineComponent } from 'vue'
	import { AppModuleAction } from '@/store/modules/app/types'
	import { UserModuleAction } from '@/store/modules/user/types'
	import Breadcrumb from '@/components/Breadcrumb/index.vue'
	// import ErrorLog from '@/components/ErrorLog/index.vue'
	import Hamburger from '@/components/Hamburger/index.vue'
	// import HeaderSearch from '@/components/HeaderSearch/index.vue'
	import LangSelect from '@/components/LangSelect/index.vue'
	import ScreenFull from '@/components/Screenfull/index.vue'
	// import SizeSelect from '@/components/SizeSelect/index.vue'
	import { UserFilled, ArrowDown } from '@element-plus/icons-vue'
	import SvgIcon from '@/components/SvgIcon/index.vue'
	import { ERoutes } from '@/router'
	import { DeviceType } from '@/utils/constants'

	export default defineComponent({
		name: 'Navbar',
		components: {
			Breadcrumb,
			// ErrorLog,
			Hamburger,
			// HeaderSearch,
			LangSelect,
			ScreenFull,
			// SizeSelect,
			UserFilled,
			ArrowDown,
			SvgIcon,
		},
		setup() {},

		computed: {
			device() {
				return store.state.app.device
			},
			sidebar() {
				return store.state.app.sidebar
			},
			isNotLogin() {
				return this.$route.name !== ERoutes.Login
			},
		},
		watch: {},

		beforeMount() {},
		mounted() {},
		beforeUnmount() {},
		methods: {
			isProfilePage() {
				return this.$router.currentRoute.value.name === ERoutes.Profile
			},
			isMobileDevice() {
				return this.device === DeviceType.Mobile
			},
			async toggleSideBar() {
				await store.dispatch(AppModuleAction.ToggleSideBar)
			},
			async logout() {
				try {
					await store.dispatch(UserModuleAction.Logout)
					this.$router.push(`/login?redirect=${this.$route.fullPath}`)
				} catch (e) {
					console.error(e)
				}
			},
		},
	})
</script>

<style lang="scss" scoped>
	.navbar {
		height: 25px;
		overflow: hidden;
		position: relative;
		background: #fff;
		box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

		.hamburger-container {
			line-height: 20px;
			height: 100%;
			float: left;
			padding: 0 15px;
			cursor: pointer;
			transition: background 0.3s;
			-webkit-tap-highlight-color: transparent;

			&:hover {
				background: rgba(0, 0, 0, 0.025);
			}
		}

		.breadcrumb-container {
			float: left;
		}

		.errLog-container {
			display: inline-block;
			vertical-align: top;
		}

		.right-menu {
			float: right;
			height: 100%;
			line-height: 26px;

			&:focus {
				outline: none;
			}

			.right-menu-item {
				display: inline-block;
				padding: 0 8px;
				height: 100%;
				font-size: 18px;
				color: #5a5e66;
				vertical-align: text-bottom;

				&.hover-effect {
					cursor: pointer;
					transition: background 0.3s;

					&:hover {
						background: rgba(0, 0, 0, 0.025);
					}
				}
			}

			.custom-icon {
				font-size: 1.4rem;
			}

			.avatar-container {
				margin-right: 30px;

				.avatar-wrapper {
					margin-top: 2px;
					position: relative;

					.el-icon-caret-bottom {
						cursor: pointer;
						position: absolute;
						right: -20px;
						top: 25px;
						font-size: 12px;
					}
				}
			}
		}
	}
</style>
