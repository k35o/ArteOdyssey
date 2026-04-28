import funstackStatic from '@funstack/static';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
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
