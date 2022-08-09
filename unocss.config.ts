import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-stone-700 hover:dark:text-stone-200'],
    ['title', 'text-3xl md:text-5xl font-bold tracking-tight leading-tight'],
    ['subtitle', 'text-lg md:text-3xl font-semibold tracking-tight leading-tight'],
    ['green-section', 'bg-light dark:bg-dark text-stone-700 dark:text-stone-300'],
    ['brown-section', 'bg-stone-300 dark:bg-stone-700 text-dark dark:text-light'],
    ['section-border', 'border-b-3 border-stone-700 dark:border-stone-300'],
    ['brut-padding', 'bg-white dark:bg-stone-700 py-2 px-3'],
    ['brut-padding-text', 'text-stone-700 dark:text-white'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  theme: {
    colors: {
      light: '#c5e6bb',
      dark: '#17391a',
    },
  },
})
