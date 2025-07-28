import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
  build: {
    target: 'es2022',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'agents',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['@openai/agents', '@mcp-agents/shared'],
    },
  },
})
