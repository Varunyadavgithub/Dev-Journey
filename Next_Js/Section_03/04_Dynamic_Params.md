# 📌 What is `dynamicParams` in Next.js?

`dynamicParams` is used in **dynamic routes** like:

```
app/blog/[slug]/page.js
```

It controls:

> What should happen if a user visits a dynamic route that was NOT generated at build time?

---

# 🧠 First Understand the Problem

When you use:

```jsx
export async function generateStaticParams() {
  return [
    { slug: "post-1" },
    { slug: "post-2" }
  ];
}
```

Next.js will:

* Pre-generate `/blog/post-1`
* Pre-generate `/blog/post-2`

But what if someone visits:

```
/blog/post-3
```

That was NOT generated at build time.

Now what should Next.js do? 🤔

That’s where `dynamicParams` comes in.

---

# 🔥 `dynamicParams = true` (Default)

```jsx
export const dynamicParams = true;
```

### Meaning:

If a route was NOT generated at build time:

👉 Next.js will generate it **on demand**

This is similar to:

> fallback: "blocking" in old Pages Router

### Behavior:

* First request → Server renders page
* Page gets cached
* Next requests → Served statically

✅ Good for large datasets
✅ Works well with ISR

---

# ❌ `dynamicParams = false`

```jsx
export const dynamicParams = false;
```

### Meaning:

If route is NOT in `generateStaticParams()`:

👉 Show **404 page**

So only predefined paths will work.

Example:

```jsx
// app/blog/[slug]/page.js

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { slug: "post-1" },
    { slug: "post-2" }
  ];
}
```

Now:

* `/blog/post-1` ✅
* `/blog/post-2` ✅
* `/blog/post-3` ❌ 404

---

# 📊 `dynamicParams` Comparison

| Value          | Behavior                | Unknown Route |
| -------------- | ----------------------- | ------------- |
| true (default) | Generate on demand      | Works         |
| false          | Only allow static paths | 404           |

---

# 🧱 Full Example

```jsx
// app/blog/[slug]/page.js

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const res = await fetch(`https://api.example.com/posts/${params.slug}`);
  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
```

---

# 🎯 When Should You Use `dynamicParams = false`?

Use it when:

* You know all possible routes at build time
* You want strict static control
* SEO-critical pages
* Small dataset

---

# 🎯 When Keep It `true` (default)?

Use it when:

* Large number of pages
* Data grows frequently
* You don’t want to pre-build everything
* You are using ISR

---

# 🧠 Important Connection with Symbols

During build:

If you use:

* `generateStaticParams()` + no dynamic data
* `dynamicParams = false`

You’ll likely see:

```
○ /blog/[slug]
```

If dynamic rendering is forced:

```
ƒ /blog/[slug]
```

---

# 🏁 Final Clear Understanding

`generateStaticParams()` → decides what gets built at build time
`dynamicParams` → decides what happens to unknown routes