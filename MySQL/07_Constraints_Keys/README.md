# 📘 Constraints & Keys in MySQL

Constraints are **rules applied to table columns** to ensure **data integrity**.  
Keys are used to **uniquely identify rows** and define **relationships**.

---

## 📌 NOT NULL

Ensures a column **cannot have NULL values**.

```sql
CREATE TABLE students (
    id INT NOT NULL,
    name VARCHAR(50) NOT NULL
);
````

---

## 📌 DEFAULT

Sets a **default value** if none is provided during insert.

```sql
CREATE TABLE students (
    id INT,
    status VARCHAR(10) DEFAULT 'active'
);
```

---

## 📌 PRIMARY KEY

Uniquely identifies each row.
A table can have **only one primary key**.

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);
```

---

## 📌 AUTO_INCREMENT

Automatically generates a **unique number** for each row in a column (usually used with PRIMARY KEY).

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);
```

---

## 📌 UNIQUE

Ensures all values in a column are **unique**.

```sql
CREATE TABLE students (
    email VARCHAR(50) UNIQUE
);
```

---

## 📌 CHECK

Ensures column values **meet a condition**.

```sql
CREATE TABLE students (
    age INT CHECK (age >= 18)
);
```

---

## 📌 FOREIGN KEY

Used to **link tables** and enforce **referential integrity**.

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    student_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id)
);
```

---

## 📝 Notes

* Primary Key + Auto Increment is very common
* Use NOT NULL with important columns
* Foreign Key creates **relationships between tables**
* CHECK is supported in MySQL 8.0+

---

## ✅ Summary

| Constraint / Key | Purpose                       |
| ---------------- | ----------------------------- |
| NOT NULL         | Column cannot be NULL         |
| DEFAULT          | Sets default value            |
| PRIMARY KEY      | Uniquely identifies a row     |
| AUTO_INCREMENT   | Auto generates unique numbers |
| UNIQUE           | Ensures unique values         |
| CHECK            | Validates values              |
| FOREIGN KEY      | Links tables                  |