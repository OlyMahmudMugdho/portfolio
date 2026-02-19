---
title: "Understanding React Server Components"
date: "2026-02-10"
excerpt: "Deep dive into RSC and how they change the way we build React apps."
category: "Frontend"
tags: ["react", "nextjs", "rsc"]
featured: false
coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop"
author: "M. Oly Mahmud"
---

React Server Components (RSC) represent a significant shift in how we think about React. Instead of moving all your components to the client, RSC allows you to keep much of your logic on the server.

### Key Benefits

1. **Smaller Client Bundles**: Code used only on the server doesn't get sent to the browser.
2. **Direct Backend Access**: You can query your database or filesystem directly from your components.
3. **Improved Data Fetching**: Reduce waterfalls by fetching data on the server.

### When to use Client Components?

You still need client components for interactivity, such as:
- Using `useState` or `useEffect`.
- Using browser APIs like `localStorage` or `window`.
- Listening to events like `onClick`.

Mastering the balance between Server and Client components is the key to building high-performance Next.js apps.
