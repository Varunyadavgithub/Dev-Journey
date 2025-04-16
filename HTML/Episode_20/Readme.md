# Episode 20: All HTML Input Types

Welcome to Episode 20 of the **Learn HTML** series! In this episode, we will explore all the available input types in HTML that are essential for building rich and interactive forms.

---

## 🧠 Learning Objectives

By the end of this episode, you’ll know:

- The various `input` types in HTML
- When and why to use specific types
- Best practices for user-friendly forms

---

## 🔢 Common Input Types

### 1. `text`

```html
<input type="text" placeholder="Enter your name" />
```

---

### 2. `email`

```html
<input type="email" placeholder="Enter your email" />
```

---

### 3. `password`

```html
<input type="password" placeholder="Enter your password" />
```

---

### 4. `number`

```html
<input type="number" min="1" max="10" />
```

---

### 5. `tel`

```html
<input type="tel" placeholder="123-456-7890" />
```

---

### 6. `url`

```html
<input type="url" placeholder="https://example.com" />
```

---

### 7. `search`

```html
<input type="search" placeholder="Search..." />
```

---

### 8. `date`, `time`, `datetime-local`

```html
<input type="date" />
<input type="time" />
<input type="datetime-local" />
```

---

### 9. `month`, `week`

```html
<input type="month" /> <input type="week" />
```

---

### 10. `range`

```html
<input type="range" min="0" max="100" />
```

---

### 11. `color`

```html
<input type="color" />
```

---

### 12. `checkbox`

```html
<input type="checkbox" /> I agree
```

---

### 13. `radio`

```html
<input type="radio" name="gender" value="male" /> Male
<input type="radio" name="gender" value="female" /> Female
```

---

### 14. `file`

```html
<input type="file" />
```

---

### 15. `hidden`

```html
<input type="hidden" value="12345" />
```

---

### 16. `submit`, `reset`, `button`

```html
<input type="submit" value="Submit" />
<input type="reset" />
<button>Click Me</button>
```

---

## 💡 Tips

- Always use proper input types to improve UX.
- Use `label` elements for better accessibility.
- Combine input types with attributes like `required`, `min`, `max`, and `pattern` for validation.

---

## 🔗 Next Episode

➡️ [Episode 21: Form Validation Attributes](../Episode_21/Readme.md)

---

In the next episode, we’ll learn how to validate forms using HTML attributes like `required`, `minlength`, `maxlength`, `pattern`, and more!
