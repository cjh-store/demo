import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  exclude: [
    'node_modules',
    'dist',
    '.git',
    '.husky',
    '.vscode',
    'public',
    'build',
    'mock',
  ],
  presets: [presetUno()],
  transformers: [transformerVariantGroup()],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'text-ellipsis': 'truncate',
  },
  rules: [
    [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })],
    [/^br-(.+)$/, ([, size]) => ({ 'border-radius': `${size}` })],
  ],
  theme: {
    colors: {
      theme: {
        primary: 'var(--van-blue)',
        success: 'var(--van-green)',
        warning: 'var(--van-orange)',
        danger: 'var(--van-red)',
        error: 'var(--van-red)',
      },
    },
  },
})
