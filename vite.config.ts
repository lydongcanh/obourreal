import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://lydongcanh.github.io/obourreal",
  server: {
    port: 3000
  }
})
