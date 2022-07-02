<template>
	<div id="searchCont" class="w-50 m-auto p-5">
		<h1>Search</h1>
		<SearchForm />
	</div>
</template>

<script>
	import SearchForm from "../components/SearchForm.vue";
	export default {
		name: "Search",
		components: {
			SearchForm,
		},
	};
</script>

<style lang="css" scoped>
    #searchCont{
        border-radius: 20px;
        box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
        -webkit-box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
        -moz-box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
        background-image: linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%);
    }
</style>
