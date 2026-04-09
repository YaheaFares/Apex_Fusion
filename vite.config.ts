import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Apex_Fusion/',   // 👈 ADD THIS LINE
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});