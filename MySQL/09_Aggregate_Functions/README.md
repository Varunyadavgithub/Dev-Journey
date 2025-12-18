# 📘 Aggregate Functions in MySQL

Aggregate functions are used to **perform calculations on multiple rows** of a table.  
They are often used with **GROUP BY** to summarize data.

---

## 📌 COUNT()

Returns the number of rows.

```sql
SELECT COUNT(*) FROM students;
````

---

## 📌 SUM()

Calculates the **sum** of a numeric column.

```sql
SELECT SUM(salary) FROM employees;
```

---

## 📌 AVG()

Calculates the **average** value of a column.

```sql
SELECT AVG(age) FROM students;
```

---

## 📌 MAX() & MIN()

Returns **maximum** or **minimum** value.

```sql
SELECT MAX(salary) FROM employees;
SELECT MIN(age) FROM students;
```

---

## 📌 GROUP BY

Groups rows that have the **same values** in specified columns.

```sql
SELECT department, COUNT(*) 
FROM employees 
GROUP BY department;
```

---

## 📌 HAVING

Filters groups (used with **GROUP BY**).

```sql
SELECT department, COUNT(*) 
FROM employees 
GROUP BY department 
HAVING COUNT(*) > 5;
```

---

## 📝 Notes

* COUNT(*) counts all rows, COUNT(column) counts non-NULL values
* AVG(), SUM(), MAX(), MIN() are for numeric columns
* GROUP BY groups data for aggregation
* HAVING filters grouped results

---

## ✅ Summary

| Function / Clause | Purpose                |
| ----------------- | ---------------------- |
| COUNT()           | Count rows             |
| SUM()             | Sum values             |
| AVG()             | Average values         |
| MAX()             | Maximum value          |
| MIN()             | Minimum value          |
| GROUP BY          | Group rows by column   |
| HAVING            | Filter grouped results |