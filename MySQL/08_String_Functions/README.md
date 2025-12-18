# 📘 String Functions in MySQL

String functions are used to **manipulate text data** in MySQL.  
This section covers **most commonly used functions**.

---

## 📌 CONCAT()

Concatenates (joins) two or more strings.

```sql
SELECT CONCAT('Hello', ' ', 'World');
-- Output: Hello World
````

---

## 📌 CONCAT_WS()

Concatenates strings with a **separator**.

```sql
SELECT CONCAT_WS('-', '2025', '12', '18');
-- Output: 2025-12-18
```

---

## 📌 SUBSTR() / SUBSTRING()

Extracts a **part of a string**.

```sql
SELECT SUBSTR('Hello World', 1, 5);
-- Output: Hello
```

---

## 📌 REPLACE()

Replaces a **substring** with another string.

```sql
SELECT REPLACE('Hello World', 'World', 'MySQL');
-- Output: Hello MySQL
```

---

## 📌 REVERSE()

Reverses the string.

```sql
SELECT REVERSE('Hello');
-- Output: olleH
```

---

## 📌 UPPER() & LOWER()

Converts string to **uppercase** or **lowercase**.

```sql
SELECT UPPER('hello'); -- Output: HELLO
SELECT LOWER('WORLD'); -- Output: world
```

---

## 📌 CHAR_LENGTH() / LENGTH()

Returns **length of string**.

```sql
SELECT CHAR_LENGTH('Hello');
-- Output: 5
```

---

## 📌 LEFT() & RIGHT()

Extracts characters from **left** or **right**.

```sql
SELECT LEFT('Hello World', 5);  -- Output: Hello
SELECT RIGHT('Hello World', 5); -- Output: World
```

---

## 📌 TRIM()

Removes **leading and trailing spaces**.

```sql
SELECT TRIM('   Hello   ');
-- Output: Hello
```

---

## 📝 Notes

* Use CONCAT for simple joining
* SUBSTR & LEFT/RIGHT are for extracting parts of a string
* TRIM helps clean data
* REPLACE is useful for text correction

---

## ✅ Summary

| Function             | Purpose                     |
| -------------------- | --------------------------- |
| CONCAT               | Join strings                |
| CONCAT_WS            | Join strings with separator |
| SUBSTR / SUBSTRING   | Extract substring           |
| REPLACE              | Replace text                |
| REVERSE              | Reverse string              |
| UPPER / LOWER        | Change case                 |
| CHAR_LENGTH / LENGTH | Get string length           |
| LEFT / RIGHT         | Extract from start/end      |
| TRIM                 | Remove spaces               |