# BF Omni POS — public website deployment
This repository is a **public hosting preview only**. The application source and server-side database migrations remain private in [BF-OMNI-POS](https://github.com/bfomnipos/BF-OMNI-POS).

## Current preview
- `index.html`: original standalone restaurant POS demonstration; uses in-browser sample data and is **not connected to the production subscription backend**.
- `responsive.css`, `responsive.js`: responsive design.
- Site is **not production-ready**. Do not process real customer payments on this preview.

## GitHub Pages
1. Repository Settings → Pages → Build and deployment → **GitHub Actions**.
2. The workflow `.github/workflows/deploy.yml` uploads this static preview and publishes it after Pages is enabled.
3. Initial project Pages URL: `https://bfomnipos.github.io/BF-OMNI-POS-WEB/`.
4. To use `www.bfomnipos.com`, set it as the Pages Custom domain after Pages is enabled and verify Namecheap `CNAME www → bfomnipos.github.io`. Keep the primary source repository private.
5. After live hosting works, replace this demo build with the latest production React `frontend/dist` assets from the private project's successful GitHub Actions build.

The public project is a **preview**, not the final React staff, admin, or billing portal.
