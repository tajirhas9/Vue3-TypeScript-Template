<template>
	<language-icon v-if="icon === 'language'" :width="width" :height="height" :color="color" />
	<eye-on-icon v-else-if="icon === 'eye-on'" :width="width" :height="height" :color="color" />
	<eye-off-icon v-else-if="icon === 'eye-off'" :width="width" :height="height" :color="color" />
	<people-icon v-else-if="icon === 'people'" :width="width" :height="height" :color="color" />
	<peoples-icon v-else-if="icon === 'peoples'" :width="width" :height="height" :color="color" />
	<password-icon v-else-if="icon === 'password'" :width="width" :height="height" :color="color" />
	<home-icon v-else-if="icon === 'home'" :width="width" :height="height" :color="color" />
	<hamburger-icon v-else-if="icon === 'hamburger'" :width="width" :height="height" :color="color" />
	<forms-icon v-else-if="icon === 'forms'" :width="width" :height="height" :color="color" />
	<form-icon v-else-if="icon === 'form'" :width="width" :height="height" :color="color" />
	<list-icon v-else-if="icon === 'list'" :width="width" :height="height" :color="color" />
	<configuration-icon v-else-if="icon === 'configuration'" :width="width" :height="height" :color="color" />
	<mapping-icon v-else-if="icon === 'mapping'" :width="width" :height="height" :color="color" />
	<stack-icon v-else-if="icon === 'stack'" :width="width" :height="height" :color="color" />
	<chart-icon v-else-if="icon === 'chart'" :width="width" :height="height" :color="color" />
	<warning-icon v-else-if="icon === 'warning'" :width="width" :height="height" :color="color" />
</template>

<script lang="ts">
	import LanguageIcon from '@/icons/components/language.vue'
	import EyeOnIcon from '@/icons/components/eye-on.vue'
	import EyeOffIcon from '@/icons/components/eye-off.vue'
	import PeopleIcon from '@/icons/components/people.vue'
	import PeoplesIcon from '@/icons/components/people.vue'
	import PasswordIcon from '@/icons/components/password.vue'
	import HomeIcon from '@/icons/components/home.vue'
	import HamburgerIcon from '@/icons/components/hamburger.vue'
	import FormsIcon from '@/icons/components/forms.vue'
	import FormIcon from '@/icons/components/form.vue'
	import ListIcon from '@/icons/components/list.vue'
	import ConfigurationIcon from '@/icons/components/configuration.vue'
	import MappingIcon from '@/icons/components/mapping.vue'
	import StackIcon from '@/icons/components/stack.vue'
	import ChartIcon from '@/icons/components/chart.vue'
	import WarningIcon from '@/icons/components/warning.vue'
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'SvgIcon',
		components: {
			LanguageIcon,
			EyeOnIcon,
			EyeOffIcon,
			PeopleIcon,
			PeoplesIcon,
			PasswordIcon,
			HomeIcon,
			HamburgerIcon,
			FormsIcon,
			FormIcon,
			ListIcon,
			ConfigurationIcon,
			MappingIcon,
			StackIcon,
			ChartIcon,
			WarningIcon,
		},
		props: {
			icon: {
				type: String,
				required: true,
			},
			color: {
				type: String,
				default: '#fff',
			},
			height: {
				type: Number,
				default: 128,
			},
			width: {
				type: Number,
				default: 128,
			},
		},
	})
</script>
