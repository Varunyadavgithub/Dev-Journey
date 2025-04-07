# 🔍 **How to Create a Custom Not Found Page in Next.js**  
> Including usage of `notFound()` and `not-found.js` in the App Router!

---

# ❌ Custom 404: Not Found Page in Next.js

## 📌 What I Learned Today

Today I learned how to implement a **custom "Not Found" page** in Next.js using the **App Router**. This is essential for giving users a clean, branded 404 experience instead of the default system page.

I also learned how to **manually trigger** the 404 page using the built-in `notFound()` function from `next/navigation`.

---

## 🧩 1. Create a Custom Not Found Page

You can define a `not-found.js` file inside any route folder, or globally inside `app/`.

### ✅ Example:

```bash
app/
├── not-found.js   ← Custom global 404 page
├── layout.js
├── page.js
├── blog/
│   ├── not-found.js  ← Optional: 404 for blog routes only
│   └── [slug]/
│       └── page.js
```

---

### 📄 Basic Example

```jsx
// app/not-found.js

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🚫 404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}
```

---

## 🧠 2. Programmatically Trigger 404 with `notFound()`

You can use `notFound()` inside **page components or server functions** to redirect the user to the 404 page when data doesn't exist.

### ✨ Example:

```jsx
// app/blog/[slug]/page.js
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  // Simulate checking if data exists
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
```

---

## ⚠️ Important Notes

| Concept         | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| `not-found.js`  | Defines the custom UI for 404 errors                                        |
| `notFound()`    | Programmatically throws a 404 and shows the 404 page                       |
| Global Scope    | Place `not-found.js` in `app/` to apply to all unmatched routes            |
| Route-Specific  | You can also create `not-found.js` inside any sub-folder (like `/blog/`)   |

---

## 🧪 UX Tip

Add a **"Go Back"** or **"Return Home"** button for better navigation:

```jsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl">🚫 404 - Not Found</h1>
      <p className="mt-4">Oops! This page doesn't exist.</p>
      <Link href="/" className="text-blue-500 underline mt-4 inline-block">
        ← Back to Home
      </Link>
    </div>
  );
}
```

---

## 📘 Official Docs

- [Next.js Custom 404 Page](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
- [notFound() function](https://nextjs.org/docs/app/api-reference/functions/notfound)

---

## ✅ Summary

| Feature            | Description                                      |
|--------------------|--------------------------------------------------|
| `not-found.js`     | Custom UI for 404 pages                          |
| `notFound()`       | Programmatically trigger 404 page                |
| Global 404         | Place `not-found.js` inside `app/`               |
| Route-specific 404 | Place `not-found.js` in route folders like `/blog/` |