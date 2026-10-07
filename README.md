# Fabian Guevara Torguet — Portfolio

Personal developer portfolio built with React 18 + Vite and plain CSS. Live at https://fgtlight.github.io/

## Run locally

```bash
npm install
npm run dev
```

## Edit content

All text, skills and projects live in `src/data.js`. Colors and theme tokens are at the top of `src/index.css`.

## Deploy to GitHub Pages

1. Create a GitHub repo (e.g. `portfolio` or `<username>.github.io`) and push this folder to the `main` branch.
2. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Every push to `main` builds and deploys automatically (`.github/workflows/deploy.yml`).

`base: './'` in `vite.config.js` makes the build work both at `username.github.io` and `username.github.io/repo-name`.
