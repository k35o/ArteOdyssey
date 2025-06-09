/// <reference types="vitest" />

import { resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: {
			"@k8o/arte-odyssey": resolve("packages/arte-odyssey/src"),
		},
	},
	test: {
		globals: true,
		coverage: {
			all: false,
			include: ["packages"],
		},
		projects: [
			{
				extends: true,
				plugins: [react()],
				test: {
					name: { label: "browser test", color: "green" },
					include: ["**/*test.{ts,tsx}"],
					browser: {
						enabled: true,
						instances: [
							{
								browser: "chromium",
							},
						],
						provider: "playwright",
						headless: true,
						screenshotFailures: false,
					},
				},
			},
		],
	},
});
