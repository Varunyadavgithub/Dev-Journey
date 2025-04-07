# 📚 Nested Routing in Next.js (App Router)

## 📌 What I Learned Today

Today, I learned how to create **Nested Routes** using the `app/` directory in Next.js 13+. Nested routes allow you to structure your project in a more **modular and scalable** way, perfect for building real-world web applications.

---

## 🧱 What is Nested Routing?

In Next.js, **nested routes** are created by nesting folders and `page.js` files inside the `app/` directory.

Each folder represents a route segment. Nesting them creates **URL paths that mirror the folder structure.**

---

## 📁 Folder Structure Example

```bash
app/
├── page.js                     --> Route: "/"
├── dashboard/
│   ├── page.js                 --> Route: "/dashboard"
│   ├── settings/
│   │   └── page.js             --> Route: "/dashboard/settings"
│   └── analytics/
│       └── page.js             --> Route: "/dashboard/analytics"
```

### 🧭 Resulting Routes:
| File Path                             | URL Route                 |
|---------------------------------------|---------------------------|
| `app/page.js`                         | `/`                       |
| `app/dashboard/page.js`              | `/dashboard`             |
| `app/dashboard/settings/page.js`     | `/dashboard/settings`    |
| `app/dashboard/analytics/page.js`    | `/dashboard/analytics`   |

---

## 🖱️ Navigating to Nested Routes Using `<Link>`

Use the `Link` component to navigate between nested routes. It works the same way regardless of how deeply nested your routes are.

### ✅ Example Navbar

```js
'use client';

import Link from 'next/link';

export default function DashboardNav() {
  return (
    <nav>
      <Link href="/dashboard">Dashboard Home</Link>
      <Link href="/dashboard/settings">Settings</Link>
      <Link href="/dashboard/analytics">Analytics</Link>
    </nav>
  );
}
```

---

## 📛 Naming Conventions for Nested Routes

- Each folder represents a **segment** in the URL path.
- Use lowercase and hyphens in folder names (e.g., `user-profile`, not `UserProfile`).
- Inside each nested folder, the main component should always be named **`page.js`**.

```bash
Correct:
app/user-profile/page.js      --> /user-profile

Wrong:
app/UserProfile/Page.js       ❌ Bad naming
```

---

## 🧪 Sample Nested Page Code

```js
// app/dashboard/settings/page.js
export default function SettingsPage() {
  return (
    <div>
      <h1>Dashboard Settings</h1>
      <p>This is the nested settings route.</p>
    </div>
  );
}
```

---

## 💡 Advantages of Nested Routing

✅ Clean and modular file structure  
✅ Scales easily with growing apps  
✅ Easier maintenance with scoped routes  
✅ Shared layouts possible for parent-child routes

---

## 🧠 Summary

| Feature                  | What I Did                                             |
|--------------------------|--------------------------------------------------------|
| Nested Routes            | Created folders inside folders with `page.js`         |
| Routing Structure        | URLs reflect folder nesting                            |
| Navigation               | Used `Link` for client-side transitions                |
| Naming Convention        | Lowercase, hyphenated folder names and `page.js` file  |

---

## 🚀 What’s Next?

- 🧩 Learn about **layouts** for nested routes using `layout.js`
- 🔄 Add loading states for nested routes using `loading.js`
- 💥 Handle errors per route with `error.js`
- 📁 Try **dynamic nested routes** like `[userId]/settings/page.js`

---

## 📘 Official Docs

- [Nested Routes in Next.js (App Router)](https://nextjs.org/docs/app/building-your-application/routing#nested-routes)
- [Layouts and Shared UI](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)