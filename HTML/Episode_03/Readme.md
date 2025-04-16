# Episode 3: Elements, Tags & Attributes

Welcome to Episode 3 of the **Learn HTML** series! In this episode, we will break down the very core of HTML — elements, tags, and attributes — to understand how webpages are built and structured.

---

## 🧠 Learning Objectives

By the end of this episode, you will:

- Understand the difference between elements and tags
- Know how to use attributes to customize HTML elements
- Learn the structure of a typical HTML element
- Identify opening vs closing tags

---

## 🧱 What is an HTML Element?

An HTML **element** is a combination of a start tag, content, and an end tag.

```html
<p>This is a paragraph element.</p>
```

- `<p>` → Start tag
- `This is a paragraph element.` → Content
- `</p>` → End tag

---

## 🏷️ Tags in HTML

Tags are keywords enclosed in angle brackets (`<>`). They define the start or end of an element.

Example:

```html
<h1>This is a heading</h1>
```

Some elements have no closing tag — these are called **self-closing tags**:

```html
<img src="image.jpg" alt="Example image" />
```

---

## ⚙️ Attributes in HTML

Attributes provide additional information about an element. They are always written inside the start tag.

```html
<a href="https://www.example.com" target="_blank">Visit Site</a>
```

In this example:
- `href` is the attribute
- `https://www.example.com` is the attribute value

---

## 📋 Common HTML Attributes

| Attribute   | Description                          |
|-------------|--------------------------------------|
| `href`      | Specifies the URL for a link         |
| `src`       | Specifies the source of an image     |
| `alt`       | Provides alternative text for images |
| `title`     | Provides extra info (tooltip)        |
| `id`        | Unique identifier for an element     |
| `class`     | Specifies class names (used with CSS)|
| `style`     | Inline styling                       |

---

## 🧪 Example: Putting It All Together

```html
<a href="https://www.google.com" target="_blank" title="Go to Google">
  Visit Google
</a>
```

- `a` = anchor tag (creates a link)
- `href` = where it navigates
- `target="_blank"` = opens in a new tab
- `title` = shows tooltip on hover

---

## 🧩 Self-Closing Tags

- `<img />`
- `<input />`
- `<br />`
- `<hr />`
- `<meta />`

These do not wrap any content and are closed within the opening tag.

---

## ✅ Summary

- **Tags** mark the start and end of elements.
- **Attributes** customize elements and add functionality.
- **Elements** are the basic building blocks of every webpage.

---

## 🔗 Next Episode

➡️ [Episode 4: Boolean Attributes in HTML](../Episode_04/Readme.md)

---

Mastering elements, tags, and attributes is the first step toward building powerful web pages. Let's keep going! 💡🌐

