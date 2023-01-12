import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  define: {
    'REACT_APP_BASE_URL': process.env.REACT_APP_BASE_URL
  }
})