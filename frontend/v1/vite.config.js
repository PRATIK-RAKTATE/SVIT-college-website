import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      filename: "bundle-stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true
    }),
  ],
  build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            framer: ['framer-motion'],
            router: ['react-router-dom']
          },
        },
      },
  },
});
