# 🧠 Metadata API in Next.js (App Router)

## 📌 What I Learned Today

Today I explored the **Metadata API** in Next.js — a powerful way to manage **SEO**, **social sharing**, and **browser metadata** using static and dynamic methods.

Next.js uses the `metadata` export and `generateMetadata` function to automatically generate `<head>` tags like:

- `<title>`
- `<meta name="description" />`
- Open Graph tags
- Twitter cards
- Icons and more!

---

## 🎯 Static Metadata with `export const metadata`

You can define static metadata using a simple export in your `layout.js` or `page.js`.

```js
// app/layout.js
export const metadata = {
  title: {
    default: 'Technical Agency',
    template: '%s | Technical Agency',
  },
  description: 'We build modern digital experiences.',
};
```

### 🔍 Resulting HTML
```html
<title>Home | Technical Agency</title>
<meta name="description" content="We build modern digital experiences." />
```

### 📌 Explanation:

| Field         | Purpose                                                                 |
|---------------|-------------------------------------------------------------------------|
| `title.default` | Default title when none is specified for a specific page              |
| `title.template`| Template to wrap dynamic titles — `%s` is replaced with page title    |
| `description`  | Description for SEO and search engines                                 |

---

## 🔁 Dynamic Metadata with `generateMetadata`

Use this when you need to create metadata based on **dynamic data**, such as route parameters, props, API calls, etc.

```js
// app/blog/[slug]/page.js
export async function generateMetadata({ params }) {
  const { slug } = params;

  // Example fetch (you'd normally get this from a database or API)
  const postTitle = slug.replaceAll("-", " ").toUpperCase();

  return {
    title: `${postTitle}`,
    description: `Read more about ${postTitle} in our blog.`,
  };
}
```

This dynamically sets the title and description based on the current blog post.

---

## 📄 Supported Metadata Fields

| Field         | Usage                              |
|---------------|-------------------------------------|
| `title`       | Page title                          |
| `description` | Meta description                    |
| `keywords`    | Keywords for SEO                    |
| `authors`     | Author details                      |
| `openGraph`   | Open Graph data for social sharing  |
| `twitter`     | Twitter card metadata               |
| `icons`       | Favicon and other icon paths        |
| `robots`      | Instructions for crawlers           |

---

## 🧠 Important Notes

- You can define `metadata` at **any level**: global (layout), or page-level.
- `generateMetadata()` can be async and fetch data.
- `title.template` only works in `layout.js`, not in `page.js`.

---

## 📘 Example Folder Structure

```bash
app/
├── layout.js             ← Global metadata (title, description)
├── page.js               ← Home
├── about/
│   └── page.js           ← Inherits from layout
├── blog/
│   └── [slug]/
│       └── page.js       ← Uses generateMetadata()
```

---

## 🧪 Real World Example

```js
// app/about/page.js
export const metadata = {
  title: "About Us",
  description: "Learn more about Technical Agency",
};
```

Rendered `<head>`:
```html
<title>About Us | Technical Agency</title>
<meta name="description" content="Learn more about Technical Agency" />
```

---

## 📘 Official Docs

- [Metadata API – Next.js Docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [SEO Guide for Next.js](https://nextjs.org/learn/seo/introduction-to-seo)

---

## ✅ Summary

| Feature                | Description                                       |
|------------------------|---------------------------------------------------|
| `export const metadata`| Static SEO metadata for a layout/page             |
| `generateMetadata()`   | Dynamic metadata based on route/params/fetching   |
| `title.template`       | Helps format titles with branding                 |
| Inherited Metadata     | Pages inherit from parent layout metadata         |