import eslint from '@nabla/vite-plugin-eslint';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [eslint(), tsConfigPaths(), viteReact()],
});
