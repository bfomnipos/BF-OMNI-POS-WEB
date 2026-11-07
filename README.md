# BF Omni POS — Public Website Hosting

The **latest compiled React frontend** is already available on the `site` branch. This public repository contains compiled website assets; the private source code, backend SQL and secrets remain in the separate private repository.

## Latest verified build
- `site/index.html`: BF Omni POS React website.
- `site/assets/`: React JavaScript and CSS bundle.
- `site/legacy/app.html`: original POS demo preview.
- `site/CNAME`: `www.bfomnipos.com`.
- Public GitHub Actions import of the compiled frontend completed successfully. Site file verification passed.

## One-time setup required to make website live

GitHub Pages is **not yet enabled** for this repository. Configure:
1. Open [Pages Settings](https://github.com/bfomnipos/BF-OMNI-POS-WEB/settings/pages).
2. Under **Build and deployment**, set **Source → GitHub Actions**.
3. Under **Custom domain**, set **www.bfomnipos.com** and save. Namecheap needs `CNAME www → bfomnipos.github.io`.
4. Rerun the [Publish BF Omni POS compiled React frontend](https://github.com/bfomnipos/BF-OMNI-POS-WEB/actions) workflow. Its YAML is on `main` but deploys compiled assets from the `site` branch.
5. Verify the browser can open `https://www.bfomnipos.com` and the `?portal=staff` / `?portal=admin` routes, then enable **Enforce HTTPS** when available.

GitHub Pages must be enabled by someone with appropriate repository Settings access. GitHub's connected file tools cannot change GitHub Pages configuration directly.

## Important
This is a development preview, **not yet a production-ready restaurant POS**. Real payments, complete printer flows and end-to-end live authentication tests are still pending.
