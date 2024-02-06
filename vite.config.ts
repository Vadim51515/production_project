import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [svgr(), react()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: '/src',
            },
        ],
    },
    server: {
        host: '0.0.0.0', // IP-адрес, на котором будет работать сервер
        port: 3000, // Порт, на котором сервер будет слушать входящие соединения
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
});
