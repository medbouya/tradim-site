# TRADIM — Project Status

## Stack

| Layer | Tech | Host |
|---|---|---|
| Frontend | Next.js 14, React 18, Tailwind CSS | Firebase App Hosting |
| CMS / API | Payload CMS v3, Next.js 15 | Railway |
| Database | PostgreSQL 16 | Railway |
| Domain | tradim.mr | DNS → Firebase |

**Repos**
- Frontend: `tradim-site` → deploys to Firebase on push to `master`
- CMS: `tradim-cms` (tradim-app/) → deploys to Railway on push to `master`

---

## What's done

### Infrastructure
- Firebase App Hosting configured (`apphosting.yaml`) with all env vars
- Railway deployment with Dockerfile — runs `migrate` then `start`
- Domain `tradim.mr` connected to Firebase, SSL automatic
- CORS configured on Railway (`CORS_ORIGINS=https://tradim.mr`)
- Media URLs absolute (`PAYLOAD_PUBLIC_SERVER_URL` set on Railway)

### CMS (Payload v3)
- Collections: Users, Media, Pages, Products, Categories, Projects, Testimonials
- Global: Settings (logo, contact info, social links, SEO defaults)
- Admin seeded with default user (`admin@tradim.mr`)
- All migrations applied on Railway DB:
  - `20260227_initial` — full schema
  - `20260228_add_user_sessions` — Payload auth sessions
  - `20260229_fix_sessions_id` — varchar PK for UUID session IDs
  - `20260230_add_locked_documents` — Payload admin document locking
  - `20260231_fix_column_names` — `thumbnail_u_r_l`, `downloadable_p_d_f_id`

### Frontend
- DataProvider abstraction with Payload and Mock adapters
- ISR at 300s on all dynamic pages
- Payload adapter bugs fixed:
  - `getGlobalSettings()` — logo URL extracted from media object
  - `getProducts()` — category filter uses `where[category.slug][equals]`
  - `downloadablePDF` — URL extracted from relationship object
  - `getPage()` — Lexical richText serialized to HTML
- Lexical → HTML serializer (`lib/utils/lexical-to-html.ts`)
- About and Solutions pages render CMS richText via `dangerouslySetInnerHTML`
- `CMS_PROVIDER` and `PAYLOAD_API_URL` available at build time (pre-renders real slugs)
- SEO: structured data (Organization, Product, Breadcrumb, Contact schemas)
- Forms: Contact and Quote forms with Zod validation and honeypot

---

## To do

### Content (in Payload admin)
- [ ] Upload logo in Settings global
- [ ] Fill in contact info, social links, default SEO in Settings
- [ ] Create categories (e.g. Panneaux, Onduleurs, Stockage)
- [ ] Add products with images, specs, PDF datasheets
- [ ] Add projects with photos and descriptions
- [ ] Add testimonials
- [ ] Create "about" and "solutions" pages (richText content)

### Forms
- [ ] Wire contact and quote forms to an actual email sender
  - `FORM_RECEIVER_EMAIL=contact@tradim.mr` is set but the API routes currently
    log submissions without sending email — integrate Resend, SendGrid, or similar

### Frontend
- [ ] Install `@tailwindcss/typography` and add `typography` plugin to Tailwind config
  — needed for `prose` classes used in About/Solutions richText rendering
- [ ] Add `next/image` to product and project cards (replace `<img>` tags if any)
- [ ] Add `www.tradim.mr` redirect if not already handled by Firebase

### CMS
- [ ] Change admin password from the default (`Change-Me-On-First-Login-2026!`)
- [ ] Set `PAYLOAD_API_TOKEN` on Railway if you want to protect write endpoints
- [ ] Consider a cron job or webhook to trigger ISR revalidation on content publish

### Ops
- [ ] Set up PostgreSQL backups on Railway
- [ ] Add Railway uptime monitoring / alerts
