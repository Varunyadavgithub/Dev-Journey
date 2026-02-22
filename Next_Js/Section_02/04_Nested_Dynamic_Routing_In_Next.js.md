# 🧭 Nested Dynamic Routing in Next.js (App Router)

## 📌 What I Learned Today

Today I learned how to build **nested dynamic routes** in Next.js using the **App Router**. These routes allow multiple dynamic segments in the URL like:

```
/blog/coding/comments/1
```

This is super helpful for use cases like:
- Viewing a comment on a specific blog
- Navigating through deeply nested content (blog → category → comment)

---

## 🧱 Folder Structure for Nested Dynamic Routes

```bash
app/
├── blog/
│   └── [category]/
│       └── comments/
│           └── [commentId]/
│               └── page.js
```

---

## 🔗 Resulting Dynamic Route

| URL                                | Matched File Path                                |
|------------------------------------|---------------------------------------------------|
| `/blog/coding/comments/1`         | `app/blog/[category]/comments/[commentId]/page.js` |

Here:
- `[category]` is dynamic → e.g., `coding`, `design`, `tech`
- `[commentId]` is dynamic → e.g., `1`, `23`, `abc`

---

## 🧠 Accessing Route Parameters

In `page.js`, you get both dynamic parameters using `params`.

### ✅ Example: `app/blog/[category]/comments/[commentId]/page.js`

```js
export default function async CommentPage({ params }) {
  const { category, commentId } = await params;

  return (
    <div>
      <h1>Comment ID: {commentId}</h1>
      <p>Category: {category}</p>
    </div>
  );
}
```
Note: `Parent Routes` can not access the Children slugs but the `Children Route` can access the Parent slugs.

---

## 🔍 Accessing URL Example

For this URL:
```
/blog/coding/comments/1
```

You’ll get:
```js
params = {
  category: "coding",
  commentId: "1"
}
```

---

## 🔗 Linking to Nested Dynamic Routes

Use `<Link>` just like always:

```js
'use client';
import Link from 'next/link';

export default function BlogLinks() {
  return (
    <div>
      <Link href="/blog/coding/comments/1">Go to Comment 1</Link>
      <Link href="/blog/design/comments/5">Go to Comment 5</Link>
    </div>
  );
}
```

---

## 💡 Naming Convention for Nested Dynamic Routes

| Folder Name          | URL Segment      |
|----------------------|------------------|
| `[category]`         | Dynamic category |
| `[commentId]`        | Dynamic ID       |

✅ Use square brackets for dynamic values  
✅ Keep folder names lowercase and meaningful

---

## 📦 Summary

| Concept                   | What I Learned                                         |
|---------------------------|--------------------------------------------------------|
| Nested Dynamic Routes     | Multiple `[param]` folders inside each other           |
| `params` object           | Use destructuring to get `category` and `commentId`   |
| Folder structure          | Mirrors the URL path segments                         |
| Navigation                | Use `Link` like with normal routes                    |

---

## 📘 Official Docs

- [Dynamic Routes – Next.js App Router](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [Linking between dynamic routes](https://nextjs.org/docs/app/api-reference/components/link)
