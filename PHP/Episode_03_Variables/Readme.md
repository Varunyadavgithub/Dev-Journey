# Episode 03: Variables, Data Types, and Constants in PHP 📦

Welcome to Episode 03 of your PHP journey!  
In this episode, we’ll learn all about **variables**, various **data types**, and how to use **constants** in PHP.

---

## 🧠 What is a Variable?

A variable is a container used to store data like strings, integers, booleans, etc.

- All PHP variables start with a **`$`** sign.
- PHP is **loosely typed**, so you don’t need to declare the type.

```php
$name = "Aman";
$age = 24;
```

---

## 🧪 PHP Data Types

PHP provides multiple built-in data types:

| Type    | Example         | Description            |
| ------- | --------------- | ---------------------- |
| String  | `"Hello"`       | Sequence of characters |
| Integer | `24`            | Whole number           |
| Float   | `81.23`         | Decimal number         |
| Boolean | `true`, `false` | True/False values      |

---

## ✅ Example Code

```php
<?php
    $name = "Aman";
    $age = 24;
    $marks = 81.23;
    $isMarried = true;

    echo "My name is = " . $name;
    echo "<br>My age is = " . $age;
    echo "<br>My marks are = $marks%";
    echo "<br>Are you married = $isMarried";

    echo "<br><br>";

    var_dump($name);
    echo "<br>";
    var_dump($age);
    echo "<br>";
    var_dump($marks);
    echo "<br>";
    var_dump($isMarried);
?>
```

---

## 🖨️ Output

```
My name is = Aman
My age is = 24
My marks are = 81.23%
Are you married = 1

string(4) "Aman"
int(24)
float(81.23)
bool(true)
```

> 🔎 `true` prints as `1` when echoed directly.

---

## 🔒 Constants in PHP

Constants are like variables, but their values **cannot be changed** once defined.

### ✅ Syntax:

```php
define("SITE_NAME", "Learn PHP with Varun");
echo SITE_NAME;
```

> 🚫 You don’t use `$` with constants.

---

## 🧵 Notes

- Use `.` for string concatenation in PHP.
- Use `var_dump()` to check **type + value**.
- Constants are **global** and accessible anywhere.

---

## 📂 File Structure

```
htdocs/
└── php-tutorial/
    └── Episode_03_Variables/
        └── variables.php
```

---

## 🚀 Up Next

[→ Episode 04: Constants and Comments in PHP](../Episode_04_Constants/Readme.md)

In the next episode, we’ll explore how to use **comments** in PHP and go deeper with **constants**!

---

### 💡 Pro Tip

Try changing values and types in your code to see how PHP behaves. Practice is the key to confidence! 🔥
