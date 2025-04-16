# Episode 13: Tables in HTML

Welcome to Episode 13 of the **Learn HTML** series! In this episode, we’ll explore how to create and style tables using HTML. Tables are used to display tabular data in a structured format.

---

## 🧠 Learning Objectives

By the end of this episode, you’ll be able to:

- Create basic tables using `<table>`, `<tr>`, `<td>`, and `<th>`
- Add table headers and captions
- Use attributes like `colspan`, `rowspan` for complex layouts
- Apply basic styling to tables

---

## 🧱 Table Structure

An HTML table is structured using the following elements:

- `<table>`: Defines the table
- `<tr>`: Table row
- `<td>`: Table data/cell
- `<th>`: Table header
- `<caption>`: Title of the table

### ✅ Example

```html
<table border="1">
  <caption>Student Grades</caption>
  <tr>
    <th>Name</th>
    <th>Subject</th>
    <th>Grade</th>
  </tr>
  <tr>
    <td>Varun</td>
    <td>Math</td>
    <td>A</td>
  </tr>
  <tr>
    <td>Priya</td>
    <td>Science</td>
    <td>B+</td>
  </tr>
</table>
```

---

## 🧩 Advanced Table Features

### 1. **Merging Cells with `colspan` and `rowspan`**

```html
<td colspan="2">Merged Cell</td>
<td rowspan="3">Vertical Cell</td>
```

### 2. **Styling Tables with CSS**

You can style tables using internal or external CSS:

```css
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}
caption {
  font-weight: bold;
  margin-bottom: 10px;
}
```

---

## ✅ Use Cases

- Displaying product lists
- Showing financial data
- Organizing schedules and reports

---

## 🔗 Next Episode

➡️ [Episode 14: Creating Forms in HTML](../Episode_14/Readme.md)

---

In the next episode, we’ll learn how to **build interactive forms** in HTML to collect user input. 📝