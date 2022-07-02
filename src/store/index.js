import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tickets: [],
		cities: [
			"Aberdeen",
			"Abilene",
			"Akron",
			"Albany",
			"Albuquerque",
			"Alexandria",
			"Allentown",
			"Amarillo",
			"Anaheim",
			"Anchorage",
			"Ann Arbor",
			"Antioch",
			"Apple Valley",
			"Appleton",
		],
		airlines: ["Avianca", "Tame", "T&T", "JD", "DQ", "American Airlines"],
	},
	mutations: {
		setTickets(state, payload) {
			state.tickets = payload;
		},
	},
	actions: {
		generateData({ commit, state }) {
			let auxTickets = [];
			let origin = state.cities[Math.random() * (state.cities.length - 0) + 0];
			let destiny = state.cities[Math.random() * (state.cities.length - 0) + 0];
			let airline = state.airlines[Math.random() * (state.airlines.length - 0) + 0];
			let year = Math.random() * (2022 - 2021) + 2021;
			let month = Math.random() * (12 - 1) + 1;
			let day = Math.random() * (25 - 1) + 1; //max day number is 25
			let date = new Date(year, month, day);
            let endDate = new Date(year, month, day + 1);
			for (let i = 0; i < 30; i++) {
				let auxObj = {
					id: i,
					origin: origin,
					destiny: destiny,
					departureDate: String(date).slice(0, 16),
					arrivalDate: String(endDate).slice(0, 16),
					price: Math.random() * (2500 - 500) + 500,
					airline: airline,
					scales: Math.random() * (10 - 0) + 0,
					duration: Math.random() * (24 - 1) + 1,
				};
				auxTickets.push(auxObj);
			}
			commit("setTickets", auxTickets);
		},
	},
	getters: {
		getTickets(state) {
			return state.tickets;
		},
	},
	modules: {},
});
