# Clamon Counseling Services — Static Netlify Site (Draft Build)

## What’s included
- 48 indexable pages (core + 4 location hubs + 6 services + 20 resources + 6 trust pages)
- Non-index pages: /thank-you/ and /landing/* (noindex via headers + robots)
- Draft swap-ready service pages under /drafts/services/* (noindex)
- Netlify Forms wired to redirect to /thank-you/
- Security headers in `_headers` (CSP/HSTS/etc.)
- GTM container embedded: GTM-N6HDR6L7

## Locked slugs
- /book-free-consultation/ (money page)
- /contact-us/
- /thank-you/ (noindex)
- /locations/<city-state>/
- /services/<service>/

## Promote a draft service page to launch
Example: promote /drafts/services/family-therapy/ to /services/family-therapy/

1) Move the folder:
   - from: `drafts/services/family-therapy/`
   - to:   `services/family-therapy/`

2) Update /services/ hub to include the new service tile (optional).

3) Add the new URL to `sitemap.xml`.

## Update base URL
Search for `https://clamoncounseling.com` in the project if deploying to a different domain.

## Notes
- This build avoids medical outcome guarantees.
- Replace placeholder claims, pricing details, clinician credentials, and states served only with client-approved facts.
