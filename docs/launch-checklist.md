# TRADIM Launch Checklist

## Functional
- [ ] All 8 MVP routes available.
- [ ] Invalid product slug returns 404 page.
- [ ] Contact and quote forms return success on valid submissions.
- [ ] Honeypot field blocks spam payloads.

## SEO
- [ ] Unique title and description on each page.
- [ ] `sitemap.xml` includes static + product routes.
- [ ] `robots.txt` references sitemap and blocks `/api`.
- [ ] JSON-LD present for organization, products, and contact page.

## Performance and A11y
- [ ] Lighthouse performance >= 85 on `/` and `/products`.
- [ ] Keyboard navigation covers nav, forms, and footer links.
- [ ] Contrast ratio passes AA for body and controls.

## Deployment
- [ ] CI checks pass (lint, typecheck, tests, build).
- [ ] Firebase App Hosting deployment succeeds.
- [ ] Custom domain + SSL active.
- [ ] Rollback to previous revision tested.
