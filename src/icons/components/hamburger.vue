<template>
	<svg
		version="1.1"
		:viewBox="viewBox"
		class="international-icon svg-icon svg-fill"
		style="width: 1em; height: 1em"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			:style="{ fill: color }"
			pid="0"
			d="M408 442h480a8 8 0 008-8v-56a8 8 0 00-8-8H408a8 8 0 00-8 8v56a8 8 0 008 8zm-8 204a8 8 0 008 8h480a8 8 0 008-8v-56a8 8 0 00-8-8H408a8 8 0 00-8 8v56zm504-486H120a8 8 0 00-8 8v56a8 8 0 008 8h784a8 8 0 008-8v-56a8 8 0 00-8-8zm0 632H120a8 8 0 00-8 8v56a8 8 0 008 8h784a8 8 0 008-8v-56a8 8 0 00-8-8zM142.4 642.1L298.7 519a8.8 8.8 0 000-13.9L142.4 381.9a8.9 8.9 0 00-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"
		/>
	</svg>
</template>
<script lang="ts">
	import { defineComponent } from '@vue/runtime-core'

	export default defineComponent({
		name: 'HamburgerIcon',
		props: {
			color: {
				type: String,
				default: '#fff',
			},
			width: {
				type: Number,
				default: 1024,
			},
			height: {
				type: Number,
				default: 1024,
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
