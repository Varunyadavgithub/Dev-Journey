# 📘 ALTER TABLE & Constraints in MySQL

The `ALTER TABLE` statement is used to **modify existing tables**  
and **update constraints** without dropping the table.

---

## 📌 Add a Column

```sql
ALTER TABLE table_name
ADD column_name datatype;
````

✅ Example:

```sql
ALTER TABLE students
ADD email VARCHAR(50);
```

---

## 📌 Drop a Column

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

✅ Example:

```sql
ALTER TABLE students
DROP COLUMN email;
```

---

## 📌 Rename a Column

```sql
ALTER TABLE table_name
CHANGE old_column_name new_column_name datatype;
```

✅ Example:

```sql
ALTER TABLE students
CHANGE name full_name VARCHAR(50);
```

---

## 📌 Modify Column Property

Change datatype, size, or constraints.

```sql
ALTER TABLE table_name
MODIFY column_name new_datatype;
```

✅ Example:

```sql
ALTER TABLE students
MODIFY age INT NOT NULL;
```

---

## 📌 Add Constraints

### Add UNIQUE Constraint

```sql
ALTER TABLE students
ADD CONSTRAINT unique_email UNIQUE (email);
```

### Add FOREIGN KEY

```sql
ALTER TABLE orders
ADD CONSTRAINT fk_student
FOREIGN KEY (student_id) REFERENCES students(id);
```

---

## 📌 Drop Constraints

```sql
ALTER TABLE table_name
DROP PRIMARY KEY;

ALTER TABLE table_name
DROP FOREIGN KEY fk_student;

ALTER TABLE table_name
DROP INDEX unique_email;
```

---

## 📝 Notes

* Always backup table before altering
* PRIMARY KEY and FOREIGN KEY changes affect relationships
* Use `MODIFY` to change datatype or constraint
* Adding constraints ensures **data integrity**

---

## ✅ Summary

| Operation       | SQL Command                              |
| --------------- | ---------------------------------------- |
| Add Column      | `ALTER TABLE ADD`                        |
| Drop Column     | `ALTER TABLE DROP COLUMN`                |
| Rename Column   | `ALTER TABLE CHANGE`                     |
| Modify Column   | `ALTER TABLE MODIFY`                     |
| Add Constraint  | `ALTER TABLE ADD CONSTRAINT`             |
| Drop Constraint | `ALTER TABLE DROP PRIMARY/FOREIGN/INDEX` |