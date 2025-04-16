# Episode 4: Boolean Attributes in HTML

Welcome to Episode 4 of the **Learn HTML** series! In this episode, we'll explore **Boolean attributes**—a special category of HTML attributes that are either true or false just by their presence.

---

## 🧠 Learning Objectives

By the end of this episode, you will:

- Understand what Boolean attributes are in HTML
- Learn how they differ from regular attributes
- Identify the most common Boolean attributes and how to use them

---

## ❓ What Are Boolean Attributes?

Boolean attributes are those that **don’t require a value**. If the attribute is present in an element, it’s considered **true**. If it’s absent, it’s **false**.

### ✅ Example

```html
<input type="checkbox" checked>
```

- The `checked` attribute means the checkbox is selected by default.
- You **don’t** write `checked="true"` — its presence alone is enough.

---

## 📋 Common Boolean Attributes

| Attribute     | Description                                              |
|---------------|----------------------------------------------------------|
| `checked`     | Used with checkboxes and radio buttons                  |
| `disabled`    | Disables the input field or button                      |
| `readonly`    | Makes the input read-only                               |
| `required`    | Makes the input field mandatory                         |
| `autoplay`    | Media elements (video/audio) start playing automatically |
| `controls`    | Shows audio/video controls                              |
| `loop`        | Replays audio/video automatically                       |
| `multiple`    | Allows multiple selections in file or select inputs     |
| `selected`    | Pre-selects an option in a dropdown menu                |
| `hidden`      | Hides the element from the page                         |

---

## 🧪 Example Usage

```html
<input type="text" disabled>
<input type="checkbox" checked>
<input type="email" required>
```

- These attributes are **Boolean** — you don’t have to write any values.

---

## ❌ Don't Do This:

```html
<input type="checkbox" checked="checked">
```

Although technically valid and will still work, **`checked`** alone is enough:

✅ Prefer this:

```html
<input type="checkbox" checked>
```

---

## ⚠️ Best Practice

- Always use Boolean attributes **without a value**.
- Avoid redundant `attribute="attribute"` syntax unless required for legacy compatibility.

---

## ✅ Summary

- Boolean attributes are either **true or false**.
- Their presence means **true**; absence means **false**.
- Useful in form inputs, media tags, and more.

---

## 🔗 Next Episode

➡️ [Episode 5: Heading & Paragraph Tags](../Episode_05/Readme.md)

---

Now that you know how to use Boolean attributes, you're one step closer to mastering forms and interactivity in HTML! 💡🧩
