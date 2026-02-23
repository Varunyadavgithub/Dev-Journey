# 🔁 Incremental Static Regeneration (ISR) in Next.js

---

# 📌 What is ISR?

ISR stands for:

> **Incremental Static Regeneration**

It is a hybrid of:

* 🧱 Static Site Generation (SSG)
* 🔁 Dynamic Updates

Meaning:

> A page is generated at build time, but it can automatically update after deployment.

---

# 🧠 Why Do We Need ISR?

Problem with SSG:

* HTML is generated only at build time.
* If data changes after deployment → page becomes outdated.
* To update → you must rebuild the whole app.

That’s not scalable for:

* E-commerce
* News sites
* Blogs with frequent updates
* Product listings

👉 ISR solves this problem.

---

# 🚀 How ISR Works (Step-by-Step)

Let’s say:

```jsx
fetch(url, { next: { revalidate: 60 } })
```

This means:

> Regenerate this page every 60 seconds.

---

### 🔄 What Happens Internally?

1️⃣ Build time → Page is generated (static)
2️⃣ User visits → Gets cached static page
3️⃣ After 60 seconds:

* Next request still gets old page
* Next.js regenerates page **in background**
  4️⃣ Once regeneration finishes:
* New users get updated version

🔥 Important:
Users never wait for regeneration.

---

# ✅ Basic ISR Example (App Router - JavaScript)

```jsx
export default async function BlogPage() {
  const res = await fetch("https://api.example.com/posts", {
    next: { revalidate: 60 },
  });

  const posts = await res.json();

  return (
    <div>
      <h1>{posts[0].title}</h1>
    </div>
  );
}
```

This means:

* Build time → Static page
* After 60 seconds → Background regeneration

---

# 🎯 Alternative Way: Route Segment Config

You can also write:

```jsx
export const revalidate = 60;
```

Full example:

```jsx
export const revalidate = 60;

export default async function Page() {
  const res = await fetch("https://api.example.com/products");
  const products = await res.json();

  return <div>{products[0].name}</div>;
}
```

Same behavior.

---

# 🧾 Build Symbol for ISR

During:

```bash
next build
```

You’ll see:

```
● /blog
```

### ● = Static page with revalidation (ISR)

Meaning:

* Built at build time
* Can regenerate later

---

# 📊 SSG vs ISR vs SSR Comparison

| Feature                   | SSG        | ISR                | SSR           |
| ------------------------- | ---------- | ------------------ | ------------- |
| Generated                 | Build time | Build + Background | Every request |
| Performance               | Very Fast  | Very Fast          | Slower        |
| Real-time data            | ❌          | Partial            | ✅             |
| Server load               | Very Low   | Low                | High          |
| Build required for update | Yes        | No                 | No            |

---

# 🧠 Real World Example

### 🛒 E-commerce Product Page

* 10,000 products
* Prices change every 5 minutes

Using SSG:
❌ You must rebuild entire app every 5 minutes.

Using SSR:
❌ Server runs on every request → expensive.

Using ISR:
✅ Page builds once
✅ Updates automatically
✅ Fast + scalable

Perfect solution.

---

# 🔥 ISR + Dynamic Routes

Example:

```jsx
// app/products/[id]/page.js

export async function generateStaticParams() {
  const res = await fetch("https://api.example.com/products");
  const products = await res.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export const revalidate = 60;

export default async function ProductPage({ params }) {
  const res = await fetch(`https://api.example.com/products/${params.id}`);
  const product = await res.json();

  return <div>{product.name}</div>;
}
```

Now:

* All products built at build time
* Each product page revalidates every 60 sec

---

# ⚡ Important ISR Behavior

When revalidation time passes:

❌ The page does NOT immediately update
✅ It updates on the next request
✅ Old page is served while regenerating

This is called:

> **Stale-While-Revalidate**

---

# 🏁 Final Understanding

ISR gives you:

* ⚡ Speed of static pages
* 🔄 Freshness of dynamic pages
* 💰 Lower server cost
* 📈 High scalability

---

# 🧠 One Line Summary

> ISR = Static page that updates itself automatically after a set time.