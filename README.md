# Sound & Fury Print Shop — Website

A fast, SEO + GEO-optimized static site for **Sound & Fury Print Shop** (Warrenville, IL).
No build step — pure HTML/CSS/JS. Designed to carry the distressed Sound & Fury brand
and to be ready to point `soundandfuryprint.com` at when you're ready to migrate off Squarespace.

**Preview:** https://marcotteink.github.io/soundandfury-site/

## Pages
- `index.html` — homepage (hero, services, 3 conversion paths, work, embedded quote, GEO facts, FAQ)
- `services.html` — deep service pages (screen printing, embroidery, DTF, signage, online stores, programs)
- `quote.html` — embedded instant quote builder (quoterai)
- `about.html` — story, shop, process, local Chicagoland
- `faq.html` — full FAQ with FAQPage schema
- `contact.html` — NAP, hours, Google map
- `blog.html` + 6 carried-over posts

## SEO / GEO
- Unique title + meta description + canonical per page
- JSON-LD: LocalBusiness, WebSite, ItemList/Service, FAQPage, Blog, BlogPosting, BreadcrumbList
- "At a Glance" plain-text facts block for AI answer engines
- `robots.txt` welcomes AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
- `sitemap.xml`, semantic headings (one H1/page), descriptive alt text, lazy images, custom 404

## Conversion links (wired everywhere)
- Instant Order → https://stores.inksoft.com/orders
- Quote builder (embedded) → https://quoterai.replit.app/order
- Design Lab → GraphicsFlow art portal
- Blank catalog → https://blanks.soundandfuryprint.com

## Notes before going live
- Email standardized to **info@soundandfuryprint.com** (old site also used info@wearesoundandfury.com).
- Hours (Mon–Fri 9–5) are a placeholder; confirm before launch.
- Canonical/OG URLs point to `https://soundandfuryprint.com/` (the intended production domain).
- When migrating the domain, add 301 redirects from old `/blog-posts/...` URLs to the new blog pages.

---
*Local apparel printing that doesn't suck. · soundandfuryprint.com*
