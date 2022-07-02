<template>
	<div id="resultsCont" class="m-auto">
		<h1>Results</h1>
		<div class="cards d-flex flex-wrap gap-5 justify-content-center my-5">
			<div v-for="ticket in getTickets" :key="ticket.id">
				<TicketCard :ticket="ticket" />
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	import TicketCard from "../components/TicketCard.vue";
	export default {
		name: "Results",
		components: {
			TicketCard,
		},
		mounted() {
			this.generateData();
		},
		methods: {
			...mapActions(["generateData"]),
		},
		computed: {
			...mapGetters(["getTickets"]),
		},
	};
</script>

<style lang="scss" scoped></style>
