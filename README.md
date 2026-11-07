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


## Premium restaurant homepage V3 — 8 November 2026

- Public `site/index.html` now includes **real semantic HTML** for the screenshot-inspired restaurant landing page, not a flattened image.
- `site/landing-v3.css` styles the black/champagne-gold restaurant hero, illustrated POS device, clickable features, analytics panel, pricing and contact form on desktop/tablet/mobile.
- `site/marketing-v3.js` enables sample menu add/remove, category selection, mobile navigation and secured demo request submission to Supabase using its public publishable key.
- Existing compiled React assets remain available on the public branch. Query links `?portal=staff`, `?portal=admin` and `?portal=preview` still load the older public compiled React bundle. The **latest private POS modules have not been promoted**.
- Pricing remains the current development-stage RM79, RM129 and RM199; the screenshot's RM99/RM149/RM249 is **not** the approved subscription schedule.
- Actual payment capture, online checkout, QR settlement, MyInvois document submission, and thermal printer hardware are **not** claimed to be live.
- GitHub Pages deployment of the `site` branch succeeded. Custom-domain DNS, HTTPS, real browser and external-device checks remain to be verified before public launch.
- The source repository `BF-OMNI-POS` also contains an interactive React `LandingPageV3.tsx` component and scoped stylesheet, for the next compiled frontend rollout. The temporary public HTML keeps the marketing site independently deployable without publishing private source code.
