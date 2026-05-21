# Blog

Static blog at `/blog`. Posts are MDX files in `src/content/blog/`. Everything
is rendered at build time — no database, no backend, no separate CMS.

## How to publish a post

Create a new file `code/src/content/blog/<slug>.mdx`:

```mdx
---
title: "My Post Title"
date: "2026-05-19"
excerpt: "One-sentence summary shown on the index and in social previews."
author: "Your Name"
cover: "/logo.png"
tags: ["finops", "aws"]
draft: false
---

Body content goes here. You can use **Markdown**, including:

## Headings

- Lists
- [Links](https://zenmicro.tech)
- `inline code`

```js
// fenced code blocks too
console.log("hello");
```
```

The filename becomes the URL slug: `my-post.mdx` → `/blog/my-post`.

### Frontmatter fields

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Post title |
| `date` | yes | ISO date (`YYYY-MM-DD`); used to sort newest-first |
| `excerpt` | no | Summary on index + OG description |
| `author` | no | Shown in byline |
| `cover` | no | Path to image (in `public/`) |
| `tags` | no | Array of strings |
| `draft` | no | `true` hides the post from the public site |

## Editing options

**Option A — GitHub web UI (no local setup):**
Navigate to `code/src/content/blog/` on GitHub → "Add file → Create new file"
→ paste content → commit. Your host rebuilds and the post is live. The
"login" is your existing GitHub access.

**Option B — locally:**
```bash
cd code
npm install
npm run dev
```
Open <http://localhost:3000/blog>. Edit MDX files in your editor; the page
hot-reloads.

## Build

```bash
npm run build               # → out/
npm run build:html_public   # → also copies to html_public/
npm run build:root          # → also copies to repo root (legacy hosting)
```

The blog is part of the static export — same build as the rest of the site.
