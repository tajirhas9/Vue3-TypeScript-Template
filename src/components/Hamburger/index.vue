<template>
	<div :class="[{ 'is-active': isActive }]" @click="toggleClick">
		<svg-icon :icon="'hamburger'" :color="'#5a5e66'" :width="1024" :height="1024" />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from '@vue/runtime-core'
	import SvgIcon from '@/components/SvgIcon/index.vue'
	export default defineComponent({
		name: 'Hamburger',
		components: {
			SvgIcon,
		},
		props: {
			isActive: {
				type: Boolean,
				default: false,
			},
		},
		computed: {},
		methods: {
			toggleClick() {
				this.$emit('toggle-click')
			},
		},
	})
</script>

<style lang="scss" scoped>
	.svg-icon {
		vertical-align: middle;
	}

	.is-active {
		transform: rotate(180deg);
	}
</style>
