import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search.vue";
import Results from "../views/Results.vue";

Vue.use(VueRouter);

const routes = [
	{ path: "/", component: Search },
	{ path: "/results", component: Results },
];

const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;
