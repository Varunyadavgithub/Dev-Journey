# ⚙️ Rendering Paradigms in Next.js

## 📌 What are Rendering Paradigms?

Rendering paradigms define **how and where the HTML of a page is generated** in a Next.js application. This is one of the most powerful features of Next.js as it gives you flexibility to choose the right strategy based on your needs.

---

## 🧱 Types of Rendering Paradigms in Next.js

### 1. 🖥️ **Server-Side Rendering (SSR)**

- HTML is generated on the **server at request time**.
- Good for **dynamic data that changes frequently**.
- Reduces the time to first byte (TTFB).
- Slower than static methods because rendering happens on every request.

**Use Cases:**
- Personalized dashboards
- Authenticated pages

**In App Router:**  
Just fetch data directly inside a **server component**.

**In Pages Router:**  
Use `getServerSideProps()`.

---

### 2. 📦 **Static Site Generation (SSG)**

- HTML is generated at **build time**.
- Great for **static content** like blogs, marketing sites.
- Extremely fast load time (pre-rendered and cached).
- Not suitable for frequently changing data.

**Use Cases:**
- Blogs
- Documentation
- Marketing pages

**In App Router:**  
Use server components with `fetch()` that runs at build time.

**In Pages Router:**  
Use `getStaticProps()`.

---

### 3. 🔁 **Incremental Static Regeneration (ISR)**

- A mix of **SSG + SSR**.
- Allows you to update static pages **after deployment**.
- Rebuilds pages **in the background** using a `revalidate` interval.

**Use Cases:**
- Product listings
- News sites
- Catalogs with frequent but not real-time updates

**App Router Example:**
```js
fetch(url, {
  next: { revalidate: 10 } // in seconds
});
```

---

### 4. 👤 **Client-Side Rendering (CSR)**

- HTML is generated **in the browser** using JavaScript.
- Good for **highly interactive or personalized** content.
- Slower initial load (blank HTML) but fast interactions once loaded.

**Use Cases:**
- User-specific dashboards
- Data fetching on user actions

**How to do in App Router:**  
Mark component with `"use client"` and use `useEffect()` to fetch data.

---

### 5. ⚛️ **React Server Components (RSC)**

- Default in App Router.
- Components that **run only on the server**.
- Do not include any client-side JavaScript.
- Can **fetch data directly from the server**, even from databases or APIs.

**Benefits:**
- Better performance (zero JS)
- Easy to combine with client components
- Smaller bundle size

```tsx
// Server Component (default)
export default async function Products() {
  const res = await fetch('https://api.example.com/products');
  const data = await res.json();

  return <div>{data[0].name}</div>;
}
```

---

## 📊 Comparison Table

| Paradigm | Runs On | Suitable For                     | Speed        | Interactivity | Data Freshness |
|----------|---------|----------------------------------|---------------|----------------|----------------|
| SSR      | Server  | Dynamic, user-based pages        | Medium        | High           | Real-time      |
| SSG      | Build   | Blogs, static content            | Very Fast     | Low            | At build time  |
| ISR      | Server  | Mixed content with frequent updates | Fast       | Medium         | Scheduled      |
| CSR      | Client  | Interactive UIs, user dashboards | Slower initial | High          | Real-time      |
| RSC      | Server  | Data-heavy, non-interactive UI   | Very Fast     | Low (until wrapped in CSR) | Real-time |

---

## 🧠 Summary

- Next.js provides **ultimate flexibility** in choosing how to render your pages.
- Pick the rendering strategy based on your page's **performance**, **data needs**, and **interactivity**.
- With **App Router**, you use **React Server Components by default**, and opt-in to client components when needed.

---

## 📘 Resources

- [Next.js Rendering Docs](https://nextjs.org/docs/app/building-your-application/rendering)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)