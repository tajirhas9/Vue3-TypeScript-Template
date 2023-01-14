<template>
	<a v-if="isExternal()" :href="to" target="_blank" rel="noopener">
		<slot />
	</a>
	<router-link v-else :to="to">
		<slot />
	</router-link>
</template>

<script lang="ts">
	import { isExternal } from '@/utils/validate'
	import { defineComponent } from '@vue/runtime-core'

	export default defineComponent({
		name: 'SidebarItemLink',
		props: {
			to: {
				type: String,
				required: true,
			},
		},
		methods: {
			isExternal() {
				return isExternal(this.to)
			},
		},
	})
</script>
