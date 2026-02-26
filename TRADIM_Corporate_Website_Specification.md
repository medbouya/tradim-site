# TRADIM.MR -- CORPORATE WEBSITE SPECIFICATION

## Next.js 14 + Firebase Hosting

------------------------------------------------------------------------

# 1. OBJECTIVE

Create a modern, high-performance corporate website for TRADIM (solar
energy products company).

Goals: - Strong corporate credibility - Product catalog management - SEO
optimized - Scalable architecture - Fully deployable on Firebase
Hosting - Separated from ERP codebase

------------------------------------------------------------------------

# 2. TECH STACK

Frontend Framework: - Next.js 14 (App Router) - TypeScript (strict mode)

Styling: - TailwindCSS - shadcn/ui components - Heroicons

CMS: - Payload CMS (Headless) - Hosted separately (VPS or cloud
platform)

Hosting: - Firebase Hosting - Google-managed SSL - CDN enabled

SEO: - Next.js Metadata API - Dynamic meta tags - Sitemap
auto-generation - Robots.txt - Schema.org structured data

------------------------------------------------------------------------

# 3. DESIGN SYSTEM

Design Direction: - Corporate - Industrial - Clean - Trust-focused

Color Palette: - White (#FFFFFF) - Dark Gray (#1F2937) - Solar Red
Accent (#D32F2F) - Soft Energy Green (#4CAF50)

Typography: - Headings: Inter / Poppins - Body: Inter

Layout Style: - Wide sections - Large hero image - Clean product grids -
Minimal animation - Strong spacing

------------------------------------------------------------------------

# 4. TEMPLATE RECOMMENDATION

Base Template:

Recommended: - Cruip "Open PRO" (Free components) OR - Flowbite Next.js
Corporate Template

Required Features: - Responsive layout - Hero sections - Product grid
cards - Testimonial section - Contact forms - Clean footer - Mobile
optimized

------------------------------------------------------------------------

# 5. SITE STRUCTURE

Public Pages:

/ (Homepage) /about /products /products/\[slug\] /solutions /projects
/contact

Future Extensions: /request-quote /warranty-check

------------------------------------------------------------------------

# 6. CMS STRUCTURE (Payload)

Collections:

1.  Pages
    -   title
    -   slug
    -   content (rich text)
    -   seoTitle
    -   seoDescription
2.  Products
    -   name
    -   slug
    -   category
    -   description
    -   technicalSpecifications (JSON)
    -   images
    -   warrantyYears
    -   downloadablePDF
3.  Categories
    -   name
    -   slug
4.  Projects
    -   title
    -   location
    -   images
    -   description
5.  Testimonials
    -   clientName
    -   content
6.  Global Settings
    -   logo
    -   contact info
    -   social links
    -   default SEO

------------------------------------------------------------------------

# 7. HOMEPAGE STRUCTURE

Hero Section - Large solar image background - Strong headline - CTA
buttons

About Section - Brief company introduction

Product Highlights - 3--6 featured products

Why Choose TRADIM - Reliability - 6-year warranty - Technical expertise

Projects Showcase

Testimonials

Call to Action

Footer

------------------------------------------------------------------------

# 8. PERFORMANCE STRATEGY

-   Static Site Generation (SSG)
-   Incremental Static Regeneration (ISR)
-   Image optimization
-   Lazy loading
-   CDN caching via Firebase

------------------------------------------------------------------------

# 9. DEPLOYMENT PROCESS

1.  Initialize Firebase project

2.  Configure Hosting

3.  Build Next.js project (production build)

4.  Deploy via:

    firebase deploy

5.  Add custom domain

6.  Configure DNS A records

7.  Keep MX records for email (cPanel)

------------------------------------------------------------------------

# 10. FUTURE EVOLUTION

-   Connect request-quote to ERP
-   Display stock availability
-   B2B portal
-   Multilingual support (FR / AR)
-   Blog for SEO growth

------------------------------------------------------------------------

END OF SPECIFICATION
