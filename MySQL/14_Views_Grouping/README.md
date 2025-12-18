# 📘 VIEWs & Grouping in MySQL

This section explains **VIEWs (virtual tables)** and **grouping data**  
using `GROUP BY`, `HAVING`, and `ROLLUP`.

---

## 📌 VIEWs (Virtual Tables)

A **VIEW** is a virtual table created using a **SELECT query**.

```sql
CREATE VIEW student_view AS
SELECT id, name, age
FROM students
WHERE age >= 18;
````

* Access like a normal table:

```sql
SELECT * FROM student_view;
```

* Drop a view:

```sql
DROP VIEW student_view;
```

---

## 📌 GROUP BY

Groups rows based on column(s) for aggregation.

```sql
SELECT department, COUNT(*) AS total
FROM employees
GROUP BY department;
```

---

## 📌 HAVING

Filters grouped results (used with `GROUP BY`).

```sql
SELECT department, COUNT(*) AS total
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

---

## 📌 ROLLUP

Generates **subtotals and grand totals** in grouped results.

```sql
SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department WITH ROLLUP;
```

---

## 📝 Notes

* VIEW simplifies complex queries
* GROUP BY + aggregate functions summarize data
* HAVING filters groups (WHERE cannot filter aggregated results)
* ROLLUP provides totals automatically

---

## ✅ Summary

| Feature  | Purpose                         |
| -------- | ------------------------------- |
| VIEW     | Virtual table from SELECT query |
| GROUP BY | Group rows for aggregation      |
| HAVING   | Filter grouped data             |
| ROLLUP   | Add subtotals & grand totals    |