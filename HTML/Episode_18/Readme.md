# Episode 18: Block-level vs Inline Elements

Welcome to Episode 18 of the **Learn HTML** series! In this episode, you’ll learn the difference between block-level and inline elements — an essential part of understanding how elements behave in a web page layout.

---

## 🧠 Learning Objectives

By the end of this episode, you’ll be able to:

- Understand what block-level elements are
- Identify common inline elements
- Learn how each type affects layout and styling
- Know when to use which

---

## 📘 Block-level Elements

Block-level elements always start on a **new line** and take up the **full width** available.

### ✅ Common Block-level Elements

- `<div>`
- `<p>`
- `<h1>` to `<h6>`
- `<section>`
- `<article>`
- `<header>`, `<footer>`
- `<form>`
- `<ul>`, `<ol>`, `<li>`
- `<table>`

---

## 📙 Inline Elements

Inline elements do **not start** on a new line and only take up as much **width as necessary**.

### ✅ Common Inline Elements

- `<span>`
- `<a>`
- `<strong>`, `<em>`
- `<img>`
- `<input>`
- `<label>`

---

## 🧪 Code Example

```html
<!-- Block-level -->
<div>
  <p>This is a block-level element</p>
</div>

<!-- Inline -->
<p>This is an <span>inline</span> element</p>
```

---

## 💡 Pro Tip

You can change the display type of any element using CSS:

```css
span {
  display: block;
}

div {
  display: inline;
}
```

---

## 🔗 Next Episode

➡️ [Episode 19: HTML5 Layout Tags (`header`, `footer`, `nav`, `section`, etc.)](../Episode_19/Readme.md)

---

In the next episode, we’ll dive into semantic layout tags introduced in HTML5 and understand how they help in building meaningful structure and accessible web content.
