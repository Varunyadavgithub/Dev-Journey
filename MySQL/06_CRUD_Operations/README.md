# 📘 CRUD Operations in MySQL

CRUD stands for **Create, Read, Update, Delete**.  
These are the most common operations performed on tables in MySQL.

---

## 📌 INSERT (Create Data)

Used to add new records into a table.

```sql
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);
````

✅ Example:

```sql
INSERT INTO students (id, name, age)
VALUES (1, 'Rahul', 20);
```

---

## 📌 SELECT (Read Data)

Used to fetch data from a table.

```sql
SELECT * FROM table_name;
```

✅ Example:

```sql
SELECT * FROM students;
```

Used to fetch single column data from a table.

```sql
SELECT <column_name> FROM <table_name>;
```

✅ Example:

```sql
SELECT name FROM students;
```
---

## 📌 SELECT with WHERE Clause

Used to filter records.

```sql
SELECT * FROM table_name
WHERE condition;
```

✅ Example:

```sql
SELECT * FROM students
WHERE age > 18;
```

---

## 📌 UPDATE (Modify Data)

Used to update existing records.

```sql
UPDATE table_name
SET column = value
WHERE condition;
```

✅ Example:

```sql
UPDATE students
SET age = 21
WHERE id = 1;
```

⚠️ Always use `WHERE` to avoid updating all rows.

---

## 📌 DELETE (Remove Data)

Used to delete records from a table.

```sql
DELETE FROM table_name
WHERE condition;
```

✅ Example:

```sql
DELETE FROM students
WHERE id = 1;
```

⚠️ Without `WHERE`, all rows will be deleted.

---

## 📝 Important Notes

* `INSERT` adds new data
* `SELECT` reads data
* `UPDATE` modifies data
* `DELETE` removes data

---

## ✅ Summary

| Operation | SQL Command |
| --------- | ----------- |
| Create    | `INSERT`    |
| Read      | `SELECT`    |
| Update    | `UPDATE`    |
| Delete    | `DELETE`    |
