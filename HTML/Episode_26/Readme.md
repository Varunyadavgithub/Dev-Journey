# Episode 26: Common Mistakes to Avoid

Welcome to Episode 26 of the **Learn HTML** series! In this episode, we'll cover some common mistakes that beginners (and even some experienced developers) often make when writing HTML. Avoiding these mistakes will ensure that your HTML code is cleaner, more efficient, and ready for production.

---

## 🧠 Learning Objectives

By the end of this episode, you will:

- Recognize common mistakes in HTML code.
- Understand how to fix and avoid these mistakes.
- Learn best practices for writing reliable and efficient HTML code.

---

## 🧩 Common HTML Mistakes

Here are some of the most common mistakes developers make when writing HTML and how to avoid them:

### 1. **Forgetting to Close Tags**

- One of the most frequent mistakes is forgetting to close HTML tags, especially self-closing tags like `<img>`, `<br>`, and `<hr>`. Always ensure that every tag is properly closed.

```html
<!-- Incorrect -->
<img src="image.jpg" alt="Image" />

<!-- Correct -->
<img src="image.jpg" alt="Image" />
```

### 2. **Using Non-Semantic Tags**

- Avoid using non-semantic tags like `<div>` and `<span>` for structuring the layout of your page. Instead, use semantic HTML5 tags that describe the content, such as `<header>`, `<footer>`, `<article>`, etc.

```html
<!-- Incorrect -->
<div class="header">Header content</div>

<!-- Correct -->
<header>Header content</header>
```

### 3. **Overusing Inline Styles**

- Inline styles can make your HTML difficult to maintain. Instead of applying styles directly to elements, it's better to use external stylesheets for better separation of concerns.

```html
<!-- Incorrect -->
<h1 style="color: red;">Title</h1>

<!-- Correct -->
<h1 class="title">Title</h1>
```

### 4. **Using Deprecated Tags**

- HTML5 has introduced many new elements, so avoid using deprecated or outdated tags such as `<font>`, `<center>`, and `<b>`. Use CSS for styling instead.

```html
<!-- Incorrect -->
<font color="red">Text</font>

<!-- Correct -->
<span class="text-red">Text</span>
```

### 5. **Not Using Alt Attributes for Images**

- Always include the `alt` attribute for `<img>` tags. This improves accessibility for users with disabilities and helps search engines understand the content of images.

```html
<!-- Incorrect -->
<img src="image.jpg" />

<!-- Correct -->
<img src="image.jpg" alt="Description of the image" />
```

### 6. **Using Empty or Unnecessary Tags**

- Avoid using empty tags or unnecessary elements in your HTML, such as `<div></div>` if no content is inside or it isn't needed for layout purposes.

```html
<!-- Incorrect -->
<div></div>

<!-- Correct -->
<!-- Remove empty div or use a more appropriate tag -->
```

### 7. **Not Organizing Code Properly**

- Keep your HTML code organized by properly indenting it. Use consistent indentation and separate sections of your document with comments for better readability.

```html
<!-- Correct -->
<section>
  <header>
    <h1>Heading</h1>
  </header>
  <p>Content goes here.</p>
</section>
```

---

## 🧑‍💻 Fixing Mistakes

By avoiding the above mistakes, you can ensure that your HTML code is efficient, accessible, and easier to maintain. It's important to regularly review your code for any errors and strive for clean, semantic HTML.
