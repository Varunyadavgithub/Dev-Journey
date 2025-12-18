# 📘 MySQL Setup & Workbench

This section explains how to **install MySQL on Windows**, use **MySQL Workbench**,  
and work with MySQL using the **Terminal / Command Line**.

---

## 📌 MySQL Installation (Windows)

### Steps to Install MySQL:
1. Visit 👉 https://dev.mysql.com/downloads/
2. Download **MySQL Installer for Windows**
3. Choose **Developer Default** or **Server Only**
4. Set a **root password**
5. Complete installation

📌 Remember your **root password**.

---

## 📌 MySQL Terminal (Command Line)

You can use MySQL directly from the **terminal / command prompt**.

### Open MySQL Terminal:
1. Open **Command Prompt**
2. Run:
```bash
mysql -u root -p
````

3. Enter your MySQL root password

✅ You are now connected to MySQL.

---

### Common Terminal Commands

```sql
SHOW DATABASES;
```

```sql
SELECT DATABASE();
```

```sql
system cls;
```

```sql
EXIT;
```

---

## 📌 Verify MySQL Installation

Check MySQL version:

```bash
mysql --version
```

---

## 📌 What is MySQL Workbench?

**MySQL Workbench** is a GUI tool used to:

* Write & execute SQL queries
* Create databases & tables
* Manage servers & users
* Visualize schemas

---

## 📌 MySQL Workbench Overview

* **Navigator** → Databases & tables
* **SQL Editor** → Write queries
* **Result Grid** → Query output
* **Schemas Panel** → Database list

---

## 📌 Connecting to MySQL Server (Workbench)

1. Open MySQL Workbench
2. Click **Local Instance MySQL**
3. Enter password
4. Click **OK**

---

## 📝 Important Notes

* Terminal is faster for quick commands
* Workbench is better for beginners
* Both use the same SQL syntax

---

## ✅ Summary

| Method          | Use                |
| --------------- | ------------------ |
| Terminal        | Fast & lightweight |
| MySQL Workbench | User-friendly GUI  |