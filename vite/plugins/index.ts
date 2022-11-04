import type { PluginOption } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import inject from '@rollup/plugin-inject'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import legacy from '@vitejs/plugin-legacy'

export function setupVitePlugins({ mode }): PluginOption[] {
  let plugins = [
    vue({ reactivityTransform: true }),
    inject({
      $dayjs: 'dayjs',
      $g: resolve('src/utils/index'),
      _: 'lodash',
    }),
    Unocss(),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        'vue-router',
        '@vueuse/core',
        {
          axios: [['default', 'axios']],
        },
      ],
      dts: 'types/auto-imports.d.ts',
      eslintrc: {
        filepath: './.eslintrc-auto-import.json',
        enabled: true,
      },
    }),
    Components({
      dirs: ['src/components/'],
      resolvers: [VantResolver()],
      dts: 'types/components.d.ts',
    }),
    DefineOptions(),
  ]
  if (mode == 'production')
    plugins = [
      ...plugins,
      visualizer({ open: true, gzipSize: true }),
      legacy({
        targets: ['Android >= 4.4', 'iOS >= 9', 'ie >= 11', 'Chrome>=30'],
        modernPolyfills: true,
      }),
    ]
  return plugins
}
