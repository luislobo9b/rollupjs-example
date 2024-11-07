import { nodeResolve } from "@rollup/plugin-node-resolve"
import replace from "@rollup/plugin-replace"

export default {
	input: "src/js/app.mjs",
	output: {
		file: "src/js/app.build.js",
		format: "es"
	},
	plugins: [
		nodeResolve(),
		replace({
			"process.env.NODE_ENV": JSON.stringify("production"),
			preventAssignment: true
		})
	]
}