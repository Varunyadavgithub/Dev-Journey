# 📘 Table Operations in MySQL

This section covers **basic table-related operations** in MySQL such as  
creating, viewing, describing, and deleting tables.

---

## 📌 Create a Table

Used to create a new table inside a database.

```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype
);
````

✅ Example:

```sql
CREATE TABLE students (
    id INT,
    name VARCHAR(50),
    age INT
);
```

📌 Make sure a database is selected before creating a table.

---

## 📌 Show Tables

Lists all tables in the selected database.

```sql
SHOW TABLES;
```

---

## 📌 Describe a Table

Displays table structure, columns, and datatypes.

```sql
DESCRIBE table_name;
```

✅ Example:

```sql
DESCRIBE students;
```

---

## 📌 Drop a Table

Deletes a table permanently.

```sql
DROP TABLE table_name;
```

⚠️ **Warning:** All data in the table will be deleted.

---

## 📌 Create Table If Not Exists

Avoids error if table already exists.

```sql
CREATE TABLE IF NOT EXISTS table_name (
    column datatype
);
```

---

## 📝 Important Notes

* Table names must be unique inside a database
* Always check table structure using `DESCRIBE`
* `DROP TABLE` cannot be undone

---

## ✅ Summary

| Operation      | Command        |
| -------------- | -------------- |
| Create Table   | `CREATE TABLE` |
| Show Tables    | `SHOW TABLES`  |
| Describe Table | `DESCRIBE`     |
| Delete Table   | `DROP TABLE`   |