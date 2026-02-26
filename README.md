# TRADIM Corporate Website

Next.js 14 corporate website for TRADIM with:
- App Router + TypeScript strict
- Tailwind design system
- CMS provider contract (`mock` and Payload scaffold)
- SEO foundation (Metadata API, sitemap, robots, JSON-LD)
- API routes for contact and quote forms with spam honeypot
- Firebase App Hosting deployment config

## Quick start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment:
   ```bash
   cp .env.example .env.local
   ```
3. Run locally:
   ```bash
   npm run dev
   ```

## Scripts
- `npm run dev`: local development
- `npm run lint`: ESLint
- `npm run typecheck`: TypeScript checks
- `npm test`: Vitest unit/integration
- `npm run test:e2e`: Playwright e2e
- `npm run build`: production build

## Data provider mode
- `CMS_PROVIDER=mock` (default): uses local mock content
- `CMS_PROVIDER=payload`: uses `PAYLOAD_API_URL` + `PAYLOAD_API_TOKEN`

## Deployment
See:
- [deployment runbook](./docs/deployment.md)
- [launch checklist](./docs/launch-checklist.md)
