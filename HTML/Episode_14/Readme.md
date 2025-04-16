# Episode 14: Creating Forms in HTML

Welcome to Episode 14 of the **Learn HTML** series! In this episode, you'll dive into one of the most essential components of any website — HTML Forms. Forms allow you to collect data from users and are crucial for interactions like sign-ups, logins, surveys, etc.

---

## 🧠 Learning Objectives

By the end of this episode, you’ll be able to:

- Understand the structure of an HTML form
- Use various form elements like input, textarea, select, checkbox, radio, and buttons
- Group form elements using `<fieldset>` and `<legend>`
- Use form attributes for functionality

---

## 🧱 Basic Form Structure

```html
<form action="/submit" method="POST">
  <!-- Form inputs go here -->
</form>
```

### Common Attributes:

- `action`: The URL where form data should be submitted
- `method`: Usually `GET` or `POST`

---

## 🧩 Common Form Elements

### 1. **Input Fields**

```html
<input type="text" name="username" placeholder="Enter your name" />
<input type="password" name="password" placeholder="Password" />
<input type="email" name="email" required />
```

### 2. **Textarea**

```html
<textarea name="message" rows="4" cols="50"></textarea>
```

### 3. **Radio Buttons and Checkboxes**

```html
<input type="radio" name="gender" value="male" /> Male
<input type="radio" name="gender" value="female" /> Female

<input type="checkbox" name="hobby" value="reading" /> Reading
<input type="checkbox" name="hobby" value="music" /> Music
```

### 4. **Dropdown Menu**

```html
<select name="country">
  <option value="india">India</option>
  <option value="usa">USA</option>
</select>
```

### 5. **Submit and Reset Buttons**

```html
<input type="submit" value="Submit" /> <input type="reset" value="Reset" />
```

---

## ✅ Fieldset and Legend

```html
<fieldset>
  <legend>Personal Info</legend>
  <label>Name:</label>
  <input type="text" />
</fieldset>
```

---

## 🔐 Form Validation (Basic)

HTML5 provides built-in form validation using attributes like `required`, `minlength`, `maxlength`, `pattern`, etc.

```html
<input type="text" name="username" required minlength="4" />
```

---

## 🔗 Next Episode

➡️ [Episode 15: Lists — Ordered, Unordered, and Description](../Episode_15/Readme.md)

---

In the next episode, we’ll explore different types of **lists in HTML** and when to use them.
