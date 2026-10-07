import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Open the dev server in Chrome (any other browser name works too, e.g. 'msedge').
process.env.BROWSER ??= 'chrome';

// Relative base so the build works on username.github.io and username.github.io/repo-name
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    open: true, // open the browser automatically on `npm run dev`
  },
});
