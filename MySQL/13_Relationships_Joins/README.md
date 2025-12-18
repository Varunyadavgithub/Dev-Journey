# 📘 Relationships & JOINs in MySQL

MySQL uses **relationships** to connect tables.  
**JOINs** are used to retrieve related data from multiple tables.

---

## 📌 Types of Relationships

| Type | Description | Example |
|------|------------|---------|
| One-to-One | One row in table A = one row in table B | `user` & `user_profile` |
| One-to-Many | One row in table A = many rows in table B | `department` & `employees` |
| Many-to-Many | Many rows in table A = many rows in table B | `students` & `courses` via `enrollments` |

---

## 📌 Foreign Key

Used to enforce relationships between tables.

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    student_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id)
);
````

---

## 📌 JOINs in MySQL

### 1️⃣ CROSS JOIN

Returns **Cartesian product** of two tables.

```sql
SELECT * FROM students CROSS JOIN courses;
```

### 2️⃣ INNER JOIN

Returns rows with **matching values** in both tables.

```sql
SELECT students.name, courses.course_name
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON courses.id = enrollments.course_id;
```

### 3️⃣ LEFT JOIN

Returns all rows from **left table** + matching from right table.

```sql
SELECT students.name, courses.course_name
FROM students
LEFT JOIN enrollments ON students.id = enrollments.student_id
LEFT JOIN courses ON courses.id = enrollments.course_id;
```

### 4️⃣ RIGHT JOIN

Returns all rows from **right table** + matching from left table.

```sql
SELECT students.name, courses.course_name
FROM students
RIGHT JOIN enrollments ON students.id = enrollments.student_id
RIGHT JOIN courses ON courses.id = enrollments.course_id;
```

---

## 📌 ON DELETE CASCADE

Automatically deletes **child records** when parent is deleted.

```sql
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);
```

---

## 📝 Notes

* Use **INNER JOIN** for matched data
* Use **LEFT/RIGHT JOIN** for including unmatched rows
* **CROSS JOIN** is rarely used (large data → Cartesian product)
* Foreign key + CASCADE keeps data consistent

---

## ✅ Summary

| JOIN / Feature    | Description                    |
| ----------------- | ------------------------------ |
| CROSS JOIN        | Cartesian product              |
| INNER JOIN        | Only matching rows             |
| LEFT JOIN         | All left rows + matching right |
| RIGHT JOIN        | All right rows + matching left |
| FOREIGN KEY       | Links tables                   |
| ON DELETE CASCADE | Auto-delete child rows         |