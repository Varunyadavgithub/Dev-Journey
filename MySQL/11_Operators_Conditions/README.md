# 📘 Operators & Conditions in MySQL

Operators are used to **compare values**, and conditions are used in **WHERE, HAVING, and CASE statements**.  

---

## 📌 Relational Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| = | Equal to | `age = 18` |
| != / <> | Not equal | `age != 18` |
| > | Greater than | `age > 18` |
| < | Less than | `age < 18` |
| >= | Greater or equal | `age >= 18` |
| <= | Less or equal | `age <= 18` |

```sql
SELECT * FROM students WHERE age >= 18;
````

---

## 📌 Logical Operators

| Operator | Meaning              | Example                        |
| -------- | -------------------- | ------------------------------ |
| AND      | Both conditions true | `age > 18 AND status='active'` |
| OR       | At least one true    | `age > 18 OR status='active'`  |
| NOT      | Negates condition    | `NOT status='inactive'`        |

```sql
SELECT * FROM students WHERE age > 18 AND status='active';
```

---

## 📌 IN & NOT IN

* `IN` → Check if value exists in a list
* `NOT IN` → Check if value does **not** exist

```sql
SELECT * FROM students WHERE id IN (1,2,3);
SELECT * FROM students WHERE id NOT IN (4,5,6);
```

---

## 📌 BETWEEN

Check if value is within a range (inclusive).

```sql
SELECT * FROM students WHERE age BETWEEN 18 AND 25;
```

---

## 📌 CASE

Apply **conditional logic** in SELECT queries.

```sql
SELECT name,
       CASE 
         WHEN age < 18 THEN 'Minor'
         WHEN age BETWEEN 18 AND 25 THEN 'Young Adult'
         ELSE 'Adult'
       END AS category
FROM students;
```

---

## 📝 Notes

* Relational & logical operators are the backbone of WHERE clauses
* IN / NOT IN are cleaner than multiple OR statements
* BETWEEN is inclusive
* CASE is useful for **conditional output** in SELECT

---

## ✅ Summary

| Feature             | Purpose                      |
| ------------------- | ---------------------------- |
| =, !=, >, <, >=, <= | Compare values               |
| AND, OR, NOT        | Combine conditions           |
| IN, NOT IN          | Check value in a list        |
| BETWEEN             | Check value in a range       |
| CASE                | Conditional logic in queries |