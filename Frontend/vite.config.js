import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "./",  // Important for deployment
    build: {
        outDir: "dist",  // This is the default output folder for Vite
    },
});
