import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/wavewolf/',  // Stelle sicher, dass dies korrekt ist
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Dies stellt sicher, dass alle Anfragen an die index.html geleitet werden
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
