# 📘 Stored Procedures & Functions in MySQL

Stored Procedures and Functions allow you to **store reusable SQL code**  
and perform operations **with parameters**.

---

## 📌 Stored Procedure

A **Stored Procedure** is a set of SQL statements saved in the database.

```sql
CREATE PROCEDURE GetStudents()
BEGIN
    SELECT * FROM students;
END;
````

* Call a procedure:

```sql
CALL GetStudents();
```

* Drop a procedure:

```sql
DROP PROCEDURE IF EXISTS GetStudents;
```

---

## 📌 Procedure with Arguments

Pass input parameters to procedures.

```sql
CREATE PROCEDURE GetStudentByID(IN sid INT)
BEGIN
    SELECT * FROM students WHERE id = sid;
END;

CALL GetStudentByID(1);
```

* `IN` → Input parameter
* `OUT` → Output parameter
* `INOUT` → Input & Output parameter

---

## 📌 Return Output in Variable

```sql
CREATE PROCEDURE GetStudentName(IN sid INT, OUT sname VARCHAR(50))
BEGIN
    SELECT name INTO sname FROM students WHERE id = sid;
END;

CALL GetStudentName(1, @name);
SELECT @name;
```

---

## 📌 User-Defined Function (UDF)

A **Function** returns a single value.

```sql
CREATE FUNCTION GetAgeCategory(age INT)
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
    DECLARE category VARCHAR(20);
    IF age < 18 THEN
        SET category = 'Minor';
    ELSE
        SET category = 'Adult';
    END IF;
    RETURN category;
END;

SELECT GetAgeCategory(20);
-- Output: Adult
```

---

## 📝 Notes

* Procedures can return **multiple rows**
* Functions always return **a single value**
* Use **parameters** for dynamic queries
* Use `DETERMINISTIC` if function returns consistent output for same input

---

## ✅ Summary

| Feature               | Description                                  |
| --------------------- | -------------------------------------------- |
| Stored Procedure      | Reusable SQL block, may return multiple rows |
| IN / OUT / INOUT      | Input/output parameters for procedures       |
| CALL                  | Execute procedure                            |
| User-Defined Function | Returns a single value                       |
| RETURN                | Return value from function                   |