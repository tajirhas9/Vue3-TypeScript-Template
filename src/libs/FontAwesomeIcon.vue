<template>
	<svg xmlns="http://www.w3.org/2000/svg" :class="$props.class" :viewBox="`0 0 ${width} ${height}`">
		<path fill="currentColor" :d="svgPath" />
	</svg>
</template>

<script lang="ts">
	import { defineComponent, computed } from '@vue/runtime-core'
	import { findIconDefinition, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'

	export default defineComponent({
		name: 'FontAwesomeIcon',

		props: {
			icon: {
				type: String,
				required: true,
			},
			type: {
				type: String,
				default: 'fas',
				required: false,
			},
			class: String,
		},

		setup(props) {
			const definition = computed(() =>
				findIconDefinition({
					prefix: props.type as IconPrefix,
					iconName: props.icon as IconName,
				})
			)

			const width = computed(() => definition.value.icon[0])
			const height = computed(() => definition.value.icon[1])
			const svgPath = computed(() => definition.value.icon[4]) as unknown as string

			return { width, height, svgPath }
		},
	})
</script>
