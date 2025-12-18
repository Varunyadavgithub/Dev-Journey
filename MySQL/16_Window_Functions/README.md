# 📘 Window Functions in MySQL

Window functions allow you to **perform calculations across a set of rows**  
related to the current row, without collapsing the result into a single row.

---

## 📌 ROW_NUMBER()

Assigns a **unique sequential number** to rows within a partition.

```sql
SELECT id, name,
       ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num
FROM employees;
````

* `PARTITION BY` → divides rows into groups
* `ORDER BY` → defines the order of numbering

---

## 📌 RANK()

Assigns a **rank** to rows with **ties getting the same rank**.

```sql
SELECT id, name,
       RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank
FROM employees;
```

* Gaps occur in ranking when there are ties

---

## 📌 DENSE_RANK()

Similar to `RANK()` but **no gaps in ranking** for ties.

```sql
SELECT id, name,
       DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_rank
FROM employees;
```

---

## 📌 SUM(), AVG() with Window

Compute **running totals or moving averages**.

```sql
SELECT id, name, salary,
       SUM(salary) OVER (PARTITION BY department ORDER BY salary) AS dept_running_total
FROM employees;
```

---

## 📝 Notes

* Window functions **do not collapse rows**
* Useful for ranking, cumulative sums, moving averages
* Always use `OVER()` with **PARTITION BY** and/or **ORDER BY**
* Common window functions: `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `SUM()`, `AVG()`

---

## ✅ Summary

| Function     | Purpose                               |
| ------------ | ------------------------------------- |
| ROW_NUMBER() | Sequential numbering per partition    |
| RANK()       | Rank with gaps for ties               |
| DENSE_RANK() | Rank without gaps for ties            |
| SUM()/AVG()  | Running totals / averages over window |