<template>
	<svg width="32" height="32" viewBox="0 0 20 20">
		<path
			fill="currentColor"
			d="M2 4.5A2.5 2.5 0 0 1 4.5 2h11a2.5 2.5 0 0 1 0 5h-11A2.5 2.5 0 0 1 2 4.5Zm.75 4.583a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm0 3.58a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm0 3.587a.75.75 0 0 0 0 1.5h14.5a.75.75 0 1 0 0-1.5H2.75Z"
		/>
	</svg>
</template>
<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'StackIcon',
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
