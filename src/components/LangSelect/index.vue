<template>
	<el-dropdown trigger="click" @command="handleLanguage">
		<span class="el-dropdown-link">
			<svg-icon :icon="'language'" :color="color" />
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<!-- <el-dropdown-item :disabled="language === 'zh'" command="zh"> 中文 </el-dropdown-item> -->
				<el-dropdown-item :disabled="language === 'en'" command="en"> English </el-dropdown-item>
				<el-dropdown-item :disabled="language === 'en-NZ'" command="en-NZ"> English - New Zealand </el-dropdown-item>
				<el-dropdown-item :disabled="language === 'nl-SR'" command="nl-SR"> Dutch - Suriname </el-dropdown-item>
				<!-- <el-dropdown-item :disabled="language === 'es'" command="es"> Español </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'ja'" command="ja"> 日本語 </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'ko'" command="ko"> 한국어 </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'it'" command="it"> Italiano </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'tr'" command="tr"> Türk </el-dropdown-item> -->
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script lang="ts">
	import { store, Store } from '@/store'
	import { defineComponent } from 'vue'
	import settings from '@/settings'
	import { ElMessage as Message } from 'element-plus'
	import { AppModuleAction } from '@/store/modules/app/types'
	import SvgIcon from '@/components/SvgIcon/index.vue'
	export default defineComponent({
		name: 'LangSelect',
		components: {
			SvgIcon,
		},
		setup() {
			return {}
		},
		props: {
			color: {
				type: String,
				default: '#fff',
			},
		},
		computed: {
			language() {
				return store.getters.language
			},
		},
		methods: {
			handleLanguage: async function (lang: string) {
				this.$i18n.locale = lang
				await store.dispatch(AppModuleAction.SetLanguage, lang)
				document.documentElement.lang = lang
				const title = this.$route.meta.title
					? `${this.$t(`route.${this.$route.meta.title}`)} - ${settings.title}`
					: `${settings.title}`
				document.title = title
				Message.success(`${this.$t('components.changeLanguageTips').toString()}`)
			},
		},

		beforeMount() {},
		mounted() {},
		beforeDestroy() {},
		watch: {},
	})
</script>
