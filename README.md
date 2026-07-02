# Smart Home Hub Landing Page

Production-ready landing page built with:

- React + Vite + TypeScript (strict mode)
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Lucide React icons

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

## Deploy

Deploy to Vercel with the included [vercel.json](smart-home-hub/vercel.json).

1. Push this project to a Git repository.
2. Import the repo in Vercel.
3. Use these settings:
	- Build Command: `npm run build`
	- Output Directory: `dist`

The project is configured as an SPA, so route rewrites already fall back to `index.html`.
