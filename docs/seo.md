# SEO & Meta Tag Documentation

This document describes the `<head>` configuration for the SVIT Nashik website.

---

## 🔖 Title & Meta
- **Title:**  
  `Sir Visvesvaraya Institute of Technology, Nashik (SVIT)`  
  → Appears in browser tab & search results.

- **Description:**  
  `"Official website of Sir Visvesvaraya Institute of Technology, Nashik (SVIT). Explore admissions, academics, placements, and campus life."`  
  → Primary snippet in Google SERP.

- **Keywords:**  
  `"SVIT, Sir Visvesvaraya Institute of Technology, Nashik Engineering College, SVIT Nashik, pravaraengg, pravara Nashik, pravara Chincholi"`  
  → Helps SEO indexing (not as important as before, but included).

---

## 🌍 Canonical
- `<link rel="canonical" href="https://svitnashik.in/" />`  
  → Prevents duplicate content issues.

---

## 🖼️ Open Graph (for social sharing)
- **og:title** → Website name.  
- **og:description** → Short intro.  
- **og:image** → `https://svitnashik.in/logo.png`  
- **og:url** → Canonical site URL.  
- **og:type** → `website`.

---

## 🐦 Twitter Cards
- **twitter:card** → `summary_large_image`  
- **twitter:title**, **twitter:description**, **twitter:image**  
- **twitter:site** → `@svitnashik`

---

## 🎨 Theme Color
- `<meta name="theme-color" content="#003366" />`  
  → Sets browser address bar color on mobile.

---

## 📑 Structured Data (JSON-LD)
Using `CollegeOrUniversity` schema from [Schema.org](https://schema.org/CollegeOrUniversity):

```json
{
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "name": "Sir Visvesvaraya Institute of Technology, Nashik",
  "alternateName": "SVIT",
  "url": "https://svitnashik.in/",
  "logo": "https://svitnashik.in/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chincholi, Nashik",
    "addressLocality": "Nashik",
    "addressRegion": "Maharashtra",
    "postalCode": "422101",
    "addressCountry": "India"
  },
  "sameAs": [
    "https://www.facebook.com/svitnashik",
    "https://twitter.com/svitnashik",
    "https://www.instagram.com/svitnashik"
  ]
}
