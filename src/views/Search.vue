<template>
	<div id="searchCont" class="col-lg-6 col-sm-10 col-xs-8 m-auto p-5">
		<h1>Search</h1>
		<SearchForm/>
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
    @media (max-width:500px){
        #searchCont{
            width: 80% !important;
            padding: 20px  10px !important;
        }
    }
</style>
