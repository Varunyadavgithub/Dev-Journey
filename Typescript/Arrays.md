## 🧺 3. Arrays in TypeScript

In TypeScript, arrays can be **strictly typed**, ensuring all elements inside follow a defined structure. This prevents common bugs caused by invalid array values.

---

### 🔹 Method 1: Using Square Brackets (`[]`)

You can define an array by specifying the type of its elements followed by `[]`.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let flags: boolean[] = [true, false, true];
````

* Only values of the specified type are allowed.
* Adding a different type causes a compile-time error.

```typescript
names.push("David"); // ✅ Valid
names.push(42);      // ❌ Error: number is not assignable to string
```

---

### 🔸 Method 2: Using `Array<Type>` Syntax

This is an alternative to square brackets, using generics.

```typescript
const users: Array<string> = ["Varun", "Rahul"];
const scores: Array<number> = [88, 99, 100];

const mixed: Array<string | number> = ["Alice", 101];
```

✅ Useful when working with generic types or in complex structures.

---

### 🔍 Array of Objects Example

```typescript
type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Varun", age: 22 },
  { name: "Neha", age: 25 }
];
```

---

## 📦 Tuples in TypeScript

A **tuple** is a fixed-size, ordered array where each element has a **specific type**.

```typescript
let user: [string, number] = ["Varun", 23];
```

* The first element **must** be a string, second a number.
* Useful for returning multiple values from functions with known order.

#### Tuple with Optional Element

```typescript
let address: [string, number?] = ["Delhi"];
```

---

### ✅ Named Tuples (Improves readability)

```typescript
type Response = [statusCode: number, message: string];

const res: Response = [200, "OK"];
```

---

## 🧾 `type` Keyword in TypeScript (Type Aliases)

The `type` keyword lets you define **custom reusable types**, also known as **type aliases**.

---

### 🛠️ Basic Type Alias

```typescript
type UserID = string | number;

let id1: UserID = "USR001";
let id2: UserID = 101;
```

* Improves code readability.
* Reduces repetition.

---

### 🎯 Literal Type Aliases (Specific Values)

```typescript
type ThemeMode = "light" | "dark";

let mode: ThemeMode = "light";  // ✅
mode = "dark";                  // ✅
mode = "blue";                  // ❌ Error: not allowed
```

> 💡 This restricts a variable to a limited set of allowed values.

---

### 🧑‍💻 Complex Type Example

```typescript
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const admin: User = {
  id: 1,
  name: "Varun",
  isAdmin: true
};
```

---

## ✅ Benefits of Using `type` Aliases

1. 📌 **Reusability** – Avoid repeating complex type definitions.
2. 📚 **Readability** – Code becomes easier to understand.
3. 🛡️ **Safety** – Enforces stricter type constraints.
4. 🧱 **Scalability** – Supports union, intersection, nested, and literal types.

---

### 🔁 `type` vs `interface` (Coming Soon)

While both are used for defining custom types, there are key differences we’ll explore in a future section!

---

🧭 Up Next:

* Enums in TypeScript
* `interface` vs `type`
* Functions with parameter & return types
