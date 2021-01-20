import resolve from 'rollup-plugin-node-resolve'
export default {
	input: "src/index.js",
	output: {
		file: 'bundle.js',
		format: 'iife',
		globals: {
			vue: 'Vue'
		}
	},
	external: [
		'vue'
	],
	plugins: [
		resolve()
	]
}