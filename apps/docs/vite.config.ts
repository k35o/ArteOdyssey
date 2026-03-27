import funstackStatic from '@funstack/static';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    funstackStatic({
      root: './src/root.tsx',
      app: './src/app.tsx',
    }),
    tailwindcss(),
    react(),
  ],
  optimizeDeps: {
    include: ['motion/react-client', 'motion/react'],
  },
});
