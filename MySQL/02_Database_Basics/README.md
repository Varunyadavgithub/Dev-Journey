# 📘 Database Basics in MySQL

This section covers the **basic database operations** in MySQL such as  
creating, listing, using, and deleting databases.

---

## 📌 Creating a Database

Used to create a new database.

```sql
CREATE DATABASE database_name;
````

✅ Example:

```sql
CREATE DATABASE school;
```

---

## 📌 Listing Databases

Shows all available databases in MySQL.

```sql
SHOW DATABASES;
```

---

## 📌 Using a Database

Selects a database to perform operations on it.

```sql
USE database_name;
```

✅ Example:

```sql
USE school;
```

📌 Always select a database before creating tables.

---

## 📌 Show Current Database

Displays the database currently in use.

```sql
SELECT DATABASE();
```

✅ Example:

```sql
SELECT DATABASE();
```

📝 Returns the name of the selected database or NULL if none is selected.

---

## 📌 Dropping a Database

Deletes a database permanently.

```sql
DROP DATABASE database_name;
```

⚠️ **Warning:** This will remove all tables and data.

✅ Example:

```sql
DROP DATABASE school;
```

---

## 📝 Important Notes

* Database names should be unique
* `DROP DATABASE` cannot be undone
* Use `USE` before table operations

---

## ✅ Summary

| Operation       | Command           |
| --------------- | ----------------- |
| Create Database | `CREATE DATABASE` |
| Show Databases  | `SHOW DATABASES`  |
| Select Database | `USE`             |
| Delete Database | `DROP DATABASE`   |