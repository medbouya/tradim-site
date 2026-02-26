# TRADIM Deployment Runbook (Firebase App Hosting)

## Prerequisites
- Firebase project created.
- Billing enabled.
- Firebase CLI installed: `npm i -g firebase-tools`.
- Secrets created in Firebase (if using Payload):
  - `PAYLOAD_API_URL`
  - `PAYLOAD_API_TOKEN`

## Initial setup
1. Authenticate CLI: `firebase login`.
2. Set project in `.firebaserc`.
3. Review `apphosting.yaml` runtime/env configuration.

## Deploy
1. Install deps: `npm ci`.
2. Validate: `npm run lint && npm run typecheck && npm test`.
3. Build locally: `npm run build`.
4. Deploy: `firebase deploy`.

## DNS and domain
1. Add custom domain in Firebase console.
2. Configure DNS records at registrar.
3. Keep MX records unchanged for email continuity.
4. Wait for SSL provisioning and verify HTTPS redirect.

## Rollback
1. In Firebase console, open App Hosting revisions.
2. Select previous healthy revision and promote.
3. Re-run smoke checks:
   - Homepage, products list, product detail, contact form, quote form.

## Monitoring checklist
- Error logs for API routes (`/api/contact`, `/api/request-quote`).
- Response times on product detail pages.
- Weekly Lighthouse checks (home/products).
