import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Pets/', // Ensure this points to your repository name
  plugins: [react()],
})