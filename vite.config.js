import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'; 

export default defineConfig({
  server: {
    port: 3001, 
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/ui/pages'),
      '@components': path.resolve(__dirname, 'src/ui/components'),
      '@services': path.resolve(__dirname, 'arc/services/'),
    },
  },
});


