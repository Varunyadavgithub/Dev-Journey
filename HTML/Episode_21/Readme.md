# Episode 21: Form Validation Attributes

Welcome to Episode 21 of the **Learn HTML** series! In this episode, we will explore HTML form validation attributes that help improve the user experience by ensuring that form inputs are validated before submission.

---

## 🧠 Learning Objectives

By the end of this episode, you’ll know:

- How to use HTML5 form validation attributes
- The purpose and functionality of attributes like `required`, `pattern`, `min`, `max`, `minlength`, `maxlength`, etc.
- How to create more interactive and user-friendly forms

---

## 🔢 Key Form Validation Attributes

### 1. `required`

The `required` attribute makes an input field mandatory for form submission.

```html
<input type="text" required />
```

---

### 2. `min` and `max`

These attributes define the minimum and maximum values for numerical inputs.

```html
<input type="number" min="1" max="10" />
```

---

### 3. `minlength` and `maxlength`

These attributes specify the minimum and maximum number of characters allowed in a text input field.

```html
<input type="text" minlength="5" maxlength="10" />
```

---

### 4. `pattern`

The `pattern` attribute allows you to specify a regular expression that the input must match.

```html
<input type="text" pattern="[A-Za-z]{3,}" />
```

---

### 5. `type` Attribute for Validation

Different input types come with their own built-in validation.

- `email` type validates the entered value is a valid email address.
- `url` type ensures the entered value is a valid URL.

```html
<input type="email" required /> <input type="url" required />
```

---

### 6. `step`

For numeric inputs, the `step` attribute allows you to define intervals (like 0.1, 5, etc.).

```html
<input type="number" step="0.01" />
```

---

## 💡 Tips

- Always use proper input types to ensure validation is more effective.
- Combine validation attributes for more precise control over form inputs.
- Use `required` in conjunction with other validation attributes for better user input control.

---

## 🔗 Next Episode

➡️ [Episode 22: Labels, Fieldsets, and Legends](../Episode_22/Readme.md)

---

In the next episode, we’ll dive into the usage of `label`, `fieldset`, and `legend` elements to structure and organize your forms better!
