# ⚙️ Static Rendering vs Dynamic Rendering in Next.js

(+ React Server Components Explained)

Next.js mainly supports **two core rendering strategies** in the App Router:

1. **Static Rendering**
2. **Dynamic Rendering**

Both run on the **server**, but they differ in _when_ the HTML is generated.

---

# 🧱 1️⃣ Static Rendering (Pre-rendered at Build Time)

## 📌 What is Static Rendering?

Static Rendering means:

> HTML is generated **once at build time** and reused for every request.

After building your app (`next build`), the HTML is already prepared and stored. When a user visits the page, Next.js just serves that pre-built HTML.

---

## 🔥 Why It’s Fast

- No computation per request
- Served from CDN
- Extremely low response time
- SEO friendly

---

## 🧠 When to Use Static Rendering?

- Blog posts
- Documentation
- Marketing pages
- Landing pages
- Public product pages

---

## 📦 How It Works in App Router

In Next.js App Router, **static rendering is the default behavior** if:

- You fetch data normally
- No dynamic APIs are used (like `cookies()`, `headers()`)
- No `revalidate` or `force-dynamic`

Example:

```tsx
export default async function Page() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return <div>{posts[0].title}</div>;
}
```

If the fetch has no special config → it becomes static.

---

# 🔁 2️⃣ Dynamic Rendering (Rendered at Request Time)

## 📌 What is Dynamic Rendering?

Dynamic Rendering means:

> HTML is generated **on every request**.

Whenever a user visits the page, the server renders fresh HTML.

---

## 🧠 When to Use Dynamic Rendering?

- User dashboards
- Authenticated pages
- Personalized content
- Real-time data
- Admin panels

---

## 🚀 How to Force Dynamic Rendering

In App Router:

```tsx
export const dynamic = "force-dynamic";
```

Or by using:

- `cookies()`
- `headers()`
- `searchParams`
- `revalidate: 0`

Example:

```tsx
export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const data = await fetch("https://api.example.com/user", {
    cache: "no-store",
  });

  return <div>User Dashboard</div>;
}
```

Now it renders on **every request**.

---

# ⚡ Static vs Dynamic — Quick Comparison

| Feature         | Static Rendering | Dynamic Rendering |
| --------------- | ---------------- | ----------------- |
| HTML Generated  | Build time       | Request time      |
| Speed           | Very Fast        | Slower            |
| SEO             | Excellent        | Excellent         |
| Personalization | ❌               | ✅                |
| Real-time data  | ❌               | ✅                |
| Server Load     | Low              | Higher            |

---

# ⚛️ React Server Components (RSC) in Next.js

Now comes the powerful part.

Next.js App Router uses **React Server Components by default**.

---

## 📌 What is RSC?

React Server Components are components that:

- Run **only on the server**
- Do not send JavaScript to the browser
- Can directly access database / backend
- Improve performance

They are the default in the `app/` directory.

---

## 🧠 Important Concept

Next.js uses:

> **Server Components + Client Components together**

This is why people say:

> Next.js uses both Server Side and Client Side rendering at the same time.

But technically:

- Server Components handle data & structure
- Client Components handle interactivity

---

# 🏗️ How RSC + CSR Work Together

Example:

```tsx
// Server Component (default)
export default async function Page() {
  const data = await fetch("https://api.example.com/posts");
  const posts = await data.json();

  return (
    <div>
      <h1>Blog</h1>
      <LikeButton /> {/* Client Component */}
    </div>
  );
}
```

Client component:

```tsx
"use client";

import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Likes: {count}</button>;
}
```

---

# 🔥 What Happens Internally?

1. Server renders Server Components.
2. Sends minimal HTML to browser.
3. Browser loads only necessary JS for Client Components.
4. Client components become interactive.

This is called:

> **Selective Hydration**

---

# 🎯 Key Benefits of RSC

✅ Smaller bundle size
✅ Better performance
✅ Faster page load
✅ Direct DB access
✅ Better security (server-only logic)

---

# 🧠 Final Understanding (Very Important)

### Static vs Dynamic → decides **when HTML is generated**

### RSC → decides **where components run**

You can have:

- Static + Server Components
- Dynamic + Server Components
- Server + Client Components mixed

Next.js intelligently combines all of them.

---

# 🏁 Final Summary

- **Static Rendering** → Build time HTML (fastest)
- **Dynamic Rendering** → Request time HTML (real-time)
- **React Server Components** → Run on server, no JS sent
- **Client Components** → Run in browser, interactive
- Next.js combines both for optimal performance
