<template>
	<div id="navbarCont">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid d-flex flex-column justify-content-center">
				<div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
					<ul class="navbar-nav mb-2 mb-lg-0">
						<li class="nav-item">
							<router-link to="/" class="nav-link">Search</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/results" class="nav-link">Results</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "Navbar",
	};
</script>

<style lang="css" scoped>
	nav a.router-link-exact-active {
		color: #42b983 !important;
	}
</style>
