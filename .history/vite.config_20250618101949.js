import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import ghPages from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    ghPages()
  ],
  base: '/POP/'  // Keep this for GitHub Pages
})
