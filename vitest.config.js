import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      'node_modules/**',
      'dist/**',
      'backend-clone/**',
      '**/node_modules/**',
      '**/dist/**',
    ],
    threads: {
      execArgv: [],
      singleThread: true,
    },
    forks: {
      execArgv: [],
      singleFork: true,
    },
    coverage: {
      provider: 'v8',
      include: ['src/**/*'],
      exclude: [
        'src/**/*.test.{js,jsx}',
        'src/setupTests.js',
        '**/node_modules/**',
        '**/node_modules.nosync/**',
      ],
    },
  },
});
