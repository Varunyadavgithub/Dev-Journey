# 📘 Data Types & Date/Time Functions in MySQL

This section explains **date and time data types** and **functions**  
used to work with dates and times in MySQL.

---

## 📌 DATE, TIME, DATETIME, TIMESTAMP

| Data Type | Description | Format Example |
|-----------|------------|----------------|
| DATE | Stores only date | '2025-12-18' |
| TIME | Stores only time | '14:30:00' |
| DATETIME | Stores date & time | '2025-12-18 14:30:00' |
| TIMESTAMP | Stores UTC date & time | '2025-12-18 14:30:00' |

---

## 📌 CURDATE() & CURTIME()

- `CURDATE()` → Returns current date  
- `CURTIME()` → Returns current time  

```sql
SELECT CURDATE();  -- 2025-12-18
SELECT CURTIME();  -- 14:30:00
````

---

## 📌 NOW()

Returns **current date & time**.

```sql
SELECT NOW();
-- Output: 2025-12-18 14:30:00
```

---

## 📌 DATE_FORMAT()

Formats a date in a **custom way**.

```sql
SELECT DATE_FORMAT(NOW(), '%W, %d %M %Y');
-- Output: Thursday, 18 December 2025
```

Common format codes:

* `%Y` → Year (4 digits)
* `%M` → Month name
* `%d` → Day of month
* `%W` → Weekday name
* `%H:%i:%s` → Hours:Minutes:Seconds

---

## 📌 DATE Math

You can add or subtract intervals:

```sql
SELECT NOW() + INTERVAL 5 DAY; -- Adds 5 days
SELECT NOW() - INTERVAL 2 MONTH; -- Subtracts 2 months
```

---

## 📌 DEFAULT & ON UPDATE TIMESTAMP

Automatically store timestamps:

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

* `DEFAULT CURRENT_TIMESTAMP` → Set default value
* `ON UPDATE CURRENT_TIMESTAMP` → Update timestamp automatically on row change

---

## 📝 Notes

* Use DATE for just a date, DATETIME for date+time
* CURDATE(), CURTIME(), NOW() are useful for real-time data
* DATE_FORMAT() helps display dates in readable format
* TIMESTAMP with ON UPDATE is great for audit logs

---

## ✅ Summary

| Function / Feature            | Purpose               |
| ----------------------------- | --------------------- |
| DATE                          | Store only date       |
| TIME                          | Store only time       |
| DATETIME                      | Store date & time     |
| TIMESTAMP                     | Store UTC date & time |
| CURDATE()                     | Current date          |
| CURTIME()                     | Current time          |
| NOW()                         | Current date & time   |
| DATE_FORMAT()                 | Format date/time      |
| DEFAULT / ON UPDATE TIMESTAMP | Auto timestamps       |