# 🔄 Dynamic Routing in Next.js (App Router)

## 📌 What I Learned Today

Today, I learned how to implement **dynamic routes** in Next.js using the new **App Router** (`app/` directory). Dynamic routes allow us to render pages based on **dynamic segments** in the URL — such as blog slugs, user IDs, or product names.

---

## 🔁 What is Dynamic Routing?

Dynamic routing allows pages to be **generated based on parameters in the URL**. In the App Router (Next.js 13+), we use **square brackets** (`[slug]`) to define a dynamic segment.

---

## 📁 Folder Structure for Dynamic Routing

```bash
app/
├── page.js                     --> Home: "/"
├── blog/
│   ├── page.js                 --> Blog listing: "/blog"
│   └── [slug]/
│       └── page.js             --> Dynamic blog post: "/blog/my-first-post"
```

In this case:
- Visiting `/blog` shows a list of blog posts.
- Visiting `/blog/my-first-post` renders a dynamic page based on the `slug`.

---

## 📛 Naming Convention

| Folder Name     | Purpose                    |
|-----------------|----------------------------|
| `[slug]`        | Dynamic route segment      |
| `[id]`          | Another example with `id`  |
| `[username]`    | For routes like `/user/john` |

Use square brackets only around the dynamic part.

---

## 📦 Getting Route Parameters (params & searchParams)

In the **App Router**, dynamic route parameters are passed into the `page.js` component via a **props object**. You can **destructure** `params` and `searchParams`.

### ✅ Example: `app/blog/[slug]/page.js`

```js
export default function BlogPostPage({ params, searchParams }) {
  // Destructure the slug from URL
  const { slug } = params;

  // Optional: get query parameters like ?ref=google
  const { ref } = searchParams;

  return (
    <div>
      <h1>Reading blog post: {slug}</h1>
      {ref && <p>Referred by: {ref}</p>}
    </div>
  );
}
```

---

## 🔍 Accessing Search Params (Query Strings)

If the URL is:
```
/blog/my-first-post?ref=google&user=varun
```

Then:
```js
searchParams.ref => "google"
searchParams.user => "varun"
```

---

## ✨ Sample Navigation Using Link

```js
'use client';
import Link from 'next/link';

export default function BlogLinks() {
  return (
    <div>
      <Link href="/blog/my-first-post">Post 1</Link>
      <Link href="/blog/learning-nextjs?ref=google">Post 2 with Query</Link>
    </div>
  );
}
```

---

## 🧠 Summary

| Concept         | What I Learned                                      |
|-----------------|------------------------------------------------------|
| Dynamic Folder  | Use `[slug]`, `[id]`, etc. for dynamic routes       |
| `params`        | Access URL segments via the `params` object         |
| `searchParams`  | Access query strings like `?key=value`              |
| Navigation      | Use `Link` to go to dynamic routes                  |

---

## 💡 Use Cases

- ✅ Blog posts: `/blog/[slug]`
- ✅ User profiles: `/user/[username]`
- ✅ Product details: `/product/[id]`
- ✅ Filtering: `/search?query=nextjs`

---

## 🛠 Bonus: Combining Dynamic Route with Layout

You can also create a layout specific to dynamic routes:

```bash
app/blog/[slug]/
├── layout.js      --> Specific layout for each blog post
├── page.js        --> Dynamic page content
```

---

## 📘 Official Docs

- [Dynamic Routes (App Router)](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [Routing Parameters](https://nextjs.org/docs/app/api-reference/file-conventions/page#props)