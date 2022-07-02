<template>
	<div class="card" style="width: 18rem">
		<div class="card-body d-flex flex-column">
			<img src="../assets/images/ticket.jpg" class="card-img-top" alt="ticket image" />
			<h5 class="text-start card-title mt-3">Ticket {{ ticket.id + 1 }}</h5>
			<p class="text-start">Price: {{ ticket.price }}</p>
			<p class="text-start">Airline: {{ ticket.airline }}</p>
			<p class="text-start">Scales: {{ ticket.scales }}</p>
			<p class="text-start">Duration: {{ ticket.duration }}</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TicketCard",
		props: {
			ticket: Object,
		},
	};
</script>

<style lang="css" scoped>
	.card {
        transition: transform .4s ease-in-out;
    }
	.card:hover {
		transform: translateY(-6px);
	}
</style>
