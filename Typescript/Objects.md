## 🧩 4. Objects in TypeScript

Objects are the backbone of most TypeScript applications. They let you define structured data with strict type safety.

TypeScript allows you to create both **inline object types** and **reusable object definitions** using `type` or `interface`.

---

### 🟩 Example 1: Basic Object Definition (Inline)

You can define object types directly where needed:

```typescript
const person: {
  height: number;
  weight: number;
} = {
  height: 136,
  weight: 36,
};
````

✅ Useful for one-time or very specific object definitions.

---

### 🧱 Reusability with `type`

Use the `type` keyword when you want to **reuse the structure** across multiple variables or functions.

```typescript
type Body = {
  height: number;
  weight: number;
};

const obj1: Body = {
  height: 150,
  weight: 55,
};

const obj2: Body = {
  height: 180,
  weight: 70,
};
```

> 🧠 This improves maintainability, especially in large codebases.

---

### 🟨 Example 2: Optional Properties

Use `?` to mark a property as **optional**.

```typescript
type Body = {
  height: number;
  weight: number;
  gender?: boolean; // Optional
};

const obj: Body = {
  height: 136,
  weight: 36,
  // gender is not required
};
```

> ✅ Optional properties prevent errors when the value is missing.

---

## 🧩 `interface` in TypeScript

While `type` is flexible, **`interface` is recommended** for defining object shapes, especially when planning to extend or implement in classes.

---

### 🟦 Example 3: Interface Syntax

```typescript
interface BodyInterface {
  height: number;
  weight: number;
  gender?: boolean;
}

const user: BodyInterface = {
  height: 170,
  weight: 65,
};
```

✅ Interfaces are open to extension and better for OOP (Object-Oriented Programming) style.

---

### 🧬 Example 4: Extending Interfaces

You can extend an interface to create a new one with additional fields.

```typescript
interface BodyInterface {
  height: number;
  weight: number;
  gender?: boolean;
}

interface Student extends BodyInterface {
  scholar: boolean;
  func?: (x: number, y: number) => void;
}
```

---

### 🧪 Objects with Functions as Properties

Functions can be added as optional or required properties inside interfaces.

```typescript
const student: Student = {
  height: 123,
  weight: 43,
  gender: true,
  scholar: true,
  func: (n, m) => {
    console.log(n * m);
  },
};
```

Another object without function:

```typescript
const otherStudent: Student = {
  height: 140,
  weight: 60,
  scholar: false,
};
```

---

## 📝 Interface vs Type Summary

| Feature                     | `type`                   | `interface`       |
| --------------------------- | ------------------------ | ----------------- |
| Can define primitives       | ✅ Yes                    | ❌ No              |
| Can define objects          | ✅ Yes                    | ✅ Yes             |
| Can extend                  | ✅ (via intersection `&`) | ✅ (via `extends`) |
| Declaration merging         | ❌ Not allowed            | ✅ Allowed         |
| Use in class implementation | ❌ Not idiomatic          | ✅ Recommended     |

---

## 🎯 Best Practices

* ✅ Use `type` for:

  * Union types (`string | number`)
  * Primitive aliases
  * Complex or conditional types

* ✅ Use `interface` for:

  * Object shapes
  * Class implementation
  * Extending object models

* 💡 Use optional properties (`?`) when a field may not always be present.

* 🧠 Combine interfaces with function signatures for rich object behavior.

---

📘 Up Next:

* Enums in TypeScript
* `interface` vs `type` (in depth)
* Functions with typed parameters and return types

