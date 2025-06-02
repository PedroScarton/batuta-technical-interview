import reactRefresh from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';

dotenv.config();

export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
      '@context': path.resolve(__dirname, './src/shared/context'),
      '@ui': path.resolve(__dirname, './src/shared/components/ui'),
      '@components': path.resolve(__dirname, './src/shared/components'),
      '@utils': path.resolve(__dirname, './src/shared/utils'),
    },
  },
  plugins: [reactRefresh()],
  optimizeDeps: {
    include: ['@mui/material', '@emotion/react', '@emotion/styled'],
  },
  server: {
    port: process.env.PORT || 3000,
  },
});
