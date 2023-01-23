import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@shared": path.resolve(__dirname, "src/shared"),
            "@components": path.resolve(__dirname, "src/shared/components"),
            "@services": path.resolve(__dirname, "src/shared/services"),
            "@home": path.resolve(__dirname, "src/features/home"),
            "@user": path.resolve(__dirname, "src/features/user"),
            "@settings": path.resolve(__dirname, "src/features/settings"),
            "@users": path.resolve(__dirname, "src/features/users"),
            "@products": path.resolve(__dirname, "src/features/products")
        },
    },
});
