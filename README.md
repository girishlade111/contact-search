# Contact Search

A **contact search & discovery UI** built with Next.js — think LinkedIn Sales Navigator style. Search contacts by name/company, filter by industry, employee headcount, and other facets, then browse results in a rich contact-list table with quick actions (call, email, copy). Fully client-side demo with sample data; originally generated with [v0.app](https://v0.app).

## Features

- **Contact search bar** with category selector ("Contacts") and "search in results" chip
- **Filter sidebar** — accordion filters for industry, employee headcount, and more, with removable filter chips and clear/save-search actions
- **Contact list table** — contact, data points, and company columns with row checkboxes, multi-select count, "Show details" and "Actions" buttons
- **Quick actions per contact** — call, email, copy icons
- **Dark/light theme** support via `theme-provider`
- **Responsive layout** — adapts from desktop to mobile
- **shadcn/ui components** — accordion, badge, button, checkbox, input, and more

## Tech stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS, `class-variance-authority`, `clsx`, `tailwind-merge`
- **UI components:** shadcn/ui + Radix UI primitives
- **Icons:** lucide-react
- **Fonts:** Geist
- No backend — all data is sample content rendered client-side

## Quick start

```bash
git clone https://github.com/girishlade111/contact-search.git
cd contact-search
npm install        # or: pnpm install
npm run dev
```

Open http://localhost:3000 to explore the search UI.

## Project structure

```
contact-search/
├── app/
│   ├── page.tsx        # Main contact search page ("use client")
│   ├── layout.tsx      # Root layout + theme provider
│   └── globals.css     # Global styles
├── components/
│   ├── contact-list.tsx    # Results table with quick actions
│   ├── filter-sidebar.tsx  # Faceted filter sidebar
│   ├── theme-provider.tsx  # Dark/light theme
│   └── ui/                 # shadcn/ui primitives (button, input, ...)
├── lib/utils.ts        # cn() helper
├── styles/globals.css  # Additional global styles
├── public/             # Static assets / placeholder images
├── next.config.mjs     # Next.js config (static export enabled)
└── tailwind.config.ts  # Tailwind theme config
```

## Environment variables

None — the app has no backend and needs no API keys.

## Deployment notes

- The app is statically exported (`output: "export"` in `next.config.mjs`) with `basePath: "/contact-search"`, so it deploys cleanly to GitHub Pages at https://girishlade111.github.io/contact-search/
- Images are unoptimized for static hosting compatibility
- Also deployable to Vercel/Netlify as a regular Next.js app (remove `output: "export"` for SSR if a backend is added later)

## Roadmap ideas

- Connect a real contacts API (CRM / directory backend)
- Server-side search with pagination
- Export results to CSV
- Saved searches with localStorage persistence

---

Built by **Girish Lade** · https://ladestack.in
