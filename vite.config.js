import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Projet_ReactJs/",  // 🔥 Assure-toi que cette ligne est bien là
  plugins: [react()],
})
