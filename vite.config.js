const { createVuePlugin } = require("vite-plugin-vue2");

module.exports = {
	server: {
		host: "0.0.0.0",
		port: 3000,
	},
	plugins: [createVuePlugin()],
};
