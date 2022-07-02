<template>
	<div id="app">
		<Navbar />
		<router-view class="mt-5"></router-view>
	</div>
</template>

<script>
	import Navbar from "./components/Navbar.vue";
	export default {
		components: {
			Navbar,
		},
	};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
	#app {
		font-family: 'Poppins', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 0px;
	}
</style>
