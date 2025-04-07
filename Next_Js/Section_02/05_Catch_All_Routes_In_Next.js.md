# 📂 Catch-All Routes in Next.js (App Router)

## 📌 What I Learned Today

Today I learned about **Catch-All Routes** in Next.js using the **App Router**. These routes allow us to match **one or more segments** of a URL — super useful for building features like:

- File system explorers
- Nested paths
- Custom slug paths
- Deep linking

---

## 🔁 Types of Catch-All Routes

There are **2 types** of catch-all routes in Next.js:

| Type               | Syntax            | Description                                   |
| ------------------ | ----------------- | --------------------------------------------- |
| Required Catch-All | `[...filePath]`   | Must have **at least one** segment in the URL |
| Optional Catch-All | `[[...filePath]]` | Can have **zero or more** segments            |

---

## 📁 Folder Structures

### ✅ Required Catch-All Route Example

```bash
app/
├── Files/
│   └── [...filePath]/
│       └── page.js
```

- Matches: `/Files/documents`, `/Files/user/data`, `/Files/a/b/c`
- ❌ Does NOT match: `/Files`

```js
export default function FilePage({ params }) {
  const { filePath } = params;

  return (
    <div>
      <h1>Required Catch-All Route</h1>
      <p>File Path: {filePath.join(" / ")}</p>
    </div>
  );
}
```

---

### ✅ Optional Catch-All Route Example

```bash
app/
├── Files/
│   └── [[...filePath]]/
│       └── page.js
```

- Matches: `/Files`, `/Files/docs`, `/Files/docs/dev/guide`
- Can be empty or deep.

```js
export default function FilePage({ params }) {
  const { filePath = [] } = params;

  return (
    <div>
      <h1>Optional Catch-All Route</h1>
      {filePath.length === 0 ? (
        <p>No file path provided.</p>
      ) : (
        <p>File Path: {filePath.join(" / ")}</p>
      )}
    </div>
  );
}
```

---

## 🧠 How Catch-All Params Work

In both cases, the matched segments are passed as an **array** inside `params`.

```js
params = {
  filePath: ["docs", "guide", "intro"],
};
```

If optional and no segments:

```js
params = {
  filePath: undefined,
};
```

Use default value like: `const { filePath = [] } = params;`

---

## 🚫 Important Rules to Remember

| Rule                                                            | Applies To           |
| --------------------------------------------------------------- | -------------------- |
| Optional catch-all routes **cannot** be at the root level (`/`) | `[[...slug]]`        |
| Use `page.js` inside `[...param]` or `[[...param]]` folders     | All catch-all routes |
| Segments are passed as arrays → must handle `.join()`           | Required & Optional  |

---

## 🔗 Example Links

```js
"use client";
import Link from "next/link";

export default function FileLinks() {
  return (
    <div>
      <Link href="/Files">Root Folder</Link>
      <Link href="/Files/images">Images</Link>
      <Link href="/Files/docs/setup/intro">Deep Nested</Link>
    </div>
  );
}
```

---

## 🧪 Summary Table

| Feature                   | `[...filePath]`       | `[[...filePath]]`    |
| ------------------------- | --------------------- | -------------------- |
| Required                  | ✅ At least 1 segment | ❌ Optional          |
| Matches `/Files`          | ❌ No                 | ✅ Yes               |
| Matches `/Files/a/b/c`    | ✅ Yes                | ✅ Yes               |
| `params.filePath`         | Always an array       | Could be `undefined` |
| Can be used at root level | ✅ Yes                | ❌ No                |

---

## 📘 Official Docs

- [Catch-All Segments (App Router)](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments)
- [Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)

---

## 🏁 Real-World Use Cases

- File explorer UI: `/Files/[[...filePath]]`
- Docs navigation: `/docs/[[...slug]]`
- Custom route builders: `/dashboard/user/[...path]`