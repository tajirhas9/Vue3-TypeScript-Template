<template>
	<svg width="32" height="32" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
		/>
	</svg>
</template>
<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'HomeIcon',
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
