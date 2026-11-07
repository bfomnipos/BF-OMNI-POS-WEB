# BF Omni POS — Public Website Hosting

This public repository contains **only compiled website assets** on the `site` branch. The React/TypeScript source, backend SQL, and sensitive infrastructure configuration remain private in a separate source repository.

## Website — current deployment

- **Primary domain:** [www.bfomnipos.com](https://www.bfomnipos.com/)
- **GitHub Pages source:** `site` branch → `/(root)` (Deploy from a branch)
- **Homepage:** Premium BF Omni POS dark-and-gold marketing landing page
- **Portal paths:** `?portal=staff` restaurant sign-in; `?portal=admin` allowlisted Super Admin; `?portal=preview` sample dashboard
- **Compiled build:** `site/index.html`, `site/assets/`, `site/legacy/`
- **Custom-domain record:** `site/CNAME` contains `www.bfomnipos.com`

The latest Landing Page build was uploaded to `site`; the GitHub Pages deployment completed successfully on 7 November 2026.

## DNS and HTTPS checks

Namecheap should contain `CNAME` Host `www`, Value `bfomnipos.github.io`, plus GitHub Pages apex A records if also using `bfomnipos.com` without `www`.

Pages deployment success does not itself confirm DNS propagation or HTTPS certificate readiness. Check the [Pages settings](https://github.com/bfomnipos/BF-OMNI-POS-WEB/settings/pages) for custom-domain status and **Enforce HTTPS**.

The public `site` branch is a compiled deployment artifact; **do not push private source files or service-role keys**.

## Updating the website

1. Edit and build the private BF Omni POS React frontend.
2. Confirm the frontend typecheck and staging build succeed.
3. Transfer the verified compiled staging ZIP to the public `site` branch.
4. GitHub Pages automatically republishes each new `site` branch commit.

The old GitHub Actions-based Pages workflow was retired in favor of the activated `site`-branch deployment method.

## Development stage

The landing page is public marketing content. Real payments, receipt printing and final end-to-end login/billing tests remain pending. The dashboard preview shows sample, not real, restaurant figures.
