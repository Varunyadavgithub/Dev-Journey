# 📦 Static Site Generation (SSG) in Next.js

## 📌 What is Static Site Generation?

Static Site Generation means:

> HTML is generated **at build time** and reused for every request.

When you run:

```bash
next build
```

Next.js pre-renders pages into static HTML files.

After that:

* No server computation per request
* HTML is served instantly from CDN
* Very fast performance

---

# 🧠 How SSG Works Internally

1. You write a page.
2. You fetch data inside a Server Component.
3. During `next build`, Next.js:

   * Runs your component
   * Fetches the data
   * Generates static HTML
   * Stores it

After deployment:

* Users just receive that pre-built HTML.

---

# ✅ Example of SSG (App Router – JavaScript)

```jsx
export default async function BlogPage() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return (
    <div>
      <h1>{posts[0].title}</h1>
    </div>
  );
}
```

If:

* No `cookies()`
* No `headers()`
* No `cache: "no-store"`
* No `force-dynamic`

👉 It becomes **Static by default**.

---

# 🚀 Why SSG is Powerful

✅ Extremely fast
✅ SEO friendly
✅ Low server cost
✅ Works great with CDN
✅ High scalability

---

# 🎯 When to Use SSG

* Blog posts
* Documentation
* Marketing pages
* Portfolio websites
* Public product pages

---

# 🔁 Static Site Generation with Dynamic Routes

Example:

```
app/blog/[slug]/page.js
```

You can use:

```jsx
export async function generateStaticParams() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

During build:

* Next.js generates static HTML for each slug.

---

# 🧾 Understanding Build Output Symbols (Very Important 🔥)

When you run:

```bash
next build
```

You’ll see symbols like:

```
○
●
ƒ
```

Let’s understand them clearly 👇

---

## ⚪ Hollow Circle (○)

### Meaning:

> Static Page (SSG)

* Fully static
* Generated at build time
* No server execution per request

Example:

```
○ /about
```

👉 This page is fully static.

---

## ● Filled Circle (●)

### Meaning:

> Static Page with ISR (Incremental Static Regeneration)

* Generated at build time
* Can revalidate after a certain time

Example:

```
● /blog
```

If you used:

```jsx
fetch(url, { next: { revalidate: 60 } });
```

That page becomes:

* Static initially
* Regenerated after 60 seconds

---

## ƒ (Function Symbol)

### Meaning:

> Dynamic / Server Rendered Page (SSR)

* Generated on every request
* Uses dynamic rendering
* Cannot be fully static

Example:

```
ƒ /dashboard
```

This means:

* It runs on server for every request.

---

# 📊 Quick Symbol Comparison

| Symbol | Meaning             | Rendering Type | When Generated     |
| ------ | ------------------- | -------------- | ------------------ |
| ○      | Static              | SSG            | Build time         |
| ●      | Static + Revalidate | ISR            | Build + Background |
| ƒ      | Dynamic             | SSR            | Request time       |

---

# 🧠 Real Understanding

If you see:

```
○ /about
ƒ /dashboard
● /blog
```

It means:

* `/about` → Pure static page
* `/dashboard` → Dynamic page
* `/blog` → Static but updates in background

---

# 🔥 Super Important Concept

Static Site Generation does NOT mean:

❌ No server involved at all

It means:

✅ Server runs only once during build
✅ Not on every request

---

# 🏁 Final Summary

Static Site Generation:

* Runs at build time
* Generates HTML once
* Extremely fast
* Best for public content
* Shows ○ symbol in build