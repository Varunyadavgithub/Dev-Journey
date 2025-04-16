# Episode 6: Special Characters & HTML Entities

Welcome to Episode 6 of the **Learn HTML** series! In this episode, we’ll explore how to display special characters in HTML using **entities**. This is especially useful when you need to display symbols that would otherwise be interpreted as code.

---

## 🧠 Learning Objectives

By the end of this episode, you will:

- Understand what HTML entities are
- Learn how to use special characters in your HTML pages
- Know when and why to use entities instead of regular characters

---

## ❓ What Are HTML Entities?

HTML entities are a way to display reserved characters or symbols in HTML that would otherwise be read as part of the code.

For example:

- The less-than sign `<` is used to open an HTML tag. If you want to display it as a symbol, you must use `&lt;`.
- Similarly, for the greater-than sign `>`, use `&gt;`.

---

## 💡 Common HTML Entities

| Character | Entity Code | Description       |
| --------- | ----------- | ----------------- |
| `<`       | `&lt;`      | Less-than sign    |
| `>`       | `&gt;`      | Greater-than sign |
| `&`       | `&amp;`     | Ampersand         |
| `"`       | `&quot;`    | Double quotation  |
| `'`       | `&apos;`    | Single quotation  |
| `©`       | `&copy;`    | Copyright         |
| `®`       | `&reg;`     | Registered        |
| `₹`       | `&#8377;`   | Indian Rupee      |
| `€`       | `&euro;`    | Euro sign         |

---

## 🧪 Example

```html
<p>5 &lt; 10 and 10 &gt; 5</p>
<p>Use &amp; to represent an ampersand.</p>
<p>Copyright &copy; 2025. All rights reserved.</p>
<p>Price: ₹500 or &euro;6.50</p>
```

### Output:

> 5 < 10 and 10 > 5  
> Use & to represent an ampersand.  
> Copyright © 2025. All rights reserved.  
> Price: ₹500 or €6.50

---

## 🧠 Why Use Entities?

- To display reserved characters that HTML uses for tags.
- To show characters that might not be available on all keyboards.
- To maintain correct formatting and prevent rendering errors.

---

## ✅ Summary

- Use HTML entities for special characters like `<`, `>`, `&`, `"`, and `'`.
- You can also use numeric codes for symbols (like `&#8377;` for ₹).
- Entities improve rendering consistency across browsers.

---

## 🔗 Next Episode

➡️ [Episode 7: Superscript & Subscript Tags](../Episode_07/Readme.md)

---

Great job! Up next, we’ll learn about **superscript and subscript tags** — useful for math, chemistry, and more! 🔢🧪
