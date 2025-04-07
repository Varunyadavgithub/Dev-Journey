# 🔐 What are Private Folders in Next.js?

## 📌 What I Learned Today

Today, I learned about **Private Folders** in Next.js (App Router). These folders are **used internally** by Next.js to help organize files **that should not be exposed as routes or URLs**.

They help with **structure**, **organization**, and **code modularity** while keeping the file system clean and route-safe.

---

## 🧩 What are Private Folders?

Private folders are any folders that begin with an **underscore (`_`)**, such as:

```
app/
├── _components/
├── _lib/
├── _utils/
```

🛑 **These folders will NOT be treated as route segments.**

That means their contents:
- **Won’t create a route** or URL
- **Won’t appear in the browser address bar**
- **Are completely ignored** when it comes to routing

---

## ✅ Purpose of Private Folders

| Use Case                 | Description                                             |
|--------------------------|---------------------------------------------------------|
| 📦 Component Storage     | Store reusable UI components (`_components`)            |
| 🧠 Logic Helpers         | Store utility functions (`_utils`, `_lib`)              |
| 🔒 Private APIs/Constants | Logic or constants not related to the routing system    |
| 🧼 Clean Structure        | Keep route folders free from clutter                    |

---

## 🚫 Wrong vs ✅ Correct Usage

### ❌ If you use this:
```bash
app/utils/helper.js
```

`/utils/helper` will be treated as a route, which is **not intended**.

### ✅ Use this instead:
```bash
app/_utils/helper.js
```

Now it’s **excluded from routing** and only used as an internal file.

---

## 🧠 Example Use Case

```bash
app/
├── page.js
├── _components/
│   └── Navbar.jsx
├── _utils/
│   └── formatDate.js
```

### ✅ Usage

```jsx
// app/page.js
import Navbar from './_components/Navbar';
import { formatDate } from './_utils/formatDate';
```

---

## 💡 Why This Matters

When your app grows large, you'll need internal logic, components, or constants that **shouldn't become routes**. Private folders let you:

- Avoid accidental route creation
- Keep folder structure clean
- Write modular, maintainable code

---

## 🔐 Naming Rule

- Always start private folders with `_`
- Next.js **automatically ignores** them from routing

✅ Valid:
```
_components/
_lib/
_internal/
```

❌ Invalid (will create routes):
```
components/
lib/
internal/
```

---

## ✅ Summary

| Feature         | Description                                                |
|-----------------|------------------------------------------------------------|
| Private Folders | Folders starting with `_` that are ignored by Next.js router |
| Use For         | Utilities, reusable components, internal logic             |
| Benefit         | Clean structure, avoids accidental route creation          |

---

## 📘 Official Docs

- [Next.js Routing – Special Folders](https://nextjs.org/docs/app/building-your-application/routing#special-files)