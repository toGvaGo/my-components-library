import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import path from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        testTransformMode: {
            web: ['*.{ts,tsx}'],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './packages')
        }
    },
    plugins: [
        VueMacros({
            setupComponent: false,
            setupSFC: false,
            plugins: {
                vue: Vue(),
                vueJsx: VueJsx(),
            },
        }),
    ],
});
