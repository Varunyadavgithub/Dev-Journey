# 📘 Database Operations in MySQL

This section covers the **basic operations performed on databases**  
such as creating, viewing, selecting, and deleting databases.

---

## 📌 Create a Database

Creates a new database.

```sql
CREATE DATABASE database_name;
````

✅ Example:

```sql
CREATE DATABASE company;
```

---

## 📌 Show All Databases

Lists all databases available in MySQL.

```sql
SHOW DATABASES;
```

---

## 📌 Use a Database

Selects a database to work with.

```sql
USE database_name;
```

✅ Example:

```sql
USE company;
```

---

## 📌 Show Current Database

Displays the currently selected database.

```sql
SELECT DATABASE();
```

---

## 📌 Drop a Database

Deletes a database permanently.

```sql
DROP DATABASE database_name;
```

⚠️ **Warning:** This action cannot be undone.

---

## 📌 Create Database If Not Exists

Prevents error if database already exists.

```sql
CREATE DATABASE IF NOT EXISTS database_name;
```

---

## 📝 Best Practices

* Always check the current database before running queries
* Use `IF NOT EXISTS` to avoid errors
* Be careful with `DROP DATABASE`

---

## ✅ Summary

| Task             | Command             |
| ---------------- | ------------------- |
| Create Database  | `CREATE DATABASE`   |
| Show Databases   | `SHOW DATABASES`    |
| Select Database  | `USE`               |
| Current Database | `SELECT DATABASE()` |
| Delete Database  | `DROP DATABASE`     |