import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: '0.0.0.0', // Change the host to 'localhost'
    port: 4000,
    proxy: {
      '/socket.io': {
        target: 'http://localhost:4000', // Replace with your backend server URL
        ws: true,
      },
    },
  },
  base: '/',
});
