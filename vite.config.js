import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: "10.0.0.124",
    port: 3000, // 🔥 Cambia el puerto a 3000
  },
});
