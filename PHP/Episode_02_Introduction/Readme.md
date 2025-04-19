# Episode 02: Introduction to PHP 🐘

Welcome to your second episode! Now that your environment is ready, let’s understand what PHP is and why it's one of the most popular server-side scripting languages on the web.

---

## 🧠 What is PHP?

> **PHP** stands for "**Hypertext Preprocessor**" (it's a recursive acronym).

PHP is a widely-used **open-source server-side scripting language** that is especially suited for web development and can be embedded into HTML.

---

## 📌 Key Features of PHP

- ✅ Open Source and Free
- ✅ Cross-platform (works on Windows, Linux, macOS)
- ✅ Easy to learn for beginners
- ✅ Great community support
- ✅ Works perfectly with databases (like MySQL)
- ✅ Can handle forms, sessions, cookies, and file uploads
- ✅ Powers popular CMSs like WordPress, Joomla, and Drupal

---

## 🧪 Your First PHP Program: "Hello, World!"

Create a file named `hello.php` inside your `htdocs/php-basics` folder:

```php
<?php
  echo "Hello, World!";
?>
```

### ✅ Run it in your browser:
Open:  
```
http://localhost/php-basics/hello.php
```

You should see:

```
Hello, World!
```

🎉 Congrats! You've just executed your first PHP script!

---

## 🛠️ How PHP Works Behind the Scenes

- When you request a `.php` file via browser (e.g. `http://localhost/index.php`), the **Apache server** (via XAMPP) processes the file.
- The **PHP engine** executes the PHP code on the server.
- The **output (usually HTML)** is sent back to your browser.

---

## 📂 File Structure Tip

```
htdocs/
├── php-basics/
│   ├── hello.php
│   ├── index.php
```

Keep your learning files neatly organized inside folders so that it's easy to track and revisit.

---

## 📝 Summary

| Term        | Meaning                                |
|-------------|----------------------------------------|
| PHP         | Server-side scripting language         |
| echo        | Used to print output in PHP            |
| .php        | Extension for PHP files                |
| XAMPP       | Local server to run PHP files          |
| localhost   | Access server files from browser       |

---

## 🚀 Up Next

[→ Episode 03: Variables and Data Types in PHP](../Episode_03_Variables/Readme.md)

Let’s dive deeper into PHP with variables and different data types!

---

### 🌟 Keep Going!

Your foundation is getting stronger! The journey to building dynamic web applications with PHP has just begun. Let’s roll! 💪
