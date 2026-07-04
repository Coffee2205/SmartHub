# Smart Home Hub

Smart Home Hub is a polished product landing page built with React, Vite, TypeScript, and Tailwind CSS. It includes a modern marketing experience with animated sections, dark/light mode, a newsletter form, and an AI-powered chatbot that can respond through Groq.

## Features

- Premium landing page for a smart home product
- Responsive layout for desktop and mobile
- Smooth animations with Framer Motion
- Dark and light theme switching
- Newsletter form with validation
- AI chatbot integration powered by Groq
- SEO-friendly structure and Vite-based build setup

## Tech Stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Lucide React
- Express + Groq SDK for the chatbot backend

## Project Structure

- src/components: reusable UI components
- src/sections: landing page sections
- src/hooks: custom hooks
- src/utils: content and helpers
- src/services: API service logic
- src/types: shared TypeScript types
- sever: local Express server for Groq chat requests
- api: optional serverless endpoint example

## Getting Started

### 1) Install dependencies

```bash
npm install
cd sever
npm install
cd ..
```

### 2) Configure environment variables

Create a root environment file for the frontend:

```env
VITE_API_URL=http://localhost:3000
```

Create a server environment file in the sever folder:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### 3) Run locally

Start the chatbot backend:

```bash
cd sever
node index.js
```

In a second terminal, start the frontend:

```bash
npm run dev
```

Then open the local URL shown by Vite.

## Available Scripts

### Frontend

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

### Backend

```bash
cd sever
npm run dev
npm run start
```

## Chatbot Setup

The chatbot UI sends messages to the local Express server at port 3000. The server forwards the request to Groq and returns the assistant reply to the UI.

If the backend is unavailable or the API key is missing, the app falls back to a local canned response.

## Deployment

### Frontend

This project is ready for deployment on Vercel.

Recommended settings:
- Build Command: npm run build
- Output Directory: dist

The included Vercel config handles SPA routing.

### Backend

The Express server can be hosted separately on services such as Render, Railway, or another Node.js host. For production, make sure the Groq API key is configured securely in the deployment environment.

## Notes

- Keep your Groq API key private and never commit it to Git.
- If you change the backend port, update VITE_API_URL accordingly.
- The landing page is designed to be easy to extend with additional product sections or new chatbot features.
