# 🧭 Routing in Next.js using App Router (Next.js 13+)

## 📌 What I Learned Today

Today, I explored the **new App Router** feature in Next.js, which is available from **Next.js 13** onwards. Unlike the old `pages/` folder method, the App Router uses the `app/` directory and enables more flexibility and modular file-based routing.

---

## 🔧 Setting Up a Route Using the `app/` Folder

### ✅ Steps:
1. Navigate to the `app/` directory in your Next.js project.
2. Create a **folder** with the name of your route (e.g., `about`).
3. Inside that folder, create a file named `page.js` — this will act as the **route entry point**.

---

### 📁 Example Folder Structure

```bash
app/
├── page.js              --> Route: "/"
├── about/
│   └── page.js          --> Route: "/about"
└── contact/
    └── page.js          --> Route: "/contact"
```

Each `page.js` inside a folder becomes a standalone route!

---

### ✨ Example `page.js` File

```js
// app/about/page.js
export default function AboutPage() {
  return <h1>Welcome to the About Page</h1>;
}
```

Visiting `http://localhost:3000/about` will display:  
**“Welcome to the About Page”**

---

## 🔗 Navigating Between Routes with the `Link` Component

Instead of traditional `<a>` tags, Next.js provides a built-in `Link` component for **client-side routing**. This makes page transitions smooth and avoids full reloads.

---

### ✅ How to Use `Link`

```js
// app/components/Navbar.js
'use client'; // Needed to use onClick and client-side interactivity

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
```

- Fast transitions ⚡
- No full-page refresh 🔁
- Automatically prefetches links 🧠

---

## 💡 Understanding the App Router Advantage

| Feature             | App Router (Next.js 13+)             |
|---------------------|---------------------------------------|
| Routing System      | Folder-based inside `app/` directory |
| Page File           | Uses `page.js` for each route        |
| Navigation          | Built-in `Link` component            |
| SEO Friendly        | Yes, with server components support  |
| Layout Support      | Uses `layout.js` for shared layout   |
| Modular             | Each route can have its own layout, loading, error, etc. |

---

## 🗂 Bonus: Example Project Structure

```bash
app/
├── layout.js               --> Shared layout (e.g., Navbar)
├── page.js                 --> Home page
├── about/
│   └── page.js             --> /about
├── contact/
│   └── page.js             --> /contact
├── components/
│   └── Navbar.js           --> Reusable Navbar with <Link>
```

You can import and use the `<Navbar />` in your `layout.js` file to keep it visible across all pages.

---

## ✍️ Summary

- ✅ I created new routes using folders inside the `app/` directory.
- ✅ Each folder contains a `page.js` file which becomes a unique route.
- ✅ I used the `Link` component from Next.js for client-side navigation.
- ✅ The new App Router is modular and scalable, ideal for larger apps.

---

## 📘 What's Next?

- 🔹 Learn about `layout.js` for shared layouts across pages.
- 🔹 Explore `loading.js` and `error.js` for better UX.
- 🔹 Create dynamic routes like `[slug]/page.js`.

---

## 🔗 Official Documentation

- [Next.js Routing with App Router](https://nextjs.org/docs/app/building-your-application/routing)
- [Link Component in Next.js](https://nextjs.org/docs/app/api-reference/components/link)