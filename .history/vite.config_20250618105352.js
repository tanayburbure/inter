// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/POP/', // ✅ Required for GitHub Pages deployment from /POP repo
  plugins: [tailwindcss(), react()]
});
