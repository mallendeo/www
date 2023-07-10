import { defineConfig, transformerVariantGroup } from 'unocss'
import presetWind from '@unocss/preset-wind'
import { presetTypography } from 'unocss'

export default defineConfig({
	theme: {
		containers: {
			'lt-sm': '(max-width: 640px)',
		},
	},
	transformers: [transformerVariantGroup()],
	presets: [presetWind(), presetTypography()],
})
