# Episode 01: Setting Up PHP Environment (XAMPP, VS Code) 🚀

Welcome to the first step of your PHP learning journey! In this episode, we’ll set up everything you need to start coding in PHP smoothly and efficiently.

---

## ✅ Objectives

- Install and configure PHP locally.
- Use XAMPP to run PHP files.
- Set up Visual Studio Code as your primary code editor.
- Add essential extensions to boost productivity.

---

## 🛠️ 1. Installing XAMPP

**XAMPP** is a free and open-source cross-platform web server solution stack package developed by Apache Friends, consisting of Apache, MySQL, and interpreters for PHP and Perl.

🔗 [Download XAMPP](https://www.apachefriends.org/index.html)

### Installation Steps:

1. Choose the version suitable for your OS (Windows/macOS/Linux).
2. Run the installer and follow the setup instructions.
3. After installation, open the XAMPP Control Panel.
4. Start **Apache** (for PHP) and **MySQL** (for database, later).
5. Place your `.php` files inside the `htdocs` folder (usually at `C:\xampp\htdocs`).

To access your project in the browser:

```
http://localhost/your-folder-name/yourfile.php
```

---

## 💻 2. Setting Up Visual Studio Code (VS Code)

🔗 [Download VS Code](https://code.visualstudio.com/)

Once installed, open VS Code and install the following extensions for a better PHP development experience.

---

## 🧩 3. Recommended VS Code Extensions

### ✅ [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)

- Provides intelligent code completion, linting, function parameter hints, etc.
- Makes your PHP coding much easier and more productive.

### ✅ [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

- Although primarily for HTML, you can use it for quick preview and testing when needed.
- For PHP, we use `localhost` (XAMPP) instead, but this is useful for frontend files.

> 💡 Tip: For `.php` files, make sure you access them via `http://localhost/filename.php` — Live Server won’t process PHP code as it’s a frontend tool.

---

## 🌐 4. Chrome Extension: Live Server Web Extension

🔗 [Live Server Web Extension (Chrome)](https://chrome.google.com/webstore/detail/live-server-web-extension/jofpicbfbmabmgkkbiglidomnomfghkm)

This allows you to preview live changes in the browser by connecting with VS Code Live Server.

---

## 🧪 5. Test Your PHP Setup

1. Open `C:\xampp\htdocs`
2. Create a folder `php-basics`
3. Inside that, create a file named `index.php` with the following code:

```php
<?php
  echo "PHP is working!";
?>
```

4. Go to your browser and visit:

```
http://localhost/php-basics/index.php
```

If you see **"PHP is working!"** — you’re all set!

---

## 📝 Summary

| Tool                         | Purpose                                 |
| ---------------------------- | --------------------------------------- |
| XAMPP                        | PHP + Apache + MySQL local server stack |
| VS Code                      | Code editor                             |
| Intelephense                 | PHP language features                   |
| Live Server                  | Frontend previewing                     |
| Chrome Live Server Extension | Browser syncing                         |

---

## 🚀 Up Next

[→ Episode 02: Introduction to PHP](../Episode_02_Introduction/Readme.md)

Let’s get started with PHP basics!
