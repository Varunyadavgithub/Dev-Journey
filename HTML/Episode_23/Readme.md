# Episode 23: Meta Tags & SEO Basics

Welcome to Episode 23 of the **Learn HTML** series! In this episode, we will discuss the importance of meta tags and their role in Search Engine Optimization (SEO). We’ll also look at how to add key meta tags to your HTML documents to improve your website’s visibility and search engine rankings.

---

## 🧠 Learning Objectives

By the end of this episode, you will understand:

- What meta tags are and how they affect SEO.
- How to use common meta tags like `description`, `keywords`, and `viewport`.
- How to implement social media meta tags for better sharing.

---

## 🧩 What Are Meta Tags?

Meta tags provide metadata about the HTML document. They are placed inside the `<head>` tag of your HTML file and are not visible on the webpage. These tags help search engines understand the content of your page and enhance the user experience.

### Syntax:

```html
<head>
  <meta charset="UTF-8" />
  <meta
    name="description"
    content="Learn HTML with hands-on examples and tutorials."
  />
  <meta name="keywords" content="HTML, HTML tutorial, web development" />
  <meta name="author" content="John Doe" />
</head>
```

---

## 🏷️ Important Meta Tags for SEO

### 1. `description` Tag

The `description` tag provides a summary of the webpage content. It is often displayed in search engine results.

### Syntax:

```html
<meta
  name="description"
  content="This is a webpage about HTML basics and tutorials."
/>
```

### 2. `keywords` Tag

The `keywords` tag is used to specify relevant keywords for the webpage. This tag is not as important for SEO anymore but can still help in some cases.

### Syntax:

```html
<meta
  name="keywords"
  content="HTML, web development, tutorials, HTML tutorial"
/>
```

### 3. `viewport` Tag

The `viewport` tag helps control the layout on mobile devices. It ensures the page scales correctly on different screen sizes.

### Syntax:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

## 🧑‍💻 Social Media Meta Tags

To optimize your content for social media platforms, use Open Graph and Twitter Card meta tags. These meta tags enhance the preview when your content is shared.

### Open Graph Example:

```html
<meta property="og:title" content="Learn HTML" />
<meta
  property="og:description"
  content="A comprehensive HTML tutorial for beginners"
/>
<meta property="og:image" content="https://example.com/og-image.jpg" />
<meta property="og:url" content="https://example.com" />
```

### Twitter Card Example:

```html
<meta name="twitter:title" content="Learn HTML" />
<meta name="twitter:description" content="Comprehensive HTML tutorial" />
<meta name="twitter:image" content="https://example.com/twitter-image.jpg" />
```

---

## 💡 Tips

- Always use the `viewport` meta tag for mobile responsiveness.
- Write clear and concise descriptions for SEO-friendly meta tags.
- Utilize Open Graph and Twitter Card tags to enhance social media sharing.

---

## 🔗 Next Episode

➡️ [Episode 24: HTML Accessibility (`aria-` attributes)](../Episode_24/Readme.md)

---

In the next episode, we will explore how to improve web accessibility using ARIA (Accessible Rich Internet Applications) attributes. These attributes help make websites more accessible to people with disabilities.
