<template>
	<router-view v-slot="{ Component }" :key="$route.path">
		<transition name="fade" mode="out-in">
			<component :is="Component" :key="$route.path" />
		</transition>
	</router-view>
	<!-- <service-worker-update-popup /> -->
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'App',
	})
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/* margin-top: 60px; */
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.3s;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>
