# 📁 What are Route Groups in Next.js?

## 📌 What I Learned Today

Today I explored **Route Groups** in Next.js (App Router). Route groups allow us to organize routes **without affecting the URL structure**. They are super useful for **layout management** and for **separating concerns** in a scalable app.

---

## 🔍 What are Route Groups?

Route groups are **folders wrapped in parentheses `()`** that help **structure routes logically** without changing the actual URL path.

> ✅ Useful for organizing files and layouts without impacting route paths.

---

### 🗂️ Example Structure:

```bash
app/
├── (marketing)/
│   ├── layout.js      ← Layout for marketing pages
│   └── home/
│       └── page.js    ← Accessible at `/home`, not `/marketing/home`
├── (dashboard)/
│   ├── layout.js      ← Layout for dashboard
│   └── user/
│       └── page.js    ← Accessible at `/user`
```

Even though the folders are named `(marketing)` and `(dashboard)`, the URLs are still:
- `/home`
- `/user`

---

## 🧠 Why Use Route Groups?

| Use Case                                | Description                                                         |
|-----------------------------------------|---------------------------------------------------------------------|
| 🧩 Layout Separation                     | Group routes with different layouts (e.g., marketing vs dashboard) |
| 🧼 Clean Folder Structure                | Helps keep components and pages organized                          |
| 🚀 Performance & Load Management        | Load layouts/code only where necessary                              |
| ✅ Auth vs Non-Auth Pages                | Easy separation of public and private routes                        |

---

## 🔁 Route Group + Layout Example

```bash
app/
├── (auth)/
│   ├── layout.js     ← Auth layout (login, register)
│   ├── login/
│   │   └── page.js   ← URL: /login
│   └── register/
│       └── page.js   ← URL: /register
├── (main)/
│   ├── layout.js     ← Main app layout (dashboard, profile)
│   └── dashboard/
│       └── page.js   ← URL: /dashboard
```

---

### 🧪 Sample Layout: `(auth)/layout.js`

```jsx
// app/(auth)/layout.js
export default function AuthLayout({ children }) {
  return (
    <div>
      <header>Auth Header</header>
      <main>{children}</main>
    </div>
  );
}
```

---

## ⚠️ Important Notes

| Concept                 | Rule/Info                                                         |
|--------------------------|-------------------------------------------------------------------|
| ✅ Route groups syntax    | Use parentheses: `(group-name)`                                  |
| ❌ No impact on URLs      | Route groups do **not appear** in the URL                        |
| 🔁 Each group can have its own `layout.js` | This is the real power!                              |
| 🧭 Can be nested         | Yes, you can nest route groups within other groups if needed      |

---

## 🧠 Pro Tip

Route groups help when building **role-based** layouts, such as:
- `(admin)` for admin dashboard
- `(user)` for general users
- `(auth)` for login and registration

---

## ✅ Summary

| Feature         | Description                                                   |
|-----------------|---------------------------------------------------------------|
| Route Groups    | Folders wrapped in `()` to organize routes without affecting paths |
| URL Path        | Path ignores the route group name                             |
| Best Used For   | Layouts, separating auth/non-auth, cleaner file structure      |

---

## 📘 Official Docs

- [Route Groups – Next.js](https://nextjs.org/docs/app/building-your-application/routing/route-groups)