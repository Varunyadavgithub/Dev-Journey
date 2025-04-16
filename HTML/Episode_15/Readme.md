# Episode 15: Lists — Ordered, Unordered, and Description

Welcome to Episode 15 of the **Learn HTML** series! In this episode, we’ll explore the different types of lists in HTML and how to use them to structure content effectively.

---

## 🧠 Learning Objectives

By the end of this episode, you’ll be able to:

- Understand the three main types of HTML lists
- Use lists to create structured, readable content
- Nest lists inside other lists

---

## 🔢 Ordered Lists (`<ol>`)

Used when the order of items matters.

```html
<ol>
  <li>Wake up</li>
  <li>Brush your teeth</li>
  <li>Have breakfast</li>
</ol>
```

You can also customize the numbering type using the `type` attribute:

```html
<ol type="A">
  <li>Item A</li>
  <li>Item B</li>
</ol>
```

---

## 🔘 Unordered Lists (`<ul>`)

Used when the order of items does **not** matter.

```html
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Eggs</li>
</ul>
```

Bullet styles can be customized using CSS.

---

## 🧾 Description Lists (`<dl>`)

Used for name-value pairs, like glossaries or FAQs.

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

---

## 🔁 Nested Lists

You can nest lists inside list items.

```html
<ul>
  <li>
    Fruits
    <ul>
      <li>Apple</li>
      <li>Mango</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
```

---

## ✅ Use Cases for Lists

- Navigation Menus
- To-Do Lists
- Feature Lists
- Steps in a Process

---

## 🔗 Next Episode

➡️ [Episode 16: HTML Structure & Boilerplate](../Episode_16/Readme.md)

---

In the next episode, we’ll look at the standard **HTML document structure**, boilerplate code, and what each part of it means. Stay tuned!
