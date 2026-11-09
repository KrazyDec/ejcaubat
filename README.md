# Ej Caubat portfolio

A Next.js 15, React, TypeScript, Tailwind CSS and Framer Motion portfolio exported as static HTML, CSS and JavaScript for GitHub Pages. No backend or database is required. The contact form opens the visitor's email client; it does not send email from a server.

## Local development

Use Node.js 22 LTS and npm.

1. Run `npm ci` to install the locked dependencies.
2. Run `npm run dev`.
3. Open `http://localhost:3000/ejcaubat/`.

The `/ejcaubat` base path is enabled locally as well as in production so asset URLs behave consistently.

## Production build

Run `npm run build`. Next.js generates `out/index.html`, `out/_next/`, metadata files and copies `public/` assets into `out/`.

Do not open `out/index.html` using a `file://` URL. Serve it over HTTP mounted at `/ejcaubat/`, or test it on GitHub Pages. `next start` (the existing `npm start` command) is not supported with `output: "export"`; use `npm run dev` for local development instead.

Do not commit `out/`, `.next/` or `node_modules/`.

## GitHub Pages deployment

Target: `https://krazydec.github.io/ejcaubat/`.

1. In `KrazyDec/ejcaubat`, open **Settings > Pages**.
2. Set **Build and deployment > Source** to **GitHub Actions**.
3. Commit and push the source changes, including `.github/workflows/deploy.yml`, to `master`.
4. Open **Actions > Deploy portfolio to GitHub Pages** to watch the build and deployment.
5. After deployment succeeds, visit the target URL. Allow a few minutes for the first publication.

Subsequent pushes to `master` deploy automatically. You can also use **Run workflow** from the Actions page. There is no need for a `gh-pages` branch or to manually upload `index.html`.

Repository Pages settings must be enabled before the workflow runs. The deployment job uses GitHub's generated token; do not create or commit a personal access token. If repository environment rules restrict deployment branches, allow `master` for the `github-pages` environment.

## Content and assets

- Edit portfolio content in `src/data/portfolio.ts`.
- Deployment base path and public site URL are in `src/lib/site.ts`.
- Keep asset paths in portfolio data relative to the public root, e.g. `/images/rh_ss.png`. The components add `/ejcaubat` automatically.
- Keep the screenshot at `public/images/rh_ss.png` (filename case must match on GitHub's Linux runner).
- Add the resume at `public/resume/ej-caubat-resume.pdf` to enable the download.
- Set `profile.photo` and `profile.github` when those assets/links are available.
- To add the optional Open Graph image, follow the comment in `src/app/layout.tsx`.

Before publishing, review public assets and text for private information. Crop or blur account details in screenshots. Never commit secrets or confidential employer/client materials.

If you rename the repository or use a custom domain, update `basePath` and `siteUrl` in `src/lib/site.ts` and rebuild. A custom domain hosted at its root normally uses an empty base path.

## Limitations

GitHub Pages cannot run Next.js API routes, server actions or server-side image optimization. Images are served directly and the contact form uses `mailto:`. Google fonts are downloaded during a fresh build, which requires network access.

`robots.txt` is exported at `/ejcaubat/robots.txt`; search engines normally look for it at the domain root. The generated project sitemap is `/ejcaubat/sitemap.xml` and can be submitted directly to search engines.
