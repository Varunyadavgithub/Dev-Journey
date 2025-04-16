# Episode 24: HTML Accessibility (`aria-` attributes)

Welcome to Episode 24 of the **Learn HTML** series! In this episode, we’ll dive into HTML accessibility and learn about the important `aria-` attributes. These attributes help make web applications more accessible to users with disabilities, ensuring a better user experience for everyone.

---

## 🧠 Learning Objectives

By the end of this episode, you will:

- Understand the importance of web accessibility.
- Learn about different `aria-` attributes and how they improve accessibility.
- Implement common `aria-` attributes to make your web pages more accessible.

---

## 🧩 What is Web Accessibility?

Web accessibility refers to the practice of making websites usable for all people, including those with disabilities. Accessibility ensures that everyone, regardless of physical abilities or limitations, can access and interact with your website’s content.

---

## 🏷️ `aria-` Attributes

The `aria-` attributes are part of the Accessible Rich Internet Applications (ARIA) specification, which provides a way to make dynamic web content and advanced user interface controls accessible to people with disabilities.

### Common `aria-` Attributes:

1. **`aria-label`**
   The `aria-label` attribute provides an accessible name for an element, which is especially useful for screen readers.

   ### Syntax:

   ```html
   <button aria-label="Close">X</button>
   ```

   This button will be announced as "Close" to screen readers.

2. **`aria-labelledby`**
   The `aria-labelledby` attribute references an element's ID to provide an accessible name.

   ### Syntax:

   ```html
   <h1 id="page-title">Welcome to My Website</h1>
   <button aria-labelledby="page-title">Learn More</button>
   ```

   This button will be announced with the text from the `<h1>` tag.

3. **`aria-hidden`**
   The `aria-hidden` attribute hides elements from screen readers, even if they are visible on the page.

   ### Syntax:

   ```html
   <div aria-hidden="true">
     This content will not be read by screen readers.
   </div>
   ```

4. **`aria-live`**
   The `aria-live` attribute is used for announcing dynamic content changes, such as updates to a message or status.

   ### Syntax:

   ```html
   <div aria-live="polite">Content updated!</div>
   ```

   This will announce the updated content when it changes.

---

## 🧑‍💻 Best Practices for Accessibility

- Use `aria-` attributes only when native HTML elements cannot provide the necessary functionality.
- Always ensure elements have clear and descriptive accessible names for screen readers.
- Test your website with screen readers to ensure accessibility.

---

## 🔗 Next Episode

➡️ [Episode 25: Best Practices for Writing Clean HTML](../Episode_25/Readme.md)

---

In the next episode, we will discuss best practices for writing clean and maintainable HTML, covering important tips and techniques to improve your code structure and readability.
