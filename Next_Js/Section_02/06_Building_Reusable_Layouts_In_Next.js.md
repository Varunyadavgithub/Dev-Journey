# 🧱 Building Reusable Layouts in Next.js (App Router)

## 📌 What I Learned Today

Today I learned how to create **Reusable Layouts** in Next.js using the new `layout.js` file inside folders in the **App Router**. Layouts are used to **share UI across multiple pages** and avoid repetition — perfect for navigation bars, footers, sidebars, and consistent page designs.

---

## 🧩 What is `layout.js`?

- `layout.js` is a **special file** used in the **App Router** (i.e., inside the `app/` folder).
- It wraps around all `page.js` files inside the same directory and nested ones.
- Used to create **consistent layouts** (e.g., header, sidebar) that persist across routes.

---

## 🗂 Folder Structure Example

```bash
app/
├── layout.js        ← Root layout
├── page.js
├── about/
│   ├── page.js
├── blog/
│   ├── layout.js    ← Blog-specific layout
│   ├── page.js
│   └── post/
│       └── page.js
```

---

## 📄 Basic Example of `layout.js`

```jsx
// app/layout.js (Root Layout)
export const metadata = {
  title: "My App",
  description: "Learning Reusable Layouts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>🌐 My Global Header</header>
        <main>{children}</main>
        <footer>© 2025 My App</footer>
      </body>
    </html>
  );
}
```

- All pages like `/`, `/about`, `/blog`, etc. will use this layout.
- The `children` prop represents the inner content rendered by nested routes.

---

## 🧱 Nested Layout Example

```jsx
// app/blog/layout.js (Blog Layout)
export default function BlogLayout({ children }) {
  return (
    <div>
      <h2>📝 Blog Section</h2>
      <section>{children}</section>
    </div>
  );
}
```

- Pages like `/blog` and `/blog/post` will be wrapped in this layout.
- You can layer layouts — the blog layout wraps inside the root layout.

---

## 🎯 Key Concepts

| Concept             | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `layout.js`         | Defines a layout that wraps child pages                                     |
| `children`          | Automatically passed to the layout → nested `page.js` content               |
| Root layout         | Must exist in `app/layout.js`                                               |
| Nested layout       | Optional, placed in any sub-folder to override or extend layout             |
| Metadata export     | Optional `export const metadata = {}` to define title, description, etc.    |

---

## 🔁 Layout Wrapping Order

If you have nested layouts, wrapping works like this:

```
Root layout → Blog layout → blog/post/page.js
```

---

## 🧪 Example Navigation

You can combine layouts and routing:

```jsx
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}
```

Add this `Navbar` inside your `layout.js` and it's available across all pages.

---

## 📘 Official Docs

- [Layouts in App Router – Next.js Docs](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [Next.js App Router Fundamentals](https://nextjs.org/learn)

---

## ✅ Summary

| Feature               | How It Works                                  |
|------------------------|-----------------------------------------------|
| `layout.js`            | Creates reusable UI wrappers for pages       |
| `children`             | Auto-passed prop that renders page content    |
| Nested layouts         | Create section-specific designs (like `/blog`) |
| Shared UI              | Use for headers, navbars, footers             |