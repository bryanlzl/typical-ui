import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import pkg from './package.json';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gitCommitHash = execSync('git rev-parse --short HEAD').toString().trim();

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    return {
        plugins: [react(), tsconfigPaths(), tailwindcss()],
        resolve: {
            alias: {
                '@app': path.resolve(__dirname, './src/app'),
            },
        },
        server: {
            host: '0.0.0.0',
            port: Number.parseInt(env.VITE_PORT) || 3000,
        },
        define: {
            __APP_VERSION__: JSON.stringify(gitCommitHash),
            __PKG_VERSION__: JSON.stringify(pkg.version),
        },
        assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.obj', '**/*.laz', '**/*.las', '**/*.ply', '**/*.csv'],
        optimizeDeps: {
            include: ['@phosphor-icons/react'],
        },
        build: { outDir: 'dist' },
    };
});
