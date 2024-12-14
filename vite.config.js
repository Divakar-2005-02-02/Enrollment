import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/Enrollment/Frontend/',  // Specify the repository name here
  plugins: [react()],
});
