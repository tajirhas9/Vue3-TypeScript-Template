<template>
	<svg width="32" height="32" viewBox="0 0 24 24">
		<path fill="currentColor" d="M4 20V9h4v11Zm6 0V4h4v16Zm6 0v-7h4v7Z" />
	</svg>
</template>
<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'ChartIcon',
		props: {
			color: {
				type: String,
				default: '#fff',
			},
			width: {
				type: Number,
				default: 128,
			},
			height: {
				type: Number,
				default: 128,
			},
		},
		computed: {
			fontColor: function () {
				return this.color === '#fff' ? '#000' : '#fff'
			},
			viewBox: function () {
				return `0 0 ${this.width} ${this.height}`
			},
		},
	})
</script>
